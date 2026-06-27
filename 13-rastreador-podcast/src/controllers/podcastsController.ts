import {IncomingMessage, ServerResponse} from "http";
import { serviseListEpisodes } from "../services/listEpsServices";
import { serviceFilterEps } from "../services/filterEpsServises";
import { ContentType } from "../utils/content-type";
import { FilterPodCastModel } from "../models/filter-podcast-model";



//Method GET
export const getListEps = async (request: IncomingMessage, response: ServerResponse)=>{

    const content = await serviseListEpisodes();

    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(content))
    console.log("list: ", request.url)
}

//func filtrar
export const getFilterEps = async(request: IncomingMessage, response: ServerResponse) => {

    const content: FilterPodCastModel = await serviceFilterEps(request.url);

    response.writeHead(content.statusCode, {"Content-Type": ContentType.JSON});
    response.end(JSON.stringify(content.body))
    console.log("controleer content:", content.body)
    console.log("url:", request.url)
}
