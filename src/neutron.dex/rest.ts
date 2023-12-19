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

export interface DexDepositOptions {
  disable_autoswap?: boolean;
}

export interface DexDepositRecord {
  pair_id?: DexPairID;
  shares_owned?: string;

  /** @format int64 */
  center_tick_index?: string;

  /** @format int64 */
  lower_tick_index?: string;

  /** @format int64 */
  upper_tick_index?: string;

  /** @format uint64 */
  fee?: string;
}

export interface DexLimitOrderTranche {
  key?: DexLimitOrderTrancheKey;
  reserves_maker_denom?: string;
  reserves_taker_denom?: string;
  total_maker_denom?: string;

  /**
   * GoodTilDate is represented as seconds since  January 1, year 1, 00:00:00.00 UTC
   *  LimitOrders with goodTilDate set are valid as long as blockTime <= goodTilDate
   */
  total_taker_denom?: string;

  /**
   * JIT orders also use goodTilDate to handle deletion but represent a special case
   * All JIT orders have a goodTilDate of 0 and an exception is made to still still treat these orders as live
   * Order deletion still functions the same and the orders will be deleted at the end of the block
   * @format date-time
   */
  expiration_time?: string;
  price_taker_to_maker?: string;
}

export interface DexLimitOrderTrancheKey {
  trade_pair_id?: DexTradePairID;

  /** @format int64 */
  tick_index_taker_to_maker?: string;
  tranche_key?: string;
}

export interface DexLimitOrderTrancheUser {
  trade_pair_id?: DexTradePairID;

  /** @format int64 */
  tick_index_taker_to_maker?: string;
  tranche_key?: string;
  address?: string;
  shares_owned?: string;
  shares_withdrawn?: string;
  shares_cancelled?: string;
  order_type?: DexLimitOrderType;
}

export enum DexLimitOrderType {
  GOOD_TIL_CANCELLED = "GOOD_TIL_CANCELLED",
  FILL_OR_KILL = "FILL_OR_KILL",
  IMMEDIATE_OR_CANCEL = "IMMEDIATE_OR_CANCEL",
  JUST_IN_TIME = "JUST_IN_TIME",
  GOOD_TIL_TIME = "GOOD_TIL_TIME",
}

export type DexMsgCancelLimitOrderResponse = object;

export interface DexMsgDepositResponse {
  reserve0_deposited?: string[];
  reserve1_deposited?: string[];
}

export interface DexMsgMultiHopSwapResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  coin_out?: V1Beta1Coin;
}

export interface DexMsgPlaceLimitOrderResponse {
  trancheKey?: string;

  /**
   * Total amount of coin used for the limit order
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  coin_in?: V1Beta1Coin;

  /**
   * Total amount of coin received from the taker portion of the limit order
   * This is the amount of coin immediately available in the users account after executing the
   * limit order. It does not include any future proceeds from the maker portion which will have withdrawn in the future
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  taker_coin_out?: V1Beta1Coin;
}

/**
* MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.

Since: 0.47
*/
export type DexMsgUpdateParamsResponse = object;

export type DexMsgWithdrawFilledLimitOrderResponse = object;

export type DexMsgWithdrawalResponse = object;

export interface DexMultiHopRoute {
  hops?: string[];
}

export interface DexPairID {
  token0?: string;
  token1?: string;
}

/**
 * Params defines the parameters for the module.
 */
export interface DexParams {
  fee_tiers?: string[];
  max_true_taker_spread?: string;
}

export interface DexPool {
  /** @format uint64 */
  id?: string;
  lower_tick0?: DexPoolReserves;
  upper_tick1?: DexPoolReserves;
}

export interface DexPoolMetadata {
  /** @format uint64 */
  id?: string;

  /** @format int64 */
  tick?: string;

  /** @format uint64 */
  fee?: string;
  pair_id?: DexPairID;
}

export interface DexPoolReserves {
  key?: DexPoolReservesKey;
  reserves_maker_denom?: string;
  price_taker_to_maker?: string;
  price_opposite_taker_to_maker?: string;
}

export interface DexPoolReservesKey {
  trade_pair_id?: DexTradePairID;

  /** @format int64 */
  tick_index_taker_to_maker?: string;

