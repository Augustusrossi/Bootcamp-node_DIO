import * as http from "http";

import { getFilterEps, getListEps } from "./controllers/podcastsController";
import { Routes } from "./route/route";
import { HttpMethod } from "./utils/http-methods";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {


        //query string
        //?? = ou
        const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""]

        // console.log(baseUrl);
        // console.log(queryString);
        

        if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
            await getListEps(request, response);
        }

        if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
            await getFilterEps(request, response);
        }
    }