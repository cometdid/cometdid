package did

import (
	"math/rand"

	"cometdid/testutil/sample"
	didsimulation "cometdid/x/did/simulation"
	"cometdid/x/did/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = didsimulation.FindAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
	_ = rand.Rand{}
)

const (
	opWeightMsgCreateOrgs = "op_weight_msg_orgs"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateOrgs int = 100

	opWeightMsgUpdateOrgs = "op_weight_msg_orgs"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateOrgs int = 100

	opWeightMsgDeleteOrgs = "op_weight_msg_orgs"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteOrgs int = 100

	opWeightMsgOauth = "op_weight_msg_oauth"
	// TODO: Determine the simulation weight value
	defaultWeightMsgOauth int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	didGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		OrgsList: []types.Orgs{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		OrgsCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&didGenesis)
}

// RegisterStoreDecoder registers a decoder.
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// ProposalContents doesn't return any content functions for governance proposals.
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateOrgs int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateOrgs, &weightMsgCreateOrgs, nil,
		func(_ *rand.Rand) {
			weightMsgCreateOrgs = defaultWeightMsgCreateOrgs
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateOrgs,
		didsimulation.SimulateMsgCreateOrgs(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateOrgs int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateOrgs, &weightMsgUpdateOrgs, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateOrgs = defaultWeightMsgUpdateOrgs
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateOrgs,
		didsimulation.SimulateMsgUpdateOrgs(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteOrgs int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteOrgs, &weightMsgDeleteOrgs, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteOrgs = defaultWeightMsgDeleteOrgs
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteOrgs,
		didsimulation.SimulateMsgDeleteOrgs(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgOauth int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgOauth, &weightMsgOauth, nil,
		func(_ *rand.Rand) {
			weightMsgOauth = defaultWeightMsgOauth
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgOauth,
		didsimulation.SimulateMsgOauth(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

// ProposalMsgs returns msgs used for governance proposals for simulations.
func (am AppModule) ProposalMsgs(simState module.SimulationState) []simtypes.WeightedProposalMsg {
	return []simtypes.WeightedProposalMsg{
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateOrgs,
			defaultWeightMsgCreateOrgs,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				didsimulation.SimulateMsgCreateOrgs(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgUpdateOrgs,
			defaultWeightMsgUpdateOrgs,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				didsimulation.SimulateMsgUpdateOrgs(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgDeleteOrgs,
			defaultWeightMsgDeleteOrgs,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				didsimulation.SimulateMsgDeleteOrgs(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgOauth,
			defaultWeightMsgOauth,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				didsimulation.SimulateMsgOauth(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		// this line is used by starport scaffolding # simapp/module/OpMsg
	}
}
