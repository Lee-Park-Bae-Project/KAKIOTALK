"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createError = require("http-errors");
const express_1 = __importDefault(require("express"));
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const v1_1 = __importDefault(require("./routes/v1"));
const app = express_1.default();
// view engine setup
app.use(logger("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/v1", v1_1.default);
// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});
// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    let apiError = err;
    if (!err.status) {
        apiError = createError(err);
    }
    // set locals, only providing error in development
    res.locals.message = apiError.message;
    res.locals.error = process.env.NODE_ENV === "development" ? apiError : {};
    // render the error page
    return res.status(apiError.status).json({ message: apiError.message });
});
module.exports = app;
