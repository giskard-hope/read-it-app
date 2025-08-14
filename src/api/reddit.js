// const API_ROOT = 'https://www.reddit.com';

export const getPosts = async () => {
    const response = await fetch(`/api/r/popular.json`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json.data.children.map((post) => post.data);
};

export const searchPosts = async (searchTerm) => {
    const response = await fetch (`/api/search.json?q=${searchTerm}`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    return json.data.children.map((post) => post.data);
}

export const getComments = async (permalink) => {
    const response = await fetch(`/api${permalink}.json`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    const json = await response.json();
    return json[1].data.children.map((comment) => comment.data);
}