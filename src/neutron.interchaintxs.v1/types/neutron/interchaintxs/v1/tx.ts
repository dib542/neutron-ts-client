/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import { Fee } from "../../feerefunder/fee";
import { Params } from "./params";

export const protobufPackage = "neutron.interchaintxs.v1";

/** MsgRegisterInterchainAccount is used to register an account on a remote zone. */
export interface MsgRegisterInterchainAccount {
  fromAddress: string;
  connectionId: string;
  interchainAccountId: string;
  registerFee: Coin[];
}

/**
 * MsgRegisterInterchainAccountResponse is the response type for
 * MsgRegisterInterchainAccount.
 */
export interface MsgRegisterInterchainAccountResponse {
}

/** MsgSubmitTx defines the payload for Msg/SubmitTx */
export interface MsgSubmitTx {
  fromAddress: string;
  /**
   * interchain_account_id is supposed to be the unique identifier, e.g.,
   * lido/kava. This allows contracts to have more than one interchain accounts
   * on remote zone This identifier will be a part of the portID that we'll
   * claim our capability for.
   */
  interchainAccountId: string;
  connectionId: string;
  msgs: Any[];
  memo: string;
  /** timeout in seconds after which the packet times out */
  timeout: number;
  fee: Fee | undefined;
}

/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponse {
  /** channel's sequence_id for outgoing ibc packet. Unique per a channel. */
  sequenceId: number;
  /** channel src channel on neutron side transaction was submitted from */
  channel: string;
}

/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 *
 * Since: 0.47
 */
export interface MsgUpdateParams {
  /** Authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/interchaintxs parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params | undefined;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.47
 */
export interface MsgUpdateParamsResponse {
}

function createBaseMsgRegisterInterchainAccount(): MsgRegisterInterchainAccount {
  return { fromAddress: "", connectionId: "", interchainAccountId: "", registerFee: [] };
}

export const MsgRegisterInterchainAccount = {
  encode(message: MsgRegisterInterchainAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.interchainAccountId !== "") {
      writer.uint32(26).string(message.interchainAccountId);
    }
    for (const v of message.registerFee) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterInterchainAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInterchainAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.interchainAccountId = reader.string();
          break;
        case 4:
          message.registerFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterInterchainAccount {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      interchainAccountId: isSet(object.interchainAccountId) ? String(object.interchainAccountId) : "",
      registerFee: Array.isArray(object?.registerFee) ? object.registerFee.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgRegisterInterchainAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.interchainAccountId !== undefined && (obj.interchainAccountId = message.interchainAccountId);
    if (message.registerFee) {
      obj.registerFee = message.registerFee.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.registerFee = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterInterchainAccount>, I>>(object: I): MsgRegisterInterchainAccount {
    const message = createBaseMsgRegisterInterchainAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.connectionId = object.connectionId ?? "";
    message.interchainAccountId = object.interchainAccountId ?? "";
    message.registerFee = object.registerFee?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgRegisterInterchainAccountResponse(): MsgRegisterInterchainAccountResponse {
  return {};
}

export const MsgRegisterInterchainAccountResponse = {
  encode(_: MsgRegisterInterchainAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterInterchainAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInterchainAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRegisterInterchainAccountResponse {
    return {};
  },

  toJSON(_: MsgRegisterInterchainAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterInterchainAccountResponse>, I>>(
    _: I,
  ): MsgRegisterInterchainAccountResponse {
    const message = createBaseMsgRegisterInterchainAccountResponse();
    return message;
  },
};

function createBaseMsgSubmitTx(): MsgSubmitTx {
  return { fromAddress: "", interchainAccountId: "", connectionId: "", msgs: [], memo: "", timeout: 0, fee: undefined };
}

export const MsgSubmitTx = {
  encode(message: MsgSubmitTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.interchainAccountId !== "") {
      writer.uint32(18).string(message.interchainAccountId);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.memo !== "") {
      writer.uint32(42).string(message.memo);
    }
    if (message.timeout !== 0) {
      writer.uint32(48).uint64(message.timeout);
    }
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.interchainAccountId = reader.string();
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;
        case 5:
          message.memo = reader.string();
          break;
        case 6:
          message.timeout = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitTx {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      interchainAccountId: isSet(object.interchainAccountId) ? String(object.interchainAccountId) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Any.fromJSON(e)) : [],
      memo: isSet(object.memo) ? String(object.memo) : "",
      timeout: isSet(object.timeout) ? Number(object.timeout) : 0,
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined,
    };
  },

  toJSON(message: MsgSubmitTx): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.interchainAccountId !== undefined && (obj.interchainAccountId = message.interchainAccountId);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    if (message.msgs) {
      obj.msgs = message.msgs.map((e) => e ? Any.toJSON(e) : undefined);
    } else {
      obj.msgs = [];
    }
    message.memo !== undefined && (obj.memo = message.memo);
    message.timeout !== undefined && (obj.timeout = Math.round(message.timeout));
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitTx>, I>>(object: I): MsgSubmitTx {
    const message = createBaseMsgSubmitTx();
    message.fromAddress = object.fromAddress ?? "";
    message.interchainAccountId = object.interchainAccountId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.msgs = object.msgs?.map((e) => Any.fromPartial(e)) || [];
    message.memo = object.memo ?? "";
    message.timeout = object.timeout ?? 0;
    message.fee = (object.fee !== undefined && object.fee !== null) ? Fee.fromPartial(object.fee) : undefined;
    return message;
  },
};

function createBaseMsgSubmitTxResponse(): MsgSubmitTxResponse {
  return { sequenceId: 0, channel: "" };
}

export const MsgSubmitTxResponse = {
  encode(message: MsgSubmitTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sequenceId !== 0) {
      writer.uint32(8).uint64(message.sequenceId);
    }
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitTxResponse();
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

  fromJSON(object: any): MsgSubmitTxResponse {
    return {
      sequenceId: isSet(object.sequenceId) ? Number(object.sequenceId) : 0,
      channel: isSet(object.channel) ? String(object.channel) : "",
    };
  },

  toJSON(message: MsgSubmitTxResponse): unknown {
    const obj: any = {};
    message.sequenceId !== undefined && (obj.sequenceId = Math.round(message.sequenceId));
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitTxResponse>, I>>(object: I): MsgSubmitTxResponse {
    const message = createBaseMsgSubmitTxResponse();
    message.sequenceId = object.sequenceId ?? 0;
    message.channel = object.channel ?? "";
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  RegisterInterchainAccount(request: MsgRegisterInterchainAccount): Promise<MsgRegisterInterchainAccountResponse>;
  SubmitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterInterchainAccount = this.RegisterInterchainAccount.bind(this);
    this.SubmitTx = this.SubmitTx.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  RegisterInterchainAccount(request: MsgRegisterInterchainAccount): Promise<MsgRegisterInterchainAccountResponse> {
    const data = MsgRegisterInterchainAccount.encode(request).finish();
    const promise = this.rpc.request("neutron.interchaintxs.v1.Msg", "RegisterInterchainAccount", data);
    return promise.then((data) => MsgRegisterInterchainAccountResponse.decode(new _m0.Reader(data)));
  }

  SubmitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse> {
    const data = MsgSubmitTx.encode(request).finish();
    const promise = this.rpc.request("neutron.interchaintxs.v1.Msg", "SubmitTx", data);
    return promise.then((data) => MsgSubmitTxResponse.decode(new _m0.Reader(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("neutron.interchaintxs.v1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
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
