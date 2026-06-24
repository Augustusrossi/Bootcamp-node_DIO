import * as http from "http";

import { getFilterEps, getListEps } from "./controllers/podcastsController";

const server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {


        //query string
        //?? = ou
        const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""]

        // console.log(baseUrl);
        // console.log(queryString);
        

        if (request.method === "GET" && baseUrl === "/api/list  ") {
            await getListEps(request, response);
        }

        if (request.method === "GET" && baseUrl === "/api/episode  ") {
            await getFilterEps(request, response);
        }
    }
);

const port = process.env.PORT;

server.listen(port, ()=>{
    console.log(`Server iniciado na porta ${port}`)
})