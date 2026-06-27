import { FilterPodCastModel } from "../models/filter-podcast-model";
import { repoPodcast } from "../repositories/podcastsReposity";

export const serviseListEpisodes = async () => {

    //interface de retorno
    let responseFormat: FilterPodCastModel = {
        statusCode: 0,
        body: []
    }

    const data = await repoPodcast();
    return data;
}