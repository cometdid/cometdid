package did

import (
	"cometdid/x/did/keeper"
	"cometdid/x/did/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"math"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the orgs
	for _, elem := range genState.OrgsList {
		k.SetOrgs(ctx, elem)
	}

	// Set orgs count
	k.SetOrgsCount(ctx, uint64(math.Max(float64(genState.OrgsCount), 1)))
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.OrgsList = k.GetAllOrgs(ctx)
	genesis.OrgsCount = k.GetOrgsCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
