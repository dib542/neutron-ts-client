/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Height } from "../../ibc/core/client/v1/client";
import { Params } from "./params";

export const protobufPackage = "neutron.interchainqueries";

export interface RegisteredQuery {
  /** The unique id of the registered query. */
  id: number;
  /** The address that registered the query. */
  owner: string;
  /** The query type identifier: `kv` or `tx` now */
  queryType: string;
  /** The KV-storage keys for which we want to get values from remote chain */
  keys: KVKey[];
  /** The filter for transaction search ICQ */
  transactionsFilter: string;
  /** The IBC connection ID for getting ConsensusState to verify proofs */
  connectionId: string;
  /** Parameter that defines how often the query must be updated. */
  updatePeriod: number;
  /** The local chain last block height when the query result was updated. */
  lastSubmittedResultLocalHeight: number;
  /** The remote chain last block height when the query result was updated. */
  lastSubmittedResultRemoteHeight:
    | Height
    | undefined;
  /** Amount of coins deposited for the query. */
  deposit: Coin[];
  /** Timeout before query becomes available for everybody to remove. */
  submitTimeout: number;
  /** The local chain height when the query was registered. */
  registeredAtHeight: number;
}

export interface KVKey {
  /**
   * Path (storage prefix) to the storage where you want to read value by key
   * (usually name of cosmos-sdk module: 'staking', 'bank', etc.)
   */
  path: string;
  /** Key you want to read from the storage */
  key: Uint8Array;
}

