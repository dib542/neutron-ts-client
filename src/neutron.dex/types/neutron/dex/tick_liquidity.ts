/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { LimitOrderTranche } from "./limit_order_tranche";
import { PoolReserves } from "./pool_reserves";

export const protobufPackage = "neutron.dex";

export interface TickLiquidity {
  poolReserves: PoolReserves | undefined;
  limitOrderTranche: LimitOrderTranche | undefined;
}

function createBaseTickLiquidity(): TickLiquidity {
  return { poolReserves: undefined, limitOrderTranche: undefined };
}

export const TickLiquidity = {
  encode(message: TickLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolReserves !== undefined) {
      PoolReserves.encode(message.poolReserves, writer.uint32(10).fork()).ldelim();
    }
    if (message.limitOrderTranche !== undefined) {
      LimitOrderTranche.encode(message.limitOrderTranche, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TickLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTickLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolReserves = PoolReserves.decode(reader, reader.uint32());
          break;
        case 2:
          message.limitOrderTranche = LimitOrderTranche.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TickLiquidity {
    return {
      poolReserves: isSet(object.poolReserves) ? PoolReserves.fromJSON(object.poolReserves) : undefined,
      limitOrderTranche: isSet(object.limitOrderTranche)
        ? LimitOrderTranche.fromJSON(object.limitOrderTranche)
        : undefined,
    };
  },

  toJSON(message: TickLiquidity): unknown {
    const obj: any = {};
    message.poolReserves !== undefined
      && (obj.poolReserves = message.poolReserves ? PoolReserves.toJSON(message.poolReserves) : undefined);
    message.limitOrderTranche !== undefined && (obj.limitOrderTranche = message.limitOrderTranche
      ? LimitOrderTranche.toJSON(message.limitOrderTranche)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TickLiquidity>, I>>(object: I): TickLiquidity {
    const message = createBaseTickLiquidity();
    message.poolReserves = (object.poolReserves !== undefined && object.poolReserves !== null)
      ? PoolReserves.fromPartial(object.poolReserves)
      : undefined;
    message.limitOrderTranche = (object.limitOrderTranche !== undefined && object.limitOrderTranche !== null)
      ? LimitOrderTranche.fromPartial(object.limitOrderTranche)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
