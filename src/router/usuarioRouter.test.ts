import supertest from "supertest"
import mockingoose from  "mockingoose";
import { UsuarioModel } from '../model/usuario';
import app from "../server";


test("[GET] /usuarios",  async () => {
    const mockusuarios = [{ 

        _id:"5e233f9a6f5b0a43a823526b",
        username:"vinicius",
        password: "333333"
    }];

    mockingoose(UsuarioModel)
    .toReturn(mockusuarios, "find");
    const response = await supertest(app).get( "/usuarios" );
    expect(response.text).toBe(JSON.stringify(mockusuarios))

});
