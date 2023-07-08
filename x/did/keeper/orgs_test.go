package keeper_test

import (
	"testing"

	keepertest "cometdid/testutil/keeper"
	"cometdid/testutil/nullify"
	"cometdid/x/did/keeper"
	"cometdid/x/did/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNOrgs(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Orgs {
	items := make([]types.Orgs, n)
	for i := range items {
		items[i].Id = keeper.AppendOrgs(ctx, items[i])
	}
	return items
}

func TestOrgsGet(t *testing.T) {
	keeper, ctx := keepertest.DidKeeper(t)
	items := createNOrgs(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetOrgs(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestOrgsRemove(t *testing.T) {
	keeper, ctx := keepertest.DidKeeper(t)
	items := createNOrgs(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveOrgs(ctx, item.Id)
		_, found := keeper.GetOrgs(ctx, item.Id)
		require.False(t, found)
	}
}

func TestOrgsGetAll(t *testing.T) {
	keeper, ctx := keepertest.DidKeeper(t)
	items := createNOrgs(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllOrgs(ctx)),
	)
}

func TestOrgsCount(t *testing.T) {
	keeper, ctx := keepertest.DidKeeper(t)
	items := createNOrgs(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetOrgsCount(ctx))
}
