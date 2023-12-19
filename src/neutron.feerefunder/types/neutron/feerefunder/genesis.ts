/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Fee, PacketID } from "./fee";
import { Params } from "./params";

export const protobufPackage = "neutron.feerefunder";

/** GenesisState defines the fee module's genesis state. */
export interface GenesisState {
  params:
    | Params
    | undefined;
  /** this line is used by starport scaffolding # genesis/proto/state */
  feeInfos: FeeInfo[];
}

export interface FeeInfo {
  payer: string;
  packetId: PacketID | undefined;
  fee: Fee | undefined;
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, feeInfos: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feeInfos) {
      FeeInfo.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.feeInfos.push(FeeInfo.decode(reader, reader.uint32()));
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
      feeInfos: Array.isArray(object?.feeInfos) ? object.feeInfos.map((e: any) => FeeInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.feeInfos) {
      obj.feeInfos = message.feeInfos.map((e) => e ? FeeInfo.toJSON(e) : undefined);
    } else {
      obj.feeInfos = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.feeInfos = object.feeInfos?.map((e) => FeeInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFeeInfo(): FeeInfo {
  return { payer: "", packetId: undefined, fee: undefined };
}

export const FeeInfo = {
  encode(message: FeeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payer !== "") {
      writer.uint32(10).string(message.payer);
    }
    if (message.packetId !== undefined) {
      PacketID.encode(message.packetId, writer.uint32(18).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payer = reader.string();
          break;
        case 2:
          message.packetId = PacketID.decode(reader, reader.uint32());
          break;
        case 3:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeInfo {
    return {
      payer: isSet(object.payer) ? String(object.payer) : "",
      packetId: isSet(object.packetId) ? PacketID.fromJSON(object.packetId) : undefined,
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined,
    };
  },

  toJSON(message: FeeInfo): unknown {
    const obj: any = {};
    message.payer !== undefined && (obj.payer = message.payer);
    message.packetId !== undefined && (obj.packetId = message.packetId ? PacketID.toJSON(message.packetId) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeeInfo>, I>>(object: I): FeeInfo {
    const message = createBaseFeeInfo();
    message.payer = object.payer ?? "";
    message.packetId = (object.packetId !== undefined && object.packetId !== null)
      ? PacketID.fromPartial(object.packetId)
      : undefined;
    message.fee = (object.fee !== undefined && object.fee !== null) ? Fee.fromPartial(object.fee) : undefined;
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
