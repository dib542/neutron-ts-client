/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
* Event allows application developers to attach additional information to
ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
Later, transactions may be queried using these events.
*/
export interface AbciEvent {
  type?: string;
  attributes?: AbciEventAttribute[];
}

/**
 * EventAttribute is a single key-value pair, associated with an event.
 */
export interface AbciEventAttribute {
  key?: string;
  value?: string;

  /** nondeterministic */
  index?: boolean;
}

export interface AbciResponseDeliverTx {
  /** @format int64 */
  code?: number;

  /** @format byte */
  data?: string;

  /** nondeterministic */
  log?: string;

  /** nondeterministic */
  info?: string;

  /** @format int64 */
  gas_wanted?: string;

  /** @format int64 */
  gas_used?: string;

  /** nondeterministic */
  events?: AbciEvent[];
  codespace?: string;
}

export interface CryptoProof {
  /** @format int64 */
  total?: string;

  /** @format int64 */
  index?: string;

  /** @format byte */
  leaf_hash?: string;
  aunts?: string[];
}

export interface CryptoProofOp {
  type?: string;

  /** @format byte */
  key?: string;

  /** @format byte */
  data?: string;
}

export interface CryptoProofOps {
  ops?: CryptoProofOp[];
}

export interface InterchainqueriesBlock {
  /**
   * We need to know block X+1 to verify response of transaction for block X
   * since LastResultsHash is root hash of all results from the txs from the
   * previous block
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  next_block_header?: ProtobufAny;

  /**
   * We need to know block X to verify inclusion of transaction for block X
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  header?: ProtobufAny;
  tx?: InterchainqueriesTxValue;
}

export interface InterchainqueriesKVKey {
  /**
   * Path (storage prefix) to the storage where you want to read value by key
   * (usually name of cosmos-sdk module: 'staking', 'bank', etc.)
   */
  path?: string;

  /**
   * Key you want to read from the storage
   * @format byte
   */
  key?: string;
}

export interface InterchainqueriesMsgRegisterInterchainQueryResponse {
  /** @format uint64 */
  id?: string;
}

export type InterchainqueriesMsgRemoveInterchainQueryResponse = object;

export type InterchainqueriesMsgSubmitQueryResultResponse = object;

export type InterchainqueriesMsgUpdateInterchainQueryResponse = object;

/**
* MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.

Since: 0.47
*/
export type InterchainqueriesMsgUpdateParamsResponse = object;

export interface InterchainqueriesQueryLastRemoteHeightResponse {
  /** @format uint64 */
  height?: string;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface InterchainqueriesQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: NeutroninterchainqueriesParams;
}

export interface InterchainqueriesQueryRegisteredQueriesResponse {
  registered_queries?: InterchainqueriesRegisteredQuery[];

  /** pagination defines the pagination in the response. */
  pagination?: V1Beta1PageResponse;
}

export interface InterchainqueriesQueryRegisteredQueryResponse {
  registered_query?: InterchainqueriesRegisteredQuery;
}

export interface InterchainqueriesQueryRegisteredQueryResultResponse {
  result?: InterchainqueriesQueryResult;
}

export interface InterchainqueriesQueryResult {
  kv_results?: InterchainqueriesStorageValue[];
  block?: InterchainqueriesBlock;

  /** @format uint64 */
  height?: string;

  /** @format uint64 */
  revision?: string;
  allow_kv_callbacks?: boolean;
}

export interface InterchainqueriesRegisteredQuery {
  /**
   * The unique id of the registered query.
   * @format uint64
   */
  id?: string;

  /** The address that registered the query. */
  owner?: string;

  /** The query type identifier: `kv` or `tx` now */
  query_type?: string;

  /** The KV-storage keys for which we want to get values from remote chain */
  keys?: InterchainqueriesKVKey[];

  /** The filter for transaction search ICQ */
  transactions_filter?: string;

