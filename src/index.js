"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var App = /** @class */ (function () {
    function App() {
        this.app = (0, express_1.default)();
        this.connectDB();
        this.plugins();
        this.routes();
    }
    App.prototype.routes = function () {
    };
    App.prototype.connectDB = function () {
    };
    App.prototype.plugins = function () {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    };
    return App;
}());
var app = new App().app;
app.listen(process.env.PORT, function () {
    console.log("Server started on port ".concat(process.env.PORT));
});
