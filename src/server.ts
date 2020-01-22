import { UsuarioService } from './service/service';

import express, {Application, Request, Response, NextFunction, ErrorRequestHandler} from "express"
import { connect } from 'mongoose'
import {Usuario, UsuarioModel} from "./model/usuario";
import { usuarioRouter } from './router/usuarioRouter';
import bodyParser from 'body-parser';


const app: Application = express();

app.use(bodyParser.json());

app.use("/usuarios", usuarioRouter)

app.use((req:Request, res: Response, next: NextFunction) =>{

    console.log( new Date());
    next();
})


   

app.listen(9090, async () => {
    await connect("mongodb://localhost:27017/iesp");
    console.log("Servidor Rodando")

});

export default app;