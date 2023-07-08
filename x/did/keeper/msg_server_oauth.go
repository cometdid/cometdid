package keeper

import (
	"context"
	"fmt"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"cometdid/x/did/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Oauth(goCtx context.Context, msg *types.MsgOauth) (*types.MsgOauthResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_, found := k.GetOrgs(ctx, msg.OrgId)

	k.Logger(ctx).Error("did", "dissdfasdf", msg.Creator)
	if !found {
		k.Logger(ctx).Error("org find error", "found", found)
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.OrgId))
	}

	k.UserAuth(ctx, msg.OrgId, msg.Creator)

	return &types.MsgOauthResponse{}, nil
}