  /** The IBC connection ID for getting ConsensusState to verify proofs */
  connection_id?: string;

  /**
   * Parameter that defines how often the query must be updated.
   * @format uint64
   */
  update_period?: string;

  /**
   * The local chain last block height when the query result was updated.
   * @format uint64
   */
  last_submitted_result_local_height?: string;

  /** The remote chain last block height when the query result was updated. */
  last_submitted_result_remote_height?: V1Height;

  /** Amount of coins deposited for the query. */
  deposit?: V1Beta1Coin[];

  /**
   * Timeout before query becomes available for everybody to remove.
   * @format uint64
   */
  submit_timeout?: string;

  /**
   * The local chain height when the query was registered.
   * @format uint64
   */
  registered_at_height?: string;
}

export interface InterchainqueriesStorageValue {
  /** is the substore name (acc, staking, etc.) */
  storage_prefix?: string;

  /**
   * is the key in IAVL store
   * @format byte
   */
  key?: string;

  /**
   * is the value in IAVL store
   * @format byte
   */
  value?: string;

  /**
   * is the Merkle Proof which proves existence of key-value pair in IAVL
   * storage
   */
  Proof?: CryptoProofOps;
}

export interface InterchainqueriesTxValue {
  response?: AbciResponseDeliverTx;

  /**
   * is the Merkle Proof which proves existence of response in block with height
   * next_block_header.Height
   */
  delivery_proof?: CryptoProof;

  /**
   * is the Merkle Proof which proves existence of data in block with height
   * header.Height
   */
  inclusion_proof?: CryptoProof;

  /**
   * is body of the transaction
   * @format byte
   */
  data?: string;
}

/**
 * Params defines the parameters for the module.
 */
export interface NeutroninterchainqueriesParams {
  /**
   * Defines amount of blocks required before query becomes available for
   * removal by anybody
   * @format uint64
   */
  query_submit_timeout?: string;

  /** Amount of coins deposited for the query. */
  query_deposit?: V1Beta1Coin[];

  /**
   * Amount of tx hashes to be removed during a single EndBlock. Can vary to
   * balance between network cleaning speed and EndBlock duration. A zero value
   * means no limit.
   * @format uint64
   */
  tx_query_removal_limit?: string;
}

