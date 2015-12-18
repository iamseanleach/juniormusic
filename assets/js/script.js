//var dir = "songs/";
//var fileextension = ".mp3";
//var songName = "Song";
//$.ajax({
//    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
//    url: dir,
//    success: function (data) {
//        //List all .png file names in the page
//        $(data).find("a:contains(" + fileextension + ")").each(function () {
//            var filename = this.href.replace(window.location.host, "").replace("http://", "");
//            $("#playListContainer").append("<li class='songFile' data-src='" + filename + "'>");    
//        });
//    }
//
//});
//
//    $(document).ajaxComplete(function() {
//        $(".songFile").append("<a>" + songName + "</a>");
//});

// local playlist data
            
var playlist = [
    {
        song_id: 1,
        song_title: "Dreams",
        song_artist: "Beck",
        song_url: "songs-loaded/Dreams-Beck.mp3",
        song_cover_url: "covers/dreams-beck.jpg"
    },
    {
        song_id: 2,
        song_title: "Paradise",
        song_artist: "Cris Cab",
        song_url: "songs-loaded/Dreams-Beck.mp3",
        song_cover_url: "covers/criscab.jpg"
    },
    {
        song_id: 3,
        song_title: "Focus",
        song_artist: "P'aris",
        song_url: "songs-loaded/Focus.mp3",
        song_cover_url: "covers/PARIS-Focus-2015.jpg"
    },
    {
        song_id: 4,
        song_title: "Before",
        song_artist: "Vok",
        song_url: "songs-loaded/04-before-vok.mp3",
        song_cover_url: "covers/04-before-vok.jpg"
    },
    {
        song_id: 5,
        song_title: "No No No",
        song_artist: "Beirut",
        song_url: "songs-loaded/05-nonono-beirut.mp3",
        song_cover_url: "covers/05-nonono-beirut.jpg"
    },
    {
        song_id: 6,
        song_title: "Santa Fe",
        song_artist: "Beirut",
        song_url: "songs-loaded/06-santafe-beirut.mp3",
        song_cover_url: "covers/06-santafe-beirut.jpg"
    },
    {
        song_id: 7,
        song_title: "Peaches",
        song_artist: "The Districts",
        song_url: "songs-loaded/peaches.mp3",
        song_cover_url: "covers/peaches.jpg"
    },
    {
        song_id: 8,
        song_title: "My Type",
        song_artist: "Saint Motel",
        song_url: "songs-loaded/my-type.mp3",
        song_cover_url: "covers/my-type.jpg"
    },
    {
        song_id: 9,
        song_title: "Waves",
        song_artist: "Bahamas",
        song_url: "songs-loaded/bahamas-waves.mp3",
        song_cover_url: "covers/bahamas-bahamas-is-alfie.jpg"
    },
    {
        song_id: 10,
        song_title: "Tiff",
        song_artist: "Polica",
        song_url: "songs-loaded/Polica.mp3",
        song_cover_url: "covers/tiff.jpg"
    },
    {
        song_id: 11,
        song_title: "Stage Dive",
        song_artist: "SOL",
        song_url: "songs-loaded/Sol_-_Stage_Dive__single_.mp3",
        song_cover_url: "covers/stagedive.jpg"
    },
    {
        song_id: 12,
        song_title: "Hello",
        song_artist: "J. Cole",
        song_url: "songs-loaded/10-Hello.mp3",
        song_cover_url: "covers/jcole.jpg"
    },
    {
        song_id: 13,
        song_title: "Pony",
        song_artist: "Ginuwine",
        song_url: "songs-loaded/Pony-Ginuwine.mp3",
        song_cover_url: "covers/06-santafe-beirut.jpg"
    },
    {
        song_id: 14,
        song_title: "Hot Blur",
        song_artist: "How Sad",
        song_url: "songs-loaded/HowSad-HotBlur.mp3",
        song_cover_url: "covers/hotblur.jpg"
    },
    {
        song_id: 15,
        song_title: "Sophie",
        song_artist: "Bear's Den",
        song_url: "songs-loaded/Bear'sDen-Sophie.mp3",
        song_cover_url: "covers/sohpoe.jpg"
    },
    {
        song_id: 16,
        song_title: "Now Go",
        song_artist: "Erato",
        song_url: "songs-loaded/Erato-Nowgo.mp3",
        song_cover_url: "covers/erato.jpg"
    },
    {
        song_id: 17,
        song_title: "Banner",
        song_artist: "Lights",
        song_url: "songs-loaded/LIGHTS-Banner.mp3",
        song_cover_url: "covers/banner.jpg"
    },
    {
        song_id: 18,
        song_title: "I Do",
        song_artist: "Susie Suh",
        song_url: "songs-loaded/SusieSuh-I Do.mp3",
        song_cover_url: "covers/ido.jpg"
    },
    {
        song_id: 19,
        song_title: "Dreamer",
        song_artist: "Isbells",
        song_url: "songs-loaded/Isbells-Dreamer.mp3",
        song_cover_url: "covers/dreamer.jpg"
    },
    {
        song_id: 20,
        song_title: "Obvs",
        song_artist: "Jamie xx",
        song_url: "songs-loaded/Obvs-Jamiexx.mp3",
        song_cover_url: "covers/obvs.jpg"
    }            
]




// Custom Functionality Code For Audio Player 

