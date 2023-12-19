/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { DepositRecord } from "./deposit_record";
import { LimitOrderTranche } from "./limit_order_tranche";
import { LimitOrderTrancheUser } from "./limit_order_tranche_user";
import { Params } from "./params";
import { Pool } from "./pool";
import { PoolMetadata } from "./pool_metadata";
import { PoolReserves } from "./pool_reserves";
import { TickLiquidity } from "./tick_liquidity";
import { LimitOrderType, limitOrderTypeFromJSON, limitOrderTypeToJSON, MultiHopRoute } from "./tx";

export const protobufPackage = "neutron.dex";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetLimitOrderTrancheUserRequest {
  address: string;
  trancheKey: string;
}

export interface QueryGetLimitOrderTrancheUserResponse {
  limitOrderTrancheUser: LimitOrderTrancheUser | undefined;
}

export interface QueryAllLimitOrderTrancheUserRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllLimitOrderTrancheUserResponse {
  limitOrderTrancheUser: LimitOrderTrancheUser[];
  pagination: PageResponse | undefined;
}

export interface QueryGetLimitOrderTrancheRequest {
  pairId: string;
  tickIndex: number;
  tokenIn: string;
  trancheKey: string;
}

export interface QueryGetLimitOrderTrancheResponse {
  limitOrderTranche: LimitOrderTranche | undefined;
}

export interface QueryAllLimitOrderTrancheRequest {
  pairId: string;
  tokenIn: string;
  pagination: PageRequest | undefined;
}

export interface QueryAllLimitOrderTrancheResponse {
  limitOrderTranche: LimitOrderTranche[];
  pagination: PageResponse | undefined;
}

export interface QueryAllUserDepositsRequest {
  address: string;
  pagination: PageRequest | undefined;
}

export interface QueryAllUserDepositsResponse {
  deposits: DepositRecord[];
  pagination: PageResponse | undefined;
}

export interface QueryAllUserLimitOrdersRequest {
  address: string;
  pagination: PageRequest | undefined;
}

export interface QueryAllUserLimitOrdersResponse {
  limitOrders: LimitOrderTrancheUser[];
  pagination: PageResponse | undefined;
}

export interface QueryAllTickLiquidityRequest {
  pairId: string;
  tokenIn: string;
  pagination: PageRequest | undefined;
}

export interface QueryAllTickLiquidityResponse {
  tickLiquidity: TickLiquidity[];
  pagination: PageResponse | undefined;
}

export interface QueryGetInactiveLimitOrderTrancheRequest {
  pairId: string;
  tokenIn: string;
  tickIndex: number;
  trancheKey: string;
}

export interface QueryGetInactiveLimitOrderTrancheResponse {
  inactiveLimitOrderTranche: LimitOrderTranche | undefined;
}

export interface QueryAllInactiveLimitOrderTrancheRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllInactiveLimitOrderTrancheResponse {
  inactiveLimitOrderTranche: LimitOrderTranche[];
  pagination: PageResponse | undefined;
}

export interface QueryAllPoolReservesRequest {
  pairId: string;
  tokenIn: string;
  pagination: PageRequest | undefined;
}

