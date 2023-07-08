import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateOrgs } from "./types/cometdid/did/tx";
import { MsgCreateOrgs } from "./types/cometdid/did/tx";
import { MsgDeleteOrgs } from "./types/cometdid/did/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cometdid.did.MsgUpdateOrgs", MsgUpdateOrgs],
    ["/cometdid.did.MsgCreateOrgs", MsgCreateOrgs],
    ["/cometdid.did.MsgDeleteOrgs", MsgDeleteOrgs],
    
];

export { msgTypes }