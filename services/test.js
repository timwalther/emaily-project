//write a function to retrieve a blob of json
//make an ajac request! Use 'fetch' function.

//function fetchAlbums() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res => res.json())
    .then(json => console.log(json));
}

fetchAlbums();

//new es2017 syntax

async function fetchAlbums() {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()
    
    console.log(json);
}