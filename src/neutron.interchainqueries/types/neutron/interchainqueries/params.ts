/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "neutron.interchainqueries";

/** Params defines the parameters for the module. */
export interface Params {
  /**
   * Defines amount of blocks required before query becomes available for
   * removal by anybody
   */
  querySubmitTimeout: number;
  /** Amount of coins deposited for the query. */
  queryDeposit: Coin[];
  /**
   * Amount of tx hashes to be removed during a single EndBlock. Can vary to
   * balance between network cleaning speed and EndBlock duration. A zero value
   * means no limit.
   */
  txQueryRemovalLimit: number;
}

function createBaseParams(): Params {
  return { querySubmitTimeout: 0, queryDeposit: [], txQueryRemovalLimit: 0 };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.querySubmitTimeout !== 0) {
      writer.uint32(8).uint64(message.querySubmitTimeout);
    }
    for (const v of message.queryDeposit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.txQueryRemovalLimit !== 0) {
      writer.uint32(24).uint64(message.txQueryRemovalLimit);
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
          message.querySubmitTimeout = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.queryDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.txQueryRemovalLimit = longToNumber(reader.uint64() as Long);
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
      querySubmitTimeout: isSet(object.querySubmitTimeout) ? Number(object.querySubmitTimeout) : 0,
      queryDeposit: Array.isArray(object?.queryDeposit) ? object.queryDeposit.map((e: any) => Coin.fromJSON(e)) : [],
      txQueryRemovalLimit: isSet(object.txQueryRemovalLimit) ? Number(object.txQueryRemovalLimit) : 0,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.querySubmitTimeout !== undefined && (obj.querySubmitTimeout = Math.round(message.querySubmitTimeout));
    if (message.queryDeposit) {
      obj.queryDeposit = message.queryDeposit.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.queryDeposit = [];
    }
    message.txQueryRemovalLimit !== undefined && (obj.txQueryRemovalLimit = Math.round(message.txQueryRemovalLimit));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.querySubmitTimeout = object.querySubmitTimeout ?? 0;
    message.queryDeposit = object.queryDeposit?.map((e) => Coin.fromPartial(e)) || [];
    message.txQueryRemovalLimit = object.txQueryRemovalLimit ?? 0;
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
