/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PairID } from "./pair_id";

export const protobufPackage = "neutron.dex";

export interface PoolMetadata {
  id: number;
  tick: number;
  fee: number;
  pairId: PairID | undefined;
}

function createBasePoolMetadata(): PoolMetadata {
  return { id: 0, tick: 0, fee: 0, pairId: undefined };
}

export const PoolMetadata = {
  encode(message: PoolMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.tick !== 0) {
      writer.uint32(16).int64(message.tick);
    }
    if (message.fee !== 0) {
      writer.uint32(24).uint64(message.fee);
    }
    if (message.pairId !== undefined) {
      PairID.encode(message.pairId, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.tick = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.fee = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.pairId = PairID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolMetadata {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      tick: isSet(object.tick) ? Number(object.tick) : 0,
      fee: isSet(object.fee) ? Number(object.fee) : 0,
      pairId: isSet(object.pairId) ? PairID.fromJSON(object.pairId) : undefined,
    };
  },

  toJSON(message: PoolMetadata): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.tick !== undefined && (obj.tick = Math.round(message.tick));
    message.fee !== undefined && (obj.fee = Math.round(message.fee));
    message.pairId !== undefined && (obj.pairId = message.pairId ? PairID.toJSON(message.pairId) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolMetadata>, I>>(object: I): PoolMetadata {
    const message = createBasePoolMetadata();
    message.id = object.id ?? 0;
    message.tick = object.tick ?? 0;
    message.fee = object.fee ?? 0;
    message.pairId = (object.pairId !== undefined && object.pairId !== null)
      ? PairID.fromPartial(object.pairId)
      : undefined;
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
