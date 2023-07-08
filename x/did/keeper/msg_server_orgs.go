package keeper

import (
	"context"
	"errors"
	"fmt"

	"cometdid/x/did/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateOrgs(goCtx context.Context, msg *types.MsgCreateOrgs) (*types.MsgCreateOrgsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if k.GetOrgIdByName(ctx, msg.Name) > 0 {
		return nil, errors.New("name exists")
	}

	var orgs = types.Orgs{
		Creator: msg.Creator,
		Name:    msg.Name,
		Logo:    msg.Logo,
		Desc:    msg.Desc,
	}

	id := k.AppendOrgs(
		ctx,
		orgs,
	)
	return &types.MsgCreateOrgsResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateOrgs(goCtx context.Context, msg *types.MsgUpdateOrgs) (*types.MsgUpdateOrgsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var orgs = types.Orgs{
		Creator: msg.Creator,
		Id:      msg.Id,
		Name:    msg.Name,
		Logo:    msg.Logo,
		Desc:    msg.Desc,
	}

	// Checks that the element exists
	val, found := k.GetOrgs(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}
	if id := k.GetOrgIdByName(ctx, msg.Name); id > 0 {
		if msg.Id != id {
			return nil, errors.New("name exists")
		}
	}
	k.SetOrgs(ctx, orgs)
	// update nameset
	k.DelOrgIdByName(ctx, val.Name)

	return &types.MsgUpdateOrgsResponse{}, nil
}

func (k msgServer) DeleteOrgs(goCtx context.Context, msg *types.MsgDeleteOrgs) (*types.MsgDeleteOrgsResponse, error) {

	return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "not support")
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetOrgs(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveOrgs(ctx, msg.Id)
	k.DelOrgIdByName(ctx, val.Name)

	return &types.MsgDeleteOrgsResponse{}, nil
}
