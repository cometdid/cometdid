package did_test

import (
	"testing"

	keepertest "cometdid/testutil/keeper"
	"cometdid/testutil/nullify"
	"cometdid/x/did"
	"cometdid/x/did/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		OrgsList: []types.Orgs{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		OrgsCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.DidKeeper(t)
	did.InitGenesis(ctx, *k, genesisState)
	got := did.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.OrgsList, got.OrgsList)
	require.Equal(t, genesisState.OrgsCount, got.OrgsCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
