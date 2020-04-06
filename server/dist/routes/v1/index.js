"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const express = require("express");
const router = express.Router();
const indexJs = path_1.default.basename(__filename); //return filename part of a file path.
fs_1.default.readdirSync(__dirname) //read all file from path
    .filter(file => file.indexOf(".") !== 0 && file !== indexJs)
    .forEach(routeFile => router.use(`/${routeFile.split(".")[0]}`, require(`./${routeFile}`).default));
exports.default = router;
