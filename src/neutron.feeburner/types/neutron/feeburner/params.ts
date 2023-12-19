/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "neutron.feeburner";

/** Params defines the parameters for the module. */
export interface Params {
  /**
   * Defines Neutron denom, which will be burned during fee processing, any
   * other denom will be sent to Treasury
   */
  neutronDenom: string;
  /** Deprecated in v0.4.4. Is not used anymore */
  reserveAddress: string;
  /** Defines treasury address */
  treasuryAddress: string;
}

function createBaseParams(): Params {
  return { neutronDenom: "", reserveAddress: "", treasuryAddress: "" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.neutronDenom !== "") {
      writer.uint32(10).string(message.neutronDenom);
    }
    if (message.reserveAddress !== "") {
      writer.uint32(18).string(message.reserveAddress);
    }
    if (message.treasuryAddress !== "") {
      writer.uint32(26).string(message.treasuryAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.neutronDenom = reader.string();
          break;
        case 2:
          message.reserveAddress = reader.string();
          break;
        case 3:
          message.treasuryAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      neutronDenom: isSet(object.neutronDenom) ? String(object.neutronDenom) : "",
      reserveAddress: isSet(object.reserveAddress) ? String(object.reserveAddress) : "",
      treasuryAddress: isSet(object.treasuryAddress) ? String(object.treasuryAddress) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.neutronDenom !== undefined && (obj.neutronDenom = message.neutronDenom);
    message.reserveAddress !== undefined && (obj.reserveAddress = message.reserveAddress);
    message.treasuryAddress !== undefined && (obj.treasuryAddress = message.treasuryAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.neutronDenom = object.neutronDenom ?? "";
    message.reserveAddress = object.reserveAddress ?? "";
    message.treasuryAddress = object.treasuryAddress ?? "";
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
