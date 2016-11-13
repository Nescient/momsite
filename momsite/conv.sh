#!/bin/bash

convert -trim -density 600 -resize 3700x3700 -flatten 1.pdf 1.png
convert -trim -density 600 -resize 3700x3700 -flatten 2.pdf 2.png
convert -trim -density 600 -resize 3700x3700 -flatten 3.pdf 3.png
convert -trim -density 600 -resize 3700x3700 -flatten 4.pdf 4.png
convert -trim -density 600 -resize 3700x3700 -flatten 5.pdf 5.png
convert -trim -density 600 -resize 3700x3700 -flatten 6.pdf 6.png
convert -trim -density 600 -resize 3700x3700 -flatten 7.pdf 7.png
convert -trim -density 600 -resize 3700x3700 -flatten 8.pdf 8.png
convert -trim -density 600 -resize 3700x3700 -flatten 9.pdf 9.png
convert -trim -density 600 -resize 3700x3700 -flatten 10.pdf 10.png
convert -trim -density 600 -resize 3700x3700 -flatten 11.pdf 11.png
convert -trim -density 600 -resize 3700x3700 -flatten 12.pdf 12.png
convert -trim -density 600 -resize 3700x3700 -flatten 13.pdf 13.png
convert -trim -density 600 -resize 3700x3700 -flatten 14.pdf 14.png
convert -trim -density 600 -resize 3700x3700 -flatten 15.pdf 15.png
convert -trim -density 600 -resize 3700x3700 -flatten 16.pdf 16.png
convert -trim -density 600 -resize 3700x3700 -flatten 17.pdf 17.png
convert -trim -density 600 -resize 3700x3700 -flatten 18.pdf 18.png
convert -trim -density 600 -resize 3700x3700 -flatten 19.pdf 19.png
convert -trim -density 600 -resize 3700x3700 -flatten 20.pdf 20.png
convert -trim -density 600 -resize 3700x3700 -background white -alpha remove 21.pdf 21.png
convert -trim -density 600 -resize 3700x3700 -flatten 22.pdf 22.png
convert -trim -density 600 -resize 3700x3700 -flatten 23.pdf 23.png

exit

composite -gravity center watermark70.png 1.png 1w.png
composite -gravity center watermark.png 2.png 2w.png
composite -gravity center watermark.png 3.png 3w.png
composite -gravity center watermark.png 4.png 4w.png
composite -gravity center watermark.png 5.png 5w.png
composite -gravity center watermark.png 6.png 6w.png
composite -gravity center watermark.png 7.png 7w.png
composite -gravity center watermark.png 8.png 8w.png
composite -gravity center watermark.png 9.png 9w.png
composite -gravity center watermark.png 10.png 10w.png
composite -gravity center watermark.png 11.png 11w.png
composite -gravity center watermark.png 12.png 12w.png
composite -gravity center watermark.png 13.png 13w.png
composite -gravity center watermark.png 14.png 14w.png
composite -gravity center watermark.png 15.png 15w.png
composite -gravity center watermark.png 16.png 16w.png
composite -gravity center watermark.png 17.png 17w.png
composite -gravity center watermark.png 18.png 18w.png
composite -gravity center watermark.png 19.png 19w.png
composite -gravity center watermark.png 20.png 20w.png
composite -gravity center watermark.png 21.png 21w.png
composite -gravity center watermark.png 22.png 22w.png
composite -gravity center watermark.png 23.png 23w.png

exit

convert -density 600 -size 3700x3700 "$1" "$1.png"
composite -gravity center "$1.png" "$1_watermark.png"
exit

convert -density 600 -resize 3700x3700 test.pdf a.png
convert a.png -fuzz 20% -transparent white watermark.png

