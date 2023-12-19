import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParams } from "./types/neutron/interchaintxs/v1/tx";
import { MsgSubmitTx } from "./types/neutron/interchaintxs/v1/tx";
import { MsgRegisterInterchainAccount } from "./types/neutron/interchaintxs/v1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/neutron.interchaintxs.v1.MsgUpdateParams", MsgUpdateParams],
    ["/neutron.interchaintxs.v1.MsgSubmitTx", MsgSubmitTx],
    ["/neutron.interchaintxs.v1.MsgRegisterInterchainAccount", MsgRegisterInterchainAccount],
    
];

export { msgTypes }