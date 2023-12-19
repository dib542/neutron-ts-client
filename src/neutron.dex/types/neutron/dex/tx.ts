/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Params } from "./params";

export const protobufPackage = "neutron.dex";

export enum LimitOrderType {
  GOOD_TIL_CANCELLED = 0,
  FILL_OR_KILL = 1,
  IMMEDIATE_OR_CANCEL = 2,
  JUST_IN_TIME = 3,
  GOOD_TIL_TIME = 4,
  UNRECOGNIZED = -1,
}

export function limitOrderTypeFromJSON(object: any): LimitOrderType {
  switch (object) {
    case 0:
    case "GOOD_TIL_CANCELLED":
      return LimitOrderType.GOOD_TIL_CANCELLED;
    case 1:
    case "FILL_OR_KILL":
      return LimitOrderType.FILL_OR_KILL;
    case 2:
    case "IMMEDIATE_OR_CANCEL":
      return LimitOrderType.IMMEDIATE_OR_CANCEL;
    case 3:
    case "JUST_IN_TIME":
      return LimitOrderType.JUST_IN_TIME;
    case 4:
    case "GOOD_TIL_TIME":
      return LimitOrderType.GOOD_TIL_TIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LimitOrderType.UNRECOGNIZED;
  }
}

export function limitOrderTypeToJSON(object: LimitOrderType): string {
  switch (object) {
    case LimitOrderType.GOOD_TIL_CANCELLED:
      return "GOOD_TIL_CANCELLED";
    case LimitOrderType.FILL_OR_KILL:
      return "FILL_OR_KILL";
    case LimitOrderType.IMMEDIATE_OR_CANCEL:
      return "IMMEDIATE_OR_CANCEL";
    case LimitOrderType.JUST_IN_TIME:
      return "JUST_IN_TIME";
    case LimitOrderType.GOOD_TIL_TIME:
      return "GOOD_TIL_TIME";
    case LimitOrderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DepositOptions {
  disableAutoswap: boolean;
}

export interface MsgDeposit {
  creator: string;
  receiver: string;
  tokenA: string;
  tokenB: string;
  amountsA: string[];
  amountsB: string[];
  tickIndexesAToB: number[];
  fees: number[];
  options: DepositOptions[];
}

export interface MsgDepositResponse {
  reserve0Deposited: string[];
  reserve1Deposited: string[];
}

export interface MsgWithdrawal {
  creator: string;
  receiver: string;
  tokenA: string;
  tokenB: string;
  sharesToRemove: string[];
  tickIndexesAToB: number[];
  fees: number[];
}

export interface MsgWithdrawalResponse {
}

export interface MsgPlaceLimitOrder {
  creator: string;
  receiver: string;
  tokenIn: string;
  tokenOut: string;
  tickIndexInToOut: number;
  amountIn: string;
  orderType: LimitOrderType;
  /** expirationTime is only valid iff orderType == GOOD_TIL_TIME. */
  expirationTime: Date | undefined;
  maxAmountOut: string;
}

export interface MsgPlaceLimitOrderResponse {
  trancheKey: string;
  /** Total amount of coin used for the limit order */
  coinIn:
    | Coin
    | undefined;
  /**
   * Total amount of coin received from the taker portion of the limit order
   * This is the amount of coin immediately available in the users account after executing the
   * limit order. It does not include any future proceeds from the maker portion which will have withdrawn in the future
   */
  takerCoinOut: Coin | undefined;
}

export interface MsgWithdrawFilledLimitOrder {
  creator: string;
  trancheKey: string;
}

export interface MsgWithdrawFilledLimitOrderResponse {
}

export interface MsgCancelLimitOrder {
  creator: string;
  trancheKey: string;
}

export interface MsgCancelLimitOrderResponse {
}

export interface MultiHopRoute {
  hops: string[];
}

export interface MsgMultiHopSwap {
  creator: string;
  receiver: string;
  routes: MultiHopRoute[];
  amountIn: string;
  exitLimitPrice: string;
  /**
   * If pickBestRoute == true then all routes are run and the route with the best price is chosen
   * otherwise, the first succesful route is used.
   */
  pickBestRoute: boolean;
}

export interface MsgMultiHopSwapResponse {
  coinOut: Coin | undefined;
}

export interface MsgUpdateParams {
  /** Authority is the address of the governance account. */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params | undefined;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.47
 */
export interface MsgUpdateParamsResponse {
}

function createBaseDepositOptions(): DepositOptions {
  return { disableAutoswap: false };
}

export const DepositOptions = {
  encode(message: DepositOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.disableAutoswap === true) {
      writer.uint32(8).bool(message.disableAutoswap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disableAutoswap = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositOptions {
    return { disableAutoswap: isSet(object.disableAutoswap) ? Boolean(object.disableAutoswap) : false };
  },

  toJSON(message: DepositOptions): unknown {
    const obj: any = {};
    message.disableAutoswap !== undefined && (obj.disableAutoswap = message.disableAutoswap);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DepositOptions>, I>>(object: I): DepositOptions {
    const message = createBaseDepositOptions();
    message.disableAutoswap = object.disableAutoswap ?? false;
    return message;
  },
};

function createBaseMsgDeposit(): MsgDeposit {
  return {
    creator: "",
    receiver: "",
    tokenA: "",
    tokenB: "",
    amountsA: [],
    amountsB: [],
    tickIndexesAToB: [],
    fees: [],
    options: [],
  };
}

export const MsgDeposit = {
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.tokenA !== "") {
      writer.uint32(26).string(message.tokenA);
    }
    if (message.tokenB !== "") {
      writer.uint32(34).string(message.tokenB);
    }
    for (const v of message.amountsA) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.amountsB) {
      writer.uint32(50).string(v!);
    }
    writer.uint32(58).fork();
    for (const v of message.tickIndexesAToB) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(66).fork();
    for (const v of message.fees) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.options) {
      DepositOptions.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.tokenA = reader.string();
          break;
        case 4:
          message.tokenB = reader.string();
          break;
        case 5:
          message.amountsA.push(reader.string());
          break;
        case 6:
          message.amountsB.push(reader.string());
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tickIndexesAToB.push(longToNumber(reader.int64() as Long));
            }
          } else {
            message.tickIndexesAToB.push(longToNumber(reader.int64() as Long));
          }
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fees.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.fees.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 9:
          message.options.push(DepositOptions.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeposit {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      tokenA: isSet(object.tokenA) ? String(object.tokenA) : "",
      tokenB: isSet(object.tokenB) ? String(object.tokenB) : "",
      amountsA: Array.isArray(object?.amountsA) ? object.amountsA.map((e: any) => String(e)) : [],
      amountsB: Array.isArray(object?.amountsB) ? object.amountsB.map((e: any) => String(e)) : [],
      tickIndexesAToB: Array.isArray(object?.tickIndexesAToB) ? object.tickIndexesAToB.map((e: any) => Number(e)) : [],
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Number(e)) : [],
      options: Array.isArray(object?.options) ? object.options.map((e: any) => DepositOptions.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.tokenA !== undefined && (obj.tokenA = message.tokenA);
    message.tokenB !== undefined && (obj.tokenB = message.tokenB);
    if (message.amountsA) {
      obj.amountsA = message.amountsA.map((e) => e);
    } else {
      obj.amountsA = [];
    }
    if (message.amountsB) {
      obj.amountsB = message.amountsB.map((e) => e);
    } else {
      obj.amountsB = [];
    }
    if (message.tickIndexesAToB) {
      obj.tickIndexesAToB = message.tickIndexesAToB.map((e) => Math.round(e));
    } else {
      obj.tickIndexesAToB = [];
    }
    if (message.fees) {
      obj.fees = message.fees.map((e) => Math.round(e));
    } else {
      obj.fees = [];
    }
    if (message.options) {
      obj.options = message.options.map((e) => e ? DepositOptions.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeposit>, I>>(object: I): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.tokenA = object.tokenA ?? "";
    message.tokenB = object.tokenB ?? "";
    message.amountsA = object.amountsA?.map((e) => e) || [];
    message.amountsB = object.amountsB?.map((e) => e) || [];
    message.tickIndexesAToB = object.tickIndexesAToB?.map((e) => e) || [];
    message.fees = object.fees?.map((e) => e) || [];
    message.options = object.options?.map((e) => DepositOptions.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgDepositResponse(): MsgDepositResponse {
  return { reserve0Deposited: [], reserve1Deposited: [] };
}

export const MsgDepositResponse = {
  encode(message: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.reserve0Deposited) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.reserve1Deposited) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserve0Deposited.push(reader.string());
          break;
        case 2:
          message.reserve1Deposited.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDepositResponse {
    return {
      reserve0Deposited: Array.isArray(object?.reserve0Deposited)
        ? object.reserve0Deposited.map((e: any) => String(e))
        : [],
      reserve1Deposited: Array.isArray(object?.reserve1Deposited)
        ? object.reserve1Deposited.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgDepositResponse): unknown {
    const obj: any = {};
    if (message.reserve0Deposited) {
      obj.reserve0Deposited = message.reserve0Deposited.map((e) => e);
    } else {
      obj.reserve0Deposited = [];
    }
    if (message.reserve1Deposited) {
      obj.reserve1Deposited = message.reserve1Deposited.map((e) => e);
    } else {
      obj.reserve1Deposited = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(object: I): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    message.reserve0Deposited = object.reserve0Deposited?.map((e) => e) || [];
    message.reserve1Deposited = object.reserve1Deposited?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgWithdrawal(): MsgWithdrawal {
  return { creator: "", receiver: "", tokenA: "", tokenB: "", sharesToRemove: [], tickIndexesAToB: [], fees: [] };
}

export const MsgWithdrawal = {
  encode(message: MsgWithdrawal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.tokenA !== "") {
      writer.uint32(26).string(message.tokenA);
    }
    if (message.tokenB !== "") {
      writer.uint32(34).string(message.tokenB);
    }
    for (const v of message.sharesToRemove) {
      writer.uint32(42).string(v!);
    }
    writer.uint32(50).fork();
    for (const v of message.tickIndexesAToB) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.fees) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.tokenA = reader.string();
          break;
        case 4:
          message.tokenB = reader.string();
          break;
        case 5:
          message.sharesToRemove.push(reader.string());
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tickIndexesAToB.push(longToNumber(reader.int64() as Long));
            }
          } else {
            message.tickIndexesAToB.push(longToNumber(reader.int64() as Long));
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fees.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.fees.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawal {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      tokenA: isSet(object.tokenA) ? String(object.tokenA) : "",
      tokenB: isSet(object.tokenB) ? String(object.tokenB) : "",
      sharesToRemove: Array.isArray(object?.sharesToRemove) ? object.sharesToRemove.map((e: any) => String(e)) : [],
      tickIndexesAToB: Array.isArray(object?.tickIndexesAToB) ? object.tickIndexesAToB.map((e: any) => Number(e)) : [],
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: MsgWithdrawal): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.tokenA !== undefined && (obj.tokenA = message.tokenA);
    message.tokenB !== undefined && (obj.tokenB = message.tokenB);
    if (message.sharesToRemove) {
      obj.sharesToRemove = message.sharesToRemove.map((e) => e);
    } else {
      obj.sharesToRemove = [];
    }
    if (message.tickIndexesAToB) {
      obj.tickIndexesAToB = message.tickIndexesAToB.map((e) => Math.round(e));
    } else {
      obj.tickIndexesAToB = [];
    }
    if (message.fees) {
      obj.fees = message.fees.map((e) => Math.round(e));
    } else {
      obj.fees = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawal>, I>>(object: I): MsgWithdrawal {
    const message = createBaseMsgWithdrawal();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.tokenA = object.tokenA ?? "";
    message.tokenB = object.tokenB ?? "";
    message.sharesToRemove = object.sharesToRemove?.map((e) => e) || [];
    message.tickIndexesAToB = object.tickIndexesAToB?.map((e) => e) || [];
    message.fees = object.fees?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgWithdrawalResponse(): MsgWithdrawalResponse {
  return {};
}

export const MsgWithdrawalResponse = {
  encode(_: MsgWithdrawalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawalResponse {
    return {};
  },

  toJSON(_: MsgWithdrawalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawalResponse>, I>>(_: I): MsgWithdrawalResponse {
    const message = createBaseMsgWithdrawalResponse();
    return message;
  },
};

function createBaseMsgPlaceLimitOrder(): MsgPlaceLimitOrder {
  return {
    creator: "",
    receiver: "",
    tokenIn: "",
    tokenOut: "",
    tickIndexInToOut: 0,
    amountIn: "",
    orderType: 0,
    expirationTime: undefined,
    maxAmountOut: "",
  };
}

export const MsgPlaceLimitOrder = {
  encode(message: MsgPlaceLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    if (message.tickIndexInToOut !== 0) {
      writer.uint32(40).int64(message.tickIndexInToOut);
    }
    if (message.amountIn !== "") {
      writer.uint32(58).string(message.amountIn);
    }
    if (message.orderType !== 0) {
      writer.uint32(64).int32(message.orderType);
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(toTimestamp(message.expirationTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.maxAmountOut !== "") {
      writer.uint32(82).string(message.maxAmountOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceLimitOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceLimitOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        case 5:
          message.tickIndexInToOut = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.amountIn = reader.string();
          break;
        case 8:
          message.orderType = reader.int32() as any;
          break;
        case 9:
          message.expirationTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.maxAmountOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPlaceLimitOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      tickIndexInToOut: isSet(object.tickIndexInToOut) ? Number(object.tickIndexInToOut) : 0,
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      orderType: isSet(object.orderType) ? limitOrderTypeFromJSON(object.orderType) : 0,
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      maxAmountOut: isSet(object.maxAmountOut) ? String(object.maxAmountOut) : "",
    };
  },

  toJSON(message: MsgPlaceLimitOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.tickIndexInToOut !== undefined && (obj.tickIndexInToOut = Math.round(message.tickIndexInToOut));
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.orderType !== undefined && (obj.orderType = limitOrderTypeToJSON(message.orderType));
    message.expirationTime !== undefined && (obj.expirationTime = message.expirationTime.toISOString());
    message.maxAmountOut !== undefined && (obj.maxAmountOut = message.maxAmountOut);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlaceLimitOrder>, I>>(object: I): MsgPlaceLimitOrder {
    const message = createBaseMsgPlaceLimitOrder();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.tickIndexInToOut = object.tickIndexInToOut ?? 0;
    message.amountIn = object.amountIn ?? "";
    message.orderType = object.orderType ?? 0;
    message.expirationTime = object.expirationTime ?? undefined;
    message.maxAmountOut = object.maxAmountOut ?? "";
    return message;
  },
};

function createBaseMsgPlaceLimitOrderResponse(): MsgPlaceLimitOrderResponse {
  return { trancheKey: "", coinIn: undefined, takerCoinOut: undefined };
}

export const MsgPlaceLimitOrderResponse = {
  encode(message: MsgPlaceLimitOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trancheKey !== "") {
      writer.uint32(10).string(message.trancheKey);
    }
    if (message.coinIn !== undefined) {
      Coin.encode(message.coinIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.takerCoinOut !== undefined) {
      Coin.encode(message.takerCoinOut, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceLimitOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceLimitOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trancheKey = reader.string();
          break;
        case 2:
          message.coinIn = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.takerCoinOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPlaceLimitOrderResponse {
    return {
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : "",
      coinIn: isSet(object.coinIn) ? Coin.fromJSON(object.coinIn) : undefined,
      takerCoinOut: isSet(object.takerCoinOut) ? Coin.fromJSON(object.takerCoinOut) : undefined,
    };
  },

  toJSON(message: MsgPlaceLimitOrderResponse): unknown {
    const obj: any = {};
    message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
    message.coinIn !== undefined && (obj.coinIn = message.coinIn ? Coin.toJSON(message.coinIn) : undefined);
    message.takerCoinOut !== undefined
      && (obj.takerCoinOut = message.takerCoinOut ? Coin.toJSON(message.takerCoinOut) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlaceLimitOrderResponse>, I>>(object: I): MsgPlaceLimitOrderResponse {
    const message = createBaseMsgPlaceLimitOrderResponse();
    message.trancheKey = object.trancheKey ?? "";
    message.coinIn = (object.coinIn !== undefined && object.coinIn !== null)
      ? Coin.fromPartial(object.coinIn)
      : undefined;
    message.takerCoinOut = (object.takerCoinOut !== undefined && object.takerCoinOut !== null)
      ? Coin.fromPartial(object.takerCoinOut)
      : undefined;
    return message;
  },
};

function createBaseMsgWithdrawFilledLimitOrder(): MsgWithdrawFilledLimitOrder {
  return { creator: "", trancheKey: "" };
}

export const MsgWithdrawFilledLimitOrder = {
  encode(message: MsgWithdrawFilledLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.trancheKey !== "") {
      writer.uint32(18).string(message.trancheKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawFilledLimitOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFilledLimitOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.trancheKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawFilledLimitOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : "",
    };
  },

  toJSON(message: MsgWithdrawFilledLimitOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawFilledLimitOrder>, I>>(object: I): MsgWithdrawFilledLimitOrder {
    const message = createBaseMsgWithdrawFilledLimitOrder();
    message.creator = object.creator ?? "";
    message.trancheKey = object.trancheKey ?? "";
    return message;
  },
};

function createBaseMsgWithdrawFilledLimitOrderResponse(): MsgWithdrawFilledLimitOrderResponse {
  return {};
}

export const MsgWithdrawFilledLimitOrderResponse = {
  encode(_: MsgWithdrawFilledLimitOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawFilledLimitOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFilledLimitOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawFilledLimitOrderResponse {
    return {};
  },

  toJSON(_: MsgWithdrawFilledLimitOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawFilledLimitOrderResponse>, I>>(
    _: I,
  ): MsgWithdrawFilledLimitOrderResponse {
    const message = createBaseMsgWithdrawFilledLimitOrderResponse();
    return message;
  },
};

function createBaseMsgCancelLimitOrder(): MsgCancelLimitOrder {
  return { creator: "", trancheKey: "" };
}

export const MsgCancelLimitOrder = {
  encode(message: MsgCancelLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.trancheKey !== "") {
      writer.uint32(18).string(message.trancheKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelLimitOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelLimitOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.trancheKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelLimitOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : "",
    };
  },

  toJSON(message: MsgCancelLimitOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelLimitOrder>, I>>(object: I): MsgCancelLimitOrder {
    const message = createBaseMsgCancelLimitOrder();
    message.creator = object.creator ?? "";
    message.trancheKey = object.trancheKey ?? "";
    return message;
  },
};

function createBaseMsgCancelLimitOrderResponse(): MsgCancelLimitOrderResponse {
  return {};
}

export const MsgCancelLimitOrderResponse = {
  encode(_: MsgCancelLimitOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelLimitOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelLimitOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCancelLimitOrderResponse {
    return {};
  },

  toJSON(_: MsgCancelLimitOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelLimitOrderResponse>, I>>(_: I): MsgCancelLimitOrderResponse {
    const message = createBaseMsgCancelLimitOrderResponse();
    return message;
  },
};

function createBaseMultiHopRoute(): MultiHopRoute {
  return { hops: [] };
}

export const MultiHopRoute = {
  encode(message: MultiHopRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hops) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiHopRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiHopRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hops.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MultiHopRoute {
    return { hops: Array.isArray(object?.hops) ? object.hops.map((e: any) => String(e)) : [] };
  },

  toJSON(message: MultiHopRoute): unknown {
    const obj: any = {};
    if (message.hops) {
      obj.hops = message.hops.map((e) => e);
    } else {
      obj.hops = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MultiHopRoute>, I>>(object: I): MultiHopRoute {
    const message = createBaseMultiHopRoute();
    message.hops = object.hops?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgMultiHopSwap(): MsgMultiHopSwap {
  return { creator: "", receiver: "", routes: [], amountIn: "", exitLimitPrice: "", pickBestRoute: false };
}

export const MsgMultiHopSwap = {
  encode(message: MsgMultiHopSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    for (const v of message.routes) {
      MultiHopRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.amountIn !== "") {
      writer.uint32(34).string(message.amountIn);
    }
    if (message.exitLimitPrice !== "") {
      writer.uint32(42).string(message.exitLimitPrice);
    }
    if (message.pickBestRoute === true) {
      writer.uint32(48).bool(message.pickBestRoute);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiHopSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiHopSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.routes.push(MultiHopRoute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.amountIn = reader.string();
          break;
        case 5:
          message.exitLimitPrice = reader.string();
          break;
        case 6:
          message.pickBestRoute = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMultiHopSwap {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => MultiHopRoute.fromJSON(e)) : [],
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      exitLimitPrice: isSet(object.exitLimitPrice) ? String(object.exitLimitPrice) : "",
      pickBestRoute: isSet(object.pickBestRoute) ? Boolean(object.pickBestRoute) : false,
    };
  },

  toJSON(message: MsgMultiHopSwap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    if (message.routes) {
      obj.routes = message.routes.map((e) => e ? MultiHopRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.exitLimitPrice !== undefined && (obj.exitLimitPrice = message.exitLimitPrice);
    message.pickBestRoute !== undefined && (obj.pickBestRoute = message.pickBestRoute);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMultiHopSwap>, I>>(object: I): MsgMultiHopSwap {
    const message = createBaseMsgMultiHopSwap();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.routes = object.routes?.map((e) => MultiHopRoute.fromPartial(e)) || [];
    message.amountIn = object.amountIn ?? "";
    message.exitLimitPrice = object.exitLimitPrice ?? "";
    message.pickBestRoute = object.pickBestRoute ?? false;
    return message;
  },
};

function createBaseMsgMultiHopSwapResponse(): MsgMultiHopSwapResponse {
  return { coinOut: undefined };
}

export const MsgMultiHopSwapResponse = {
  encode(message: MsgMultiHopSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coinOut !== undefined) {
      Coin.encode(message.coinOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiHopSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiHopSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coinOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMultiHopSwapResponse {
    return { coinOut: isSet(object.coinOut) ? Coin.fromJSON(object.coinOut) : undefined };
  },

  toJSON(message: MsgMultiHopSwapResponse): unknown {
    const obj: any = {};
    message.coinOut !== undefined && (obj.coinOut = message.coinOut ? Coin.toJSON(message.coinOut) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMultiHopSwapResponse>, I>>(object: I): MsgMultiHopSwapResponse {
    const message = createBaseMsgMultiHopSwapResponse();
    message.coinOut = (object.coinOut !== undefined && object.coinOut !== null)
      ? Coin.fromPartial(object.coinOut)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  Withdrawal(request: MsgWithdrawal): Promise<MsgWithdrawalResponse>;
  PlaceLimitOrder(request: MsgPlaceLimitOrder): Promise<MsgPlaceLimitOrderResponse>;
  WithdrawFilledLimitOrder(request: MsgWithdrawFilledLimitOrder): Promise<MsgWithdrawFilledLimitOrderResponse>;
  CancelLimitOrder(request: MsgCancelLimitOrder): Promise<MsgCancelLimitOrderResponse>;
  MultiHopSwap(request: MsgMultiHopSwap): Promise<MsgMultiHopSwapResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Deposit = this.Deposit.bind(this);
    this.Withdrawal = this.Withdrawal.bind(this);
    this.PlaceLimitOrder = this.PlaceLimitOrder.bind(this);
    this.WithdrawFilledLimitOrder = this.WithdrawFilledLimitOrder.bind(this);
    this.CancelLimitOrder = this.CancelLimitOrder.bind(this);
    this.MultiHopSwap = this.MultiHopSwap.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Msg", "Deposit", data);
    return promise.then((data) => MsgDepositResponse.decode(new _m0.Reader(data)));
  }

  Withdrawal(request: MsgWithdrawal): Promise<MsgWithdrawalResponse> {
    const data = MsgWithdrawal.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Msg", "Withdrawal", data);
    return promise.then((data) => MsgWithdrawalResponse.decode(new _m0.Reader(data)));
  }

  PlaceLimitOrder(request: MsgPlaceLimitOrder): Promise<MsgPlaceLimitOrderResponse> {
    const data = MsgPlaceLimitOrder.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Msg", "PlaceLimitOrder", data);
    return promise.then((data) => MsgPlaceLimitOrderResponse.decode(new _m0.Reader(data)));
  }

  WithdrawFilledLimitOrder(request: MsgWithdrawFilledLimitOrder): Promise<MsgWithdrawFilledLimitOrderResponse> {
    const data = MsgWithdrawFilledLimitOrder.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Msg", "WithdrawFilledLimitOrder", data);
    return promise.then((data) => MsgWithdrawFilledLimitOrderResponse.decode(new _m0.Reader(data)));
  }

  CancelLimitOrder(request: MsgCancelLimitOrder): Promise<MsgCancelLimitOrderResponse> {
    const data = MsgCancelLimitOrder.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Msg", "CancelLimitOrder", data);
    return promise.then((data) => MsgCancelLimitOrderResponse.decode(new _m0.Reader(data)));
  }

  MultiHopSwap(request: MsgMultiHopSwap): Promise<MsgMultiHopSwapResponse> {
    const data = MsgMultiHopSwap.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Msg", "MultiHopSwap", data);
    return promise.then((data) => MsgMultiHopSwapResponse.decode(new _m0.Reader(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
