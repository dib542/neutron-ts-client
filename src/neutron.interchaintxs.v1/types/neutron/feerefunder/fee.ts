/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "neutron.feerefunder";

/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface Fee {
  /** the packet receive fee */
  recvFee: Coin[];
  /** the packet acknowledgement fee */
  ackFee: Coin[];
  /** the packet timeout fee */
  timeoutFee: Coin[];
}

export interface PacketID {
  channelId: string;
  portId: string;
  sequence: number;
}

function createBaseFee(): Fee {
  return { recvFee: [], ackFee: [], timeoutFee: [] };
}

export const Fee = {
  encode(message: Fee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.recvFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.ackFee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.timeoutFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recvFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.ackFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.timeoutFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Fee {
    return {
      recvFee: Array.isArray(object?.recvFee) ? object.recvFee.map((e: any) => Coin.fromJSON(e)) : [],
      ackFee: Array.isArray(object?.ackFee) ? object.ackFee.map((e: any) => Coin.fromJSON(e)) : [],
      timeoutFee: Array.isArray(object?.timeoutFee) ? object.timeoutFee.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: Fee): unknown {
    const obj: any = {};
    if (message.recvFee) {
      obj.recvFee = message.recvFee.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.recvFee = [];
    }
    if (message.ackFee) {
      obj.ackFee = message.ackFee.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.ackFee = [];
    }
    if (message.timeoutFee) {
      obj.timeoutFee = message.timeoutFee.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.timeoutFee = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Fee>, I>>(object: I): Fee {
    const message = createBaseFee();
    message.recvFee = object.recvFee?.map((e) => Coin.fromPartial(e)) || [];
    message.ackFee = object.ackFee?.map((e) => Coin.fromPartial(e)) || [];
    message.timeoutFee = object.timeoutFee?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBasePacketID(): PacketID {
  return { channelId: "", portId: "", sequence: 0 };
}

export const PacketID = {
  encode(message: PacketID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.sequence !== 0) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.sequence = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PacketID {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      portId: isSet(object.portId) ? String(object.portId) : "",
      sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
    };
  },

  toJSON(message: PacketID): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.portId !== undefined && (obj.portId = message.portId);
    message.sequence !== undefined && (obj.sequence = Math.round(message.sequence));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PacketID>, I>>(object: I): PacketID {
    const message = createBasePacketID();
    message.channelId = object.channelId ?? "";
    message.portId = object.portId ?? "";
    message.sequence = object.sequence ?? 0;
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
