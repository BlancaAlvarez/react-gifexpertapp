
export const getGifs = async (category) => {
    //Peticion atravez de un fetchapi en javascript
    const url = `https://api.giphy.com/v1/gifs/search?api_key=1bc31mVhHRiV4q2x4QeEo6jDKhytAKIs&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}