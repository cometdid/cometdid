package keeper

import (
	"fmt"
	"context"

	"cometdid/x/did/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k Keeper) OrgDid(goCtx context.Context, req *types.QueryOrgDidRequest) (*types.QueryOrgDidResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	orgs, found := k.GetOrgs(ctx, req.OrgId)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	// build user oauth
	did := k.UserAuth(ctx, types.UserOauth{
		Creator: orgs.Creator,
		OrgId:   orgs.Id,
		Name:    "",
		Avatar:  "",
	})

	return &types.QueryOrgDidResponse{Did: fmt.Sprintf("%s", did)}, nil
}
