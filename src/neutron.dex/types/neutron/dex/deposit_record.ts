/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PairID } from "./pair_id";

export const protobufPackage = "neutron.dex";

export interface DepositRecord {
  pairId: PairID | undefined;
  sharesOwned: string;
  centerTickIndex: number;
  lowerTickIndex: number;
  upperTickIndex: number;
  fee: number;
}

function createBaseDepositRecord(): DepositRecord {
  return { pairId: undefined, sharesOwned: "", centerTickIndex: 0, lowerTickIndex: 0, upperTickIndex: 0, fee: 0 };
}

export const DepositRecord = {
  encode(message: DepositRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== undefined) {
      PairID.encode(message.pairId, writer.uint32(10).fork()).ldelim();
    }
    if (message.sharesOwned !== "") {
      writer.uint32(18).string(message.sharesOwned);
    }
    if (message.centerTickIndex !== 0) {
      writer.uint32(24).int64(message.centerTickIndex);
    }
    if (message.lowerTickIndex !== 0) {
      writer.uint32(32).int64(message.lowerTickIndex);
    }
    if (message.upperTickIndex !== 0) {
      writer.uint32(40).int64(message.upperTickIndex);
    }
    if (message.fee !== 0) {
      writer.uint32(48).uint64(message.fee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = PairID.decode(reader, reader.uint32());
          break;
        case 2:
          message.sharesOwned = reader.string();
          break;
        case 3:
          message.centerTickIndex = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.lowerTickIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.upperTickIndex = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.fee = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositRecord {
    return {
      pairId: isSet(object.pairId) ? PairID.fromJSON(object.pairId) : undefined,
      sharesOwned: isSet(object.sharesOwned) ? String(object.sharesOwned) : "",
      centerTickIndex: isSet(object.centerTickIndex) ? Number(object.centerTickIndex) : 0,
      lowerTickIndex: isSet(object.lowerTickIndex) ? Number(object.lowerTickIndex) : 0,
      upperTickIndex: isSet(object.upperTickIndex) ? Number(object.upperTickIndex) : 0,
      fee: isSet(object.fee) ? Number(object.fee) : 0,
    };
  },

  toJSON(message: DepositRecord): unknown {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId ? PairID.toJSON(message.pairId) : undefined);
    message.sharesOwned !== undefined && (obj.sharesOwned = message.sharesOwned);
    message.centerTickIndex !== undefined && (obj.centerTickIndex = Math.round(message.centerTickIndex));
    message.lowerTickIndex !== undefined && (obj.lowerTickIndex = Math.round(message.lowerTickIndex));
    message.upperTickIndex !== undefined && (obj.upperTickIndex = Math.round(message.upperTickIndex));
    message.fee !== undefined && (obj.fee = Math.round(message.fee));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DepositRecord>, I>>(object: I): DepositRecord {
    const message = createBaseDepositRecord();
    message.pairId = (object.pairId !== undefined && object.pairId !== null)
      ? PairID.fromPartial(object.pairId)
      : undefined;
    message.sharesOwned = object.sharesOwned ?? "";
    message.centerTickIndex = object.centerTickIndex ?? 0;
    message.lowerTickIndex = object.lowerTickIndex ?? 0;
    message.upperTickIndex = object.upperTickIndex ?? 0;
    message.fee = object.fee ?? 0;
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
