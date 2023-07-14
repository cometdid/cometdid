package keeper

import (
	"context"
	"errors"
	"github.com/cosmos/cosmos-sdk/store/prefix"

	"cometdid/x/did/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Did(goCtx context.Context, req *types.QueryDidRequest) (*types.QueryDidResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrgsAuthKey))
	accAddress, err := sdk.AccAddressFromBech32(req.Creator)
	if err != nil {
		return nil, err
	}
	store = prefix.NewStore(store, append([]byte(accAddress)[:], '/'))
	// store id
	b := store.Get(GetOrgsIDBytes(req.OrgId))
	if b == nil {
		return nil, errors.New("did not found")
	}

	var uo = types.UserOauth{}
	err = k.cdc.Unmarshal(b, &uo)
	if err != nil {
		return nil, err
	}

	return &types.QueryDidResponse{
		Did:    uo.Did,
		Name:   uo.Name,
		Avatar: uo.Avatar,
	}, nil
}
