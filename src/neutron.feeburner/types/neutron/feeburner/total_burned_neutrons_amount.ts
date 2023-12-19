/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "neutron.feeburner";

/** TotalBurnedNeutronsAmount defines total amount of burned neutron fees */
export interface TotalBurnedNeutronsAmount {
  coin: Coin | undefined;
}

function createBaseTotalBurnedNeutronsAmount(): TotalBurnedNeutronsAmount {
  return { coin: undefined };
}

export const TotalBurnedNeutronsAmount = {
  encode(message: TotalBurnedNeutronsAmount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalBurnedNeutronsAmount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalBurnedNeutronsAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TotalBurnedNeutronsAmount {
    return { coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined };
  },

  toJSON(message: TotalBurnedNeutronsAmount): unknown {
    const obj: any = {};
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TotalBurnedNeutronsAmount>, I>>(object: I): TotalBurnedNeutronsAmount {
    const message = createBaseTotalBurnedNeutronsAmount();
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
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
