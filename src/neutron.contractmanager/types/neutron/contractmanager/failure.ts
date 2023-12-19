/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "neutron.contractmanager";

/**
 * Failure message contains information about ACK failures and can be used to
 * replay ACK in case of requirement.
 * Note that Failure means that sudo handler to cosmwasm contract failed for some reason
 */
export interface Failure {
  /** Address of the failed contract */
  address: string;
  /** Id of the failure under specific address */
  id: number;
  /** Serialized MessageSudoCallback with Packet and Ack(if exists) */
  sudoPayload: Uint8Array;
  /** Redacted error response of the sudo call. Full error is emitted as an event */
  error: string;
}

function createBaseFailure(): Failure {
  return { address: "", id: 0, sudoPayload: new Uint8Array(), error: "" };
}

export const Failure = {
  encode(message: Failure, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.sudoPayload.length !== 0) {
      writer.uint32(26).bytes(message.sudoPayload);
    }
    if (message.error !== "") {
      writer.uint32(34).string(message.error);
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
          message.address = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.sudoPayload = reader.bytes();
          break;
        case 4:
          message.error = reader.string();
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
      address: isSet(object.address) ? String(object.address) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      sudoPayload: isSet(object.sudoPayload) ? bytesFromBase64(object.sudoPayload) : new Uint8Array(),
      error: isSet(object.error) ? String(object.error) : "",
    };
  },

  toJSON(message: Failure): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.sudoPayload !== undefined
      && (obj.sudoPayload = base64FromBytes(
        message.sudoPayload !== undefined ? message.sudoPayload : new Uint8Array(),
      ));
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Failure>, I>>(object: I): Failure {
    const message = createBaseFailure();
    message.address = object.address ?? "";
    message.id = object.id ?? 0;
    message.sudoPayload = object.sudoPayload ?? new Uint8Array();
    message.error = object.error ?? "";
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

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
