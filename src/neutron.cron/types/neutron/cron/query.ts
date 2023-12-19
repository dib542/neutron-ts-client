/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Schedule } from "./schedule";

export const protobufPackage = "neutron.cron";

export interface QueryParamsRequest {
}

export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetScheduleRequest {
  name: string;
}

export interface QueryGetScheduleResponse {
  schedule: Schedule | undefined;
}

export interface QuerySchedulesRequest {
  pagination: PageRequest | undefined;
}

export interface QuerySchedulesResponse {
  schedules: Schedule[];
  pagination: PageResponse | undefined;
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

function createBaseQueryGetScheduleRequest(): QueryGetScheduleRequest {
  return { name: "" };
}

export const QueryGetScheduleRequest = {
  encode(message: QueryGetScheduleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetScheduleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetScheduleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetScheduleRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: QueryGetScheduleRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetScheduleRequest>, I>>(object: I): QueryGetScheduleRequest {
    const message = createBaseQueryGetScheduleRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryGetScheduleResponse(): QueryGetScheduleResponse {
  return { schedule: undefined };
}

export const QueryGetScheduleResponse = {
  encode(message: QueryGetScheduleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schedule !== undefined) {
      Schedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetScheduleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetScheduleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schedule = Schedule.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetScheduleResponse {
    return { schedule: isSet(object.schedule) ? Schedule.fromJSON(object.schedule) : undefined };
  },

  toJSON(message: QueryGetScheduleResponse): unknown {
    const obj: any = {};
    message.schedule !== undefined && (obj.schedule = message.schedule ? Schedule.toJSON(message.schedule) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetScheduleResponse>, I>>(object: I): QueryGetScheduleResponse {
    const message = createBaseQueryGetScheduleResponse();
    message.schedule = (object.schedule !== undefined && object.schedule !== null)
      ? Schedule.fromPartial(object.schedule)
      : undefined;
    return message;
  },
};

function createBaseQuerySchedulesRequest(): QuerySchedulesRequest {
  return { pagination: undefined };
}

export const QuerySchedulesRequest = {
  encode(message: QuerySchedulesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySchedulesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySchedulesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySchedulesRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QuerySchedulesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySchedulesRequest>, I>>(object: I): QuerySchedulesRequest {
    const message = createBaseQuerySchedulesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySchedulesResponse(): QuerySchedulesResponse {
  return { schedules: [], pagination: undefined };
}

export const QuerySchedulesResponse = {
  encode(message: QuerySchedulesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.schedules) {
      Schedule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySchedulesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySchedulesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schedules.push(Schedule.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySchedulesResponse {
    return {
      schedules: Array.isArray(object?.schedules) ? object.schedules.map((e: any) => Schedule.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySchedulesResponse): unknown {
    const obj: any = {};
    if (message.schedules) {
      obj.schedules = message.schedules.map((e) => e ? Schedule.toJSON(e) : undefined);
    } else {
      obj.schedules = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySchedulesResponse>, I>>(object: I): QuerySchedulesResponse {
    const message = createBaseQuerySchedulesResponse();
    message.schedules = object.schedules?.map((e) => Schedule.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Schedule by name. */
  Schedule(request: QueryGetScheduleRequest): Promise<QueryGetScheduleResponse>;
  /** Queries a list of Schedule items. */
  Schedules(request: QuerySchedulesRequest): Promise<QuerySchedulesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Schedule = this.Schedule.bind(this);
    this.Schedules = this.Schedules.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.cron.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Schedule(request: QueryGetScheduleRequest): Promise<QueryGetScheduleResponse> {
    const data = QueryGetScheduleRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.cron.Query", "Schedule", data);
    return promise.then((data) => QueryGetScheduleResponse.decode(new _m0.Reader(data)));
  }

  Schedules(request: QuerySchedulesRequest): Promise<QuerySchedulesResponse> {
    const data = QuerySchedulesRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.cron.Query", "Schedules", data);
    return promise.then((data) => QuerySchedulesResponse.decode(new _m0.Reader(data)));
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
