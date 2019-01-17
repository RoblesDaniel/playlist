/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Gang Plank Galleon","Blizzard","Clint Eastwood","DB改MAD】ヒカリへのカウントダウン","Sunflower","Flying Battery Zone 1","Lifelight"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images=["Y","Y","N","N","Y","Y","Y"];
var artists=["David Wise","Daichi Miura","Gorillaz","Unknown","Post Malone,Swae Lee","Unknown","Abby Trott"];
var lengths=["77","259","274","308","161","161","246"];
var links=["https://www.youtube.com/watch?v=2oT4bnjlDNE","https://www.youtube.com/watch?v=-mbF5s1W4VQ","https://www.youtube.com/watch?v=UclCCFNG9q4",
"https://www.youtube.com/watch?v=itMohAI602U","https://www.youtube.com/watch?v=ApXoWvfEYVU","https://www.youtube.com/watch?v=T7ILc-JA_DI",
"https://www.youtube.com/watch?v=EhgDibw7vB4"];

    // BELOW Use forEach Loop to display the data from each of your array's in the correct div

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
