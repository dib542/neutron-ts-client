/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Height } from "../../../ibc/core/client/v1/client";
import { Fee } from "../../feerefunder/fee";

export const protobufPackage = "neutron.transfer";

export interface MsgTransfer {
  /** the port on which the packet will be sent */
  sourcePort: string;
  /** the channel by which the packet will be sent */
  sourceChannel: string;
  /** the tokens to be transferred */
  token:
    | Coin
    | undefined;
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeoutHeight:
    | Height
    | undefined;
  /**
   * Timeout timestamp in absolute nanoseconds since unix epoch.
   * The timeout is disabled when set to 0.
   */
  timeoutTimestamp: number;
  memo: string;
  fee: Fee | undefined;
}

/**
 * MsgTransferResponse is the modified response type for
 * ibc-go MsgTransfer.
 */
export interface MsgTransferResponse {
  /** channel's sequence_id for outgoing ibc packet. Unique per a channel. */
  sequenceId: number;
  /** channel src channel on neutron side trasaction was submitted from */
  channel: string;
}

function createBaseMsgTransfer(): MsgTransfer {
  return {
    sourcePort: "",
    sourceChannel: "",
    token: undefined,
    sender: "",
    receiver: "",
    timeoutHeight: undefined,
    timeoutTimestamp: 0,
    memo: "",
    fee: undefined,
  };
}

export const MsgTransfer = {
  encode(message: MsgTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourcePort !== "") {
      writer.uint32(10).string(message.sourcePort);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(18).string(message.sourceChannel);
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(42).string(message.receiver);
    }
    if (message.timeoutHeight !== undefined) {
      Height.encode(message.timeoutHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(56).uint64(message.timeoutTimestamp);
    }
    if (message.memo !== "") {
      writer.uint32(66).string(message.memo);
    }
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourcePort = reader.string();
          break;
        case 2:
          message.sourceChannel = reader.string();
          break;
        case 3:
          message.token = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.sender = reader.string();
          break;
        case 5:
          message.receiver = reader.string();
          break;
        case 6:
          message.timeoutHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.memo = reader.string();
          break;
        case 9:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransfer {
    return {
      sourcePort: isSet(object.sourcePort) ? String(object.sourcePort) : "",
      sourceChannel: isSet(object.sourceChannel) ? String(object.sourceChannel) : "",
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      timeoutHeight: isSet(object.timeoutHeight) ? Height.fromJSON(object.timeoutHeight) : undefined,
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
      memo: isSet(object.memo) ? String(object.memo) : "",
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined,
    };
  },

  toJSON(message: MsgTransfer): unknown {
    const obj: any = {};
    message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
    message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel);
    message.token !== undefined && (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.timeoutHeight !== undefined
      && (obj.timeoutHeight = message.timeoutHeight ? Height.toJSON(message.timeoutHeight) : undefined);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = Math.round(message.timeoutTimestamp));
    message.memo !== undefined && (obj.memo = message.memo);
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransfer>, I>>(object: I): MsgTransfer {
    const message = createBaseMsgTransfer();
    message.sourcePort = object.sourcePort ?? "";
    message.sourceChannel = object.sourceChannel ?? "";
    message.token = (object.token !== undefined && object.token !== null) ? Coin.fromPartial(object.token) : undefined;
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.timeoutHeight = (object.timeoutHeight !== undefined && object.timeoutHeight !== null)
      ? Height.fromPartial(object.timeoutHeight)
      : undefined;
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    message.memo = object.memo ?? "";
    message.fee = (object.fee !== undefined && object.fee !== null) ? Fee.fromPartial(object.fee) : undefined;
    return message;
  },
};

function createBaseMsgTransferResponse(): MsgTransferResponse {
  return { sequenceId: 0, channel: "" };
}

export const MsgTransferResponse = {
  encode(message: MsgTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sequenceId !== 0) {
      writer.uint32(8).uint64(message.sequenceId);
    }
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequenceId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.channel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferResponse {
    return {
      sequenceId: isSet(object.sequenceId) ? Number(object.sequenceId) : 0,
      channel: isSet(object.channel) ? String(object.channel) : "",
    };
  },

  toJSON(message: MsgTransferResponse): unknown {
    const obj: any = {};
    message.sequenceId !== undefined && (obj.sequenceId = Math.round(message.sequenceId));
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferResponse>, I>>(object: I): MsgTransferResponse {
    const message = createBaseMsgTransferResponse();
    message.sequenceId = object.sequenceId ?? 0;
    message.channel = object.channel ?? "";
    return message;
  },
};

/** Msg defines the ibc/transfer Msg service. */
export interface Msg {
  /** Transfer defines a rpc handler method for MsgTransfer. */
  Transfer(request: MsgTransfer): Promise<MsgTransferResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Transfer = this.Transfer.bind(this);
  }
  Transfer(request: MsgTransfer): Promise<MsgTransferResponse> {
    const data = MsgTransfer.encode(request).finish();
    const promise = this.rpc.request("neutron.transfer.Msg", "Transfer", data);
    return promise.then((data) => MsgTransferResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
