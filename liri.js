var Twitter = require("twitter");
var twitterKeys1 = require("./keys.js");
var client = new Twitter({
    consumer_key: twitterKeys1.consumer_key, 
    consumer_secret: twitterKeys1.consumer_secret,
    access_token_key: twitterKeys1.access_token_key,
    access_token_secret: twitterKeys1.access_token_secret,
});

var inquirer = require("inquirer");
var request = require("request");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify({
    id: "f7b0e0105d8046a5a0146daa2b84ef58",
    secret: "12c5207bd73c4aeeaec5a333d4c02e76"
});

var choice = (process.argv[2]);
var name = (process.argv[3]);


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

                console.log("The artist(s) name is: " + data.tracks.items[0].artists[0].name + ".");
                console.log("The title of the song is: " + data.tracks.items[0].name + ".");
                console.log("The song if from the following album:  " + data.tracks.items[0].album.name + ".");
                console.log("The preview link to the song on spotify is: " + data.tracks.items[0].external_urls.spotify + ".\n");

                var z = "\n New Search: ";
                var a = "\n The artist(s) name is: " + data.tracks.items[0].artists[0].name + ".";
                var b = "\n The title of the song is: " + data.tracks.items[0].name + ".";
                var c = "\n The song if from the following album:  " + data.tracks.items[0].album.name + ".";
                var d = "\n The preview link to the song on spotify is: " + data.tracks.items[0].external_urls.spotify + ".\n";

                var Response = z + a + "  " + b + "  " + c + "  " + d + "\n";

                fs.appendFile("./log.txt", Response, function(error) {

                    if (error) {
                        console.log(error);
                    } 

                });
            }
        });

    } else {

        nameString = "Ace of Base"

        spotify.search({ type: 'track', query: nameString, limit: 1 }, function(error, data) {
            if (error) {
                return console.log('Error occurred: ' + error);
            } else {

                console.log("The artist(s) name is: " + data.tracks.items[0].artists[0].name + ".");
                console.log("The title of the song is: " + data.tracks.items[0].name + ".");
                console.log("The song if from the following album:  " + data.tracks.items[0].album.name + ".");
                console.log("The preview link to the song on spotify is: " + data.tracks.items[0].external_urls.spotify + ".\n");

                var z = "\n New Search: ";
                var a = "\n The artist(s) name is: " + data.tracks.items[0].artists[0].name + ".";
                var b = "\n The title of the song is: " + data.tracks.items[0].name + ".";
                var c = "\n The song if from the following album:  " + data.tracks.items[0].album.name + ".";
                var d = "\n The preview link to the song on spotify is: " + data.tracks.items[0].external_urls.spotify + ".\n";

                var Response = z + a + "  " + b + "  " + c + "  " + d + "\n";


                fs.appendFile("./log.txt", Response, function(error) {

                    if (error) {
                        console.log(error);
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

                console.log("The movie's title is: " + JSON.parse(body).Title + ".");
                console.log("The movie's year of release is: " + JSON.parse(body).Year + ".");
                console.log("The movie's imdbRating is: " + JSON.parse(body).imdbRating + ".");
                console.log("The Rotten Tomatoes Rating of the movie is:  " + JSON.parse(body).Ratings[1].Value + ".");
                console.log("The movie was produced in: " + JSON.parse(body).Country + ".");
                console.log("The language of the movie is: " + JSON.parse(body).Language + ".");
                console.log("The plot of the movie is: " + JSON.parse(body).Plot);
                console.log("The actors in the movie are: " + JSON.parse(body).Actors + ".\n");

                var z = "\n New Search: ";
                var a = "\n The movie's title is: " + JSON.parse(body).Title + ".";
                var b = "\n The movie's year of release is: " + JSON.parse(body).Year + ".";
                var c = "\n The movie's imdbRating is: " + JSON.parse(body).imdbRating + ".";
                var d = "\n The Rotten Tomatoes Rating of the movie is:  " + JSON.parse(body).Ratings[1].Value + ".";
                var e = "\n The movie was produced in: " + JSON.parse(body).Country + ".";
                var f = "\n The language of the movie is: " + JSON.parse(body).Language + ".";
                var g = "\n The plot of the movie is: " + JSON.parse(body).Plot;
                var h = "\n The actors in the movie are: " + JSON.parse(body).Actors + ".\n";

                var Response = z + a + "  " + b + "  " + c + "  " + d + "  " + e + "  " + f + "  " + g + "  " + h + "\n";



                fs.appendFile("./log.txt", Response, function(error) {

                    if (error) {
                        console.log(error);
                    } 

                });
            }
        });

    } else {
        nameString = "Mr. Nobody"
        request("http://www.omdbapi.com/?t=" + nameString + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

            if (!error && response.statusCode === 200) {

                console.log("The movie's title is: " + JSON.parse(body).Title + ".");
                console.log("The movie's year of release is: " + JSON.parse(body).Year + ".");
                console.log("The movie's imdbRating is: " + JSON.parse(body).imdbRating + ".");
                console.log("The Rotten Tomatoes Rating of the movie is:  " + JSON.parse(body).Ratings[1].Value + ".");
                console.log("The movie was produced in: " + JSON.parse(body).Country + ".");
                console.log("The language of the movie is: " + JSON.parse(body).Language + ".");
                console.log("The plot of the movie is: " + JSON.parse(body).Plot);
                console.log("The actors in the movie are: " + JSON.parse(body).Actors + ".\n");

                var z = "\n New Search: ";
                var a = "\n The movie's title is: " + JSON.parse(body).Title + ".";
                var b = "\n The movie's year of release is: " + JSON.parse(body).Year + ".";
                var c = "\n The movie's imdbRating is: " + JSON.parse(body).imdbRating + ".";
                var d = "\n The Rotten Tomatoes Rating of the movie is:  " + JSON.parse(body).Ratings[1].Value + "."
                var e = "\n The movie was produced in: " + JSON.parse(body).Country + "."
                var f = "\n The language of the movie is: " + JSON.parse(body).Language + "."
                var g = "\n The plot of the movie is: " + JSON.parse(body).Plot;
                var h = "\n The actors in the movie are: " + JSON.parse(body).Actors + ".\n"

                var Response = z + a + "  " + b + "  " + c + "  " + d + "  " + e + "  " + f + "  " + g + "  " + h + "\n";

                fs.appendFile("./log.txt", Response, function(error) {

                    if (error) {
                        console.log(error);
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
            myTweets();
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

function myTweets() {

    var params = { screen_name: '@LEE_2017_' };

    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log("\nHere is the text of my tweet: " + tweets[i].text + ". ");
                console.log("The tweet was created: " + tweets[i].created_at + ". ");

                var a = "\nHere is the text of my tweet: " + tweets[i].text + ". "
                var b = "The tweet was created: " + tweets[i].created_at + ". "

                var Response = a + b + "\n";

                fs.appendFile("./log.txt", Response, function(err) {

                    if (error) {
                        console.log(error);
                    } 

                });


            }
        }
    });

}

if (choice === "my-tweets") {
    myTweets();
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