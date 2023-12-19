/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../google/protobuf/any";
import { ResponseDeliverTx } from "../../tendermint/abci/types";
import { Proof, ProofOps } from "../../tendermint/crypto/proof";
import { KVKey } from "./genesis";
import { Params } from "./params";

export const protobufPackage = "neutron.interchainqueries";

export interface MsgRegisterInterchainQuery {
  /** defines a query type: `kv` or `tx` now */
  queryType: string;
  /**
   * is used to define KV-storage keys for which we want to get values from
   * remote chain
   */
  keys: KVKey[];
  /** is used to define a filter for transaction search ICQ */
  transactionsFilter: string;
  /** is IBC connection ID for getting ConsensusState to verify proofs */
  connectionId: string;
  /** is used to specify how often (in neutron blocks) the query must be updated */
  updatePeriod: number;
  /** is the signer of the message */
  sender: string;
}

export interface MsgRegisterInterchainQueryResponse {
  id: number;
}

export interface MsgSubmitQueryResult {
  queryId: number;
  sender: string;
  /**
   * is the IBC client ID for an IBC connection between Neutron chain and target
   * chain (where the result was obtained from)
   */
  clientId: string;
  result: QueryResult | undefined;
}

export interface QueryResult {
  kvResults: StorageValue[];
  block: Block | undefined;
  height: number;
  revision: number;
  allowKvCallbacks: boolean;
}

export interface StorageValue {
  /** is the substore name (acc, staking, etc.) */
  storagePrefix: string;
  /** is the key in IAVL store */
  key: Uint8Array;
  /** is the value in IAVL store */
  value: Uint8Array;
  /**
   * is the Merkle Proof which proves existence of key-value pair in IAVL
   * storage
   */
  Proof: ProofOps | undefined;
}

export interface Block {
  /**
   * We need to know block X+1 to verify response of transaction for block X
   * since LastResultsHash is root hash of all results from the txs from the
   * previous block
   */
  nextBlockHeader:
    | Any
    | undefined;
  /** We need to know block X to verify inclusion of transaction for block X */
  header: Any | undefined;
  tx: TxValue | undefined;
}

export interface TxValue {
  response:
    | ResponseDeliverTx
    | undefined;
  /**
   * is the Merkle Proof which proves existence of response in block with height
   * next_block_header.Height
   */
  deliveryProof:
    | Proof
    | undefined;
  /**
   * is the Merkle Proof which proves existence of data in block with height
   * header.Height
   */
  inclusionProof:
    | Proof
    | undefined;
  /** is body of the transaction */
  data: Uint8Array;
}

export interface MsgSubmitQueryResultResponse {
}

export interface MsgRemoveInterchainQueryRequest {
  queryId: number;
  /** is the signer of the message */
  sender: string;
}

export interface MsgRemoveInterchainQueryResponse {
}

export interface MsgUpdateInterchainQueryRequest {
  queryId: number;
  newKeys: KVKey[];
  newUpdatePeriod: number;
  newTransactionsFilter: string;
  /** is the signer of the message */
  sender: string;
}

