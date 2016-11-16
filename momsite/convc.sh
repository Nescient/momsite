#!/bin/bash

IN="$1".png
NORM="$1"_t.png
WATER="$1"_w.png

convert -trim -density 100 -flatten -depth 3 -resize 1024x1024 $IN $NORM





convert -density 100 -depth 4 -resize 1024x1024 watermark.png w1024.png
convert -resize 90% w1024.png w90.png
convert -resize 80% w1024.png w80.png
convert -resize 70% w1024.png w70.png
convert -resize 60% w1024.png w60.png


composite -gravity center w1024.png 7_trim3.png 7w.png

composite -gravity center w90.png 7t.png 7_w90.png
composite -gravity center w80.png 7t.png 7_w80.png
composite -gravity center w70.png 7t.png 7_w70.png
composite -gravity center w60.png 7t.png 7_w60.png




width=$(identify -format %w 7t.png)
convert -background '#0008' -fill white -gravity center -size ${width}x30 caption:"Please respect the copywrite of the artist." 7t.png +swap -gravity south -composite 7_wts.png
convert -background '#0008' -fill white -gravity center -size ${width}x30 caption:"Please respect the copywrite of the artist." 7t.png +swap -gravity north -composite 7_wtn.png
convert -background '#0008' -fill white -gravity center -size ${width}x30 caption:"Please respect the copywrite of the artist." 7t.png +swap -composite 7_wtm.png
convert -background '#0008' -fill white -gravity center -size ${width}x100 caption:"Please respect the copywrite of the artist." -pointsize 100 7t.png +swap -gravity north -composite 7_wtnl.png