/**
* `Any` contains an arbitrary serialized protocol buffer message along with a
URL that describes the type of the serialized message.

Protobuf library provides support to pack/unpack Any values in the form
of utility functions or additional generated methods of the Any type.

Example 1: Pack and unpack a message in C++.

    Foo foo = ...;
    Any any;
    any.PackFrom(foo);
    ...
    if (any.UnpackTo(&foo)) {
      ...
    }

Example 2: Pack and unpack a message in Java.

    Foo foo = ...;
    Any any = Any.pack(foo);
    ...
    if (any.is(Foo.class)) {
      foo = any.unpack(Foo.class);
    }

 Example 3: Pack and unpack a message in Python.

    foo = Foo(...)
    any = Any()
    any.Pack(foo)
    ...
    if any.Is(Foo.DESCRIPTOR):
      any.Unpack(foo)
      ...

 Example 4: Pack and unpack a message in Go

     foo := &pb.Foo{...}
     any, err := anypb.New(foo)
     if err != nil {
       ...
     }
     ...
     foo := &pb.Foo{}
     if err := any.UnmarshalTo(foo); err != nil {
       ...
     }

The pack methods provided by protobuf library will by default use
'type.googleapis.com/full.type.name' as the type URL and the unpack
methods only use the fully qualified type name after the last '/'
in the type URL, for example "foo.bar.com/x/y.z" will yield type
name "y.z".


JSON
====
The JSON representation of an `Any` value uses the regular
representation of the deserialized, embedded message, with an
additional field `@type` which contains the type URL. Example:

    package google.profile;
    message Person {
      string first_name = 1;
      string last_name = 2;
    }

    {
      "@type": "type.googleapis.com/google.profile.Person",
      "firstName": <string>,
      "lastName": <string>
    }

If the embedded message type is well-known and has a custom JSON
representation, that representation will be embedded adding a field
`value` which holds the custom JSON in addition to the `@type`
field. Example (for message [google.protobuf.Duration][]):

    {
      "@type": "type.googleapis.com/google.protobuf.Duration",
      "value": "1.212s"
    }
*/
export interface ProtobufAny {
  /**
   * A URL/resource name that uniquely identifies the type of the serialized
   * protocol buffer message. This string must contain at least
   * one "/" character. The last segment of the URL's path must represent
   * the fully qualified name of the type (as in
   * `path/google.protobuf.Duration`). The name should be in a canonical form
   * (e.g., leading "." is not accepted).
   *
   * In practice, teams usually precompile into the binary all types that they
   * expect it to use in the context of Any. However, for URLs which use the
   * scheme `http`, `https`, or no scheme, one can optionally set up a type
   * server that maps type URLs to message definitions as follows:
   * * If no scheme is provided, `https` is assumed.
   * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
   *   value in binary format, or produce an error.
   * * Applications are allowed to cache lookup results based on the
   *   URL, or have them precompiled into a binary to avoid any
   *   lookup. Therefore, binary compatibility needs to be preserved
   *   on changes to types. (Use versioned type names to manage
   *   breaking changes.)
   * Note: this functionality is not currently available in the official
   * protobuf release, and it is not used for type URLs beginning with
   * type.googleapis.com.
   * Schemes other than `http`, `https` (or the empty scheme) might be
   * used with implementation specific semantics.
   */
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* Normally the RevisionHeight is incremented at each height while keeping
RevisionNumber the same. However some consensus algorithms may choose to
reset the height in certain conditions e.g. hard forks, state-machine
breaking changes In these cases, the RevisionNumber is incremented so that
height continues to be monitonically increasing even as the RevisionHeight
gets reset
*/
export interface V1Height {
  /**
   * the revision that the client is currently on
   * @format uint64
   */
  revision_number?: string;

  /**
   * the height within the given revision
   * @format uint64
   */
  revision_height?: string;
}

/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
  denom?: string;
  amount?: string;
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently. It will be empty if
   * there are no more results.
   * @format byte
   */
  next_key?: string;

  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   * @format uint64
   */
  total?: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title neutron/interchainqueries/genesis.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/neutron/interchainqueries/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<InterchainqueriesQueryParamsResponse, RpcStatus>({
      path: `/neutron/interchainqueries/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryQueryResult
   * @request GET:/neutron/interchainqueries/query_result
   */
  queryQueryResult = (query?: { query_id?: string }, params: RequestParams = {}) =>
    this.request<InterchainqueriesQueryRegisteredQueryResultResponse, RpcStatus>({
      path: `/neutron/interchainqueries/query_result`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRegisteredQueries
   * @request GET:/neutron/interchainqueries/registered_queries
   */
  queryRegisteredQueries = (
    query?: {
      owners?: string[];
      connection_id?: string;
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<InterchainqueriesQueryRegisteredQueriesResponse, RpcStatus>({
      path: `/neutron/interchainqueries/registered_queries`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRegisteredQuery
   * @request GET:/neutron/interchainqueries/registered_query
   */
  queryRegisteredQuery = (query?: { query_id?: string }, params: RequestParams = {}) =>
    this.request<InterchainqueriesQueryRegisteredQueryResponse, RpcStatus>({
      path: `/neutron/interchainqueries/registered_query`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLastRemoteHeight
   * @request GET:/neutron/interchainqueries/remote_height
   */
  queryLastRemoteHeight = (query?: { connection_id?: string }, params: RequestParams = {}) =>
    this.request<InterchainqueriesQueryLastRemoteHeightResponse, RpcStatus>({
      path: `/neutron/interchainqueries/remote_height`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
