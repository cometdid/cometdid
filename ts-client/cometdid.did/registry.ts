import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateOrgs } from "./types/cometdid/did/tx";
import { MsgUpdateOrgs } from "./types/cometdid/did/tx";
import { MsgOauth } from "./types/cometdid/did/tx";
import { MsgDeleteOrgs } from "./types/cometdid/did/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cometdid.did.MsgCreateOrgs", MsgCreateOrgs],
    ["/cometdid.did.MsgUpdateOrgs", MsgUpdateOrgs],
    ["/cometdid.did.MsgOauth", MsgOauth],
    ["/cometdid.did.MsgDeleteOrgs", MsgDeleteOrgs],
    
];

export { msgTypes }