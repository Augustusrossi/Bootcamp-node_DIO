import {PodcastModel} from "./podcastModel";

export interface FilterPodCastModel {
    statusCode: number,
    body: PodcastModel[]
}