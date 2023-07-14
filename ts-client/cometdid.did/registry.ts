import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgDeleteOrgs } from "./types/cometdid/did/tx";
import { MsgCreateOrgs } from "./types/cometdid/did/tx";
import { MsgOauth } from "./types/cometdid/did/tx";
import { MsgUpdateOrgs } from "./types/cometdid/did/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cometdid.did.MsgDeleteOrgs", MsgDeleteOrgs],
    ["/cometdid.did.MsgCreateOrgs", MsgCreateOrgs],
    ["/cometdid.did.MsgOauth", MsgOauth],
    ["/cometdid.did.MsgUpdateOrgs", MsgUpdateOrgs],
    
];

export { msgTypes }