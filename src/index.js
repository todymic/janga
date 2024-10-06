"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var Database_1 = require("./config/Database");
var body_parser_1 = require("body-parser");
var practitioner_router_1 = require("./router/practitioner.router");
var office_router_1 = require("./router/office.router");
dotenv_1.default.config();
var App = /** @class */ (function () {
    function App() {
        this.app = (0, express_1.default)();
        this.connectDB();
        this.plugins();
        this.routes();
    }
    App.prototype.routes = function () {
        this.app.route('/').get(function (req, res) {
            res.send('Welcome to the database!');
        });
        this.app.use('/api/practitioners', practitioner_router_1.default);
        this.app.use('/api/offices', office_router_1.default);
    };
    App.prototype.connectDB = function () {
        var _a;
        var db = new Database_1.Database();
        (_a = db.sequelize) === null || _a === void 0 ? void 0 : _a.sync({ force: true });
    };
    App.prototype.plugins = function () {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(body_parser_1.default.json());
    };
    return App;
}());
var app = new App().app;
app.listen(process.env.PORT, function () {
    console.log("Server started on port ".concat(process.env.PORT));
});
