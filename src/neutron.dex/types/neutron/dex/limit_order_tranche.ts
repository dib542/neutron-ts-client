/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";
import { TradePairID } from "./trade_pair_id";

export const protobufPackage = "neutron.dex";

export interface LimitOrderTrancheKey {
  tradePairId: TradePairID | undefined;
  tickIndexTakerToMaker: number;
  trancheKey: string;
}

export interface LimitOrderTranche {
  key: LimitOrderTrancheKey | undefined;
  reservesMakerDenom: string;
  reservesTakerDenom: string;
  totalMakerDenom: string;
  /**
   * GoodTilDate is represented as seconds since  January 1, year 1, 00:00:00.00 UTC
   * LimitOrders with goodTilDate set are valid as long as blockTime <= goodTilDate
   */
  totalTakerDenom: string;
  /**
   * JIT orders also use goodTilDate to handle deletion but represent a special case
   * All JIT orders have a goodTilDate of 0 and an exception is made to still still treat these orders as live
   * Order deletion still functions the same and the orders will be deleted at the end of the block
   */
  expirationTime: Date | undefined;
  priceTakerToMaker: string;
}

function createBaseLimitOrderTrancheKey(): LimitOrderTrancheKey {
  return { tradePairId: undefined, tickIndexTakerToMaker: 0, trancheKey: "" };
}

export const LimitOrderTrancheKey = {
  encode(message: LimitOrderTrancheKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradePairId !== undefined) {
      TradePairID.encode(message.tradePairId, writer.uint32(10).fork()).ldelim();
    }
    if (message.tickIndexTakerToMaker !== 0) {
      writer.uint32(16).int64(message.tickIndexTakerToMaker);
    }
    if (message.trancheKey !== "") {
      writer.uint32(26).string(message.trancheKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LimitOrderTrancheKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimitOrderTrancheKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradePairId = TradePairID.decode(reader, reader.uint32());
          break;
        case 2:
          message.tickIndexTakerToMaker = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.trancheKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LimitOrderTrancheKey {
    return {
      tradePairId: isSet(object.tradePairId) ? TradePairID.fromJSON(object.tradePairId) : undefined,
      tickIndexTakerToMaker: isSet(object.tickIndexTakerToMaker) ? Number(object.tickIndexTakerToMaker) : 0,
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : "",
    };
  },

  toJSON(message: LimitOrderTrancheKey): unknown {
    const obj: any = {};
    message.tradePairId !== undefined
      && (obj.tradePairId = message.tradePairId ? TradePairID.toJSON(message.tradePairId) : undefined);
    message.tickIndexTakerToMaker !== undefined
      && (obj.tickIndexTakerToMaker = Math.round(message.tickIndexTakerToMaker));
    message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LimitOrderTrancheKey>, I>>(object: I): LimitOrderTrancheKey {
    const message = createBaseLimitOrderTrancheKey();
    message.tradePairId = (object.tradePairId !== undefined && object.tradePairId !== null)
      ? TradePairID.fromPartial(object.tradePairId)
      : undefined;
    message.tickIndexTakerToMaker = object.tickIndexTakerToMaker ?? 0;
    message.trancheKey = object.trancheKey ?? "";
    return message;
  },
};

function createBaseLimitOrderTranche(): LimitOrderTranche {
  return {
    key: undefined,
    reservesMakerDenom: "",
    reservesTakerDenom: "",
    totalMakerDenom: "",
    totalTakerDenom: "",
    expirationTime: undefined,
    priceTakerToMaker: "",
  };
}

export const LimitOrderTranche = {
  encode(message: LimitOrderTranche, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined) {
      LimitOrderTrancheKey.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.reservesMakerDenom !== "") {
      writer.uint32(18).string(message.reservesMakerDenom);
    }
    if (message.reservesTakerDenom !== "") {
      writer.uint32(26).string(message.reservesTakerDenom);
    }
    if (message.totalMakerDenom !== "") {
      writer.uint32(34).string(message.totalMakerDenom);
    }
    if (message.totalTakerDenom !== "") {
      writer.uint32(42).string(message.totalTakerDenom);
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(toTimestamp(message.expirationTime), writer.uint32(50).fork()).ldelim();
    }
    if (message.priceTakerToMaker !== "") {
      writer.uint32(58).string(message.priceTakerToMaker);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LimitOrderTranche {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimitOrderTranche();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = LimitOrderTrancheKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.reservesMakerDenom = reader.string();
          break;
        case 3:
          message.reservesTakerDenom = reader.string();
          break;
        case 4:
          message.totalMakerDenom = reader.string();
          break;
        case 5:
          message.totalTakerDenom = reader.string();
          break;
        case 6:
          message.expirationTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.priceTakerToMaker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LimitOrderTranche {
    return {
      key: isSet(object.key) ? LimitOrderTrancheKey.fromJSON(object.key) : undefined,
      reservesMakerDenom: isSet(object.reservesMakerDenom) ? String(object.reservesMakerDenom) : "",
      reservesTakerDenom: isSet(object.reservesTakerDenom) ? String(object.reservesTakerDenom) : "",
      totalMakerDenom: isSet(object.totalMakerDenom) ? String(object.totalMakerDenom) : "",
      totalTakerDenom: isSet(object.totalTakerDenom) ? String(object.totalTakerDenom) : "",
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      priceTakerToMaker: isSet(object.priceTakerToMaker) ? String(object.priceTakerToMaker) : "",
    };
  },

  toJSON(message: LimitOrderTranche): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key ? LimitOrderTrancheKey.toJSON(message.key) : undefined);
    message.reservesMakerDenom !== undefined && (obj.reservesMakerDenom = message.reservesMakerDenom);
    message.reservesTakerDenom !== undefined && (obj.reservesTakerDenom = message.reservesTakerDenom);
    message.totalMakerDenom !== undefined && (obj.totalMakerDenom = message.totalMakerDenom);
    message.totalTakerDenom !== undefined && (obj.totalTakerDenom = message.totalTakerDenom);
    message.expirationTime !== undefined && (obj.expirationTime = message.expirationTime.toISOString());
    message.priceTakerToMaker !== undefined && (obj.priceTakerToMaker = message.priceTakerToMaker);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LimitOrderTranche>, I>>(object: I): LimitOrderTranche {
    const message = createBaseLimitOrderTranche();
    message.key = (object.key !== undefined && object.key !== null)
      ? LimitOrderTrancheKey.fromPartial(object.key)
      : undefined;
    message.reservesMakerDenom = object.reservesMakerDenom ?? "";
    message.reservesTakerDenom = object.reservesTakerDenom ?? "";
    message.totalMakerDenom = object.totalMakerDenom ?? "";
    message.totalTakerDenom = object.totalTakerDenom ?? "";
    message.expirationTime = object.expirationTime ?? undefined;
    message.priceTakerToMaker = object.priceTakerToMaker ?? "";
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
