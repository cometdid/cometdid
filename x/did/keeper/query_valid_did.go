package keeper

import (
	"context"
	"encoding/hex"
	"errors"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	"github.com/ockam-network/did"

	"cometdid/x/did/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ValidDid(goCtx context.Context, req *types.QueryValidDidRequest) (*types.QueryValidDidResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	id, err := did.Parse(req.Did)
	if err != nil {
		return nil, err
	}

	if len(id.IDStrings) != 2 {
		return nil, errors.New("params error")
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrgsAuthKey))
	accAddress, err := sdk.AccAddressFromBech32(id.IDStrings[1])
	if err != nil {
		return nil, err
	}
	store = prefix.NewStore(store, append([]byte(accAddress)[:], '/'))

	orgIdBz, err := hex.DecodeString(id.IDStrings[0])
	if err != nil {
		return nil, err
	}
	// store id
	b := store.Get(orgIdBz)

	if b == nil {
		return nil, errors.New("did not found")
	}

	var uo = types.UserOauth{}
	err = k.cdc.Unmarshal(b, &uo)
	if err != nil {
		return nil, err
	}

	return &types.QueryValidDidResponse{
		Name:   uo.Name,
		Avatar: uo.Avatar,
	}, nil
}
