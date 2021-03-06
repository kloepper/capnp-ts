/**
 * This file has been automatically generated by the [capnpc-ts utility](https://github.com/jdiaz5513/capnp-ts).
 */

/* tslint:disable */

import * as capnp from "../../lib/index";
import { ObjectSize as __O, Struct as __S } from '../../lib/index';
export const _capnpFileId = "b4dbefd56457c333";
export class ListMania extends __S {
    static readonly _capnp = { displayName: "ListMania", id: "d0a988493b63e78b", size: new __O(0, 16) };
    static _CompositeList: capnp.ListCtor<ListManiaStruct>;
    adoptBoolList(value: capnp.Orphan<capnp.List<boolean>>): void { __S.adopt(value, __S.getPointer(0, this)); }
    disownBoolList(): capnp.Orphan<capnp.List<boolean>> { return __S.disown(this.getBoolList()); }
    getBoolList(): capnp.List<boolean> { return __S.getList(0, capnp.BoolList, this); }
    hasBoolList(): boolean { return !__S.isNull(__S.getPointer(0, this)); }
    initBoolList(length: number): capnp.List<boolean> { return __S.initList(0, capnp.BoolList, length, this); }
    setBoolList(value: capnp.List<boolean>): void { __S.copyFrom(value, __S.getPointer(0, this)); }
    adoptCompositeList(value: capnp.Orphan<capnp.List<ListManiaStruct>>): void { __S.adopt(value, __S.getPointer(1, this)); }
    disownCompositeList(): capnp.Orphan<capnp.List<ListManiaStruct>> { return __S.disown(this.getCompositeList()); }
    getCompositeList(): capnp.List<ListManiaStruct> { return __S.getList(1, ListMania._CompositeList, this); }
    hasCompositeList(): boolean { return !__S.isNull(__S.getPointer(1, this)); }
    initCompositeList(length: number): capnp.List<ListManiaStruct> { return __S.initList(1, ListMania._CompositeList, length, this); }
    setCompositeList(value: capnp.List<ListManiaStruct>): void { __S.copyFrom(value, __S.getPointer(1, this)); }
    adoptDataList(value: capnp.Orphan<capnp.List<capnp.Data>>): void { __S.adopt(value, __S.getPointer(2, this)); }
    disownDataList(): capnp.Orphan<capnp.List<capnp.Data>> { return __S.disown(this.getDataList()); }
    getDataList(): capnp.List<capnp.Data> { return __S.getList(2, capnp.DataList, this); }
    hasDataList(): boolean { return !__S.isNull(__S.getPointer(2, this)); }
    initDataList(length: number): capnp.List<capnp.Data> { return __S.initList(2, capnp.DataList, length, this); }
    setDataList(value: capnp.List<capnp.Data>): void { __S.copyFrom(value, __S.getPointer(2, this)); }
    adoptFloat32List(value: capnp.Orphan<capnp.List<number>>): void { __S.adopt(value, __S.getPointer(3, this)); }
    disownFloat32List(): capnp.Orphan<capnp.List<number>> { return __S.disown(this.getFloat32List()); }
    getFloat32List(): capnp.List<number> { return __S.getList(3, capnp.Float32List, this); }
    hasFloat32List(): boolean { return !__S.isNull(__S.getPointer(3, this)); }
    initFloat32List(length: number): capnp.List<number> { return __S.initList(3, capnp.Float32List, length, this); }
    setFloat32List(value: capnp.List<number>): void { __S.copyFrom(value, __S.getPointer(3, this)); }
    adoptFloat64List(value: capnp.Orphan<capnp.List<number>>): void { __S.adopt(value, __S.getPointer(4, this)); }
    disownFloat64List(): capnp.Orphan<capnp.List<number>> { return __S.disown(this.getFloat64List()); }
    getFloat64List(): capnp.List<number> { return __S.getList(4, capnp.Float64List, this); }
    hasFloat64List(): boolean { return !__S.isNull(__S.getPointer(4, this)); }
    initFloat64List(length: number): capnp.List<number> { return __S.initList(4, capnp.Float64List, length, this); }
    setFloat64List(value: capnp.List<number>): void { __S.copyFrom(value, __S.getPointer(4, this)); }
    adoptInt8List(value: capnp.Orphan<capnp.List<number>>): void { __S.adopt(value, __S.getPointer(5, this)); }
    disownInt8List(): capnp.Orphan<capnp.List<number>> { return __S.disown(this.getInt8List()); }
    getInt8List(): capnp.List<number> { return __S.getList(5, capnp.Int8List, this); }
    hasInt8List(): boolean { return !__S.isNull(__S.getPointer(5, this)); }
    initInt8List(length: number): capnp.List<number> { return __S.initList(5, capnp.Int8List, length, this); }
    setInt8List(value: capnp.List<number>): void { __S.copyFrom(value, __S.getPointer(5, this)); }
    adoptInt16List(value: capnp.Orphan<capnp.List<number>>): void { __S.adopt(value, __S.getPointer(6, this)); }
    disownInt16List(): capnp.Orphan<capnp.List<number>> { return __S.disown(this.getInt16List()); }
    getInt16List(): capnp.List<number> { return __S.getList(6, capnp.Int16List, this); }
    hasInt16List(): boolean { return !__S.isNull(__S.getPointer(6, this)); }
    initInt16List(length: number): capnp.List<number> { return __S.initList(6, capnp.Int16List, length, this); }
    setInt16List(value: capnp.List<number>): void { __S.copyFrom(value, __S.getPointer(6, this)); }
    adoptInt32List(value: capnp.Orphan<capnp.List<number>>): void { __S.adopt(value, __S.getPointer(7, this)); }
    disownInt32List(): capnp.Orphan<capnp.List<number>> { return __S.disown(this.getInt32List()); }
    getInt32List(): capnp.List<number> { return __S.getList(7, capnp.Int32List, this); }
    hasInt32List(): boolean { return !__S.isNull(__S.getPointer(7, this)); }
    initInt32List(length: number): capnp.List<number> { return __S.initList(7, capnp.Int32List, length, this); }
    setInt32List(value: capnp.List<number>): void { __S.copyFrom(value, __S.getPointer(7, this)); }
    adoptInt64List(value: capnp.Orphan<capnp.List<capnp.Int64>>): void { __S.adopt(value, __S.getPointer(8, this)); }
    disownInt64List(): capnp.Orphan<capnp.List<capnp.Int64>> { return __S.disown(this.getInt64List()); }
    getInt64List(): capnp.List<capnp.Int64> { return __S.getList(8, capnp.Int64List, this); }
    hasInt64List(): boolean { return !__S.isNull(__S.getPointer(8, this)); }
    initInt64List(length: number): capnp.List<capnp.Int64> { return __S.initList(8, capnp.Int64List, length, this); }
    setInt64List(value: capnp.List<capnp.Int64>): void { __S.copyFrom(value, __S.getPointer(8, this)); }
    adoptInterfaceList(value: capnp.Orphan<capnp.List<capnp.Interface>>): void { __S.adopt(value, __S.getPointer(9, this)); }
    disownInterfaceList(): capnp.Orphan<capnp.List<capnp.Interface>> { return __S.disown(this.getInterfaceList()); }
    getInterfaceList(): capnp.List<capnp.Interface> { return __S.getList(9, capnp.InterfaceList, this); }
    hasInterfaceList(): boolean { return !__S.isNull(__S.getPointer(9, this)); }
    initInterfaceList(length: number): capnp.List<capnp.Interface> { return __S.initList(9, capnp.InterfaceList, length, this); }
    setInterfaceList(value: capnp.List<capnp.Interface>): void { __S.copyFrom(value, __S.getPointer(9, this)); }
    adoptTextList(value: capnp.Orphan<capnp.List<string>>): void { __S.adopt(value, __S.getPointer(10, this)); }
    disownTextList(): capnp.Orphan<capnp.List<string>> { return __S.disown(this.getTextList()); }
    getTextList(): capnp.List<string> { return __S.getList(10, capnp.TextList, this); }
    hasTextList(): boolean { return !__S.isNull(__S.getPointer(10, this)); }
    initTextList(length: number): capnp.List<string> { return __S.initList(10, capnp.TextList, length, this); }
    setTextList(value: capnp.List<string>): void { __S.copyFrom(value, __S.getPointer(10, this)); }
    adoptUint8List(value: capnp.Orphan<capnp.List<number>>): void { __S.adopt(value, __S.getPointer(11, this)); }
    disownUint8List(): capnp.Orphan<capnp.List<number>> { return __S.disown(this.getUint8List()); }
    getUint8List(): capnp.List<number> { return __S.getList(11, capnp.Uint8List, this); }
    hasUint8List(): boolean { return !__S.isNull(__S.getPointer(11, this)); }
    initUint8List(length: number): capnp.List<number> { return __S.initList(11, capnp.Uint8List, length, this); }
    setUint8List(value: capnp.List<number>): void { __S.copyFrom(value, __S.getPointer(11, this)); }
    adoptUint16List(value: capnp.Orphan<capnp.List<number>>): void { __S.adopt(value, __S.getPointer(12, this)); }
    disownUint16List(): capnp.Orphan<capnp.List<number>> { return __S.disown(this.getUint16List()); }
    getUint16List(): capnp.List<number> { return __S.getList(12, capnp.Uint16List, this); }
    hasUint16List(): boolean { return !__S.isNull(__S.getPointer(12, this)); }
    initUint16List(length: number): capnp.List<number> { return __S.initList(12, capnp.Uint16List, length, this); }
    setUint16List(value: capnp.List<number>): void { __S.copyFrom(value, __S.getPointer(12, this)); }
    adoptUint32List(value: capnp.Orphan<capnp.List<number>>): void { __S.adopt(value, __S.getPointer(13, this)); }
    disownUint32List(): capnp.Orphan<capnp.List<number>> { return __S.disown(this.getUint32List()); }
    getUint32List(): capnp.List<number> { return __S.getList(13, capnp.Uint32List, this); }
    hasUint32List(): boolean { return !__S.isNull(__S.getPointer(13, this)); }
    initUint32List(length: number): capnp.List<number> { return __S.initList(13, capnp.Uint32List, length, this); }
    setUint32List(value: capnp.List<number>): void { __S.copyFrom(value, __S.getPointer(13, this)); }
    adoptUint64List(value: capnp.Orphan<capnp.List<capnp.Uint64>>): void { __S.adopt(value, __S.getPointer(14, this)); }
    disownUint64List(): capnp.Orphan<capnp.List<capnp.Uint64>> { return __S.disown(this.getUint64List()); }
    getUint64List(): capnp.List<capnp.Uint64> { return __S.getList(14, capnp.Uint64List, this); }
    hasUint64List(): boolean { return !__S.isNull(__S.getPointer(14, this)); }
    initUint64List(length: number): capnp.List<capnp.Uint64> { return __S.initList(14, capnp.Uint64List, length, this); }
    setUint64List(value: capnp.List<capnp.Uint64>): void { __S.copyFrom(value, __S.getPointer(14, this)); }
    adoptVoidList(value: capnp.Orphan<capnp.List<capnp.Void>>): void { __S.adopt(value, __S.getPointer(15, this)); }
    disownVoidList(): capnp.Orphan<capnp.List<capnp.Void>> { return __S.disown(this.getVoidList()); }
    getVoidList(): capnp.List<capnp.Void> { return __S.getList(15, capnp.VoidList, this); }
    hasVoidList(): boolean { return !__S.isNull(__S.getPointer(15, this)); }
    initVoidList(length: number): capnp.List<capnp.Void> { return __S.initList(15, capnp.VoidList, length, this); }
    setVoidList(value: capnp.List<capnp.Void>): void { __S.copyFrom(value, __S.getPointer(15, this)); }
    toString(): string { return "ListMania_" + super.toString(); }
}
export class ListManiaInterface extends __S {
    static readonly _capnp = { displayName: "ListManiaInterface", id: "8a94079c3c57204f", size: new __O(0, 0) };
    toString(): string { return "ListManiaInterface_" + super.toString(); }
}
export class ListManiaStruct extends __S {
    static readonly _capnp = { displayName: "ListManiaStruct", id: "9e1eb66286605522", size: new __O(0, 1) };
    adoptSelf(value: capnp.Orphan<ListMania>): void { __S.adopt(value, __S.getPointer(0, this)); }
    disownSelf(): capnp.Orphan<ListMania> { return __S.disown(this.getSelf()); }
    getSelf(): ListMania { return __S.getStruct(0, ListMania, this); }
    hasSelf(): boolean { return !__S.isNull(__S.getPointer(0, this)); }
    initSelf(): ListMania { return __S.initStructAt(0, ListMania, this); }
    setSelf(value: ListMania): void { __S.copyFrom(value, __S.getPointer(0, this)); }
    toString(): string { return "ListManiaStruct_" + super.toString(); }
}
ListMania._CompositeList = capnp.CompositeList(ListManiaStruct);
