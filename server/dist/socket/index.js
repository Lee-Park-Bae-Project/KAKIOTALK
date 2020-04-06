"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = __importDefault(require("socket.io"));
const chalk_1 = __importDefault(require("chalk"));
const init = (socket) => {
    socket.on('init', (data) => {
        global.io.emit('init', `${socket.id} is initialized`);
    });
};
const onDisconnect = (socket) => {
    socket.on('disconnect', () => {
        console.log(chalk_1.default.yellow(`${socket.id} is disconnected`));
        global.io.emit('leave', `${socket.id} is disconnected`);
    });
};
const connection = (io) => {
    io.on('connection', (socket) => {
        global.socket = socket;
        socket.emit('connection', `connected: ${socket.id}`);
        console.log(chalk_1.default.yellow(`connected: ${socket.id}`));
        init(socket);
        onDisconnect(socket);
    });
};
const connect = (server) => {
    const io = socket_io_1.default(server);
    global.io = io;
    connection(io);
};
exports.connect = connect;