  /** @format uint64 */
  fee?: string;
}

export interface DexQueryAllInactiveLimitOrderTrancheResponse {
  inactive_limit_order_tranche?: DexLimitOrderTranche[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface DexQueryAllLimitOrderTrancheResponse {
  limit_order_tranche?: DexLimitOrderTranche[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface DexQueryAllLimitOrderTrancheUserResponse {
  limit_order_tranche_user?: DexLimitOrderTrancheUser[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface DexQueryAllPoolMetadataResponse {
  pool_metadata?: DexPoolMetadata[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface DexQueryAllPoolReservesResponse {
  pool_reserves?: DexPoolReserves[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface DexQueryAllTickLiquidityResponse {
  tick_liquidity?: DexTickLiquidity[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface DexQueryAllUserDepositsResponse {
  deposits?: DexDepositRecord[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface DexQueryAllUserLimitOrdersResponse {
  limit_orders?: DexLimitOrderTrancheUser[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface DexQueryEstimateMultiHopSwapResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  coin_out?: V1Beta1Coin;
}

export interface DexQueryEstimatePlaceLimitOrderResponse {
  /**
   * Total amount of coin used for the limit order
   * You can derive makerLimitInCoin using the equation: totalInCoin = swapInCoin + makerLimitInCoin
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  total_in_coin?: V1Beta1Coin;

  /**
   * Total amount of the token in that was immediately swapped for swapOutCoin
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  swap_in_coin?: V1Beta1Coin;

  /**
   * Total amount of coin received from the taker portion of the limit order
   * This is the amount of coin immediately available in the users account after executing the
   * limit order. It does not include any future proceeds from the maker portion which will have withdrawn in the future
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  swap_out_coin?: V1Beta1Coin;
}

export interface DexQueryGetInactiveLimitOrderTrancheResponse {
  inactive_limit_order_tranche?: DexLimitOrderTranche;
}

export interface DexQueryGetLimitOrderTrancheResponse {
  limit_order_tranche?: DexLimitOrderTranche;
}

export interface DexQueryGetLimitOrderTrancheUserResponse {
  limit_order_tranche_user?: DexLimitOrderTrancheUser;
}

export interface DexQueryGetPoolMetadataResponse {
  Pool_metadata?: DexPoolMetadata;
}

export interface DexQueryGetPoolReservesResponse {
  pool_reserves?: DexPoolReserves;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface DexQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: DexParams;
}

export interface DexQueryPoolResponse {
  pool?: DexPool;
}

export interface DexTickLiquidity {
  pool_reserves?: DexPoolReserves;
  limit_order_tranche?: DexLimitOrderTranche;
}

export interface DexTradePairID {
  maker_denom?: string;
  taker_denom?: string;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
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
 * @title neutron/dex/deposit_record.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryEstimateMultiHopSwap
   * @summary Queries the simulated result of a multihop swap
   * @request GET:/neutron/dex/estimate_multi_hop_swap
   */
  queryEstimateMultiHopSwap = (
    query?: {
      creator?: string;
      receiver?: string;
      amount_in?: string;
      exit_limit_price?: string;
      pick_best_route?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<DexQueryEstimateMultiHopSwapResponse, RpcStatus>({
      path: `/neutron/dex/estimate_multi_hop_swap`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEstimatePlaceLimitOrder
   * @summary Queries the simulated result of a multihop swap
   * @request GET:/neutron/dex/estimate_place_limit_order
   */
  queryEstimatePlaceLimitOrder = (
    query?: {
      creator?: string;
      receiver?: string;
      token_in?: string;
      token_out?: string;
      tick_index_in_to_out?: string;
      amount_in?: string;
      order_type?: "GOOD_TIL_CANCELLED" | "FILL_OR_KILL" | "IMMEDIATE_OR_CANCEL" | "JUST_IN_TIME" | "GOOD_TIL_TIME";
      expiration_time?: string;
      maxAmount_out?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<DexQueryEstimatePlaceLimitOrderResponse, RpcStatus>({
      path: `/neutron/dex/estimate_place_limit_order`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryInactiveLimitOrderTrancheAll
   * @summary Queries a list of InactiveLimitOrderTranche items.
   * @request GET:/neutron/dex/filled_limit_order_tranche
   */
  queryInactiveLimitOrderTrancheAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<DexQueryAllInactiveLimitOrderTrancheResponse, RpcStatus>({
      path: `/neutron/dex/filled_limit_order_tranche`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryInactiveLimitOrderTranche
   * @summary Queries a InactiveLimitOrderTranche by index.
   * @request GET:/neutron/dex/filled_limit_order_tranche/{pair_id}/{token_in}/{tick_index}/{tranche_key}
   */
  queryInactiveLimitOrderTranche = (
    pairId: string,
    tokenIn: string,
    tickIndex: string,
    trancheKey: string,
    params: RequestParams = {},
  ) =>
    this.request<DexQueryGetInactiveLimitOrderTrancheResponse, RpcStatus>({
      path: `/neutron/dex/filled_limit_order_tranche/${pairId}/${tokenIn}/${tickIndex}/${trancheKey}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLimitOrderTrancheAll
   * @summary Queries a list of LimitOrderTranche items for a given pairID / TokenIn combination.
   * @request GET:/neutron/dex/limit_order_tranche/{pair_id}/{token_in}
   */
  queryLimitOrderTrancheAll = (
    pairId: string,
    tokenIn: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<DexQueryAllLimitOrderTrancheResponse, RpcStatus>({
      path: `/neutron/dex/limit_order_tranche/${pairId}/${tokenIn}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLimitOrderTranche
   * @summary Queries a LimitOrderTranche by index.
   * @request GET:/neutron/dex/limit_order_tranche/{pair_id}/{token_in}/{tick_index}/{tranche_key}
   */
  queryLimitOrderTranche = (
    pairId: string,
    tokenIn: string,
    tickIndex: string,
    trancheKey: string,
    params: RequestParams = {},
  ) =>
    this.request<DexQueryGetLimitOrderTrancheResponse, RpcStatus>({
      path: `/neutron/dex/limit_order_tranche/${pairId}/${tokenIn}/${tickIndex}/${trancheKey}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLimitOrderTrancheUserAll
   * @summary Queries a list of LimitOrderTrancheMap items.
   * @request GET:/neutron/dex/limit_order_tranche_user
   */
  queryLimitOrderTrancheUserAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<DexQueryAllLimitOrderTrancheUserResponse, RpcStatus>({
      path: `/neutron/dex/limit_order_tranche_user`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLimitOrderTrancheUser
   * @summary Queries a LimitOrderTrancheUser by index.
   * @request GET:/neutron/dex/limit_order_tranche_user/{address}/{tranche_key}
   */
  queryLimitOrderTrancheUser = (address: string, trancheKey: string, params: RequestParams = {}) =>
    this.request<DexQueryGetLimitOrderTrancheUserResponse, RpcStatus>({
      path: `/neutron/dex/limit_order_tranche_user/${address}/${trancheKey}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/neutron/dex/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<DexQueryParamsResponse, RpcStatus>({
      path: `/neutron/dex/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPool
   * @summary Queries a pool by pair, tick and fee
   * @request GET:/neutron/dex/pool/{pair_id}/{tick_index}/{fee}
   */
  queryPool = (pairId: string, tickIndex: string, fee: string, params: RequestParams = {}) =>
    this.request<DexQueryPoolResponse, RpcStatus>({
      path: `/neutron/dex/pool/${pairId}/${tickIndex}/${fee}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPoolById
   * @summary Queries a pool by ID
   * @request GET:/neutron/dex/pool/{pool_id}
   */
  queryPoolByID = (poolId: string, params: RequestParams = {}) =>
    this.request<DexQueryPoolResponse, RpcStatus>({
      path: `/neutron/dex/pool/${poolId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPoolMetadataAll
   * @summary Queries a list of PoolMetadata items.
   * @request GET:/neutron/dex/pool_metadata
   */
  queryPoolMetadataAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<DexQueryAllPoolMetadataResponse, RpcStatus>({
      path: `/neutron/dex/pool_metadata`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPoolMetadata
   * @summary Queries a PoolMetadata by ID
   * @request GET:/neutron/dex/pool_metadata/{id}
   */
  queryPoolMetadata = (id: string, params: RequestParams = {}) =>
    this.request<DexQueryGetPoolMetadataResponse, RpcStatus>({
      path: `/neutron/dex/pool_metadata/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPoolReservesAll
   * @summary Queries a list of PoolReserves items.
   * @request GET:/neutron/dex/pool_reserves/{pair_id}/{token_in}
   */
  queryPoolReservesAll = (
    pairId: string,
    tokenIn: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<DexQueryAllPoolReservesResponse, RpcStatus>({
      path: `/neutron/dex/pool_reserves/${pairId}/${tokenIn}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPoolReserves
   * @summary Queries a PoolReserve by index
   * @request GET:/neutron/dex/pool_reserves/{pair_id}/{token_in}/{tick_index}/{fee}
   */
  queryPoolReserves = (pairId: string, tokenIn: string, tickIndex: string, fee: string, params: RequestParams = {}) =>
    this.request<DexQueryGetPoolReservesResponse, RpcStatus>({
      path: `/neutron/dex/pool_reserves/${pairId}/${tokenIn}/${tickIndex}/${fee}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTickLiquidityAll
   * @summary Queries a list of TickLiquidity items.
   * @request GET:/neutron/dex/tick_liquidity/{pair_id}/{token_in}
   */
  queryTickLiquidityAll = (
    pairId: string,
    tokenIn: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<DexQueryAllTickLiquidityResponse, RpcStatus>({
      path: `/neutron/dex/tick_liquidity/${pairId}/${tokenIn}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUserDepositsAll
   * @summary Queries a list of UserDeposits items.
   * @request GET:/neutron/dex/user/deposits/{address}
   */
  queryUserDepositsAll = (
    address: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<DexQueryAllUserDepositsResponse, RpcStatus>({
      path: `/neutron/dex/user/deposits/${address}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLimitOrderTrancheUserAllByAddress
   * @summary Queries a list of LimitOrderTrancheUser items for a given address.
   * @request GET:/neutron/dex/user/limit_orders/{address}
   */
  queryLimitOrderTrancheUserAllByAddress = (
    address: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<DexQueryAllUserLimitOrdersResponse, RpcStatus>({
      path: `/neutron/dex/user/limit_orders/${address}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
