export interface SearchItem {
    kind: 'youtube#searchResult';
    etag: string;
    id: ItemKindChannel | ItemKindPlaylist | ItemKindVideo;
    snippet: Snippet;
}

export interface Snippet {
    published: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: SnippetThumbnails;
    channelTitle: string;
    liveBroadcastContent: 'live' | 'none';
    publishedTime: Date;
}

export interface ItemKindVideo {
    kind: 'youtube#video';
    videoId: string;
}

export interface ItemKindChannel {
    kind: 'youtube#channel';
    channelId: string;
}

export interface ItemKindPlaylist {
    kind: 'youtube#playlist';
    playlistId: string;
}

export interface SnippetThumbnails {
    default: SnippetThumbnail;
    medium: SnippetThumbnail;
    high: SnippetThumbnail;
}

export interface SnippetThumbnail {
    url: string;
    width: number;
    hight: number;
}

export interface SearchResult {
    kind: 'youtube#searchListResponse';
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: SearchItem[];
}

export interface ParsedSearchResult {
    type: 'video' | 'playlist' | 'channel';
    url: string;
    snippet: Snippet;
}