/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Orgs } from "./orgs";
import { Params } from "./params";

export const protobufPackage = "cometdid.did";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetOrgsRequest {
  id: number;
}

export interface QueryGetOrgsResponse {
  Orgs: Orgs | undefined;
}

export interface QueryAllOrgsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllOrgsResponse {
  Orgs: Orgs[];
  pagination: PageResponse | undefined;
}

export interface QueryValidDidRequest {
  did: string;
}

export interface QueryValidDidResponse {
  name: string;
  avatar: string;
}

export interface QueryDidRequest {
  orgId: number;
  creator: string;
}

export interface QueryDidResponse {
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

function createBaseQueryGetOrgsRequest(): QueryGetOrgsRequest {
  return { id: 0 };
}

export const QueryGetOrgsRequest = {
  encode(message: QueryGetOrgsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrgsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrgsRequest();
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

  fromJSON(object: any): QueryGetOrgsRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetOrgsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetOrgsRequest>, I>>(object: I): QueryGetOrgsRequest {
    const message = createBaseQueryGetOrgsRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetOrgsResponse(): QueryGetOrgsResponse {
  return { Orgs: undefined };
}

export const QueryGetOrgsResponse = {
  encode(message: QueryGetOrgsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Orgs !== undefined) {
      Orgs.encode(message.Orgs, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrgsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrgsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Orgs = Orgs.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOrgsResponse {
    return { Orgs: isSet(object.Orgs) ? Orgs.fromJSON(object.Orgs) : undefined };
  },

  toJSON(message: QueryGetOrgsResponse): unknown {
    const obj: any = {};
    message.Orgs !== undefined && (obj.Orgs = message.Orgs ? Orgs.toJSON(message.Orgs) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetOrgsResponse>, I>>(object: I): QueryGetOrgsResponse {
    const message = createBaseQueryGetOrgsResponse();
    message.Orgs = (object.Orgs !== undefined && object.Orgs !== null) ? Orgs.fromPartial(object.Orgs) : undefined;
    return message;
  },
};

function createBaseQueryAllOrgsRequest(): QueryAllOrgsRequest {
  return { pagination: undefined };
}

export const QueryAllOrgsRequest = {
  encode(message: QueryAllOrgsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOrgsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOrgsRequest();
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

  fromJSON(object: any): QueryAllOrgsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllOrgsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllOrgsRequest>, I>>(object: I): QueryAllOrgsRequest {
    const message = createBaseQueryAllOrgsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllOrgsResponse(): QueryAllOrgsResponse {
  return { Orgs: [], pagination: undefined };
}

export const QueryAllOrgsResponse = {
  encode(message: QueryAllOrgsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Orgs) {
      Orgs.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOrgsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOrgsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Orgs.push(Orgs.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllOrgsResponse {
    return {
      Orgs: Array.isArray(object?.Orgs) ? object.Orgs.map((e: any) => Orgs.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllOrgsResponse): unknown {
    const obj: any = {};
    if (message.Orgs) {
      obj.Orgs = message.Orgs.map((e) => e ? Orgs.toJSON(e) : undefined);
    } else {
      obj.Orgs = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllOrgsResponse>, I>>(object: I): QueryAllOrgsResponse {
    const message = createBaseQueryAllOrgsResponse();
    message.Orgs = object.Orgs?.map((e) => Orgs.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryValidDidRequest(): QueryValidDidRequest {
  return { did: "" };
}

export const QueryValidDidRequest = {
  encode(message: QueryValidDidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidDidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidDidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidDidRequest {
    return { did: isSet(object.did) ? String(object.did) : "" };
  },

  toJSON(message: QueryValidDidRequest): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidDidRequest>, I>>(object: I): QueryValidDidRequest {
    const message = createBaseQueryValidDidRequest();
    message.did = object.did ?? "";
    return message;
  },
};

function createBaseQueryValidDidResponse(): QueryValidDidResponse {
  return { name: "", avatar: "" };
}

export const QueryValidDidResponse = {
  encode(message: QueryValidDidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.avatar !== "") {
      writer.uint32(18).string(message.avatar);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidDidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidDidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.avatar = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidDidResponse {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      avatar: isSet(object.avatar) ? String(object.avatar) : "",
    };
  },

  toJSON(message: QueryValidDidResponse): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.avatar !== undefined && (obj.avatar = message.avatar);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidDidResponse>, I>>(object: I): QueryValidDidResponse {
    const message = createBaseQueryValidDidResponse();
    message.name = object.name ?? "";
    message.avatar = object.avatar ?? "";
    return message;
  },
};

function createBaseQueryDidRequest(): QueryDidRequest {
  return { orgId: 0, creator: "" };
}

export const QueryDidRequest = {
  encode(message: QueryDidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orgId !== 0) {
      writer.uint32(8).uint64(message.orgId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orgId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDidRequest {
    return {
      orgId: isSet(object.orgId) ? Number(object.orgId) : 0,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: QueryDidRequest): unknown {
    const obj: any = {};
    message.orgId !== undefined && (obj.orgId = Math.round(message.orgId));
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDidRequest>, I>>(object: I): QueryDidRequest {
    const message = createBaseQueryDidRequest();
    message.orgId = object.orgId ?? 0;
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseQueryDidResponse(): QueryDidResponse {
  return {};
}

export const QueryDidResponse = {
  encode(_: QueryDidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDidResponse();
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

  fromJSON(_: any): QueryDidResponse {
    return {};
  },

  toJSON(_: QueryDidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDidResponse>, I>>(_: I): QueryDidResponse {
    const message = createBaseQueryDidResponse();
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Orgs items. */
  Orgs(request: QueryGetOrgsRequest): Promise<QueryGetOrgsResponse>;
  OrgsAll(request: QueryAllOrgsRequest): Promise<QueryAllOrgsResponse>;
  /** Queries a list of ValidDid items. */
  ValidDid(request: QueryValidDidRequest): Promise<QueryValidDidResponse>;
  /** Queries a list of Did items. */
  Did(request: QueryDidRequest): Promise<QueryDidResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Orgs = this.Orgs.bind(this);
    this.OrgsAll = this.OrgsAll.bind(this);
    this.ValidDid = this.ValidDid.bind(this);
    this.Did = this.Did.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cometdid.did.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Orgs(request: QueryGetOrgsRequest): Promise<QueryGetOrgsResponse> {
    const data = QueryGetOrgsRequest.encode(request).finish();
    const promise = this.rpc.request("cometdid.did.Query", "Orgs", data);
    return promise.then((data) => QueryGetOrgsResponse.decode(new _m0.Reader(data)));
  }

  OrgsAll(request: QueryAllOrgsRequest): Promise<QueryAllOrgsResponse> {
    const data = QueryAllOrgsRequest.encode(request).finish();
    const promise = this.rpc.request("cometdid.did.Query", "OrgsAll", data);
    return promise.then((data) => QueryAllOrgsResponse.decode(new _m0.Reader(data)));
  }

  ValidDid(request: QueryValidDidRequest): Promise<QueryValidDidResponse> {
    const data = QueryValidDidRequest.encode(request).finish();
    const promise = this.rpc.request("cometdid.did.Query", "ValidDid", data);
    return promise.then((data) => QueryValidDidResponse.decode(new _m0.Reader(data)));
  }

  Did(request: QueryDidRequest): Promise<QueryDidResponse> {
    const data = QueryDidRequest.encode(request).finish();
    const promise = this.rpc.request("cometdid.did.Query", "Did", data);
    return promise.then((data) => QueryDidResponse.decode(new _m0.Reader(data)));
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
