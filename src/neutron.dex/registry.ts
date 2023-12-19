import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCancelLimitOrder } from "./types/neutron/dex/tx";
import { MsgWithdrawFilledLimitOrder } from "./types/neutron/dex/tx";
import { MsgWithdrawal } from "./types/neutron/dex/tx";
import { MsgUpdateParams } from "./types/neutron/dex/tx";
import { MsgDeposit } from "./types/neutron/dex/tx";
import { MsgMultiHopSwap } from "./types/neutron/dex/tx";
import { MsgPlaceLimitOrder } from "./types/neutron/dex/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/neutron.dex.MsgCancelLimitOrder", MsgCancelLimitOrder],
    ["/neutron.dex.MsgWithdrawFilledLimitOrder", MsgWithdrawFilledLimitOrder],
    ["/neutron.dex.MsgWithdrawal", MsgWithdrawal],
    ["/neutron.dex.MsgUpdateParams", MsgUpdateParams],
    ["/neutron.dex.MsgDeposit", MsgDeposit],
    ["/neutron.dex.MsgMultiHopSwap", MsgMultiHopSwap],
    ["/neutron.dex.MsgPlaceLimitOrder", MsgPlaceLimitOrder],
    
];

export { msgTypes }