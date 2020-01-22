"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get = (req, res, next) => {
    return res.json({ message: "users get" });
};
exports.get = get;
