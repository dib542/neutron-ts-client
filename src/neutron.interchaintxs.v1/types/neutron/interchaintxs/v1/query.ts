/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "neutron.interchaintxs.v1";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryInterchainAccountAddressRequest {
  /**
   * owner_address is the owner of the interchain account on the controller
   * chain
   */
  ownerAddress: string;
  /**
   * interchain_account_id is an identifier of your interchain account from
   * which you want to execute msgs
   */
  interchainAccountId: string;
  /**
   * connection_id is an IBC connection identifier between Neutron and remote
   * chain
   */
  connectionId: string;
}

/** Query response for an interchain account address */
export interface QueryInterchainAccountAddressResponse {
  /** The corresponding interchain account address on the host chain */
  interchainAccountAddress: string;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryInterchainAccountAddressRequest(): QueryInterchainAccountAddressRequest {
  return { ownerAddress: "", interchainAccountId: "", connectionId: "" };
}

export const QueryInterchainAccountAddressRequest = {
  encode(message: QueryInterchainAccountAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.interchainAccountId !== "") {
      writer.uint32(18).string(message.interchainAccountId);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.interchainAccountId = reader.string();
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryInterchainAccountAddressRequest {
    return {
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      interchainAccountId: isSet(object.interchainAccountId) ? String(object.interchainAccountId) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
    };
  },

  toJSON(message: QueryInterchainAccountAddressRequest): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.interchainAccountId !== undefined && (obj.interchainAccountId = message.interchainAccountId);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryInterchainAccountAddressRequest>, I>>(
    object: I,
  ): QueryInterchainAccountAddressRequest {
    const message = createBaseQueryInterchainAccountAddressRequest();
    message.ownerAddress = object.ownerAddress ?? "";
    message.interchainAccountId = object.interchainAccountId ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseQueryInterchainAccountAddressResponse(): QueryInterchainAccountAddressResponse {
  return { interchainAccountAddress: "" };
}

export const QueryInterchainAccountAddressResponse = {
  encode(message: QueryInterchainAccountAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interchainAccountAddress !== "") {
      writer.uint32(10).string(message.interchainAccountAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interchainAccountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryInterchainAccountAddressResponse {
    return {
      interchainAccountAddress: isSet(object.interchainAccountAddress) ? String(object.interchainAccountAddress) : "",
    };
  },

  toJSON(message: QueryInterchainAccountAddressResponse): unknown {
    const obj: any = {};
    message.interchainAccountAddress !== undefined && (obj.interchainAccountAddress = message.interchainAccountAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryInterchainAccountAddressResponse>, I>>(
    object: I,
  ): QueryInterchainAccountAddressResponse {
    const message = createBaseQueryInterchainAccountAddressResponse();
    message.interchainAccountAddress = object.interchainAccountAddress ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  InterchainAccountAddress(
    request: QueryInterchainAccountAddressRequest,
  ): Promise<QueryInterchainAccountAddressResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.InterchainAccountAddress = this.InterchainAccountAddress.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.interchaintxs.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  InterchainAccountAddress(
    request: QueryInterchainAccountAddressRequest,
  ): Promise<QueryInterchainAccountAddressResponse> {
    const data = QueryInterchainAccountAddressRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.interchaintxs.v1.Query", "InterchainAccountAddress", data);
    return promise.then((data) => QueryInterchainAccountAddressResponse.decode(new _m0.Reader(data)));
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
