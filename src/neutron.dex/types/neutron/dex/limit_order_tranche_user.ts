/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { TradePairID } from "./trade_pair_id";
import { LimitOrderType, limitOrderTypeFromJSON, limitOrderTypeToJSON } from "./tx";

export const protobufPackage = "neutron.dex";

export interface LimitOrderTrancheUser {
  tradePairId: TradePairID | undefined;
  tickIndexTakerToMaker: number;
  trancheKey: string;
  address: string;
  sharesOwned: string;
  sharesWithdrawn: string;
  sharesCancelled: string;
  orderType: LimitOrderType;
}

function createBaseLimitOrderTrancheUser(): LimitOrderTrancheUser {
  return {
    tradePairId: undefined,
    tickIndexTakerToMaker: 0,
    trancheKey: "",
    address: "",
    sharesOwned: "",
    sharesWithdrawn: "",
    sharesCancelled: "",
    orderType: 0,
  };
}

export const LimitOrderTrancheUser = {
  encode(message: LimitOrderTrancheUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradePairId !== undefined) {
      TradePairID.encode(message.tradePairId, writer.uint32(10).fork()).ldelim();
    }
    if (message.tickIndexTakerToMaker !== 0) {
      writer.uint32(16).int64(message.tickIndexTakerToMaker);
    }
    if (message.trancheKey !== "") {
      writer.uint32(26).string(message.trancheKey);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.sharesOwned !== "") {
      writer.uint32(42).string(message.sharesOwned);
    }
    if (message.sharesWithdrawn !== "") {
      writer.uint32(50).string(message.sharesWithdrawn);
    }
    if (message.sharesCancelled !== "") {
      writer.uint32(58).string(message.sharesCancelled);
    }
    if (message.orderType !== 0) {
      writer.uint32(64).int32(message.orderType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LimitOrderTrancheUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimitOrderTrancheUser();
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
        case 4:
          message.address = reader.string();
          break;
        case 5:
          message.sharesOwned = reader.string();
          break;
        case 6:
          message.sharesWithdrawn = reader.string();
          break;
        case 7:
          message.sharesCancelled = reader.string();
          break;
        case 8:
          message.orderType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LimitOrderTrancheUser {
    return {
      tradePairId: isSet(object.tradePairId) ? TradePairID.fromJSON(object.tradePairId) : undefined,
      tickIndexTakerToMaker: isSet(object.tickIndexTakerToMaker) ? Number(object.tickIndexTakerToMaker) : 0,
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : "",
      address: isSet(object.address) ? String(object.address) : "",
      sharesOwned: isSet(object.sharesOwned) ? String(object.sharesOwned) : "",
      sharesWithdrawn: isSet(object.sharesWithdrawn) ? String(object.sharesWithdrawn) : "",
      sharesCancelled: isSet(object.sharesCancelled) ? String(object.sharesCancelled) : "",
      orderType: isSet(object.orderType) ? limitOrderTypeFromJSON(object.orderType) : 0,
    };
  },

  toJSON(message: LimitOrderTrancheUser): unknown {
    const obj: any = {};
    message.tradePairId !== undefined
      && (obj.tradePairId = message.tradePairId ? TradePairID.toJSON(message.tradePairId) : undefined);
    message.tickIndexTakerToMaker !== undefined
      && (obj.tickIndexTakerToMaker = Math.round(message.tickIndexTakerToMaker));
    message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
    message.address !== undefined && (obj.address = message.address);
    message.sharesOwned !== undefined && (obj.sharesOwned = message.sharesOwned);
    message.sharesWithdrawn !== undefined && (obj.sharesWithdrawn = message.sharesWithdrawn);
    message.sharesCancelled !== undefined && (obj.sharesCancelled = message.sharesCancelled);
    message.orderType !== undefined && (obj.orderType = limitOrderTypeToJSON(message.orderType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LimitOrderTrancheUser>, I>>(object: I): LimitOrderTrancheUser {
    const message = createBaseLimitOrderTrancheUser();
    message.tradePairId = (object.tradePairId !== undefined && object.tradePairId !== null)
      ? TradePairID.fromPartial(object.tradePairId)
      : undefined;
    message.tickIndexTakerToMaker = object.tickIndexTakerToMaker ?? 0;
    message.trancheKey = object.trancheKey ?? "";
    message.address = object.address ?? "";
    message.sharesOwned = object.sharesOwned ?? "";
    message.sharesWithdrawn = object.sharesWithdrawn ?? "";
    message.sharesCancelled = object.sharesCancelled ?? "";
    message.orderType = object.orderType ?? 0;
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
