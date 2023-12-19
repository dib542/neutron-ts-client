/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "neutron.dex";

export interface LimitOrderExpiration {
  /** see limitOrderTranche.proto for details on goodTilDate */
  expirationTime: Date | undefined;
  trancheRef: Uint8Array;
}

function createBaseLimitOrderExpiration(): LimitOrderExpiration {
  return { expirationTime: undefined, trancheRef: new Uint8Array() };
}

export const LimitOrderExpiration = {
  encode(message: LimitOrderExpiration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expirationTime !== undefined) {
      Timestamp.encode(toTimestamp(message.expirationTime), writer.uint32(10).fork()).ldelim();
    }
    if (message.trancheRef.length !== 0) {
      writer.uint32(18).bytes(message.trancheRef);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LimitOrderExpiration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimitOrderExpiration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expirationTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.trancheRef = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LimitOrderExpiration {
    return {
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      trancheRef: isSet(object.trancheRef) ? bytesFromBase64(object.trancheRef) : new Uint8Array(),
    };
  },

  toJSON(message: LimitOrderExpiration): unknown {
    const obj: any = {};
    message.expirationTime !== undefined && (obj.expirationTime = message.expirationTime.toISOString());
    message.trancheRef !== undefined
      && (obj.trancheRef = base64FromBytes(message.trancheRef !== undefined ? message.trancheRef : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LimitOrderExpiration>, I>>(object: I): LimitOrderExpiration {
    const message = createBaseLimitOrderExpiration();
    message.expirationTime = object.expirationTime ?? undefined;
    message.trancheRef = object.trancheRef ?? new Uint8Array();
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
