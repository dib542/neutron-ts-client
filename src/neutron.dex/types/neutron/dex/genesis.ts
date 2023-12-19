/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { LimitOrderTranche } from "./limit_order_tranche";
import { LimitOrderTrancheUser } from "./limit_order_tranche_user";
import { Params } from "./params";
import { PoolMetadata } from "./pool_metadata";
import { TickLiquidity } from "./tick_liquidity";

export const protobufPackage = "neutron.dex";

/** GenesisState defines the dex module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  tickLiquidityList: TickLiquidity[];
  inactiveLimitOrderTrancheList: LimitOrderTranche[];
  limitOrderTrancheUserList: LimitOrderTrancheUser[];
  poolMetadataList: PoolMetadata[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  poolCount: number;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    tickLiquidityList: [],
    inactiveLimitOrderTrancheList: [],
    limitOrderTrancheUserList: [],
    poolMetadataList: [],
    poolCount: 0,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tickLiquidityList) {
      TickLiquidity.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.inactiveLimitOrderTrancheList) {
      LimitOrderTranche.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.limitOrderTrancheUserList) {
      LimitOrderTrancheUser.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.poolMetadataList) {
      PoolMetadata.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.poolCount !== 0) {
      writer.uint32(48).uint64(message.poolCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.tickLiquidityList.push(TickLiquidity.decode(reader, reader.uint32()));
          break;
        case 3:
          message.inactiveLimitOrderTrancheList.push(LimitOrderTranche.decode(reader, reader.uint32()));
          break;
        case 4:
          message.limitOrderTrancheUserList.push(LimitOrderTrancheUser.decode(reader, reader.uint32()));
          break;
        case 5:
          message.poolMetadataList.push(PoolMetadata.decode(reader, reader.uint32()));
          break;
        case 6:
          message.poolCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      tickLiquidityList: Array.isArray(object?.tickLiquidityList)
        ? object.tickLiquidityList.map((e: any) => TickLiquidity.fromJSON(e))
        : [],
      inactiveLimitOrderTrancheList: Array.isArray(object?.inactiveLimitOrderTrancheList)
        ? object.inactiveLimitOrderTrancheList.map((e: any) => LimitOrderTranche.fromJSON(e))
        : [],
      limitOrderTrancheUserList: Array.isArray(object?.limitOrderTrancheUserList)
        ? object.limitOrderTrancheUserList.map((e: any) => LimitOrderTrancheUser.fromJSON(e))
        : [],
      poolMetadataList: Array.isArray(object?.poolMetadataList)
        ? object.poolMetadataList.map((e: any) => PoolMetadata.fromJSON(e))
        : [],
      poolCount: isSet(object.poolCount) ? Number(object.poolCount) : 0,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.tickLiquidityList) {
      obj.tickLiquidityList = message.tickLiquidityList.map((e) => e ? TickLiquidity.toJSON(e) : undefined);
    } else {
      obj.tickLiquidityList = [];
    }
    if (message.inactiveLimitOrderTrancheList) {
      obj.inactiveLimitOrderTrancheList = message.inactiveLimitOrderTrancheList.map((e) =>
        e ? LimitOrderTranche.toJSON(e) : undefined
      );
    } else {
      obj.inactiveLimitOrderTrancheList = [];
    }
    if (message.limitOrderTrancheUserList) {
      obj.limitOrderTrancheUserList = message.limitOrderTrancheUserList.map((e) =>
        e ? LimitOrderTrancheUser.toJSON(e) : undefined
      );
    } else {
      obj.limitOrderTrancheUserList = [];
    }
    if (message.poolMetadataList) {
      obj.poolMetadataList = message.poolMetadataList.map((e) => e ? PoolMetadata.toJSON(e) : undefined);
    } else {
      obj.poolMetadataList = [];
    }
    message.poolCount !== undefined && (obj.poolCount = Math.round(message.poolCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.tickLiquidityList = object.tickLiquidityList?.map((e) => TickLiquidity.fromPartial(e)) || [];
    message.inactiveLimitOrderTrancheList =
      object.inactiveLimitOrderTrancheList?.map((e) => LimitOrderTranche.fromPartial(e)) || [];
    message.limitOrderTrancheUserList =
      object.limitOrderTrancheUserList?.map((e) => LimitOrderTrancheUser.fromPartial(e)) || [];
    message.poolMetadataList = object.poolMetadataList?.map((e) => PoolMetadata.fromPartial(e)) || [];
    message.poolCount = object.poolCount ?? 0;
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
