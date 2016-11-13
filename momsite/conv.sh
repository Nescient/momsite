#!/bin/bash
#Copyright © Sam Savage 2016

MAKE_DIRS=true
DO_ALL=true
DO_WATERMARK=false

while getopts "di:w" opt; do
   case $opt in
      d) MAKE_DIRS=false;;
      i) DO_ALL="$OPTARG";;
      w) DO_WATERMARK=true;;
  esac
done

if [ "$DO_WATERMARK" == true ]; then
   convert -trim -density 600 test.pdf a.png
   convert a.png -fuzz 20% -transparent white -resize 3700x3700 -trim b.png
   convert b.png -density 100 -depth 2 watermark.png
   convert watermark.png -resize 90% watermark90.png
   convert watermark.png -resize 80% watermark80.png
   convert watermark.png -resize 70% watermark70.png
   convert watermark.png -resize 60% watermark60.png
fi

if [ "$MAKE_DIRS" == true ]; then
   mkdir raw
   mkdir norm
   mkdir mark
fi

SEQ=$(seq 1 23)

if [ "$DO_ALL" != true ]; then
   SEQ=$DO_ALL
fi

for i in $SEQ; do
   echo "Image $i"
   convert -trim -density 600 -flatten $i.pdf raw/$i.png
   convert -density 100 -resize 3700x3700 -depth 2 -trim raw/$i.png norm/$i.png
   composite -gravity center watermark.png norm/$i.png mark/"$i"_w1.png
   composite -gravity center watermark90.png norm/$i.png mark/"$i"_w9.png
   composite -gravity center watermark80.png norm/$i.png mark/"$i"_w8.png
   composite -gravity center watermark70.png norm/$i.png mark/"$i"_w7.png
   composite -gravity center watermark60.png norm/$i.png mark/"$i"_w6.png
done
