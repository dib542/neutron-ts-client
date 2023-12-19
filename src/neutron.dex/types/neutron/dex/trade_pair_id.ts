/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "neutron.dex";

export interface TradePairID {
  makerDenom: string;
  takerDenom: string;
}

function createBaseTradePairID(): TradePairID {
  return { makerDenom: "", takerDenom: "" };
}

export const TradePairID = {
  encode(message: TradePairID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.makerDenom !== "") {
      writer.uint32(18).string(message.makerDenom);
    }
    if (message.takerDenom !== "") {
      writer.uint32(26).string(message.takerDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradePairID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradePairID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.makerDenom = reader.string();
          break;
        case 3:
          message.takerDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradePairID {
    return {
      makerDenom: isSet(object.makerDenom) ? String(object.makerDenom) : "",
      takerDenom: isSet(object.takerDenom) ? String(object.takerDenom) : "",
    };
  },

  toJSON(message: TradePairID): unknown {
    const obj: any = {};
    message.makerDenom !== undefined && (obj.makerDenom = message.makerDenom);
    message.takerDenom !== undefined && (obj.takerDenom = message.takerDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TradePairID>, I>>(object: I): TradePairID {
    const message = createBaseTradePairID();
    message.makerDenom = object.makerDenom ?? "";
    message.takerDenom = object.takerDenom ?? "";
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