$(document).ready(function(){
    
    
    $('.detailIcon').click(function() {
//        console.log('details');
        $('.detailContainer').css("visibility", "visible"),
        $('.detailBG').toggleClass('fadeIn'),
        $('.bigButton').toggleClass('fadeOut'),
        $('.progress').toggleClass('fadeOut'),
        $('.songPlayTitle').toggleClass('fadeOut'),
        $('.songPlayArtist').toggleClass('fadeOut'),
        $('.audioTime').toggleClass('fadeOut'),
        $('.musicBarsIcon').css("visibility", "visible"),
        $('.detailIcon').css("visibility", "hidden");
            
    });
    
    $('.musicBarsIcon').click(function() {
        $('.detailContainer').css("visibility", "hidden"),
        $('.detailIcon').css("visibility", "visible"),
        $('.musicBarsIcon').css("visibility", "hidden"),
        $('.detailBG').toggleClass('fadeIn'),
        $('.bigButton').toggleClass('fadeOut'),
        $('.progress').toggleClass('fadeOut'),
        $('.songPlayTitle').toggleClass('fadeOut'),
        $('.songPlayArtist').toggleClass('fadeOut'),
        $('.audioTime').toggleClass('fadeOut');
    });
    
    
    
    
    // playlist dom elements
    var playlistContainer = $("#playListContainer");
    var albumCover = $("#albumCover");
    
    // next & previous song variables
    var listTop = 0;
    var transitionDistance = 50;
    var initialTrackPosition = 1;
    var lastTrackPosition = playlist.length;
    var currentTrackPosition = initialTrackPosition;
            
    // load song into playlist
    playlist.forEach(function(obj) {

        console.log(obj);
        // add song info 
        var songNode = document.createElement('H4');
        $(songNode).attr('data-album-cover', obj.song_cover_url);
        songNode.className = ('songTitle');
        var songText = document.createTextNode(obj.song_title);
        songNode.appendChild(songText);

        var artistNode = document.createElement('H4');
        artistNode.className = ('artistName');
        var artistText = document.createTextNode(obj.song_artist);
        artistNode.appendChild(artistText);

        var songListItem = document.createElement('LI');
        $(songListItem).attr('data-src', obj.song_url);


        var songHref = document.createElement('A');

        songHref.appendChild(songNode);
        songHref.appendChild(artistNode);

        songListItem.appendChild(songHref);

        playlistContainer.append(songListItem);
        
    });

    // song controls
    playlistContainer.audioControls({
        autoPlay : false,
        timer: 'increment',
        onAudioChange : function(response){
            console.log(response);
            
            // add song parameters to dom from player on controls
            $('.songPlayTitle').text(response.title);
            $('.songPlayArtist').text(response.artist);
            $('.artistName').css("visibility", "hidden");

            
            // 
            albumCover.attr('src', response.albumCover);
        },
        onVolumeChange : function(vol){
            var obj = $('.volume');
            if(vol <= 0){
                obj.attr('class','volume mute');
            } else if(vol <= 33){
                obj.attr('class','volume volume1');
            } else if(vol > 33 && vol <= 66){
                obj.attr('class','volume volume2');
            } else if(vol > 66){
                obj.attr('class','volume volume3');
            } else {
                obj.attr('class','volume volume1');
            }
        }
    });
    


    // go to next song transition
    $(".right").click(function(){ 
        currentTrackPosition++;
        
        if (currentTrackPosition <= lastTrackPosition) {
            listTop -= transitionDistance;
            var listPosition = listTop;   
            $(".songList").animate({ "top" : listPosition+"px" }, 400 );
            console.log(currentTrackPosition);
        }

        $('.bigPlay').addClass('hidden'),
        $('.bigPause').addClass('visible'),
        $('.bar1').addClass('animateMusicBars'),
        $('.bar2').addClass('animateMusicBars'),
        $('.bar3').addClass('animateMusicBars'),
        $('.bar4').addClass('animateMusicBars');
        
    });

    // go to previous song transition
    $(".left").click(function(){
        currentTrackPosition--;
        
        if (currentTrackPosition >= initialTrackPosition) {
            listTop += transitionDistance;
            var listPosition = listTop; 
            $(".songList").animate({ "top" : listPosition+"px" }, 400 );
            console.log(currentTrackPosition);
        }
        
        
        
    });
    
    

    $(".play").click(function(){

        $('.bigPlay').toggleClass('hidden'),
        $('.bigPause').toggleClass('visible');
        $('.bar1').toggleClass('animateMusicBars'),
        $('.bar2').toggleClass('animateMusicBars'),
        $('.bar3').toggleClass('animateMusicBars'),
        $('.bar4').toggleClass('animateMusicBars');
        
    });
    
    $(".pause").click(function(){

        $('.bigPlay').toggleClass('visible'),
        $('.bigPause').toggleClass('hidden'),
        $('.bar1').toggleClass('animateMusicBars'),
        $('.bar2').toggleClass('animateMusicBars'),
        $('.bar3').toggleClass('animateMusicBars'),
        $('.bar4').toggleClass('animateMusicBars');
        
    });
    
    
    
//    $('a[data-attr="playPauseAudio"]').click(function(event) {
//        $('.bigButton').attr('state', 'enable');
//    });
    
    $(document).on('click', '.bigButton', function(event) { 
    event.preventDefault(); 
    $(".play").click(); 
});
    
    $(".graphContainer").position("left", "slow");

});




new Dragdealer('simple-slider');

//var chart = new Chartist.Line('.ct-chart', {
//  labels: [1, 2, 3, 4, 5],
//  series: [
//    [1, 1, 1, 10, 1, 1, 1]
//  ]
//}, {
//  // Remove this configuration to see that chart rendered with cardinal spline interpolation
//  // Sometimes, on large jumps in data values, it's better to use simple smoothing.
//  lineSmooth: Chartist.Interpolation.simple({
//    divisor: 2
//  }),
//  fullWidth: false,
//  chartPadding: {
//    right: 0
//  },
//  low: 0
//});
