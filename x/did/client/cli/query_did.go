package cli

import (
	"strconv"

	"cometdid/x/did/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdDid() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "did [org-id] [creator]",
		Short: "Query did",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqOrgId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			reqCreator := args[1]

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryDidRequest{

				OrgId:   reqOrgId,
				Creator: reqCreator,
			}

			res, err := queryClient.Did(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
