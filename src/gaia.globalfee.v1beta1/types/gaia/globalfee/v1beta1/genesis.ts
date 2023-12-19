/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "gaia.globalfee.v1beta1";

/** GenesisState - initial state of module */
export interface GenesisState {
  /** Params of this module */
  params: Params | undefined;
}

/** Params defines the set of module parameters. */
export interface Params {
  /**
   * minimum_gas_prices stores the minimum gas price(s) for all TX on the chain.
   * When multiple coins are defined then they are accepted alternatively.
   * The list must be sorted by denoms asc. No duplicate denoms or zero amount
   * values allowed. For more information see
   * https://docs.cosmos.network/main/modules/auth#concepts
   */
  minimumGasPrices: DecCoin[];
  /**
   * bypass_min_fee_msg_types defines a list of message type urls
   * that are free of fee charge.
   */
  bypassMinFeeMsgTypes: string[];
  /**
   * max_total_bypass_min_fee_msg_gas_usage defines the total maximum gas usage
   * allowed for a transaction containing only messages of types in bypass_min_fee_msg_types
   * to bypass fee charge.
   */
  maxTotalBypassMinFeeMsgGasUsage: number;
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseParams(): Params {
  return { minimumGasPrices: [], bypassMinFeeMsgTypes: [], maxTotalBypassMinFeeMsgGasUsage: 0 };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.minimumGasPrices) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.bypassMinFeeMsgTypes) {
      writer.uint32(18).string(v!);
    }
    if (message.maxTotalBypassMinFeeMsgGasUsage !== 0) {
      writer.uint32(24).uint64(message.maxTotalBypassMinFeeMsgGasUsage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minimumGasPrices.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.bypassMinFeeMsgTypes.push(reader.string());
          break;
        case 3:
          message.maxTotalBypassMinFeeMsgGasUsage = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      minimumGasPrices: Array.isArray(object?.minimumGasPrices)
        ? object.minimumGasPrices.map((e: any) => DecCoin.fromJSON(e))
        : [],
      bypassMinFeeMsgTypes: Array.isArray(object?.bypassMinFeeMsgTypes)
        ? object.bypassMinFeeMsgTypes.map((e: any) => String(e))
        : [],
      maxTotalBypassMinFeeMsgGasUsage: isSet(object.maxTotalBypassMinFeeMsgGasUsage)
        ? Number(object.maxTotalBypassMinFeeMsgGasUsage)
        : 0,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.minimumGasPrices) {
      obj.minimumGasPrices = message.minimumGasPrices.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.minimumGasPrices = [];
    }
    if (message.bypassMinFeeMsgTypes) {
      obj.bypassMinFeeMsgTypes = message.bypassMinFeeMsgTypes.map((e) => e);
    } else {
      obj.bypassMinFeeMsgTypes = [];
    }
    message.maxTotalBypassMinFeeMsgGasUsage !== undefined
      && (obj.maxTotalBypassMinFeeMsgGasUsage = Math.round(message.maxTotalBypassMinFeeMsgGasUsage));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.minimumGasPrices = object.minimumGasPrices?.map((e) => DecCoin.fromPartial(e)) || [];
    message.bypassMinFeeMsgTypes = object.bypassMinFeeMsgTypes?.map((e) => e) || [];
    message.maxTotalBypassMinFeeMsgGasUsage = object.maxTotalBypassMinFeeMsgGasUsage ?? 0;
    return message;
  },
};

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
