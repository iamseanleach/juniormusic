<?php

$dirname = "songs/";
$songs = glob($dirname."*.mp3");
foreach($songs as $song) {
echo '<audio src="'.$song.'" /><br />';
}
 
?>