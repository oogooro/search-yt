import { ItemKindChannel, ItemKindVideo, ItemKindPlaylist, SearchItem, SearchResult, Snippet, SnippetThumbnail, SnippetThumbnails, ParsedSearchResult } from './interfaces';

interface SearchOptions {
    query: string;
    key: string;
    maxResults?: number;
}

const searchYoutube = async ({ query, key, maxResults = 50, }: SearchOptions): Promise<SearchResult> => {
    const request = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&key=${key}&maxResults=${maxResults}`);

    return (await request.json() as SearchResult);
}

export const parseSearch = (searchResult: SearchResult): ParsedSearchResult[] => {
    const parsed: ParsedSearchResult[] = searchResult.items.map(item => {
        if (item.id.kind === 'youtube#channel') return {
            type: 'channel',
            url: `https://www.youtube.com/channel/${item.id.channelId}`,
            snippet: item.snippet,
        }

        if (item.id.kind === 'youtube#playlist') return {
            type: 'playlist', 
            url: `https://www.youtube.com/playlist?list=${item.id.playlistId}`,
            snippet: item.snippet,
        }

        if (item.id.kind === 'youtube#video') return {
            type: 'video',
            url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            snippet: item.snippet,
        }
    });

    return parsed;
}

export default searchYoutube;

export {
    ItemKindChannel,
    ItemKindVideo,
    ItemKindPlaylist,
    SearchItem,
    SearchOptions,
    SearchResult,
    Snippet,
    SnippetThumbnail,
    SnippetThumbnails,
}