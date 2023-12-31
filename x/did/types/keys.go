package types

const (
	// ModuleName defines the module name
	ModuleName = "did"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_did"

	DidMethod = "cometdid"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	OrgsKey      = "Orgs/value/"
	OrgsCountKey = "Orgs/count/"
	OrgsNamesKey = "Orgs/name/"
	OrgsAuthKey  = "Orgs/oauth/"
)
