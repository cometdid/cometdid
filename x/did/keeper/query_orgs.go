package keeper

import (
	"context"

	"cometdid/x/did/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) OrgsAll(goCtx context.Context, req *types.QueryAllOrgsRequest) (*types.QueryAllOrgsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var orgss []types.Orgs
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	orgsStore := prefix.NewStore(store, types.KeyPrefix(types.OrgsKey))

	pageRes, err := query.Paginate(orgsStore, req.Pagination, func(key []byte, value []byte) error {
		var orgs types.Orgs
		if err := k.cdc.Unmarshal(value, &orgs); err != nil {
			return err
		}

		orgss = append(orgss, orgs)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllOrgsResponse{Orgs: orgss, Pagination: pageRes}, nil
}

func (k Keeper) Orgs(goCtx context.Context, req *types.QueryGetOrgsRequest) (*types.QueryGetOrgsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	orgs, found := k.GetOrgs(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetOrgsResponse{Orgs: orgs}, nil
}
