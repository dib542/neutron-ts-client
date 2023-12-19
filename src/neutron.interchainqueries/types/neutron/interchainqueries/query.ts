/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { RegisteredQuery } from "./genesis";
import { Params } from "./params";
import { QueryResult } from "./tx";

export const protobufPackage = "neutron.interchainqueries";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryRegisteredQueriesRequest {
  owners: string[];
  connectionId: string;
  pagination: PageRequest | undefined;
}

export interface QueryRegisteredQueriesResponse {
  registeredQueries: RegisteredQuery[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

export interface QueryRegisteredQueryRequest {
  queryId: number;
}

export interface QueryRegisteredQueryResponse {
  registeredQuery: RegisteredQuery | undefined;
}

export interface QueryRegisteredQueryResultRequest {
  queryId: number;
}

export interface QueryRegisteredQueryResultResponse {
  result: QueryResult | undefined;
}

export interface Transaction {
  id: number;
  height: number;
  data: Uint8Array;
}

export interface QueryLastRemoteHeight {
  connectionId: string;
}

export interface QueryLastRemoteHeightResponse {
  height: number;
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

function createBaseQueryRegisteredQueriesRequest(): QueryRegisteredQueriesRequest {
  return { owners: [], connectionId: "", pagination: undefined };
}

export const QueryRegisteredQueriesRequest = {
  encode(message: QueryRegisteredQueriesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.owners) {
      writer.uint32(10).string(v!);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredQueriesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredQueriesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owners.push(reader.string());
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRegisteredQueriesRequest {
    return {
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => String(e)) : [],
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRegisteredQueriesRequest): unknown {
    const obj: any = {};
    if (message.owners) {
      obj.owners = message.owners.map((e) => e);
    } else {
      obj.owners = [];
    }
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredQueriesRequest>, I>>(
    object: I,
  ): QueryRegisteredQueriesRequest {
    const message = createBaseQueryRegisteredQueriesRequest();
    message.owners = object.owners?.map((e) => e) || [];
    message.connectionId = object.connectionId ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRegisteredQueriesResponse(): QueryRegisteredQueriesResponse {
  return { registeredQueries: [], pagination: undefined };
}

export const QueryRegisteredQueriesResponse = {
  encode(message: QueryRegisteredQueriesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.registeredQueries) {
      RegisteredQuery.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredQueriesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredQueriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registeredQueries.push(RegisteredQuery.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRegisteredQueriesResponse {
    return {
      registeredQueries: Array.isArray(object?.registeredQueries)
        ? object.registeredQueries.map((e: any) => RegisteredQuery.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRegisteredQueriesResponse): unknown {
    const obj: any = {};
    if (message.registeredQueries) {
      obj.registeredQueries = message.registeredQueries.map((e) => e ? RegisteredQuery.toJSON(e) : undefined);
    } else {
      obj.registeredQueries = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredQueriesResponse>, I>>(
    object: I,
  ): QueryRegisteredQueriesResponse {
    const message = createBaseQueryRegisteredQueriesResponse();
    message.registeredQueries = object.registeredQueries?.map((e) => RegisteredQuery.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRegisteredQueryRequest(): QueryRegisteredQueryRequest {
  return { queryId: 0 };
}

export const QueryRegisteredQueryRequest = {
  encode(message: QueryRegisteredQueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queryId !== 0) {
      writer.uint32(8).uint64(message.queryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredQueryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRegisteredQueryRequest {
    return { queryId: isSet(object.queryId) ? Number(object.queryId) : 0 };
  },

  toJSON(message: QueryRegisteredQueryRequest): unknown {
    const obj: any = {};
    message.queryId !== undefined && (obj.queryId = Math.round(message.queryId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredQueryRequest>, I>>(object: I): QueryRegisteredQueryRequest {
    const message = createBaseQueryRegisteredQueryRequest();
    message.queryId = object.queryId ?? 0;
    return message;
  },
};

function createBaseQueryRegisteredQueryResponse(): QueryRegisteredQueryResponse {
  return { registeredQuery: undefined };
}

export const QueryRegisteredQueryResponse = {
  encode(message: QueryRegisteredQueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registeredQuery !== undefined) {
      RegisteredQuery.encode(message.registeredQuery, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredQueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registeredQuery = RegisteredQuery.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRegisteredQueryResponse {
    return {
      registeredQuery: isSet(object.registeredQuery) ? RegisteredQuery.fromJSON(object.registeredQuery) : undefined,
    };
  },

  toJSON(message: QueryRegisteredQueryResponse): unknown {
    const obj: any = {};
    message.registeredQuery !== undefined
      && (obj.registeredQuery = message.registeredQuery ? RegisteredQuery.toJSON(message.registeredQuery) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredQueryResponse>, I>>(object: I): QueryRegisteredQueryResponse {
    const message = createBaseQueryRegisteredQueryResponse();
    message.registeredQuery = (object.registeredQuery !== undefined && object.registeredQuery !== null)
      ? RegisteredQuery.fromPartial(object.registeredQuery)
      : undefined;
    return message;
  },
};

function createBaseQueryRegisteredQueryResultRequest(): QueryRegisteredQueryResultRequest {
  return { queryId: 0 };
}

export const QueryRegisteredQueryResultRequest = {
  encode(message: QueryRegisteredQueryResultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queryId !== 0) {
      writer.uint32(8).uint64(message.queryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredQueryResultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredQueryResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRegisteredQueryResultRequest {
    return { queryId: isSet(object.queryId) ? Number(object.queryId) : 0 };
  },

  toJSON(message: QueryRegisteredQueryResultRequest): unknown {
    const obj: any = {};
    message.queryId !== undefined && (obj.queryId = Math.round(message.queryId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredQueryResultRequest>, I>>(
    object: I,
  ): QueryRegisteredQueryResultRequest {
    const message = createBaseQueryRegisteredQueryResultRequest();
    message.queryId = object.queryId ?? 0;
    return message;
  },
};

function createBaseQueryRegisteredQueryResultResponse(): QueryRegisteredQueryResultResponse {
  return { result: undefined };
}

export const QueryRegisteredQueryResultResponse = {
  encode(message: QueryRegisteredQueryResultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      QueryResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredQueryResultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredQueryResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = QueryResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRegisteredQueryResultResponse {
    return { result: isSet(object.result) ? QueryResult.fromJSON(object.result) : undefined };
  },

  toJSON(message: QueryRegisteredQueryResultResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result ? QueryResult.toJSON(message.result) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredQueryResultResponse>, I>>(
    object: I,
  ): QueryRegisteredQueryResultResponse {
    const message = createBaseQueryRegisteredQueryResultResponse();
    message.result = (object.result !== undefined && object.result !== null)
      ? QueryResult.fromPartial(object.result)
      : undefined;
    return message;
  },
};

function createBaseTransaction(): Transaction {
  return { id: 0, height: 0, data: new Uint8Array() };
}

export const Transaction = {
  encode(message: Transaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Transaction {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
    };
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.data !== undefined
      && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Transaction>, I>>(object: I): Transaction {
    const message = createBaseTransaction();
    message.id = object.id ?? 0;
    message.height = object.height ?? 0;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseQueryLastRemoteHeight(): QueryLastRemoteHeight {
  return { connectionId: "" };
}

export const QueryLastRemoteHeight = {
  encode(message: QueryLastRemoteHeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastRemoteHeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastRemoteHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLastRemoteHeight {
    return { connectionId: isSet(object.connectionId) ? String(object.connectionId) : "" };
  },

  toJSON(message: QueryLastRemoteHeight): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastRemoteHeight>, I>>(object: I): QueryLastRemoteHeight {
    const message = createBaseQueryLastRemoteHeight();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseQueryLastRemoteHeightResponse(): QueryLastRemoteHeightResponse {
  return { height: 0 };
}

export const QueryLastRemoteHeightResponse = {
  encode(message: QueryLastRemoteHeightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).uint64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastRemoteHeightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastRemoteHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLastRemoteHeightResponse {
    return { height: isSet(object.height) ? Number(object.height) : 0 };
  },

  toJSON(message: QueryLastRemoteHeightResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastRemoteHeightResponse>, I>>(
    object: I,
  ): QueryLastRemoteHeightResponse {
    const message = createBaseQueryLastRemoteHeightResponse();
    message.height = object.height ?? 0;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  RegisteredQueries(request: QueryRegisteredQueriesRequest): Promise<QueryRegisteredQueriesResponse>;
  RegisteredQuery(request: QueryRegisteredQueryRequest): Promise<QueryRegisteredQueryResponse>;
  QueryResult(request: QueryRegisteredQueryResultRequest): Promise<QueryRegisteredQueryResultResponse>;
  LastRemoteHeight(request: QueryLastRemoteHeight): Promise<QueryLastRemoteHeightResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.RegisteredQueries = this.RegisteredQueries.bind(this);
    this.RegisteredQuery = this.RegisteredQuery.bind(this);
    this.QueryResult = this.QueryResult.bind(this);
    this.LastRemoteHeight = this.LastRemoteHeight.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.interchainqueries.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  RegisteredQueries(request: QueryRegisteredQueriesRequest): Promise<QueryRegisteredQueriesResponse> {
    const data = QueryRegisteredQueriesRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.interchainqueries.Query", "RegisteredQueries", data);
    return promise.then((data) => QueryRegisteredQueriesResponse.decode(new _m0.Reader(data)));
  }

  RegisteredQuery(request: QueryRegisteredQueryRequest): Promise<QueryRegisteredQueryResponse> {
    const data = QueryRegisteredQueryRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.interchainqueries.Query", "RegisteredQuery", data);
    return promise.then((data) => QueryRegisteredQueryResponse.decode(new _m0.Reader(data)));
  }

  QueryResult(request: QueryRegisteredQueryResultRequest): Promise<QueryRegisteredQueryResultResponse> {
    const data = QueryRegisteredQueryResultRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.interchainqueries.Query", "QueryResult", data);
    return promise.then((data) => QueryRegisteredQueryResultResponse.decode(new _m0.Reader(data)));
  }

  LastRemoteHeight(request: QueryLastRemoteHeight): Promise<QueryLastRemoteHeightResponse> {
    const data = QueryLastRemoteHeight.encode(request).finish();
    const promise = this.rpc.request("neutron.interchainqueries.Query", "LastRemoteHeight", data);
    return promise.then((data) => QueryLastRemoteHeightResponse.decode(new _m0.Reader(data)));
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

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
