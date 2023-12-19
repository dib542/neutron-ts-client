/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "neutron.interchaintxs.v1";

/** Params defines the parameters for the module. */
export interface Params {
  /** Defines maximum amount of messages to be passed in MsgSubmitTx */
  msgSubmitTxMaxMessages: number;
  /** Defines a minimum fee required to register interchain account */
  registerFee: Coin[];
}

function createBaseParams(): Params {
  return { msgSubmitTxMaxMessages: 0, registerFee: [] };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgSubmitTxMaxMessages !== 0) {
      writer.uint32(8).uint64(message.msgSubmitTxMaxMessages);
    }
    for (const v of message.registerFee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.msgSubmitTxMaxMessages = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.registerFee.push(Coin.decode(reader, reader.uint32()));
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
      msgSubmitTxMaxMessages: isSet(object.msgSubmitTxMaxMessages) ? Number(object.msgSubmitTxMaxMessages) : 0,
      registerFee: Array.isArray(object?.registerFee) ? object.registerFee.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.msgSubmitTxMaxMessages !== undefined
      && (obj.msgSubmitTxMaxMessages = Math.round(message.msgSubmitTxMaxMessages));
    if (message.registerFee) {
      obj.registerFee = message.registerFee.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.registerFee = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.msgSubmitTxMaxMessages = object.msgSubmitTxMaxMessages ?? 0;
    message.registerFee = object.registerFee?.map((e) => Coin.fromPartial(e)) || [];
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
