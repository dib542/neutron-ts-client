/* eslint-disable */
import _m0 from "protobufjs/minimal";
import {
  QueryDenomHashRequest,
  QueryDenomHashResponse,
  QueryDenomTraceRequest,
  QueryDenomTraceResponse,
  QueryDenomTracesRequest,
  QueryDenomTracesResponse,
  QueryParamsRequest,
  QueryParamsResponse,
} from "../../../ibc/applications/transfer/v1/query";

export const protobufPackage = "neutron.transfer";

/** Query provides defines the gRPC querier service. */
export interface Query {
  /** DenomTrace queries a denomination trace information. */
  DenomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
  /** DenomTraces queries all denomination traces. */
  DenomTraces(request: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
  /** Params queries all parameters of the ibc-transfer module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** DenomHash queries a denomination hash information. */
  DenomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.DenomTrace = this.DenomTrace.bind(this);
    this.DenomTraces = this.DenomTraces.bind(this);
    this.Params = this.Params.bind(this);
    this.DenomHash = this.DenomHash.bind(this);
  }
  DenomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse> {
    const data = QueryDenomTraceRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.transfer.Query", "DenomTrace", data);
    return promise.then((data) => QueryDenomTraceResponse.decode(new _m0.Reader(data)));
  }

  DenomTraces(request: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse> {
    const data = QueryDenomTracesRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.transfer.Query", "DenomTraces", data);
    return promise.then((data) => QueryDenomTracesResponse.decode(new _m0.Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.transfer.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  DenomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse> {
    const data = QueryDenomHashRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.transfer.Query", "DenomHash", data);
    return promise.then((data) => QueryDenomHashResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
