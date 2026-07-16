export class Vlog {
    title: string;
    publishedAt: string;
    thumbnailUrl: string;
    videoId: string;

    constructor(title: string, publishedAt: string, thumbnailUrl: string, videoId: string) {
        this.title = title;
        this.publishedAt = publishedAt;
        this.thumbnailUrl = thumbnailUrl;
        this.videoId = videoId;
    }
}