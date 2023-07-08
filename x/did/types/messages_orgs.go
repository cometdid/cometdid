package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateOrgs = "create_orgs"
	TypeMsgUpdateOrgs = "update_orgs"
	TypeMsgDeleteOrgs = "delete_orgs"
)

var _ sdk.Msg = &MsgCreateOrgs{}

func NewMsgCreateOrgs(creator string, name string, logo string, desc string) *MsgCreateOrgs {
	return &MsgCreateOrgs{
		Creator: creator,
		Name:    name,
		Logo:    logo,
		Desc:    desc,
	}
}

func (msg *MsgCreateOrgs) Route() string {
	return RouterKey
}

func (msg *MsgCreateOrgs) Type() string {
	return TypeMsgCreateOrgs
}

func (msg *MsgCreateOrgs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateOrgs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateOrgs) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateOrgs{}

func NewMsgUpdateOrgs(creator string, id uint64, name string, logo string, desc string) *MsgUpdateOrgs {
	return &MsgUpdateOrgs{
		Id:      id,
		Creator: creator,
		Name:    name,
		Logo:    logo,
		Desc:    desc,
	}
}

func (msg *MsgUpdateOrgs) Route() string {
	return RouterKey
}

func (msg *MsgUpdateOrgs) Type() string {
	return TypeMsgUpdateOrgs
}

func (msg *MsgUpdateOrgs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateOrgs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateOrgs) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteOrgs{}

func NewMsgDeleteOrgs(creator string, id uint64) *MsgDeleteOrgs {
	return &MsgDeleteOrgs{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteOrgs) Route() string {
	return RouterKey
}

func (msg *MsgDeleteOrgs) Type() string {
	return TypeMsgDeleteOrgs
}

func (msg *MsgDeleteOrgs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteOrgs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteOrgs) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
