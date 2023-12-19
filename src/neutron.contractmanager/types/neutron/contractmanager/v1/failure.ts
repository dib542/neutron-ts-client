/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "neutron.contractmanager.v1";

/** Deprecated. Used only for migration purposes. */
export interface Failure {
  /** ChannelId */
  channelId: string;
  /** Address of the failed contract */
  address: string;
  /** id of the failure under specific address */
  id: number;
  /** ACK id to restore */
  ackId: number;
  /** Acknowledgement type */
  ackType: string;
}

function createBaseFailure(): Failure {
  return { channelId: "", address: "", id: 0, ackId: 0, ackType: "" };
}

export const Failure = {
  encode(message: Failure, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.id !== 0) {
      writer.uint32(24).uint64(message.id);
    }
    if (message.ackId !== 0) {
      writer.uint32(32).uint64(message.ackId);
    }
    if (message.ackType !== "") {
      writer.uint32(42).string(message.ackType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Failure {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.ackId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.ackType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Failure {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      address: isSet(object.address) ? String(object.address) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      ackId: isSet(object.ackId) ? Number(object.ackId) : 0,
      ackType: isSet(object.ackType) ? String(object.ackType) : "",
    };
  },

  toJSON(message: Failure): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.address !== undefined && (obj.address = message.address);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.ackId !== undefined && (obj.ackId = Math.round(message.ackId));
    message.ackType !== undefined && (obj.ackType = message.ackType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Failure>, I>>(object: I): Failure {
    const message = createBaseFailure();
    message.channelId = object.channelId ?? "";
    message.address = object.address ?? "";
    message.id = object.id ?? 0;
    message.ackId = object.ackId ?? 0;
    message.ackType = object.ackType ?? "";
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
