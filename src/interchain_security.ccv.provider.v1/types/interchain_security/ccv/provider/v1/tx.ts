/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "interchain_security.ccv.provider.v1";

export interface MsgAssignConsumerKey {
  /** The chain id of the consumer chain to assign a consensus public key to */
  chainId: string;
  /** The validator address on the provider */
  providerAddr: string;
  /**
   * The consensus public key to use on the consumer.
   * in json string format corresponding to proto-any, ex:
   * `{"@type":"/cosmos.crypto.ed25519.PubKey","key":"Ui5Gf1+mtWUdH8u3xlmzdKID+F3PK0sfXZ73GZ6q6is="}`
   */
  consumerKey: string;
}

export interface MsgAssignConsumerKeyResponse {
}

/**
 * MsgRegisterConsumerRewardDenom allows an account to register
 * a consumer reward denom, i.e., add it to the list of denoms
 * accepted by the provider as rewards.
 */
export interface MsgRegisterConsumerRewardDenom {
  denom: string;
  depositor: string;
}

/**
 * MsgRegisterConsumerRewardDenomResponse defines the
 * Msg/RegisterConsumerRewardDenom response type.
 */
export interface MsgRegisterConsumerRewardDenomResponse {
}

function createBaseMsgAssignConsumerKey(): MsgAssignConsumerKey {
  return { chainId: "", providerAddr: "", consumerKey: "" };
}

export const MsgAssignConsumerKey = {
  encode(message: MsgAssignConsumerKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.providerAddr !== "") {
      writer.uint32(18).string(message.providerAddr);
    }
    if (message.consumerKey !== "") {
      writer.uint32(26).string(message.consumerKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAssignConsumerKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAssignConsumerKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.providerAddr = reader.string();
          break;
        case 3:
          message.consumerKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAssignConsumerKey {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      providerAddr: isSet(object.providerAddr) ? String(object.providerAddr) : "",
      consumerKey: isSet(object.consumerKey) ? String(object.consumerKey) : "",
    };
  },

  toJSON(message: MsgAssignConsumerKey): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.providerAddr !== undefined && (obj.providerAddr = message.providerAddr);
    message.consumerKey !== undefined && (obj.consumerKey = message.consumerKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAssignConsumerKey>, I>>(object: I): MsgAssignConsumerKey {
    const message = createBaseMsgAssignConsumerKey();
    message.chainId = object.chainId ?? "";
    message.providerAddr = object.providerAddr ?? "";
    message.consumerKey = object.consumerKey ?? "";
    return message;
  },
};

function createBaseMsgAssignConsumerKeyResponse(): MsgAssignConsumerKeyResponse {
  return {};
}

export const MsgAssignConsumerKeyResponse = {
  encode(_: MsgAssignConsumerKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAssignConsumerKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAssignConsumerKeyResponse();
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

  fromJSON(_: any): MsgAssignConsumerKeyResponse {
    return {};
  },

  toJSON(_: MsgAssignConsumerKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAssignConsumerKeyResponse>, I>>(_: I): MsgAssignConsumerKeyResponse {
    const message = createBaseMsgAssignConsumerKeyResponse();
    return message;
  },
};

function createBaseMsgRegisterConsumerRewardDenom(): MsgRegisterConsumerRewardDenom {
  return { denom: "", depositor: "" };
}

export const MsgRegisterConsumerRewardDenom = {
  encode(message: MsgRegisterConsumerRewardDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterConsumerRewardDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterConsumerRewardDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterConsumerRewardDenom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
    };
  },

  toJSON(message: MsgRegisterConsumerRewardDenom): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterConsumerRewardDenom>, I>>(
    object: I,
  ): MsgRegisterConsumerRewardDenom {
    const message = createBaseMsgRegisterConsumerRewardDenom();
    message.denom = object.denom ?? "";
    message.depositor = object.depositor ?? "";
    return message;
  },
};

function createBaseMsgRegisterConsumerRewardDenomResponse(): MsgRegisterConsumerRewardDenomResponse {
  return {};
}

export const MsgRegisterConsumerRewardDenomResponse = {
  encode(_: MsgRegisterConsumerRewardDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterConsumerRewardDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterConsumerRewardDenomResponse();
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

  fromJSON(_: any): MsgRegisterConsumerRewardDenomResponse {
    return {};
  },

  toJSON(_: MsgRegisterConsumerRewardDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterConsumerRewardDenomResponse>, I>>(
    _: I,
  ): MsgRegisterConsumerRewardDenomResponse {
    const message = createBaseMsgRegisterConsumerRewardDenomResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  AssignConsumerKey(request: MsgAssignConsumerKey): Promise<MsgAssignConsumerKeyResponse>;
  RegisterConsumerRewardDenom(request: MsgRegisterConsumerRewardDenom): Promise<MsgRegisterConsumerRewardDenomResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AssignConsumerKey = this.AssignConsumerKey.bind(this);
    this.RegisterConsumerRewardDenom = this.RegisterConsumerRewardDenom.bind(this);
  }
  AssignConsumerKey(request: MsgAssignConsumerKey): Promise<MsgAssignConsumerKeyResponse> {
    const data = MsgAssignConsumerKey.encode(request).finish();
    const promise = this.rpc.request("interchain_security.ccv.provider.v1.Msg", "AssignConsumerKey", data);
    return promise.then((data) => MsgAssignConsumerKeyResponse.decode(new _m0.Reader(data)));
  }

  RegisterConsumerRewardDenom(
    request: MsgRegisterConsumerRewardDenom,
  ): Promise<MsgRegisterConsumerRewardDenomResponse> {
    const data = MsgRegisterConsumerRewardDenom.encode(request).finish();
    const promise = this.rpc.request("interchain_security.ccv.provider.v1.Msg", "RegisterConsumerRewardDenom", data);
    return promise.then((data) => MsgRegisterConsumerRewardDenomResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
