//"use strict";
//var __importDefault = (this && this.__importDefault) || function (mod) {
//    return (mod && mod.__esModule) ? mod : { "default": mod };
//};
//Object.defineProperty(exports, "__esModule", { value: true });
//const promise_mysql_1 = __importDefault(require("promise-mysql"));
//const keys_1 = __importDefault(require("./keys"));
//const pool = promise_mysql_1.default.createPool(keys_1.default.database);
//pool.getConnection().then(connection => {
//    pool.releaseConnection(connection);
//    console.log("Base de datos conectado");
//});
//exports.default = pool;
//
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("./keys"));
const { createPool } = require("promise-mysql");
const pool = createPool(keys_1.default.database);
console.log("conectado");
exports.default = pool;