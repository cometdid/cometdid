package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"cometdid/x/did/types"
)

func TestOrgsMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateOrgs(ctx, &types.MsgCreateOrgs{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestOrgsMsgServerUpdate(t *testing.T) {
	creator := "A"

	tests := []struct {
		desc    string
		request *types.MsgUpdateOrgs
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateOrgs{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateOrgs{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateOrgs{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateOrgs(ctx, &types.MsgCreateOrgs{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateOrgs(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestOrgsMsgServerDelete(t *testing.T) {
	creator := "A"

	tests := []struct {
		desc    string
		request *types.MsgDeleteOrgs
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteOrgs{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteOrgs{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteOrgs{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateOrgs(ctx, &types.MsgCreateOrgs{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteOrgs(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
