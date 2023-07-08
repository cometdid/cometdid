package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgOauth = "oauth"

var _ sdk.Msg = &MsgOauth{}

func NewMsgOauth(creator string, orgId uint64) *MsgOauth {
	return &MsgOauth{
		Creator: creator,
		OrgId:   orgId,
	}
}

func (msg *MsgOauth) Route() string {
	return RouterKey
}

func (msg *MsgOauth) Type() string {
	return TypeMsgOauth
}

func (msg *MsgOauth) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgOauth) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgOauth) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
