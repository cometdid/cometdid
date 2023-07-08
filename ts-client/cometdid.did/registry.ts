import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateOrgs } from "./types/cometdid/did/tx";
import { MsgDeleteOrgs } from "./types/cometdid/did/tx";
import { MsgUpdateOrgs } from "./types/cometdid/did/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cometdid.did.MsgCreateOrgs", MsgCreateOrgs],
    ["/cometdid.did.MsgDeleteOrgs", MsgDeleteOrgs],
    ["/cometdid.did.MsgUpdateOrgs", MsgUpdateOrgs],
    
];

export { msgTypes }