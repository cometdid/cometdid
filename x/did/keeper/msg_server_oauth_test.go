package keeper_test

import (
	"fmt"
	"github.com/ockam-network/did"
	"testing"
)

func TestDid(t *testing.T) {
	id := did.DID{
		Method:       "method",
		IDStrings:    []string{"ids1", "ids1"},
		Path:         "",
		PathSegments: nil,
		Fragment:     "",
	}
	fmt.Println(id.String())
}
