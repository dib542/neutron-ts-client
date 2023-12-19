/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PoolReserves } from "./pool_reserves";

export const protobufPackage = "neutron.dex";

export interface Pool {
  id: number;
  lowerTick0: PoolReserves | undefined;
  upperTick1: PoolReserves | undefined;
}

function createBasePool(): Pool {
  return { id: 0, lowerTick0: undefined, upperTick1: undefined };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.lowerTick0 !== undefined) {
      PoolReserves.encode(message.lowerTick0, writer.uint32(18).fork()).ldelim();
    }
    if (message.upperTick1 !== undefined) {
      PoolReserves.encode(message.upperTick1, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.lowerTick0 = PoolReserves.decode(reader, reader.uint32());
          break;
        case 3:
          message.upperTick1 = PoolReserves.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pool {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      lowerTick0: isSet(object.lowerTick0) ? PoolReserves.fromJSON(object.lowerTick0) : undefined,
      upperTick1: isSet(object.upperTick1) ? PoolReserves.fromJSON(object.upperTick1) : undefined,
    };
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.lowerTick0 !== undefined
      && (obj.lowerTick0 = message.lowerTick0 ? PoolReserves.toJSON(message.lowerTick0) : undefined);
    message.upperTick1 !== undefined
      && (obj.upperTick1 = message.upperTick1 ? PoolReserves.toJSON(message.upperTick1) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool();
    message.id = object.id ?? 0;
    message.lowerTick0 = (object.lowerTick0 !== undefined && object.lowerTick0 !== null)
      ? PoolReserves.fromPartial(object.lowerTick0)
      : undefined;
    message.upperTick1 = (object.upperTick1 !== undefined && object.upperTick1 !== null)
      ? PoolReserves.fromPartial(object.upperTick1)
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