/** GenesisState defines the interchainqueries module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  registeredQueries: RegisteredQuery[];
}

function createBaseRegisteredQuery(): RegisteredQuery {
  return {
    id: 0,
    owner: "",
    queryType: "",
    keys: [],
    transactionsFilter: "",
    connectionId: "",
    updatePeriod: 0,
    lastSubmittedResultLocalHeight: 0,
    lastSubmittedResultRemoteHeight: undefined,
    deposit: [],
    submitTimeout: 0,
    registeredAtHeight: 0,
  };
}

export const RegisteredQuery = {
  encode(message: RegisteredQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.queryType !== "") {
      writer.uint32(26).string(message.queryType);
    }
    for (const v of message.keys) {
      KVKey.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.transactionsFilter !== "") {
      writer.uint32(42).string(message.transactionsFilter);
    }
    if (message.connectionId !== "") {
      writer.uint32(50).string(message.connectionId);
    }
    if (message.updatePeriod !== 0) {
      writer.uint32(56).uint64(message.updatePeriod);
    }
    if (message.lastSubmittedResultLocalHeight !== 0) {
      writer.uint32(64).uint64(message.lastSubmittedResultLocalHeight);
    }
    if (message.lastSubmittedResultRemoteHeight !== undefined) {
      Height.encode(message.lastSubmittedResultRemoteHeight, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.deposit) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.submitTimeout !== 0) {
      writer.uint32(88).uint64(message.submitTimeout);
    }
    if (message.registeredAtHeight !== 0) {
      writer.uint32(96).uint64(message.registeredAtHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.queryType = reader.string();
          break;
        case 4:
          message.keys.push(KVKey.decode(reader, reader.uint32()));
          break;
        case 5:
          message.transactionsFilter = reader.string();
          break;
        case 6:
          message.connectionId = reader.string();
          break;
        case 7:
          message.updatePeriod = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.lastSubmittedResultLocalHeight = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.lastSubmittedResultRemoteHeight = Height.decode(reader, reader.uint32());
          break;
        case 10:
          message.deposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 11:
          message.submitTimeout = longToNumber(reader.uint64() as Long);
          break;
        case 12:
          message.registeredAtHeight = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisteredQuery {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      owner: isSet(object.owner) ? String(object.owner) : "",
      queryType: isSet(object.queryType) ? String(object.queryType) : "",
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => KVKey.fromJSON(e)) : [],
      transactionsFilter: isSet(object.transactionsFilter) ? String(object.transactionsFilter) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      updatePeriod: isSet(object.updatePeriod) ? Number(object.updatePeriod) : 0,
      lastSubmittedResultLocalHeight: isSet(object.lastSubmittedResultLocalHeight)
        ? Number(object.lastSubmittedResultLocalHeight)
        : 0,
      lastSubmittedResultRemoteHeight: isSet(object.lastSubmittedResultRemoteHeight)
        ? Height.fromJSON(object.lastSubmittedResultRemoteHeight)
        : undefined,
      deposit: Array.isArray(object?.deposit) ? object.deposit.map((e: any) => Coin.fromJSON(e)) : [],
      submitTimeout: isSet(object.submitTimeout) ? Number(object.submitTimeout) : 0,
      registeredAtHeight: isSet(object.registeredAtHeight) ? Number(object.registeredAtHeight) : 0,
    };
  },

  toJSON(message: RegisteredQuery): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.owner !== undefined && (obj.owner = message.owner);
    message.queryType !== undefined && (obj.queryType = message.queryType);
    if (message.keys) {
      obj.keys = message.keys.map((e) => e ? KVKey.toJSON(e) : undefined);
    } else {
      obj.keys = [];
    }
    message.transactionsFilter !== undefined && (obj.transactionsFilter = message.transactionsFilter);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.updatePeriod !== undefined && (obj.updatePeriod = Math.round(message.updatePeriod));
    message.lastSubmittedResultLocalHeight !== undefined
      && (obj.lastSubmittedResultLocalHeight = Math.round(message.lastSubmittedResultLocalHeight));
    message.lastSubmittedResultRemoteHeight !== undefined
      && (obj.lastSubmittedResultRemoteHeight = message.lastSubmittedResultRemoteHeight
        ? Height.toJSON(message.lastSubmittedResultRemoteHeight)
        : undefined);
    if (message.deposit) {
      obj.deposit = message.deposit.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.deposit = [];
    }
    message.submitTimeout !== undefined && (obj.submitTimeout = Math.round(message.submitTimeout));
    message.registeredAtHeight !== undefined && (obj.registeredAtHeight = Math.round(message.registeredAtHeight));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisteredQuery>, I>>(object: I): RegisteredQuery {
    const message = createBaseRegisteredQuery();
    message.id = object.id ?? 0;
    message.owner = object.owner ?? "";
    message.queryType = object.queryType ?? "";
    message.keys = object.keys?.map((e) => KVKey.fromPartial(e)) || [];
    message.transactionsFilter = object.transactionsFilter ?? "";
    message.connectionId = object.connectionId ?? "";
    message.updatePeriod = object.updatePeriod ?? 0;
    message.lastSubmittedResultLocalHeight = object.lastSubmittedResultLocalHeight ?? 0;
    message.lastSubmittedResultRemoteHeight =
      (object.lastSubmittedResultRemoteHeight !== undefined && object.lastSubmittedResultRemoteHeight !== null)
        ? Height.fromPartial(object.lastSubmittedResultRemoteHeight)
        : undefined;
    message.deposit = object.deposit?.map((e) => Coin.fromPartial(e)) || [];
    message.submitTimeout = object.submitTimeout ?? 0;
    message.registeredAtHeight = object.registeredAtHeight ?? 0;
    return message;
  },
};

function createBaseKVKey(): KVKey {
  return { path: "", key: new Uint8Array() };
}

export const KVKey = {
  encode(message: KVKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KVKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKVKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KVKey {
    return {
      path: isSet(object.path) ? String(object.path) : "",
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
    };
  },

  toJSON(message: KVKey): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.key !== undefined
      && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KVKey>, I>>(object: I): KVKey {
    const message = createBaseKVKey();
    message.path = object.path ?? "";
    message.key = object.key ?? new Uint8Array();
    return message;
  },
};

function createBaseGenesisState(): GenesisState {
  return { params: undefined, registeredQueries: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.registeredQueries) {
      RegisteredQuery.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.registeredQueries.push(RegisteredQuery.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      registeredQueries: Array.isArray(object?.registeredQueries)
        ? object.registeredQueries.map((e: any) => RegisteredQuery.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.registeredQueries) {
      obj.registeredQueries = message.registeredQueries.map((e) => e ? RegisteredQuery.toJSON(e) : undefined);
    } else {
      obj.registeredQueries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.registeredQueries = object.registeredQueries?.map((e) => RegisteredQuery.fromPartial(e)) || [];
    return message;
  },
};

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
