"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router"));
var app = express_1.default();
app.get('/', function (req, res) {
    res.send('Testandooo!');
});
app.use('/routh', router_1.default);
// function getUserName():string {
//   return 'Gabriel'
// }
// const username = getUserName()
app.get('/teste2', function (req, res) {
    return res.send("eai pessoas! beleza? de boa?");
});
var nome = "eai tiago";
app.get("/teste3", function (req, res) {
    return res.send(nome);
});
app.listen(3333);
