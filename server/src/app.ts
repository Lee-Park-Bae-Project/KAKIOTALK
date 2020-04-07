import createError = require("http-errors");
import express, { Request, Response, NextFunction } from "express";
import path = require("path");
import cookieParser = require("cookie-parser");
import logger = require("morgan");
import session = require("express-session");
import FileStore = require("session-file-store");
import passport = require("passport");
import GoogleStrategy = require("passport-google-oauth");
import v1Route from "./routes/v1";
import cors from 'cors';
import {corsConfig} from './configs'
const app = express();

// view engine setup
app.use(cors(corsConfig))
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/v1", v1Route);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
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
