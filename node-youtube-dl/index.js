// https://www.ffmpeg.org/download.html
// ./configure --enable-libmp3lame
// make
// make install

const YoutubeMp3Downloader = require("youtube-mp3-downloader");

let YD = new YoutubeMp3Downloader({
  "ffmpegPath": "/usr/local/bin/ffmpeg",        // Where is the FFmpeg binary located?
  "outputPath": "../youtube",    // Where should the downloaded and encoded files be stored?
  "youtubeVideoQuality": "highest",       // What video quality should be used?
  "queueParallelism": 2,                  // How many parallel downloads/encodes should be started?
  "progressTimeout": 2000                 // How long should be the interval of the progress reports
});

YD.on("finished", function(err, data) {
    console.log(JSON.stringify(data));
});

YD.on("error", function(error) {
    console.log(error);
});

YD.on("progress", function(progress) {
    console.log(JSON.stringify(progress));
});

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('../youtubedownloads.txt')
});

lineReader.on('line', function (line) {
    console.log(line.split('=')[1]);
    YD.download(line.split('=')[1]);
});
