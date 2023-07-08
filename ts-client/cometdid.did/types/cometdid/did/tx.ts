/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cometdid.did";

export interface MsgCreateOrgs {
  creator: string;
  name: string;
  logo: string;
  desc: string;
}

export interface MsgCreateOrgsResponse {
  id: number;
}

export interface MsgUpdateOrgs {
  creator: string;
  id: number;
  name: string;
  logo: string;
  desc: string;
}

export interface MsgUpdateOrgsResponse {
}

export interface MsgDeleteOrgs {
  creator: string;
  id: number;
}

export interface MsgDeleteOrgsResponse {
}

export interface MsgOauth {
  creator: string;
  orgId: number;
}

export interface MsgOauthResponse {
}

function createBaseMsgCreateOrgs(): MsgCreateOrgs {
  return { creator: "", name: "", logo: "", desc: "" };
}

export const MsgCreateOrgs = {
  encode(message: MsgCreateOrgs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOrgs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOrgs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateOrgs {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      desc: isSet(object.desc) ? String(object.desc) : "",
    };
  },

  toJSON(message: MsgCreateOrgs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.logo !== undefined && (obj.logo = message.logo);
    message.desc !== undefined && (obj.desc = message.desc);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateOrgs>, I>>(object: I): MsgCreateOrgs {
    const message = createBaseMsgCreateOrgs();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.logo = object.logo ?? "";
    message.desc = object.desc ?? "";
    return message;
  },
};

function createBaseMsgCreateOrgsResponse(): MsgCreateOrgsResponse {
  return { id: 0 };
}

export const MsgCreateOrgsResponse = {
  encode(message: MsgCreateOrgsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOrgsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOrgsResponse();
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

  fromJSON(object: any): MsgCreateOrgsResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateOrgsResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateOrgsResponse>, I>>(object: I): MsgCreateOrgsResponse {
    const message = createBaseMsgCreateOrgsResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateOrgs(): MsgUpdateOrgs {
  return { creator: "", id: 0, name: "", logo: "", desc: "" };
}

export const MsgUpdateOrgs = {
  encode(message: MsgUpdateOrgs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.logo !== "") {
      writer.uint32(34).string(message.logo);
    }
    if (message.desc !== "") {
      writer.uint32(42).string(message.desc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOrgs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOrgs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.logo = reader.string();
          break;
        case 5:
          message.desc = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateOrgs {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      desc: isSet(object.desc) ? String(object.desc) : "",
    };
  },

  toJSON(message: MsgUpdateOrgs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.logo !== undefined && (obj.logo = message.logo);
    message.desc !== undefined && (obj.desc = message.desc);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateOrgs>, I>>(object: I): MsgUpdateOrgs {
    const message = createBaseMsgUpdateOrgs();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.logo = object.logo ?? "";
    message.desc = object.desc ?? "";
    return message;
  },
};

function createBaseMsgUpdateOrgsResponse(): MsgUpdateOrgsResponse {
  return {};
}

export const MsgUpdateOrgsResponse = {
  encode(_: MsgUpdateOrgsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOrgsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOrgsResponse();
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

  fromJSON(_: any): MsgUpdateOrgsResponse {
    return {};
  },

  toJSON(_: MsgUpdateOrgsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateOrgsResponse>, I>>(_: I): MsgUpdateOrgsResponse {
    const message = createBaseMsgUpdateOrgsResponse();
    return message;
  },
};

function createBaseMsgDeleteOrgs(): MsgDeleteOrgs {
  return { creator: "", id: 0 };
}

export const MsgDeleteOrgs = {
  encode(message: MsgDeleteOrgs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteOrgs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteOrgs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteOrgs {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteOrgs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteOrgs>, I>>(object: I): MsgDeleteOrgs {
    const message = createBaseMsgDeleteOrgs();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteOrgsResponse(): MsgDeleteOrgsResponse {
  return {};
}

export const MsgDeleteOrgsResponse = {
  encode(_: MsgDeleteOrgsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteOrgsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteOrgsResponse();
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

  fromJSON(_: any): MsgDeleteOrgsResponse {
    return {};
  },

  toJSON(_: MsgDeleteOrgsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteOrgsResponse>, I>>(_: I): MsgDeleteOrgsResponse {
    const message = createBaseMsgDeleteOrgsResponse();
    return message;
  },
};

function createBaseMsgOauth(): MsgOauth {
  return { creator: "", orgId: 0 };
}

export const MsgOauth = {
  encode(message: MsgOauth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.orgId !== 0) {
      writer.uint32(16).uint64(message.orgId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOauth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOauth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.orgId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOauth {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      orgId: isSet(object.orgId) ? Number(object.orgId) : 0,
    };
  },

  toJSON(message: MsgOauth): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.orgId !== undefined && (obj.orgId = Math.round(message.orgId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOauth>, I>>(object: I): MsgOauth {
    const message = createBaseMsgOauth();
    message.creator = object.creator ?? "";
    message.orgId = object.orgId ?? 0;
    return message;
  },
};

function createBaseMsgOauthResponse(): MsgOauthResponse {
  return {};
}

export const MsgOauthResponse = {
  encode(_: MsgOauthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOauthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOauthResponse();
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

  fromJSON(_: any): MsgOauthResponse {
    return {};
  },

  toJSON(_: MsgOauthResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOauthResponse>, I>>(_: I): MsgOauthResponse {
    const message = createBaseMsgOauthResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateOrgs(request: MsgCreateOrgs): Promise<MsgCreateOrgsResponse>;
  UpdateOrgs(request: MsgUpdateOrgs): Promise<MsgUpdateOrgsResponse>;
  DeleteOrgs(request: MsgDeleteOrgs): Promise<MsgDeleteOrgsResponse>;
  Oauth(request: MsgOauth): Promise<MsgOauthResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateOrgs = this.CreateOrgs.bind(this);
    this.UpdateOrgs = this.UpdateOrgs.bind(this);
    this.DeleteOrgs = this.DeleteOrgs.bind(this);
    this.Oauth = this.Oauth.bind(this);
  }
  CreateOrgs(request: MsgCreateOrgs): Promise<MsgCreateOrgsResponse> {
    const data = MsgCreateOrgs.encode(request).finish();
    const promise = this.rpc.request("cometdid.did.Msg", "CreateOrgs", data);
    return promise.then((data) => MsgCreateOrgsResponse.decode(new _m0.Reader(data)));
  }

  UpdateOrgs(request: MsgUpdateOrgs): Promise<MsgUpdateOrgsResponse> {
    const data = MsgUpdateOrgs.encode(request).finish();
    const promise = this.rpc.request("cometdid.did.Msg", "UpdateOrgs", data);
    return promise.then((data) => MsgUpdateOrgsResponse.decode(new _m0.Reader(data)));
  }

  DeleteOrgs(request: MsgDeleteOrgs): Promise<MsgDeleteOrgsResponse> {
    const data = MsgDeleteOrgs.encode(request).finish();
    const promise = this.rpc.request("cometdid.did.Msg", "DeleteOrgs", data);
    return promise.then((data) => MsgDeleteOrgsResponse.decode(new _m0.Reader(data)));
  }

  Oauth(request: MsgOauth): Promise<MsgOauthResponse> {
    const data = MsgOauth.encode(request).finish();
    const promise = this.rpc.request("cometdid.did.Msg", "Oauth", data);
    return promise.then((data) => MsgOauthResponse.decode(new _m0.Reader(data)));
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
