var twitterKeys1 = require("./keys.js");
var request = require("request");
var choice = (process.argv[2]);
var name = (process.argv[3]);
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify({
    id: "f7b0e0105d8046a5a0146daa2b84ef58",
    secret: "12c5207bd73c4aeeaec5a333d4c02e76"
});


function spotifyThisSong() {

    if (name) {
        var nameString = "";
        var searchNameArray = name.split(" ");
        searchNameArray.forEach(function(search) {
            nameString += search + "+"
        });

        spotify.search({ type: 'track', query: nameString, limit: 1 }, function(error, data) {
            if (error) {
                return console.log('Error occurred: ' + error);
            } else {

                var a = "The artist(s) name is: " + data.tracks.items[0].artists[0].name + ".";
                var b = "The title of the song is: " + data.tracks.items[0].name + ".";
                var c = "The song if from the following album:  " + data.tracks.items[0].album.name + ".";
                var d = "The preview link to the song on spotify is: " + data.tracks.items[0].external_urls.spotify + ".";

                var Response = a + "  " + b + "  " + c + "  " + d + " <br> <br> <br> ";

                fs.appendFile("./log.txt", Response, function(err) {

                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Content Added!");
                    }

                });
            }
        });

    } else {

        nameString = "Ace of Base"

        spotify.search({ type: 'track', query: nameString, limit: 1 }, function(error, data) {
            if (error) {
                return console.log('Error occurred: ' + err);
            } else {

                var a = "The artist(s) name is: " + data.tracks.items[0].artists[0].name + ".";
                var b = "The title of the song is: " + data.tracks.items[0].name + ".";
                var c = "The song if from the following album:  " + data.tracks.items[0].album.name + ".";
                var d = "The preview link to the song on spotify is: " + data.tracks.items[0].external_urls.spotify + ".";

                var Response = a + "  " + b + "  " + c + "  " + d + " <br> <br> <br> ";

                fs.appendFile("./log.txt", Response, function(err) {

                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Content Added!");
                    }

                });
            }
        });
    }
}


function movieThis() {
    if (name) {
        var nameString = "";
        var searchNameArray = name.split(" ");
        searchNameArray.forEach(function(search) {
            nameString += search + "+"
        });

        request("http://www.omdbapi.com/?t=" + nameString + "&y=&plot=short&apikey=trilogy", function(error, response, body) {


            if (!error && response.statusCode === 200) {

                var a = "The movie's title is: " + JSON.parse(body).Title + ".";
                var b = "The movie's year of release is: " + JSON.parse(body).Year + ".";
                var c = "The movie's imdbRating is: " + JSON.parse(body).imdbRating + ".";
                var d = "The Rotten Tomatoes Rating of the movie is:  " + JSON.parse(body).Ratings[1].Value + "."
                var e = "The movie was produced in: " + JSON.parse(body).Country + "."
                var f = "The language of the movie is: " + JSON.parse(body).Language + "."
                var g = "The plot of the movie is: " + JSON.parse(body).Plot;
                var h = "The actors in the movie are: " + JSON.parse(body).Actors + "."

                var Response = a + "  " + b + "  " + c + "  " + d + "  " + e + "  " + f + "  " + g + "  " + h + " <br> <br> <br> ";



                fs.appendFile("./log.txt", Response, function(err) {

                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Content Added!");
                    }

                });
            }
        });

    } else {
        nameString = "Mr. Nobody"
        request("http://www.omdbapi.com/?t=" + nameString + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

            if (!error && response.statusCode === 200) {

                var a = "The movie's title is: " + JSON.parse(body).Title + ".";
                var b = "The movie's year of release is: " + JSON.parse(body).Year + ".";
                var c = "The movie's imdbRating is: " + JSON.parse(body).imdbRating + ".";
                var d = "The Rotten Tomatoes Rating of the movie is:  " + JSON.parse(body).Ratings[1].Value + "."
                var e = "The movie was produced in: " + JSON.parse(body).Country + "."
                var f = "The language of the movie is: " + JSON.parse(body).Language + "."
                var g = "The plot of the movie is: " + JSON.parse(body).Plot;
                var h = "The actors in the movie are: " + JSON.parse(body).Actors + "."

                var Response = a + "  " + b + "  " + c + "  " + d + "  " + e + "  " + f + "  " + g + "  " + h + " <br> <br> <br>  ";



                fs.appendFile("./log.txt", Response, function(err) {

                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Content Added!");
                    }

                });
            }
        });
    }

}

function reWrite() {

    if (name) {

        fs.writeFile("./random.txt", name, function(error) {
            if (error) {
                return console.log(error);
            } else {
                console.log("file was updated!");
            }
        });
    }
}

function doWhatItSays() {

    fs.readFile("./random.txt", "utf8", function(error, data) {

        if (error) {
            return console.log(error);
        }

        var dataArr = data.split(",");

        if (dataArr[0] === "my-tweets") {
            console.log("twitter");
            console.log(twitterKeys1);
            //myTweets();
        }

        if (dataArr[0] === "spotify-this-song") {
            name = dataArr[1];
            spotifyThisSong();
        }


        if (dataArr[0] === "movie-this") {
            name = dataArr[1];
            movieThis();
        }

    });
}

//function myTweets (){

//}

if (choice === "my-tweets") {
    console.log("twitter");
    console.log(twitterKeys1);
    //myTweets();
}

if (choice === "spotify-this-song") {
    spotifyThisSong();
}


if (choice === "movie-this") {
    movieThis();

}

if (choice === "do-what-it-says") {
    reWrite();
    doWhatItSays();
}