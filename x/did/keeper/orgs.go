package keeper

import (
	"encoding/binary"

	"cometdid/x/did/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetOrgsCount get the total number of orgs
func (k Keeper) GetOrgsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.OrgsCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetOrgsCount set the total number of orgs
func (k Keeper) SetOrgsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.OrgsCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendOrgs appends a orgs in the store with a new id and update the count
func (k Keeper) AppendOrgs(
	ctx sdk.Context,
	orgs types.Orgs,
) uint64 {
	// Create the orgs
	count := k.GetOrgsCount(ctx)

	// Set the ID of the appended value
	orgs.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrgsKey))
	appendedValue := k.cdc.MustMarshal(&orgs)
	store.Set(GetOrgsIDBytes(orgs.Id), appendedValue)

	// Update orgs count
	k.SetOrgsCount(ctx, count+1)

	return count
}

// SetOrgs set a specific orgs in the store
func (k Keeper) SetOrgs(ctx sdk.Context, orgs types.Orgs) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrgsKey))
	b := k.cdc.MustMarshal(&orgs)
	store.Set(GetOrgsIDBytes(orgs.Id), b)
}

// GetOrgs returns a orgs from its id
func (k Keeper) GetOrgs(ctx sdk.Context, id uint64) (val types.Orgs, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrgsKey))
	b := store.Get(GetOrgsIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveOrgs removes a orgs from the store
func (k Keeper) RemoveOrgs(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrgsKey))
	store.Delete(GetOrgsIDBytes(id))
}

// GetAllOrgs returns all orgs
func (k Keeper) GetAllOrgs(ctx sdk.Context) (list []types.Orgs) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrgsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Orgs
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetOrgsIDBytes returns the byte representation of the ID
func GetOrgsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetOrgsIDFromBytes returns ID in uint64 format from a byte array
func GetOrgsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
