function createSong(name, artist, hasBeenPlayed) {
    var song = {
        name,
        artist,
        hasBeenPlayed: false
    }
    return song
}

function playSong(song) {
    song.hasBeenPlayed = true;
    return song;
}

function makePlaylist(name, songs) {
    var playlist = {
        name,
        songs,
    }
    return playlist
}

function addSongToPlaylist(playlist, song) {
    playlist.songs.push(song)
    return playlist
}

function playAllSongs(playlist) {
    for (var i = 0; i < playlist.songs.length; i++){
        playlist.songs[i].hasBeenPlayed = true;
    }
    return playlist;
}

module.exports = {
    createSong, 
    playSong,
    makePlaylist, 
    addSongToPlaylist,
    playAllSongs
 };
