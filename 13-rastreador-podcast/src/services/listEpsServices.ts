import { repoPodcast } from "../repositories/podcastsReposity";

export const serviseListEpisodes = async () => {
    const data = await repoPodcast();
    return data;
}