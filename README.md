# SoundCloud
Use scdl.sh to download SoundCloud songs   
You first need to install `scdl`   

`pip3 install scdl`

Add SoundCloud links to `soundclouddownloads.txt`   
`chmod +x scdl.sh`   
`./scdl.sh`   

# YouTube
Use `index.js` in  `node-youtube-dl` to download YouTube videos as MP3s
First you need to install ffmpeg with libmp3lame enabled

```
  ./configure --enable-libmp3lame
  make
  make install
```

add YouTube links to `youtubedownloads.txt`   
run `node index.js`   
