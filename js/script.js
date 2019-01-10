/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Gang Plank Galleon","Blizzard","Clint Eastwood","DB改MAD】ヒカリへのカウントダウン","Sunflower","Flying Battery Zone 1","Lucky You"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images=[];
var artists=[];
var lengths=[];
var links=["https://www.youtube.com/watch?v=2oT4bnjlDNE","https://www.youtube.com/watch?v=-mbF5s1W4VQ","","","","",""];

    // BELOW Use forEach Loop to display the data from each of your array's in the correct div

}

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