export interface QueryAllPoolReservesResponse {
  poolReserves: PoolReserves[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPoolReservesRequest {
  pairId: string;
  tokenIn: string;
  tickIndex: number;
  fee: number;
}

export interface QueryGetPoolReservesResponse {
  poolReserves: PoolReserves | undefined;
}

export interface QueryEstimateMultiHopSwapRequest {
  creator: string;
  receiver: string;
  routes: MultiHopRoute[];
  amountIn: string;
  exitLimitPrice: string;
  /**
   * If pickBestRoute == true then all routes are run and the route with the best price is chosen
   * otherwise, the first succesful route is used.
   */
  pickBestRoute: boolean;
}

export interface QueryEstimateMultiHopSwapResponse {
  coinOut: Coin | undefined;
}

export interface QueryEstimatePlaceLimitOrderRequest {
  creator: string;
  receiver: string;
  tokenIn: string;
  tokenOut: string;
  tickIndexInToOut: number;
  amountIn: string;
  orderType: LimitOrderType;
  /** expirationTime is only valid iff orderType == GOOD_TIL_TIME. */
  expirationTime: Date | undefined;
  maxAmountOut: string;
}

export interface QueryEstimatePlaceLimitOrderResponse {
  /**
   * Total amount of coin used for the limit order
   * You can derive makerLimitInCoin using the equation: totalInCoin = swapInCoin + makerLimitInCoin
   */
  totalInCoin:
    | Coin
    | undefined;
  /** Total amount of the token in that was immediately swapped for swapOutCoin */
  swapInCoin:
    | Coin
    | undefined;
  /**
   * Total amount of coin received from the taker portion of the limit order
   * This is the amount of coin immediately available in the users account after executing the
   * limit order. It does not include any future proceeds from the maker portion which will have withdrawn in the future
   */
  swapOutCoin: Coin | undefined;
}

export interface QueryPoolRequest {
  pairId: string;
  tickIndex: number;
  fee: number;
}

export interface QueryPoolByIDRequest {
  poolId: number;
}

export interface QueryPoolResponse {
  pool: Pool | undefined;
}

export interface QueryGetPoolMetadataRequest {
  id: number;
}

export interface QueryGetPoolMetadataResponse {
  PoolMetadata: PoolMetadata | undefined;
}

export interface QueryAllPoolMetadataRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPoolMetadataResponse {
  poolMetadata: PoolMetadata[];
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

function createBaseQueryGetLimitOrderTrancheUserRequest(): QueryGetLimitOrderTrancheUserRequest {
  return { address: "", trancheKey: "" };
}

export const QueryGetLimitOrderTrancheUserRequest = {
  encode(message: QueryGetLimitOrderTrancheUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.trancheKey !== "") {
      writer.uint32(18).string(message.trancheKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLimitOrderTrancheUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLimitOrderTrancheUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.trancheKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLimitOrderTrancheUserRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : "",
    };
  },

  toJSON(message: QueryGetLimitOrderTrancheUserRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetLimitOrderTrancheUserRequest>, I>>(
    object: I,
  ): QueryGetLimitOrderTrancheUserRequest {
    const message = createBaseQueryGetLimitOrderTrancheUserRequest();
    message.address = object.address ?? "";
    message.trancheKey = object.trancheKey ?? "";
    return message;
  },
};

function createBaseQueryGetLimitOrderTrancheUserResponse(): QueryGetLimitOrderTrancheUserResponse {
  return { limitOrderTrancheUser: undefined };
}

export const QueryGetLimitOrderTrancheUserResponse = {
  encode(message: QueryGetLimitOrderTrancheUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limitOrderTrancheUser !== undefined) {
      LimitOrderTrancheUser.encode(message.limitOrderTrancheUser, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLimitOrderTrancheUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLimitOrderTrancheUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limitOrderTrancheUser = LimitOrderTrancheUser.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLimitOrderTrancheUserResponse {
    return {
      limitOrderTrancheUser: isSet(object.limitOrderTrancheUser)
        ? LimitOrderTrancheUser.fromJSON(object.limitOrderTrancheUser)
        : undefined,
    };
  },

  toJSON(message: QueryGetLimitOrderTrancheUserResponse): unknown {
    const obj: any = {};
    message.limitOrderTrancheUser !== undefined && (obj.limitOrderTrancheUser = message.limitOrderTrancheUser
      ? LimitOrderTrancheUser.toJSON(message.limitOrderTrancheUser)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetLimitOrderTrancheUserResponse>, I>>(
    object: I,
  ): QueryGetLimitOrderTrancheUserResponse {
    const message = createBaseQueryGetLimitOrderTrancheUserResponse();
    message.limitOrderTrancheUser =
      (object.limitOrderTrancheUser !== undefined && object.limitOrderTrancheUser !== null)
        ? LimitOrderTrancheUser.fromPartial(object.limitOrderTrancheUser)
        : undefined;
    return message;
  },
};

function createBaseQueryAllLimitOrderTrancheUserRequest(): QueryAllLimitOrderTrancheUserRequest {
  return { pagination: undefined };
}

export const QueryAllLimitOrderTrancheUserRequest = {
  encode(message: QueryAllLimitOrderTrancheUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLimitOrderTrancheUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLimitOrderTrancheUserRequest();
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

  fromJSON(object: any): QueryAllLimitOrderTrancheUserRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllLimitOrderTrancheUserRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllLimitOrderTrancheUserRequest>, I>>(
    object: I,
  ): QueryAllLimitOrderTrancheUserRequest {
    const message = createBaseQueryAllLimitOrderTrancheUserRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllLimitOrderTrancheUserResponse(): QueryAllLimitOrderTrancheUserResponse {
  return { limitOrderTrancheUser: [], pagination: undefined };
}

export const QueryAllLimitOrderTrancheUserResponse = {
  encode(message: QueryAllLimitOrderTrancheUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.limitOrderTrancheUser) {
      LimitOrderTrancheUser.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLimitOrderTrancheUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLimitOrderTrancheUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limitOrderTrancheUser.push(LimitOrderTrancheUser.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllLimitOrderTrancheUserResponse {
    return {
      limitOrderTrancheUser: Array.isArray(object?.limitOrderTrancheUser)
        ? object.limitOrderTrancheUser.map((e: any) => LimitOrderTrancheUser.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllLimitOrderTrancheUserResponse): unknown {
    const obj: any = {};
    if (message.limitOrderTrancheUser) {
      obj.limitOrderTrancheUser = message.limitOrderTrancheUser.map((e) =>
        e ? LimitOrderTrancheUser.toJSON(e) : undefined
      );
    } else {
      obj.limitOrderTrancheUser = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllLimitOrderTrancheUserResponse>, I>>(
    object: I,
  ): QueryAllLimitOrderTrancheUserResponse {
    const message = createBaseQueryAllLimitOrderTrancheUserResponse();
    message.limitOrderTrancheUser = object.limitOrderTrancheUser?.map((e) => LimitOrderTrancheUser.fromPartial(e))
      || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetLimitOrderTrancheRequest(): QueryGetLimitOrderTrancheRequest {
  return { pairId: "", tickIndex: 0, tokenIn: "", trancheKey: "" };
}

export const QueryGetLimitOrderTrancheRequest = {
  encode(message: QueryGetLimitOrderTrancheRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tickIndex !== 0) {
      writer.uint32(16).int64(message.tickIndex);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.trancheKey !== "") {
      writer.uint32(34).string(message.trancheKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLimitOrderTrancheRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLimitOrderTrancheRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        case 2:
          message.tickIndex = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.trancheKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLimitOrderTrancheRequest {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      tickIndex: isSet(object.tickIndex) ? Number(object.tickIndex) : 0,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : "",
    };
  },

  toJSON(message: QueryGetLimitOrderTrancheRequest): unknown {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.tickIndex !== undefined && (obj.tickIndex = Math.round(message.tickIndex));
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetLimitOrderTrancheRequest>, I>>(
    object: I,
  ): QueryGetLimitOrderTrancheRequest {
    const message = createBaseQueryGetLimitOrderTrancheRequest();
    message.pairId = object.pairId ?? "";
    message.tickIndex = object.tickIndex ?? 0;
    message.tokenIn = object.tokenIn ?? "";
    message.trancheKey = object.trancheKey ?? "";
    return message;
  },
};

function createBaseQueryGetLimitOrderTrancheResponse(): QueryGetLimitOrderTrancheResponse {
  return { limitOrderTranche: undefined };
}

export const QueryGetLimitOrderTrancheResponse = {
  encode(message: QueryGetLimitOrderTrancheResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limitOrderTranche !== undefined) {
      LimitOrderTranche.encode(message.limitOrderTranche, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLimitOrderTrancheResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLimitOrderTrancheResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limitOrderTranche = LimitOrderTranche.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLimitOrderTrancheResponse {
    return {
      limitOrderTranche: isSet(object.limitOrderTranche)
        ? LimitOrderTranche.fromJSON(object.limitOrderTranche)
        : undefined,
    };
  },

  toJSON(message: QueryGetLimitOrderTrancheResponse): unknown {
    const obj: any = {};
    message.limitOrderTranche !== undefined && (obj.limitOrderTranche = message.limitOrderTranche
      ? LimitOrderTranche.toJSON(message.limitOrderTranche)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetLimitOrderTrancheResponse>, I>>(
    object: I,
  ): QueryGetLimitOrderTrancheResponse {
    const message = createBaseQueryGetLimitOrderTrancheResponse();
    message.limitOrderTranche = (object.limitOrderTranche !== undefined && object.limitOrderTranche !== null)
      ? LimitOrderTranche.fromPartial(object.limitOrderTranche)
      : undefined;
    return message;
  },
};

function createBaseQueryAllLimitOrderTrancheRequest(): QueryAllLimitOrderTrancheRequest {
  return { pairId: "", tokenIn: "", pagination: undefined };
}

export const QueryAllLimitOrderTrancheRequest = {
  encode(message: QueryAllLimitOrderTrancheRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLimitOrderTrancheRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLimitOrderTrancheRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
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

  fromJSON(object: any): QueryAllLimitOrderTrancheRequest {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllLimitOrderTrancheRequest): unknown {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllLimitOrderTrancheRequest>, I>>(
    object: I,
  ): QueryAllLimitOrderTrancheRequest {
    const message = createBaseQueryAllLimitOrderTrancheRequest();
    message.pairId = object.pairId ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllLimitOrderTrancheResponse(): QueryAllLimitOrderTrancheResponse {
  return { limitOrderTranche: [], pagination: undefined };
}

export const QueryAllLimitOrderTrancheResponse = {
  encode(message: QueryAllLimitOrderTrancheResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.limitOrderTranche) {
      LimitOrderTranche.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLimitOrderTrancheResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLimitOrderTrancheResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limitOrderTranche.push(LimitOrderTranche.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllLimitOrderTrancheResponse {
    return {
      limitOrderTranche: Array.isArray(object?.limitOrderTranche)
        ? object.limitOrderTranche.map((e: any) => LimitOrderTranche.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllLimitOrderTrancheResponse): unknown {
    const obj: any = {};
    if (message.limitOrderTranche) {
      obj.limitOrderTranche = message.limitOrderTranche.map((e) => e ? LimitOrderTranche.toJSON(e) : undefined);
    } else {
      obj.limitOrderTranche = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllLimitOrderTrancheResponse>, I>>(
    object: I,
  ): QueryAllLimitOrderTrancheResponse {
    const message = createBaseQueryAllLimitOrderTrancheResponse();
    message.limitOrderTranche = object.limitOrderTranche?.map((e) => LimitOrderTranche.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllUserDepositsRequest(): QueryAllUserDepositsRequest {
  return { address: "", pagination: undefined };
}

export const QueryAllUserDepositsRequest = {
  encode(message: QueryAllUserDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserDepositsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUserDepositsRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllUserDepositsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllUserDepositsRequest>, I>>(object: I): QueryAllUserDepositsRequest {
    const message = createBaseQueryAllUserDepositsRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllUserDepositsResponse(): QueryAllUserDepositsResponse {
  return { deposits: [], pagination: undefined };
}

export const QueryAllUserDepositsResponse = {
  encode(message: QueryAllUserDepositsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deposits) {
      DepositRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserDepositsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(DepositRecord.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllUserDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => DepositRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllUserDepositsResponse): unknown {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map((e) => e ? DepositRecord.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllUserDepositsResponse>, I>>(object: I): QueryAllUserDepositsResponse {
    const message = createBaseQueryAllUserDepositsResponse();
    message.deposits = object.deposits?.map((e) => DepositRecord.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllUserLimitOrdersRequest(): QueryAllUserLimitOrdersRequest {
  return { address: "", pagination: undefined };
}

export const QueryAllUserLimitOrdersRequest = {
  encode(message: QueryAllUserLimitOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserLimitOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserLimitOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUserLimitOrdersRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllUserLimitOrdersRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllUserLimitOrdersRequest>, I>>(
    object: I,
  ): QueryAllUserLimitOrdersRequest {
    const message = createBaseQueryAllUserLimitOrdersRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllUserLimitOrdersResponse(): QueryAllUserLimitOrdersResponse {
  return { limitOrders: [], pagination: undefined };
}

export const QueryAllUserLimitOrdersResponse = {
  encode(message: QueryAllUserLimitOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.limitOrders) {
      LimitOrderTrancheUser.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserLimitOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserLimitOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limitOrders.push(LimitOrderTrancheUser.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllUserLimitOrdersResponse {
    return {
      limitOrders: Array.isArray(object?.limitOrders)
        ? object.limitOrders.map((e: any) => LimitOrderTrancheUser.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllUserLimitOrdersResponse): unknown {
    const obj: any = {};
    if (message.limitOrders) {
      obj.limitOrders = message.limitOrders.map((e) => e ? LimitOrderTrancheUser.toJSON(e) : undefined);
    } else {
      obj.limitOrders = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllUserLimitOrdersResponse>, I>>(
    object: I,
  ): QueryAllUserLimitOrdersResponse {
    const message = createBaseQueryAllUserLimitOrdersResponse();
    message.limitOrders = object.limitOrders?.map((e) => LimitOrderTrancheUser.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllTickLiquidityRequest(): QueryAllTickLiquidityRequest {
  return { pairId: "", tokenIn: "", pagination: undefined };
}

export const QueryAllTickLiquidityRequest = {
  encode(message: QueryAllTickLiquidityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTickLiquidityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTickLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
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

  fromJSON(object: any): QueryAllTickLiquidityRequest {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllTickLiquidityRequest): unknown {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllTickLiquidityRequest>, I>>(object: I): QueryAllTickLiquidityRequest {
    const message = createBaseQueryAllTickLiquidityRequest();
    message.pairId = object.pairId ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllTickLiquidityResponse(): QueryAllTickLiquidityResponse {
  return { tickLiquidity: [], pagination: undefined };
}

export const QueryAllTickLiquidityResponse = {
  encode(message: QueryAllTickLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tickLiquidity) {
      TickLiquidity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTickLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTickLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tickLiquidity.push(TickLiquidity.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllTickLiquidityResponse {
    return {
      tickLiquidity: Array.isArray(object?.tickLiquidity)
        ? object.tickLiquidity.map((e: any) => TickLiquidity.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllTickLiquidityResponse): unknown {
    const obj: any = {};
    if (message.tickLiquidity) {
      obj.tickLiquidity = message.tickLiquidity.map((e) => e ? TickLiquidity.toJSON(e) : undefined);
    } else {
      obj.tickLiquidity = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllTickLiquidityResponse>, I>>(
    object: I,
  ): QueryAllTickLiquidityResponse {
    const message = createBaseQueryAllTickLiquidityResponse();
    message.tickLiquidity = object.tickLiquidity?.map((e) => TickLiquidity.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetInactiveLimitOrderTrancheRequest(): QueryGetInactiveLimitOrderTrancheRequest {
  return { pairId: "", tokenIn: "", tickIndex: 0, trancheKey: "" };
}

export const QueryGetInactiveLimitOrderTrancheRequest = {
  encode(message: QueryGetInactiveLimitOrderTrancheRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tickIndex !== 0) {
      writer.uint32(24).int64(message.tickIndex);
    }
    if (message.trancheKey !== "") {
      writer.uint32(34).string(message.trancheKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetInactiveLimitOrderTrancheRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInactiveLimitOrderTrancheRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tickIndex = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.trancheKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetInactiveLimitOrderTrancheRequest {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tickIndex: isSet(object.tickIndex) ? Number(object.tickIndex) : 0,
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : "",
    };
  },

  toJSON(message: QueryGetInactiveLimitOrderTrancheRequest): unknown {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tickIndex !== undefined && (obj.tickIndex = Math.round(message.tickIndex));
    message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetInactiveLimitOrderTrancheRequest>, I>>(
    object: I,
  ): QueryGetInactiveLimitOrderTrancheRequest {
    const message = createBaseQueryGetInactiveLimitOrderTrancheRequest();
    message.pairId = object.pairId ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.tickIndex = object.tickIndex ?? 0;
    message.trancheKey = object.trancheKey ?? "";
    return message;
  },
};

function createBaseQueryGetInactiveLimitOrderTrancheResponse(): QueryGetInactiveLimitOrderTrancheResponse {
  return { inactiveLimitOrderTranche: undefined };
}

export const QueryGetInactiveLimitOrderTrancheResponse = {
  encode(message: QueryGetInactiveLimitOrderTrancheResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inactiveLimitOrderTranche !== undefined) {
      LimitOrderTranche.encode(message.inactiveLimitOrderTranche, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetInactiveLimitOrderTrancheResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInactiveLimitOrderTrancheResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inactiveLimitOrderTranche = LimitOrderTranche.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetInactiveLimitOrderTrancheResponse {
    return {
      inactiveLimitOrderTranche: isSet(object.inactiveLimitOrderTranche)
        ? LimitOrderTranche.fromJSON(object.inactiveLimitOrderTranche)
        : undefined,
    };
  },

  toJSON(message: QueryGetInactiveLimitOrderTrancheResponse): unknown {
    const obj: any = {};
    message.inactiveLimitOrderTranche !== undefined
      && (obj.inactiveLimitOrderTranche = message.inactiveLimitOrderTranche
        ? LimitOrderTranche.toJSON(message.inactiveLimitOrderTranche)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetInactiveLimitOrderTrancheResponse>, I>>(
    object: I,
  ): QueryGetInactiveLimitOrderTrancheResponse {
    const message = createBaseQueryGetInactiveLimitOrderTrancheResponse();
    message.inactiveLimitOrderTranche =
      (object.inactiveLimitOrderTranche !== undefined && object.inactiveLimitOrderTranche !== null)
        ? LimitOrderTranche.fromPartial(object.inactiveLimitOrderTranche)
        : undefined;
    return message;
  },
};

function createBaseQueryAllInactiveLimitOrderTrancheRequest(): QueryAllInactiveLimitOrderTrancheRequest {
  return { pagination: undefined };
}

export const QueryAllInactiveLimitOrderTrancheRequest = {
  encode(message: QueryAllInactiveLimitOrderTrancheRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllInactiveLimitOrderTrancheRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInactiveLimitOrderTrancheRequest();
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

  fromJSON(object: any): QueryAllInactiveLimitOrderTrancheRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllInactiveLimitOrderTrancheRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllInactiveLimitOrderTrancheRequest>, I>>(
    object: I,
  ): QueryAllInactiveLimitOrderTrancheRequest {
    const message = createBaseQueryAllInactiveLimitOrderTrancheRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllInactiveLimitOrderTrancheResponse(): QueryAllInactiveLimitOrderTrancheResponse {
  return { inactiveLimitOrderTranche: [], pagination: undefined };
}

export const QueryAllInactiveLimitOrderTrancheResponse = {
  encode(message: QueryAllInactiveLimitOrderTrancheResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.inactiveLimitOrderTranche) {
      LimitOrderTranche.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllInactiveLimitOrderTrancheResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInactiveLimitOrderTrancheResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inactiveLimitOrderTranche.push(LimitOrderTranche.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllInactiveLimitOrderTrancheResponse {
    return {
      inactiveLimitOrderTranche: Array.isArray(object?.inactiveLimitOrderTranche)
        ? object.inactiveLimitOrderTranche.map((e: any) => LimitOrderTranche.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllInactiveLimitOrderTrancheResponse): unknown {
    const obj: any = {};
    if (message.inactiveLimitOrderTranche) {
      obj.inactiveLimitOrderTranche = message.inactiveLimitOrderTranche.map((e) =>
        e ? LimitOrderTranche.toJSON(e) : undefined
      );
    } else {
      obj.inactiveLimitOrderTranche = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllInactiveLimitOrderTrancheResponse>, I>>(
    object: I,
  ): QueryAllInactiveLimitOrderTrancheResponse {
    const message = createBaseQueryAllInactiveLimitOrderTrancheResponse();
    message.inactiveLimitOrderTranche = object.inactiveLimitOrderTranche?.map((e) => LimitOrderTranche.fromPartial(e))
      || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPoolReservesRequest(): QueryAllPoolReservesRequest {
  return { pairId: "", tokenIn: "", pagination: undefined };
}

export const QueryAllPoolReservesRequest = {
  encode(message: QueryAllPoolReservesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolReservesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolReservesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
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

  fromJSON(object: any): QueryAllPoolReservesRequest {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPoolReservesRequest): unknown {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolReservesRequest>, I>>(object: I): QueryAllPoolReservesRequest {
    const message = createBaseQueryAllPoolReservesRequest();
    message.pairId = object.pairId ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPoolReservesResponse(): QueryAllPoolReservesResponse {
  return { poolReserves: [], pagination: undefined };
}

export const QueryAllPoolReservesResponse = {
  encode(message: QueryAllPoolReservesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.poolReserves) {
      PoolReserves.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolReservesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolReservesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolReserves.push(PoolReserves.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPoolReservesResponse {
    return {
      poolReserves: Array.isArray(object?.poolReserves)
        ? object.poolReserves.map((e: any) => PoolReserves.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPoolReservesResponse): unknown {
    const obj: any = {};
    if (message.poolReserves) {
      obj.poolReserves = message.poolReserves.map((e) => e ? PoolReserves.toJSON(e) : undefined);
    } else {
      obj.poolReserves = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolReservesResponse>, I>>(object: I): QueryAllPoolReservesResponse {
    const message = createBaseQueryAllPoolReservesResponse();
    message.poolReserves = object.poolReserves?.map((e) => PoolReserves.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPoolReservesRequest(): QueryGetPoolReservesRequest {
  return { pairId: "", tokenIn: "", tickIndex: 0, fee: 0 };
}

export const QueryGetPoolReservesRequest = {
  encode(message: QueryGetPoolReservesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tickIndex !== 0) {
      writer.uint32(24).int64(message.tickIndex);
    }
    if (message.fee !== 0) {
      writer.uint32(32).uint64(message.fee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolReservesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolReservesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tickIndex = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.fee = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolReservesRequest {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tickIndex: isSet(object.tickIndex) ? Number(object.tickIndex) : 0,
      fee: isSet(object.fee) ? Number(object.fee) : 0,
    };
  },

  toJSON(message: QueryGetPoolReservesRequest): unknown {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tickIndex !== undefined && (obj.tickIndex = Math.round(message.tickIndex));
    message.fee !== undefined && (obj.fee = Math.round(message.fee));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolReservesRequest>, I>>(object: I): QueryGetPoolReservesRequest {
    const message = createBaseQueryGetPoolReservesRequest();
    message.pairId = object.pairId ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.tickIndex = object.tickIndex ?? 0;
    message.fee = object.fee ?? 0;
    return message;
  },
};

function createBaseQueryGetPoolReservesResponse(): QueryGetPoolReservesResponse {
  return { poolReserves: undefined };
}

export const QueryGetPoolReservesResponse = {
  encode(message: QueryGetPoolReservesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolReserves !== undefined) {
      PoolReserves.encode(message.poolReserves, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolReservesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolReservesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolReserves = PoolReserves.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolReservesResponse {
    return { poolReserves: isSet(object.poolReserves) ? PoolReserves.fromJSON(object.poolReserves) : undefined };
  },

  toJSON(message: QueryGetPoolReservesResponse): unknown {
    const obj: any = {};
    message.poolReserves !== undefined
      && (obj.poolReserves = message.poolReserves ? PoolReserves.toJSON(message.poolReserves) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolReservesResponse>, I>>(object: I): QueryGetPoolReservesResponse {
    const message = createBaseQueryGetPoolReservesResponse();
    message.poolReserves = (object.poolReserves !== undefined && object.poolReserves !== null)
      ? PoolReserves.fromPartial(object.poolReserves)
      : undefined;
    return message;
  },
};

function createBaseQueryEstimateMultiHopSwapRequest(): QueryEstimateMultiHopSwapRequest {
  return { creator: "", receiver: "", routes: [], amountIn: "", exitLimitPrice: "", pickBestRoute: false };
}

export const QueryEstimateMultiHopSwapRequest = {
  encode(message: QueryEstimateMultiHopSwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    for (const v of message.routes) {
      MultiHopRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.amountIn !== "") {
      writer.uint32(34).string(message.amountIn);
    }
    if (message.exitLimitPrice !== "") {
      writer.uint32(42).string(message.exitLimitPrice);
    }
    if (message.pickBestRoute === true) {
      writer.uint32(48).bool(message.pickBestRoute);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEstimateMultiHopSwapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateMultiHopSwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.routes.push(MultiHopRoute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.amountIn = reader.string();
          break;
        case 5:
          message.exitLimitPrice = reader.string();
          break;
        case 6:
          message.pickBestRoute = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEstimateMultiHopSwapRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => MultiHopRoute.fromJSON(e)) : [],
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      exitLimitPrice: isSet(object.exitLimitPrice) ? String(object.exitLimitPrice) : "",
      pickBestRoute: isSet(object.pickBestRoute) ? Boolean(object.pickBestRoute) : false,
    };
  },

  toJSON(message: QueryEstimateMultiHopSwapRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    if (message.routes) {
      obj.routes = message.routes.map((e) => e ? MultiHopRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.exitLimitPrice !== undefined && (obj.exitLimitPrice = message.exitLimitPrice);
    message.pickBestRoute !== undefined && (obj.pickBestRoute = message.pickBestRoute);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryEstimateMultiHopSwapRequest>, I>>(
    object: I,
  ): QueryEstimateMultiHopSwapRequest {
    const message = createBaseQueryEstimateMultiHopSwapRequest();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.routes = object.routes?.map((e) => MultiHopRoute.fromPartial(e)) || [];
    message.amountIn = object.amountIn ?? "";
    message.exitLimitPrice = object.exitLimitPrice ?? "";
    message.pickBestRoute = object.pickBestRoute ?? false;
    return message;
  },
};

function createBaseQueryEstimateMultiHopSwapResponse(): QueryEstimateMultiHopSwapResponse {
  return { coinOut: undefined };
}

export const QueryEstimateMultiHopSwapResponse = {
  encode(message: QueryEstimateMultiHopSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coinOut !== undefined) {
      Coin.encode(message.coinOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEstimateMultiHopSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateMultiHopSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coinOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEstimateMultiHopSwapResponse {
    return { coinOut: isSet(object.coinOut) ? Coin.fromJSON(object.coinOut) : undefined };
  },

  toJSON(message: QueryEstimateMultiHopSwapResponse): unknown {
    const obj: any = {};
    message.coinOut !== undefined && (obj.coinOut = message.coinOut ? Coin.toJSON(message.coinOut) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryEstimateMultiHopSwapResponse>, I>>(
    object: I,
  ): QueryEstimateMultiHopSwapResponse {
    const message = createBaseQueryEstimateMultiHopSwapResponse();
    message.coinOut = (object.coinOut !== undefined && object.coinOut !== null)
      ? Coin.fromPartial(object.coinOut)
      : undefined;
    return message;
  },
};

function createBaseQueryEstimatePlaceLimitOrderRequest(): QueryEstimatePlaceLimitOrderRequest {
  return {
    creator: "",
    receiver: "",
    tokenIn: "",
    tokenOut: "",
    tickIndexInToOut: 0,
    amountIn: "",
    orderType: 0,
    expirationTime: undefined,
    maxAmountOut: "",
  };
}

export const QueryEstimatePlaceLimitOrderRequest = {
  encode(message: QueryEstimatePlaceLimitOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    if (message.tickIndexInToOut !== 0) {
      writer.uint32(40).int64(message.tickIndexInToOut);
    }
    if (message.amountIn !== "") {
      writer.uint32(50).string(message.amountIn);
    }
    if (message.orderType !== 0) {
      writer.uint32(56).int32(message.orderType);
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(toTimestamp(message.expirationTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.maxAmountOut !== "") {
      writer.uint32(74).string(message.maxAmountOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEstimatePlaceLimitOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimatePlaceLimitOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        case 5:
          message.tickIndexInToOut = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.amountIn = reader.string();
          break;
        case 7:
          message.orderType = reader.int32() as any;
          break;
        case 8:
          message.expirationTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.maxAmountOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEstimatePlaceLimitOrderRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      tickIndexInToOut: isSet(object.tickIndexInToOut) ? Number(object.tickIndexInToOut) : 0,
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      orderType: isSet(object.orderType) ? limitOrderTypeFromJSON(object.orderType) : 0,
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      maxAmountOut: isSet(object.maxAmountOut) ? String(object.maxAmountOut) : "",
    };
  },

  toJSON(message: QueryEstimatePlaceLimitOrderRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.tickIndexInToOut !== undefined && (obj.tickIndexInToOut = Math.round(message.tickIndexInToOut));
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.orderType !== undefined && (obj.orderType = limitOrderTypeToJSON(message.orderType));
    message.expirationTime !== undefined && (obj.expirationTime = message.expirationTime.toISOString());
    message.maxAmountOut !== undefined && (obj.maxAmountOut = message.maxAmountOut);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryEstimatePlaceLimitOrderRequest>, I>>(
    object: I,
  ): QueryEstimatePlaceLimitOrderRequest {
    const message = createBaseQueryEstimatePlaceLimitOrderRequest();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.tickIndexInToOut = object.tickIndexInToOut ?? 0;
    message.amountIn = object.amountIn ?? "";
    message.orderType = object.orderType ?? 0;
    message.expirationTime = object.expirationTime ?? undefined;
    message.maxAmountOut = object.maxAmountOut ?? "";
    return message;
  },
};

function createBaseQueryEstimatePlaceLimitOrderResponse(): QueryEstimatePlaceLimitOrderResponse {
  return { totalInCoin: undefined, swapInCoin: undefined, swapOutCoin: undefined };
}

export const QueryEstimatePlaceLimitOrderResponse = {
  encode(message: QueryEstimatePlaceLimitOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalInCoin !== undefined) {
      Coin.encode(message.totalInCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.swapInCoin !== undefined) {
      Coin.encode(message.swapInCoin, writer.uint32(18).fork()).ldelim();
    }
    if (message.swapOutCoin !== undefined) {
      Coin.encode(message.swapOutCoin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEstimatePlaceLimitOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimatePlaceLimitOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalInCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.swapInCoin = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.swapOutCoin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEstimatePlaceLimitOrderResponse {
    return {
      totalInCoin: isSet(object.totalInCoin) ? Coin.fromJSON(object.totalInCoin) : undefined,
      swapInCoin: isSet(object.swapInCoin) ? Coin.fromJSON(object.swapInCoin) : undefined,
      swapOutCoin: isSet(object.swapOutCoin) ? Coin.fromJSON(object.swapOutCoin) : undefined,
    };
  },

  toJSON(message: QueryEstimatePlaceLimitOrderResponse): unknown {
    const obj: any = {};
    message.totalInCoin !== undefined
      && (obj.totalInCoin = message.totalInCoin ? Coin.toJSON(message.totalInCoin) : undefined);
    message.swapInCoin !== undefined
      && (obj.swapInCoin = message.swapInCoin ? Coin.toJSON(message.swapInCoin) : undefined);
    message.swapOutCoin !== undefined
      && (obj.swapOutCoin = message.swapOutCoin ? Coin.toJSON(message.swapOutCoin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryEstimatePlaceLimitOrderResponse>, I>>(
    object: I,
  ): QueryEstimatePlaceLimitOrderResponse {
    const message = createBaseQueryEstimatePlaceLimitOrderResponse();
    message.totalInCoin = (object.totalInCoin !== undefined && object.totalInCoin !== null)
      ? Coin.fromPartial(object.totalInCoin)
      : undefined;
    message.swapInCoin = (object.swapInCoin !== undefined && object.swapInCoin !== null)
      ? Coin.fromPartial(object.swapInCoin)
      : undefined;
    message.swapOutCoin = (object.swapOutCoin !== undefined && object.swapOutCoin !== null)
      ? Coin.fromPartial(object.swapOutCoin)
      : undefined;
    return message;
  },
};

function createBaseQueryPoolRequest(): QueryPoolRequest {
  return { pairId: "", tickIndex: 0, fee: 0 };
}

export const QueryPoolRequest = {
  encode(message: QueryPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tickIndex !== 0) {
      writer.uint32(16).int64(message.tickIndex);
    }
    if (message.fee !== 0) {
      writer.uint32(24).uint64(message.fee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        case 2:
          message.tickIndex = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.fee = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolRequest {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      tickIndex: isSet(object.tickIndex) ? Number(object.tickIndex) : 0,
      fee: isSet(object.fee) ? Number(object.fee) : 0,
    };
  },

  toJSON(message: QueryPoolRequest): unknown {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.tickIndex !== undefined && (obj.tickIndex = Math.round(message.tickIndex));
    message.fee !== undefined && (obj.fee = Math.round(message.fee));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(object: I): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.pairId = object.pairId ?? "";
    message.tickIndex = object.tickIndex ?? 0;
    message.fee = object.fee ?? 0;
    return message;
  },
};

function createBaseQueryPoolByIDRequest(): QueryPoolByIDRequest {
  return { poolId: 0 };
}

export const QueryPoolByIDRequest = {
  encode(message: QueryPoolByIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolByIDRequest {
    return { poolId: isSet(object.poolId) ? Number(object.poolId) : 0 };
  },

  toJSON(message: QueryPoolByIDRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolByIDRequest>, I>>(object: I): QueryPoolByIDRequest {
    const message = createBaseQueryPoolByIDRequest();
    message.poolId = object.poolId ?? 0;
    return message;
  },
};

function createBaseQueryPoolResponse(): QueryPoolResponse {
  return { pool: undefined };
}

export const QueryPoolResponse = {
  encode(message: QueryPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolResponse {
    return { pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined };
  },

  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(object: I): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = (object.pool !== undefined && object.pool !== null) ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
};

function createBaseQueryGetPoolMetadataRequest(): QueryGetPoolMetadataRequest {
  return { id: 0 };
}

export const QueryGetPoolMetadataRequest = {
  encode(message: QueryGetPoolMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolMetadataRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetPoolMetadataRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolMetadataRequest>, I>>(object: I): QueryGetPoolMetadataRequest {
    const message = createBaseQueryGetPoolMetadataRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetPoolMetadataResponse(): QueryGetPoolMetadataResponse {
  return { PoolMetadata: undefined };
}

export const QueryGetPoolMetadataResponse = {
  encode(message: QueryGetPoolMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.PoolMetadata !== undefined) {
      PoolMetadata.encode(message.PoolMetadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.PoolMetadata = PoolMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolMetadataResponse {
    return { PoolMetadata: isSet(object.PoolMetadata) ? PoolMetadata.fromJSON(object.PoolMetadata) : undefined };
  },

  toJSON(message: QueryGetPoolMetadataResponse): unknown {
    const obj: any = {};
    message.PoolMetadata !== undefined
      && (obj.PoolMetadata = message.PoolMetadata ? PoolMetadata.toJSON(message.PoolMetadata) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolMetadataResponse>, I>>(object: I): QueryGetPoolMetadataResponse {
    const message = createBaseQueryGetPoolMetadataResponse();
    message.PoolMetadata = (object.PoolMetadata !== undefined && object.PoolMetadata !== null)
      ? PoolMetadata.fromPartial(object.PoolMetadata)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPoolMetadataRequest(): QueryAllPoolMetadataRequest {
  return { pagination: undefined };
}

export const QueryAllPoolMetadataRequest = {
  encode(message: QueryAllPoolMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolMetadataRequest();
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

  fromJSON(object: any): QueryAllPoolMetadataRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPoolMetadataRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolMetadataRequest>, I>>(object: I): QueryAllPoolMetadataRequest {
    const message = createBaseQueryAllPoolMetadataRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPoolMetadataResponse(): QueryAllPoolMetadataResponse {
  return { poolMetadata: [], pagination: undefined };
}

export const QueryAllPoolMetadataResponse = {
  encode(message: QueryAllPoolMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.poolMetadata) {
      PoolMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolMetadata.push(PoolMetadata.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPoolMetadataResponse {
    return {
      poolMetadata: Array.isArray(object?.poolMetadata)
        ? object.poolMetadata.map((e: any) => PoolMetadata.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPoolMetadataResponse): unknown {
    const obj: any = {};
    if (message.poolMetadata) {
      obj.poolMetadata = message.poolMetadata.map((e) => e ? PoolMetadata.toJSON(e) : undefined);
    } else {
      obj.poolMetadata = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolMetadataResponse>, I>>(object: I): QueryAllPoolMetadataResponse {
    const message = createBaseQueryAllPoolMetadataResponse();
    message.poolMetadata = object.poolMetadata?.map((e) => PoolMetadata.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a LimitOrderTrancheUser by index. */
  LimitOrderTrancheUser(request: QueryGetLimitOrderTrancheUserRequest): Promise<QueryGetLimitOrderTrancheUserResponse>;
  /** Queries a list of LimitOrderTrancheMap items. */
  LimitOrderTrancheUserAll(
    request: QueryAllLimitOrderTrancheUserRequest,
  ): Promise<QueryAllLimitOrderTrancheUserResponse>;
  /** Queries a list of LimitOrderTrancheUser items for a given address. */
  LimitOrderTrancheUserAllByAddress(request: QueryAllUserLimitOrdersRequest): Promise<QueryAllUserLimitOrdersResponse>;
  /** Queries a LimitOrderTranche by index. */
  LimitOrderTranche(request: QueryGetLimitOrderTrancheRequest): Promise<QueryGetLimitOrderTrancheResponse>;
  /** Queries a list of LimitOrderTranche items for a given pairID / TokenIn combination. */
  LimitOrderTrancheAll(request: QueryAllLimitOrderTrancheRequest): Promise<QueryAllLimitOrderTrancheResponse>;
  /** Queries a list of UserDeposits items. */
  UserDepositsAll(request: QueryAllUserDepositsRequest): Promise<QueryAllUserDepositsResponse>;
  /** Queries a list of TickLiquidity items. */
  TickLiquidityAll(request: QueryAllTickLiquidityRequest): Promise<QueryAllTickLiquidityResponse>;
  /** Queries a InactiveLimitOrderTranche by index. */
  InactiveLimitOrderTranche(
    request: QueryGetInactiveLimitOrderTrancheRequest,
  ): Promise<QueryGetInactiveLimitOrderTrancheResponse>;
  /** Queries a list of InactiveLimitOrderTranche items. */
  InactiveLimitOrderTrancheAll(
    request: QueryAllInactiveLimitOrderTrancheRequest,
  ): Promise<QueryAllInactiveLimitOrderTrancheResponse>;
  /** Queries a list of PoolReserves items. */
  PoolReservesAll(request: QueryAllPoolReservesRequest): Promise<QueryAllPoolReservesResponse>;
  /** Queries a PoolReserve by index */
  PoolReserves(request: QueryGetPoolReservesRequest): Promise<QueryGetPoolReservesResponse>;
  /** Queries the simulated result of a multihop swap */
  EstimateMultiHopSwap(request: QueryEstimateMultiHopSwapRequest): Promise<QueryEstimateMultiHopSwapResponse>;
  /** Queries the simulated result of a multihop swap */
  EstimatePlaceLimitOrder(request: QueryEstimatePlaceLimitOrderRequest): Promise<QueryEstimatePlaceLimitOrderResponse>;
  /** Queries a pool by pair, tick and fee */
  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
  /** Queries a pool by ID */
  PoolByID(request: QueryPoolByIDRequest): Promise<QueryPoolResponse>;
  /** Queries a PoolMetadata by ID */
  PoolMetadata(request: QueryGetPoolMetadataRequest): Promise<QueryGetPoolMetadataResponse>;
  /** Queries a list of PoolMetadata items. */
  PoolMetadataAll(request: QueryAllPoolMetadataRequest): Promise<QueryAllPoolMetadataResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.LimitOrderTrancheUser = this.LimitOrderTrancheUser.bind(this);
    this.LimitOrderTrancheUserAll = this.LimitOrderTrancheUserAll.bind(this);
    this.LimitOrderTrancheUserAllByAddress = this.LimitOrderTrancheUserAllByAddress.bind(this);
    this.LimitOrderTranche = this.LimitOrderTranche.bind(this);
    this.LimitOrderTrancheAll = this.LimitOrderTrancheAll.bind(this);
    this.UserDepositsAll = this.UserDepositsAll.bind(this);
    this.TickLiquidityAll = this.TickLiquidityAll.bind(this);
    this.InactiveLimitOrderTranche = this.InactiveLimitOrderTranche.bind(this);
    this.InactiveLimitOrderTrancheAll = this.InactiveLimitOrderTrancheAll.bind(this);
    this.PoolReservesAll = this.PoolReservesAll.bind(this);
    this.PoolReserves = this.PoolReserves.bind(this);
    this.EstimateMultiHopSwap = this.EstimateMultiHopSwap.bind(this);
    this.EstimatePlaceLimitOrder = this.EstimatePlaceLimitOrder.bind(this);
    this.Pool = this.Pool.bind(this);
    this.PoolByID = this.PoolByID.bind(this);
    this.PoolMetadata = this.PoolMetadata.bind(this);
    this.PoolMetadataAll = this.PoolMetadataAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  LimitOrderTrancheUser(request: QueryGetLimitOrderTrancheUserRequest): Promise<QueryGetLimitOrderTrancheUserResponse> {
    const data = QueryGetLimitOrderTrancheUserRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "LimitOrderTrancheUser", data);
    return promise.then((data) => QueryGetLimitOrderTrancheUserResponse.decode(new _m0.Reader(data)));
  }

  LimitOrderTrancheUserAll(
    request: QueryAllLimitOrderTrancheUserRequest,
  ): Promise<QueryAllLimitOrderTrancheUserResponse> {
    const data = QueryAllLimitOrderTrancheUserRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "LimitOrderTrancheUserAll", data);
    return promise.then((data) => QueryAllLimitOrderTrancheUserResponse.decode(new _m0.Reader(data)));
  }

  LimitOrderTrancheUserAllByAddress(request: QueryAllUserLimitOrdersRequest): Promise<QueryAllUserLimitOrdersResponse> {
    const data = QueryAllUserLimitOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "LimitOrderTrancheUserAllByAddress", data);
    return promise.then((data) => QueryAllUserLimitOrdersResponse.decode(new _m0.Reader(data)));
  }

  LimitOrderTranche(request: QueryGetLimitOrderTrancheRequest): Promise<QueryGetLimitOrderTrancheResponse> {
    const data = QueryGetLimitOrderTrancheRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "LimitOrderTranche", data);
    return promise.then((data) => QueryGetLimitOrderTrancheResponse.decode(new _m0.Reader(data)));
  }

  LimitOrderTrancheAll(request: QueryAllLimitOrderTrancheRequest): Promise<QueryAllLimitOrderTrancheResponse> {
    const data = QueryAllLimitOrderTrancheRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "LimitOrderTrancheAll", data);
    return promise.then((data) => QueryAllLimitOrderTrancheResponse.decode(new _m0.Reader(data)));
  }

  UserDepositsAll(request: QueryAllUserDepositsRequest): Promise<QueryAllUserDepositsResponse> {
    const data = QueryAllUserDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "UserDepositsAll", data);
    return promise.then((data) => QueryAllUserDepositsResponse.decode(new _m0.Reader(data)));
  }

  TickLiquidityAll(request: QueryAllTickLiquidityRequest): Promise<QueryAllTickLiquidityResponse> {
    const data = QueryAllTickLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "TickLiquidityAll", data);
    return promise.then((data) => QueryAllTickLiquidityResponse.decode(new _m0.Reader(data)));
  }

  InactiveLimitOrderTranche(
    request: QueryGetInactiveLimitOrderTrancheRequest,
  ): Promise<QueryGetInactiveLimitOrderTrancheResponse> {
    const data = QueryGetInactiveLimitOrderTrancheRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "InactiveLimitOrderTranche", data);
    return promise.then((data) => QueryGetInactiveLimitOrderTrancheResponse.decode(new _m0.Reader(data)));
  }

  InactiveLimitOrderTrancheAll(
    request: QueryAllInactiveLimitOrderTrancheRequest,
  ): Promise<QueryAllInactiveLimitOrderTrancheResponse> {
    const data = QueryAllInactiveLimitOrderTrancheRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "InactiveLimitOrderTrancheAll", data);
    return promise.then((data) => QueryAllInactiveLimitOrderTrancheResponse.decode(new _m0.Reader(data)));
  }

  PoolReservesAll(request: QueryAllPoolReservesRequest): Promise<QueryAllPoolReservesResponse> {
    const data = QueryAllPoolReservesRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "PoolReservesAll", data);
    return promise.then((data) => QueryAllPoolReservesResponse.decode(new _m0.Reader(data)));
  }

  PoolReserves(request: QueryGetPoolReservesRequest): Promise<QueryGetPoolReservesResponse> {
    const data = QueryGetPoolReservesRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "PoolReserves", data);
    return promise.then((data) => QueryGetPoolReservesResponse.decode(new _m0.Reader(data)));
  }

  EstimateMultiHopSwap(request: QueryEstimateMultiHopSwapRequest): Promise<QueryEstimateMultiHopSwapResponse> {
    const data = QueryEstimateMultiHopSwapRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "EstimateMultiHopSwap", data);
    return promise.then((data) => QueryEstimateMultiHopSwapResponse.decode(new _m0.Reader(data)));
  }

  EstimatePlaceLimitOrder(request: QueryEstimatePlaceLimitOrderRequest): Promise<QueryEstimatePlaceLimitOrderResponse> {
    const data = QueryEstimatePlaceLimitOrderRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "EstimatePlaceLimitOrder", data);
    return promise.then((data) => QueryEstimatePlaceLimitOrderResponse.decode(new _m0.Reader(data)));
  }

  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "Pool", data);
    return promise.then((data) => QueryPoolResponse.decode(new _m0.Reader(data)));
  }

  PoolByID(request: QueryPoolByIDRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolByIDRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "PoolByID", data);
    return promise.then((data) => QueryPoolResponse.decode(new _m0.Reader(data)));
  }

  PoolMetadata(request: QueryGetPoolMetadataRequest): Promise<QueryGetPoolMetadataResponse> {
    const data = QueryGetPoolMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "PoolMetadata", data);
    return promise.then((data) => QueryGetPoolMetadataResponse.decode(new _m0.Reader(data)));
  }

  PoolMetadataAll(request: QueryAllPoolMetadataRequest): Promise<QueryAllPoolMetadataResponse> {
    const data = QueryAllPoolMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "PoolMetadataAll", data);
    return promise.then((data) => QueryAllPoolMetadataResponse.decode(new _m0.Reader(data)));
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
