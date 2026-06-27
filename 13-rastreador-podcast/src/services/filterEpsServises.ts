import { FilterPodCastModel } from "../models/filter-podcast-model";
import { repoPodcast } from "../repositories/podcastsReposity";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEps = async (podcastName: string | undefined): Promise<FilterPodCastModel> =>{

    //interface de retorno
    let responseFormat: FilterPodCastModel = {
        statusCode: 0,
        body: []
    }

    const queryString = podcastName?.split("?p=")[1] || "";
    console.log("teste",queryString);

    
    const data = await repoPodcast(queryString)

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT

    responseFormat.body = data;

    return responseFormat;
}