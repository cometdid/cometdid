/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cometdid.did";

export interface Orgs {
  id: number;
  name: string;
  logo: string;
  desc: string;
  creator: string;
  count: number;
}

function createBaseOrgs(): Orgs {
  return { id: 0, name: "", logo: "", desc: "", creator: "", count: 0 };
}

export const Orgs = {
  encode(message: Orgs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.logo !== "") {
      writer.uint32(26).string(message.logo);
    }
    if (message.desc !== "") {
      writer.uint32(34).string(message.desc);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    if (message.count !== 0) {
      writer.uint32(48).int64(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Orgs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrgs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.logo = reader.string();
          break;
        case 4:
          message.desc = reader.string();
          break;
        case 5:
          message.creator = reader.string();
          break;
        case 6:
          message.count = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Orgs {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      desc: isSet(object.desc) ? String(object.desc) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: Orgs): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.logo !== undefined && (obj.logo = message.logo);
    message.desc !== undefined && (obj.desc = message.desc);
    message.creator !== undefined && (obj.creator = message.creator);
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Orgs>, I>>(object: I): Orgs {
    const message = createBaseOrgs();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.logo = object.logo ?? "";
    message.desc = object.desc ?? "";
    message.creator = object.creator ?? "";
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