export interface MsgUpdateInterchainQueryResponse {
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
   * params defines the x/interchainqueries parameters to update.
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

function createBaseMsgRegisterInterchainQuery(): MsgRegisterInterchainQuery {
  return { queryType: "", keys: [], transactionsFilter: "", connectionId: "", updatePeriod: 0, sender: "" };
}

export const MsgRegisterInterchainQuery = {
  encode(message: MsgRegisterInterchainQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queryType !== "") {
      writer.uint32(10).string(message.queryType);
    }
    for (const v of message.keys) {
      KVKey.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.transactionsFilter !== "") {
      writer.uint32(26).string(message.transactionsFilter);
    }
    if (message.connectionId !== "") {
      writer.uint32(34).string(message.connectionId);
    }
    if (message.updatePeriod !== 0) {
      writer.uint32(40).uint64(message.updatePeriod);
    }
    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterInterchainQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInterchainQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryType = reader.string();
          break;
        case 2:
          message.keys.push(KVKey.decode(reader, reader.uint32()));
          break;
        case 3:
          message.transactionsFilter = reader.string();
          break;
        case 4:
          message.connectionId = reader.string();
          break;
        case 5:
          message.updatePeriod = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterInterchainQuery {
    return {
      queryType: isSet(object.queryType) ? String(object.queryType) : "",
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => KVKey.fromJSON(e)) : [],
      transactionsFilter: isSet(object.transactionsFilter) ? String(object.transactionsFilter) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      updatePeriod: isSet(object.updatePeriod) ? Number(object.updatePeriod) : 0,
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgRegisterInterchainQuery): unknown {
    const obj: any = {};
    message.queryType !== undefined && (obj.queryType = message.queryType);
    if (message.keys) {
      obj.keys = message.keys.map((e) => e ? KVKey.toJSON(e) : undefined);
    } else {
      obj.keys = [];
    }
    message.transactionsFilter !== undefined && (obj.transactionsFilter = message.transactionsFilter);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.updatePeriod !== undefined && (obj.updatePeriod = Math.round(message.updatePeriod));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterInterchainQuery>, I>>(object: I): MsgRegisterInterchainQuery {
    const message = createBaseMsgRegisterInterchainQuery();
    message.queryType = object.queryType ?? "";
    message.keys = object.keys?.map((e) => KVKey.fromPartial(e)) || [];
    message.transactionsFilter = object.transactionsFilter ?? "";
    message.connectionId = object.connectionId ?? "";
    message.updatePeriod = object.updatePeriod ?? 0;
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgRegisterInterchainQueryResponse(): MsgRegisterInterchainQueryResponse {
  return { id: 0 };
}

export const MsgRegisterInterchainQueryResponse = {
  encode(message: MsgRegisterInterchainQueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterInterchainQueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInterchainQueryResponse();
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

  fromJSON(object: any): MsgRegisterInterchainQueryResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgRegisterInterchainQueryResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterInterchainQueryResponse>, I>>(
    object: I,
  ): MsgRegisterInterchainQueryResponse {
    const message = createBaseMsgRegisterInterchainQueryResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgSubmitQueryResult(): MsgSubmitQueryResult {
  return { queryId: 0, sender: "", clientId: "", result: undefined };
}

export const MsgSubmitQueryResult = {
  encode(message: MsgSubmitQueryResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queryId !== 0) {
      writer.uint32(8).uint64(message.queryId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.clientId !== "") {
      writer.uint32(26).string(message.clientId);
    }
    if (message.result !== undefined) {
      QueryResult.encode(message.result, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitQueryResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitQueryResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.clientId = reader.string();
          break;
        case 4:
          message.result = QueryResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitQueryResult {
    return {
      queryId: isSet(object.queryId) ? Number(object.queryId) : 0,
      sender: isSet(object.sender) ? String(object.sender) : "",
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      result: isSet(object.result) ? QueryResult.fromJSON(object.result) : undefined,
    };
  },

  toJSON(message: MsgSubmitQueryResult): unknown {
    const obj: any = {};
    message.queryId !== undefined && (obj.queryId = Math.round(message.queryId));
    message.sender !== undefined && (obj.sender = message.sender);
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.result !== undefined && (obj.result = message.result ? QueryResult.toJSON(message.result) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitQueryResult>, I>>(object: I): MsgSubmitQueryResult {
    const message = createBaseMsgSubmitQueryResult();
    message.queryId = object.queryId ?? 0;
    message.sender = object.sender ?? "";
    message.clientId = object.clientId ?? "";
    message.result = (object.result !== undefined && object.result !== null)
      ? QueryResult.fromPartial(object.result)
      : undefined;
    return message;
  },
};

function createBaseQueryResult(): QueryResult {
  return { kvResults: [], block: undefined, height: 0, revision: 0, allowKvCallbacks: false };
}

export const QueryResult = {
  encode(message: QueryResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.kvResults) {
      StorageValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== 0) {
      writer.uint32(24).uint64(message.height);
    }
    if (message.revision !== 0) {
      writer.uint32(32).uint64(message.revision);
    }
    if (message.allowKvCallbacks === true) {
      writer.uint32(40).bool(message.allowKvCallbacks);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kvResults.push(StorageValue.decode(reader, reader.uint32()));
          break;
        case 2:
          message.block = Block.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.revision = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.allowKvCallbacks = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryResult {
    return {
      kvResults: Array.isArray(object?.kvResults) ? object.kvResults.map((e: any) => StorageValue.fromJSON(e)) : [],
      block: isSet(object.block) ? Block.fromJSON(object.block) : undefined,
      height: isSet(object.height) ? Number(object.height) : 0,
      revision: isSet(object.revision) ? Number(object.revision) : 0,
      allowKvCallbacks: isSet(object.allowKvCallbacks) ? Boolean(object.allowKvCallbacks) : false,
    };
  },

  toJSON(message: QueryResult): unknown {
    const obj: any = {};
    if (message.kvResults) {
      obj.kvResults = message.kvResults.map((e) => e ? StorageValue.toJSON(e) : undefined);
    } else {
      obj.kvResults = [];
    }
    message.block !== undefined && (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.revision !== undefined && (obj.revision = Math.round(message.revision));
    message.allowKvCallbacks !== undefined && (obj.allowKvCallbacks = message.allowKvCallbacks);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryResult>, I>>(object: I): QueryResult {
    const message = createBaseQueryResult();
    message.kvResults = object.kvResults?.map((e) => StorageValue.fromPartial(e)) || [];
    message.block = (object.block !== undefined && object.block !== null) ? Block.fromPartial(object.block) : undefined;
    message.height = object.height ?? 0;
    message.revision = object.revision ?? 0;
    message.allowKvCallbacks = object.allowKvCallbacks ?? false;
    return message;
  },
};

function createBaseStorageValue(): StorageValue {
  return { storagePrefix: "", key: new Uint8Array(), value: new Uint8Array(), Proof: undefined };
}

export const StorageValue = {
  encode(message: StorageValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storagePrefix !== "") {
      writer.uint32(10).string(message.storagePrefix);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(26).bytes(message.value);
    }
    if (message.Proof !== undefined) {
      ProofOps.encode(message.Proof, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StorageValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storagePrefix = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        case 3:
          message.value = reader.bytes();
          break;
        case 4:
          message.Proof = ProofOps.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StorageValue {
    return {
      storagePrefix: isSet(object.storagePrefix) ? String(object.storagePrefix) : "",
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      Proof: isSet(object.Proof) ? ProofOps.fromJSON(object.Proof) : undefined,
    };
  },

  toJSON(message: StorageValue): unknown {
    const obj: any = {};
    message.storagePrefix !== undefined && (obj.storagePrefix = message.storagePrefix);
    message.key !== undefined
      && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined
      && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    message.Proof !== undefined && (obj.Proof = message.Proof ? ProofOps.toJSON(message.Proof) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StorageValue>, I>>(object: I): StorageValue {
    const message = createBaseStorageValue();
    message.storagePrefix = object.storagePrefix ?? "";
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.Proof = (object.Proof !== undefined && object.Proof !== null)
      ? ProofOps.fromPartial(object.Proof)
      : undefined;
    return message;
  },
};

function createBaseBlock(): Block {
  return { nextBlockHeader: undefined, header: undefined, tx: undefined };
}

export const Block = {
  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nextBlockHeader !== undefined) {
      Any.encode(message.nextBlockHeader, writer.uint32(10).fork()).ldelim();
    }
    if (message.header !== undefined) {
      Any.encode(message.header, writer.uint32(18).fork()).ldelim();
    }
    if (message.tx !== undefined) {
      TxValue.encode(message.tx, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextBlockHeader = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.header = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.tx = TxValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Block {
    return {
      nextBlockHeader: isSet(object.nextBlockHeader) ? Any.fromJSON(object.nextBlockHeader) : undefined,
      header: isSet(object.header) ? Any.fromJSON(object.header) : undefined,
      tx: isSet(object.tx) ? TxValue.fromJSON(object.tx) : undefined,
    };
  },

  toJSON(message: Block): unknown {
    const obj: any = {};
    message.nextBlockHeader !== undefined
      && (obj.nextBlockHeader = message.nextBlockHeader ? Any.toJSON(message.nextBlockHeader) : undefined);
    message.header !== undefined && (obj.header = message.header ? Any.toJSON(message.header) : undefined);
    message.tx !== undefined && (obj.tx = message.tx ? TxValue.toJSON(message.tx) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Block>, I>>(object: I): Block {
    const message = createBaseBlock();
    message.nextBlockHeader = (object.nextBlockHeader !== undefined && object.nextBlockHeader !== null)
      ? Any.fromPartial(object.nextBlockHeader)
      : undefined;
    message.header = (object.header !== undefined && object.header !== null)
      ? Any.fromPartial(object.header)
      : undefined;
    message.tx = (object.tx !== undefined && object.tx !== null) ? TxValue.fromPartial(object.tx) : undefined;
    return message;
  },
};

function createBaseTxValue(): TxValue {
  return { response: undefined, deliveryProof: undefined, inclusionProof: undefined, data: new Uint8Array() };
}

export const TxValue = {
  encode(message: TxValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== undefined) {
      ResponseDeliverTx.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    if (message.deliveryProof !== undefined) {
      Proof.encode(message.deliveryProof, writer.uint32(18).fork()).ldelim();
    }
    if (message.inclusionProof !== undefined) {
      Proof.encode(message.inclusionProof, writer.uint32(26).fork()).ldelim();
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = ResponseDeliverTx.decode(reader, reader.uint32());
          break;
        case 2:
          message.deliveryProof = Proof.decode(reader, reader.uint32());
          break;
        case 3:
          message.inclusionProof = Proof.decode(reader, reader.uint32());
          break;
        case 4:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TxValue {
    return {
      response: isSet(object.response) ? ResponseDeliverTx.fromJSON(object.response) : undefined,
      deliveryProof: isSet(object.deliveryProof) ? Proof.fromJSON(object.deliveryProof) : undefined,
      inclusionProof: isSet(object.inclusionProof) ? Proof.fromJSON(object.inclusionProof) : undefined,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
    };
  },

  toJSON(message: TxValue): unknown {
    const obj: any = {};
    message.response !== undefined
      && (obj.response = message.response ? ResponseDeliverTx.toJSON(message.response) : undefined);
    message.deliveryProof !== undefined
      && (obj.deliveryProof = message.deliveryProof ? Proof.toJSON(message.deliveryProof) : undefined);
    message.inclusionProof !== undefined
      && (obj.inclusionProof = message.inclusionProof ? Proof.toJSON(message.inclusionProof) : undefined);
    message.data !== undefined
      && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TxValue>, I>>(object: I): TxValue {
    const message = createBaseTxValue();
    message.response = (object.response !== undefined && object.response !== null)
      ? ResponseDeliverTx.fromPartial(object.response)
      : undefined;
    message.deliveryProof = (object.deliveryProof !== undefined && object.deliveryProof !== null)
      ? Proof.fromPartial(object.deliveryProof)
      : undefined;
    message.inclusionProof = (object.inclusionProof !== undefined && object.inclusionProof !== null)
      ? Proof.fromPartial(object.inclusionProof)
      : undefined;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgSubmitQueryResultResponse(): MsgSubmitQueryResultResponse {
  return {};
}

export const MsgSubmitQueryResultResponse = {
  encode(_: MsgSubmitQueryResultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitQueryResultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitQueryResultResponse();
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

  fromJSON(_: any): MsgSubmitQueryResultResponse {
    return {};
  },

  toJSON(_: MsgSubmitQueryResultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitQueryResultResponse>, I>>(_: I): MsgSubmitQueryResultResponse {
    const message = createBaseMsgSubmitQueryResultResponse();
    return message;
  },
};

function createBaseMsgRemoveInterchainQueryRequest(): MsgRemoveInterchainQueryRequest {
  return { queryId: 0, sender: "" };
}

export const MsgRemoveInterchainQueryRequest = {
  encode(message: MsgRemoveInterchainQueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queryId !== 0) {
      writer.uint32(8).uint64(message.queryId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveInterchainQueryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveInterchainQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveInterchainQueryRequest {
    return {
      queryId: isSet(object.queryId) ? Number(object.queryId) : 0,
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgRemoveInterchainQueryRequest): unknown {
    const obj: any = {};
    message.queryId !== undefined && (obj.queryId = Math.round(message.queryId));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveInterchainQueryRequest>, I>>(
    object: I,
  ): MsgRemoveInterchainQueryRequest {
    const message = createBaseMsgRemoveInterchainQueryRequest();
    message.queryId = object.queryId ?? 0;
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgRemoveInterchainQueryResponse(): MsgRemoveInterchainQueryResponse {
  return {};
}

export const MsgRemoveInterchainQueryResponse = {
  encode(_: MsgRemoveInterchainQueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveInterchainQueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveInterchainQueryResponse();
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

  fromJSON(_: any): MsgRemoveInterchainQueryResponse {
    return {};
  },

  toJSON(_: MsgRemoveInterchainQueryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveInterchainQueryResponse>, I>>(
    _: I,
  ): MsgRemoveInterchainQueryResponse {
    const message = createBaseMsgRemoveInterchainQueryResponse();
    return message;
  },
};

function createBaseMsgUpdateInterchainQueryRequest(): MsgUpdateInterchainQueryRequest {
  return { queryId: 0, newKeys: [], newUpdatePeriod: 0, newTransactionsFilter: "", sender: "" };
}

export const MsgUpdateInterchainQueryRequest = {
  encode(message: MsgUpdateInterchainQueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queryId !== 0) {
      writer.uint32(8).uint64(message.queryId);
    }
    for (const v of message.newKeys) {
      KVKey.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.newUpdatePeriod !== 0) {
      writer.uint32(24).uint64(message.newUpdatePeriod);
    }
    if (message.newTransactionsFilter !== "") {
      writer.uint32(34).string(message.newTransactionsFilter);
    }
    if (message.sender !== "") {
      writer.uint32(42).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateInterchainQueryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInterchainQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.newKeys.push(KVKey.decode(reader, reader.uint32()));
          break;
        case 3:
          message.newUpdatePeriod = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.newTransactionsFilter = reader.string();
          break;
        case 5:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateInterchainQueryRequest {
    return {
      queryId: isSet(object.queryId) ? Number(object.queryId) : 0,
      newKeys: Array.isArray(object?.newKeys) ? object.newKeys.map((e: any) => KVKey.fromJSON(e)) : [],
      newUpdatePeriod: isSet(object.newUpdatePeriod) ? Number(object.newUpdatePeriod) : 0,
      newTransactionsFilter: isSet(object.newTransactionsFilter) ? String(object.newTransactionsFilter) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgUpdateInterchainQueryRequest): unknown {
    const obj: any = {};
    message.queryId !== undefined && (obj.queryId = Math.round(message.queryId));
    if (message.newKeys) {
      obj.newKeys = message.newKeys.map((e) => e ? KVKey.toJSON(e) : undefined);
    } else {
      obj.newKeys = [];
    }
    message.newUpdatePeriod !== undefined && (obj.newUpdatePeriod = Math.round(message.newUpdatePeriod));
    message.newTransactionsFilter !== undefined && (obj.newTransactionsFilter = message.newTransactionsFilter);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateInterchainQueryRequest>, I>>(
    object: I,
  ): MsgUpdateInterchainQueryRequest {
    const message = createBaseMsgUpdateInterchainQueryRequest();
    message.queryId = object.queryId ?? 0;
    message.newKeys = object.newKeys?.map((e) => KVKey.fromPartial(e)) || [];
    message.newUpdatePeriod = object.newUpdatePeriod ?? 0;
    message.newTransactionsFilter = object.newTransactionsFilter ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgUpdateInterchainQueryResponse(): MsgUpdateInterchainQueryResponse {
  return {};
}

export const MsgUpdateInterchainQueryResponse = {
  encode(_: MsgUpdateInterchainQueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateInterchainQueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInterchainQueryResponse();
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

  fromJSON(_: any): MsgUpdateInterchainQueryResponse {
    return {};
  },

  toJSON(_: MsgUpdateInterchainQueryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateInterchainQueryResponse>, I>>(
    _: I,
  ): MsgUpdateInterchainQueryResponse {
    const message = createBaseMsgUpdateInterchainQueryResponse();
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
  RegisterInterchainQuery(request: MsgRegisterInterchainQuery): Promise<MsgRegisterInterchainQueryResponse>;
  SubmitQueryResult(request: MsgSubmitQueryResult): Promise<MsgSubmitQueryResultResponse>;
  RemoveInterchainQuery(request: MsgRemoveInterchainQueryRequest): Promise<MsgRemoveInterchainQueryResponse>;
  UpdateInterchainQuery(request: MsgUpdateInterchainQueryRequest): Promise<MsgUpdateInterchainQueryResponse>;
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterInterchainQuery = this.RegisterInterchainQuery.bind(this);
    this.SubmitQueryResult = this.SubmitQueryResult.bind(this);
    this.RemoveInterchainQuery = this.RemoveInterchainQuery.bind(this);
    this.UpdateInterchainQuery = this.UpdateInterchainQuery.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  RegisterInterchainQuery(request: MsgRegisterInterchainQuery): Promise<MsgRegisterInterchainQueryResponse> {
    const data = MsgRegisterInterchainQuery.encode(request).finish();
    const promise = this.rpc.request("neutron.interchainqueries.Msg", "RegisterInterchainQuery", data);
    return promise.then((data) => MsgRegisterInterchainQueryResponse.decode(new _m0.Reader(data)));
  }

  SubmitQueryResult(request: MsgSubmitQueryResult): Promise<MsgSubmitQueryResultResponse> {
    const data = MsgSubmitQueryResult.encode(request).finish();
    const promise = this.rpc.request("neutron.interchainqueries.Msg", "SubmitQueryResult", data);
    return promise.then((data) => MsgSubmitQueryResultResponse.decode(new _m0.Reader(data)));
  }

  RemoveInterchainQuery(request: MsgRemoveInterchainQueryRequest): Promise<MsgRemoveInterchainQueryResponse> {
    const data = MsgRemoveInterchainQueryRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.interchainqueries.Msg", "RemoveInterchainQuery", data);
    return promise.then((data) => MsgRemoveInterchainQueryResponse.decode(new _m0.Reader(data)));
  }

  UpdateInterchainQuery(request: MsgUpdateInterchainQueryRequest): Promise<MsgUpdateInterchainQueryResponse> {
    const data = MsgUpdateInterchainQueryRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.interchainqueries.Msg", "UpdateInterchainQuery", data);
    return promise.then((data) => MsgUpdateInterchainQueryResponse.decode(new _m0.Reader(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("neutron.interchainqueries.Msg", "UpdateParams", data);
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
