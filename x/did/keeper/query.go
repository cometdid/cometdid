package keeper

import (
	"cometdid/x/did/types"
)

var _ types.QueryServer = Keeper{}
