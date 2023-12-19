import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSubmitQueryResult } from "./types/neutron/interchainqueries/tx";
import { MsgRemoveInterchainQueryRequest } from "./types/neutron/interchainqueries/tx";
import { MsgRegisterInterchainQuery } from "./types/neutron/interchainqueries/tx";
import { MsgUpdateParams } from "./types/neutron/interchainqueries/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/neutron.interchainqueries.MsgSubmitQueryResult", MsgSubmitQueryResult],
    ["/neutron.interchainqueries.MsgRemoveInterchainQueryRequest", MsgRemoveInterchainQueryRequest],
    ["/neutron.interchainqueries.MsgRegisterInterchainQuery", MsgRegisterInterchainQuery],
    ["/neutron.interchainqueries.MsgUpdateParams", MsgUpdateParams],
    
];

export { msgTypes }