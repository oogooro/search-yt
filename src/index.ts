import { ItemKindChannel, ItemKindVideo, ItemKindPlaylist, SearchItem, SearchResult, Snippet, SnippetThumbnail, SnippetThumbnails } from './interfaces';

interface SearchOptions {
    query: string;
    key: string;
    maxResults?: number;
}

const searchYoutube = async ({ query, key, maxResults = 25, }: SearchOptions): Promise<SearchResult> => {
    const request = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&key=${key}&maxResults=${maxResults}`);

    return (await request.json() as SearchResult);
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