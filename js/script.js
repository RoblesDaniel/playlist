/* global $ */
// BELOW Update the songs array with four of your favorites songs.
var songs = ["Blood of the Dead","Blizzard","Clint Eastwood","Kamehameha Wave","Sunflower","Flying Battery Zone 1","Lifelight"];
// Make sure they match the same order as your array above
var imageLinks=["https://i.ebayimg.com/images/g/jB0AAOSwKARbUmML/s-l300.jpg",
            "https://cdn.playerone.vg/wp-content/uploads/2018/11/nuevo-trailer-dragon-ball-super-broly--696x350.jpg",
            "https://nesthq.com/wp-content/uploads/2018/06/gorillaz-1024x1024.jpg",
            "https://fsb.zobj.net/crop.php?r=69s0nltiwEVXgWLewpFD2rxi0BpELoifZvlAoJ_PbLv1-x0OaM1khKwps84nKeMCGB7DVrPqhccEk3pV97ejRN5VclPZqmuuYfxuqWD3Fq2j9GPPj1QWZUuv7V4_8YVSBbVTlIsuyIVWU8_f",
            "https://images-na.ssl-images-amazon.com/images/I/61QEaY1IR5L._SY450_.jpg",
            "https://cdn.silagames.com/game/sega/sonic_mania_cover@2x.jpg",
            "https://i.ytimg.com/vi/EhgDibw7vB4/maxresdefault.jpg"];
var artists=["Malukah","Daichi Miura","Gorillaz","Unknown","Post Malone,Swae Lee","Unknown","Abby Trott"];
var lengths=["310","259","274","147","161","161","246"];
var songLinks=["https://www.youtube.com/watch?v=E7Sa6ZQRqFM",
    "https://www.youtube.com/watch?v=-mbF5s1W4VQ",
    "https://www.youtube.com/watch?v=UclCCFNG9q4",
    "https://www.youtube.com/watch?v=wde_5Bj0HxE",
    "https://www.youtube.com/watch?v=ApXoWvfEYVU",
    "https://www.youtube.com/watch?v=T7ILc-JA_DI",
    "https://www.youtube.com/watch?v=EhgDibw7vB4"];
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
var playList=[songs,imageLinks,artists,lengths,songLinks];

function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}
function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    if($("#songs").val() != "" && $("#songs").val() != "" && $("#songs").val() != "" && $("#songs").val() != "" && $("#songs").val() != ""){
        songs.push($("#songs").val());
        imageLinks.push($("#images").val());
        artists.push($("#artists").val());
        lengths.push($("#lengths").val());
        songLinks.push($("#links").val());
        playList=[songs,imageLinks,artists,lengths,songLinks];
    }
}

function displaySongInfo(){
    songs.forEach(function(e,i){
     $("#songs").append("<p>" + songs[i] + "</p>");
    $("#artists").append("<p>" + artists[i] + "</p>");
    $("#images").append("<img src = ' " + imageLinks[i] + " ' >");
    $("#lengths").append("<p>" + lengths[i] + "</p>");
    $("#links").append("<a href='" + songLinks[i] + " '> </a>");   
    });

}
$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
