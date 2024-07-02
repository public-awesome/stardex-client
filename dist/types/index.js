"use strict";
/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contracts = void 0;
const _0 = __importStar(require("./StardexToken.types"));
const _1 = __importStar(require("./StardexToken.client"));
const _2 = __importStar(require("./StardexToken.react-query"));
const _3 = __importStar(require("./StardexToken.provider"));
const _4 = __importStar(require("./StardexCoinRegistry.types"));
const _5 = __importStar(require("./StardexCoinRegistry.client"));
const _6 = __importStar(require("./StardexCoinRegistry.react-query"));
const _7 = __importStar(require("./StardexCoinRegistry.provider"));
const _8 = __importStar(require("./StardexFactory.types"));
const _9 = __importStar(require("./StardexFactory.client"));
const _10 = __importStar(require("./StardexFactory.react-query"));
const _11 = __importStar(require("./StardexFactory.provider"));
const _12 = __importStar(require("./StardexPair.types"));
const _13 = __importStar(require("./StardexPair.client"));
const _14 = __importStar(require("./StardexPair.react-query"));
const _15 = __importStar(require("./StardexPair.provider"));
const _16 = __importStar(require("./StardexPairStable.types"));
const _17 = __importStar(require("./StardexPairStable.client"));
const _18 = __importStar(require("./StardexPairStable.react-query"));
const _19 = __importStar(require("./StardexPairStable.provider"));
const _20 = __importStar(require("./StardexPairConcentrated.types"));
const _21 = __importStar(require("./StardexPairConcentrated.client"));
const _22 = __importStar(require("./StardexPairConcentrated.react-query"));
const _23 = __importStar(require("./StardexPairConcentrated.provider"));
const _24 = __importStar(require("./StardexRouter.types"));
const _25 = __importStar(require("./StardexRouter.client"));
const _26 = __importStar(require("./StardexRouter.react-query"));
const _27 = __importStar(require("./StardexRouter.provider"));
const _28 = __importStar(require("./contractContextProviders"));
const _29 = __importStar(require("./contractContextBase"));
const _30 = __importStar(require("./contracts-context"));
var contracts;
(function (contracts) {
    contracts.StardexToken = {
        ..._0,
        ..._1,
        ..._2,
        ..._3
    };
    contracts.StardexCoinRegistry = {
        ..._4,
        ..._5,
        ..._6,
        ..._7
    };
    contracts.StardexFactory = {
        ..._8,
        ..._9,
        ..._10,
        ..._11
    };
    contracts.StardexPair = {
        ..._12,
        ..._13,
        ..._14,
        ..._15
    };
    contracts.StardexPairStable = {
        ..._16,
        ..._17,
        ..._18,
        ..._19
    };
    contracts.StardexPairConcentrated = {
        ..._20,
        ..._21,
        ..._22,
        ..._23
    };
    contracts.StardexRouter = {
        ..._24,
        ..._25,
        ..._26,
        ..._27
    };
    contracts.undefined = {
        ..._28
    };
    contracts.contractContextBase = {
        ..._29
    };
    contracts.contractsContext = {
        ..._30
    };
})(contracts || (exports.contracts = contracts = {}));
