import {IncomingMessage, ServerResponse} from "http";
import { serviseListEpisodes } from "../services/listEpsServices";



//Method GET
export const getListEps = async (request: IncomingMessage, response: ServerResponse)=>{

    const content = await serviseListEpisodes();

    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(
        JSON.stringify(content)
    )

}

//func filtrar
export const getFilterEps = async(
    request: IncomingMessage, 
    response: ServerResponse
) => {

    const queryString= request.url?.split("?p=")[1] || "";

    const content = await serviseListEpisodes(queryString);

    response.writeHead(200, {"Content-Type": "application/json"});

    response.end(JSON.stringify(content))
}
