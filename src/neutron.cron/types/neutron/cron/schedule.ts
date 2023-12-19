/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "neutron.cron";

export interface Schedule {
  /** Name of schedule */
  name: string;
  /** Period in blocks */
  period: number;
  /** Msgs that will be executed every period amount of time */
  msgs: MsgExecuteContract[];
  /** Last execution's block height */
  lastExecuteHeight: number;
}

export interface MsgExecuteContract {
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg is json encoded message to be passed to the contract */
  msg: string;
}

export interface ScheduleCount {
  /** Count is the number of current schedules */
  count: number;
}

function createBaseSchedule(): Schedule {
  return { name: "", period: 0, msgs: [], lastExecuteHeight: 0 };
}

export const Schedule = {
  encode(message: Schedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.period !== 0) {
      writer.uint32(16).uint64(message.period);
    }
    for (const v of message.msgs) {
      MsgExecuteContract.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastExecuteHeight !== 0) {
      writer.uint32(32).uint64(message.lastExecuteHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Schedule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.period = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.msgs.push(MsgExecuteContract.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lastExecuteHeight = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Schedule {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      period: isSet(object.period) ? Number(object.period) : 0,
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => MsgExecuteContract.fromJSON(e)) : [],
      lastExecuteHeight: isSet(object.lastExecuteHeight) ? Number(object.lastExecuteHeight) : 0,
    };
  },

  toJSON(message: Schedule): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.period !== undefined && (obj.period = Math.round(message.period));
    if (message.msgs) {
      obj.msgs = message.msgs.map((e) => e ? MsgExecuteContract.toJSON(e) : undefined);
    } else {
      obj.msgs = [];
    }
    message.lastExecuteHeight !== undefined && (obj.lastExecuteHeight = Math.round(message.lastExecuteHeight));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Schedule>, I>>(object: I): Schedule {
    const message = createBaseSchedule();
    message.name = object.name ?? "";
    message.period = object.period ?? 0;
    message.msgs = object.msgs?.map((e) => MsgExecuteContract.fromPartial(e)) || [];
    message.lastExecuteHeight = object.lastExecuteHeight ?? 0;
    return message;
  },
};

function createBaseMsgExecuteContract(): MsgExecuteContract {
  return { contract: "", msg: "" };
}

export const MsgExecuteContract = {
  encode(message: MsgExecuteContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExecuteContract {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? String(object.msg) : "",
    };
  },

  toJSON(message: MsgExecuteContract): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecuteContract>, I>>(object: I): MsgExecuteContract {
    const message = createBaseMsgExecuteContract();
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseScheduleCount(): ScheduleCount {
  return { count: 0 };
}

export const ScheduleCount = {
  encode(message: ScheduleCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.count !== 0) {
      writer.uint32(8).int32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScheduleCount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduleCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScheduleCount {
    return { count: isSet(object.count) ? Number(object.count) : 0 };
  },

  toJSON(message: ScheduleCount): unknown {
    const obj: any = {};
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScheduleCount>, I>>(object: I): ScheduleCount {
    const message = createBaseScheduleCount();
    message.count = object.count ?? 0;
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
