import * as http from "http";

import { getListEps } from "./controllers/podcastsController";

const server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {

        if (request.method === "GET" && request.url === "/api/list") {
            await getListEps(request, response);
        }
    }
);

const port = process.env.PORT;

server.listen(port, ()=>{
    console.log(`Server iniciado na porta ${port}`)
})