// Copyright © Sam Savage 2016
// Copyright © Marlene Roeder 2016
class MomsImage {
    fileName: string;
    imageId: number;
    name: string;
    description: string;

    constructor(file: string, id: number, name: string, description: string) {
        this.fileName = file;
        this.imageId = id;
        this.name = name;
        this.description = description;
    }

    getTitle(): string {
        return ("0" + this.imageId.toString()).slice(-2) + " - " + this.name;
    }

    getImageFileName(): string {
        return "data/" + this.imageId.toString() + ".png";
    }

    getDescriptionFileName(): string {
        return "data/" + this.imageId.toString() + ".htm";
    }
}

var img01 = new MomsImage("1.png", 1, "Zentangle Tribute", "<p>I used to work at the Everson Museum of Art and had the most \
wonderful relationship with the docents at the museum.  I respected them so \
much for their unpaid dedication to educating the public about art at the \
Everson.  One of those docents introduced me to Zentangle a few years ago.  I \
looked at the website and at her wonderful work and thought, “I’d like to do \
that some day when I’m not babysitting my granddaughters anymore.” Well, that \
day came. I bought a basic Zentangle book and began doing designs a few days a \
week with my oldest granddaughter (who’s pretty artistic). I really enjoyed \
doing the designs and felt the freedom of experimentation within a prescribed \
kind of framework.  I grew to love line, understand its use in a way I never \
did with other artistic pursuits. I began to see how Van Gogh used line in his \
work, how Japanese woodprints were linear, how some of my favorite illustrators \
(like Trina Schart Hyman) were masters of line. I started to concentrate on \
line drawings, eliminating the distraction of color. This led to the creation \
of mandalas using basic Zentangle elements. From there I thought of \
mandalas/circles depicting objects in my own world. It’s been really fun \
exploring this and I have lots more ideas to make real.  </p> ");






var img02 = new MomsImage("2.png", 2, "Spring Storm", "<p>This Circle of Life is all about Spring—<i>Fecund</i> Spring.  Philip Yenawine, the \
co-founder of Visual Thinking Strategies, introduced me to this powerful, \
evocative word through his superb facilitation skills.  The etymology of the \
word <i>fecund </i>harkens back to the Latin word, “fruitful.” The word speaks \
of new life, palpable growth, the pregnant earth waiting to deliver Spring.  \
This circle has the tingling energy of lightning, the swirl of Spring winds, \
and rain charging the plants to grow. The beech nut in the center has split open \
to release a new tree.  Those early harbingers of Spring--tulips--wend their \
way through the circle. Small fragile leaves burst from their buds. Sprouts \
emerge from the soil. I hope you feel the sense of movement and joy I have \
tried to convey.</p>");




var img03 = new MomsImage("3.png", 3, "Octopus Dance", "<p>I had the spectacular opportunity to work with the amazing \
education staff at the Seattle Aquarium, doing professional development in \
Visual Thinking Strategies (a really effective way of facilitating discussions \
to support observation, evidential reasoning, and open-ended thinking) with a \
colleague from the Wild Center, Natural History Museum of the Adirondacks in \
February, 2016 (whew, that was a LONG sentence).  I was not very knowledgeable \
about sea creatures, especially those of the NW Puget Sound area (although I \
did a lot of fishing with my dad when I was younger). We got a backstage look \
at all of the creatures—I got to be “tasted” by an incredibly vivid scarlet \
octopus, who wrapped a tentacle around my finger; studied a huge, complicated \
Basket Star; carefully looked at several kinds of Rock Fish (the yummy fish I \
had been eating), Salmon, Sea Anemones, and a Wolf Eel.  I was totally blown \
away by the size of Squid eggs. I facilitated discussions with kids about Tidal \
Pools and a large Sea Snail that looked a lot like Jabba the Hut.  I learned \
about Kelp Forests.  It was great to be over 60 years old learning about a \
“Whole New World.” We had VTS discussions about the creatures in their huge \
tanks, I went back numerous times and just looked at the creatures, and finally \
I look tons of pictures. I just couldn’t get the images out of my head—I had to \
draw them over and over again in their own little Circles of Life.  They were \
all just so amazing.  I hope you can catch some of my enthusiasm through these coloring \
pages.  </p> \
<p>3- <i>Octopus Dance:  </i>I tried to illustrate the \
incredibly sinuous nature of octopus tentacles.  I still can’t believe I got to \
be tasted by an octopus.  He/she did start to wrap around my finger, but then \
decided I didn’t taste so great.  The two fish are rock fish—they really do \
look like Muppets. At the bottom are basket stars with their “reaching hands” \
sifting the sea.  Anemones sway in the current. Some kind of kelp/sea plant \
contrasts with the delicacy of the anemones and basket star.</p>");





var img04 = new MomsImage("4.png", 4, "Oceans Echoes", "<p>I had the spectacular opportunity to work with the amazing \
education staff at the Seattle Aquarium, doing professional development in \
Visual Thinking Strategies (a really effective way of facilitating discussions \
to support observation, evidential reasoning, and open-ended thinking) with a \
colleague from the Wild Center, Natural History Museum of the Adirondacks in \
February, 2016 (whew, that was a LONG sentence).  I was not very knowledgeable \
about sea creatures, especially those of the NW Puget Sound area (although I \
did a lot of fishing with my dad when I was younger). We got a backstage look \
at all of the creatures—I got to be “tasted” by an incredibly vivid scarlet \
octopus, who wrapped a tentacle around my finger; studied a huge, complicated \
Basket Star; carefully looked at several kinds of Rock Fish (the yummy fish I \
had been eating), Salmon, Sea Anemones, and a Wolf Eel.  I was totally blown \
away by the size of Squid eggs. I facilitated discussions with kids about Tidal \
Pools and a large Sea Snail that looked a lot like Jabba the Hut.  I learned \
about Kelp Forests.  It was great to be over 60 years old learning about a \
“Whole New World.” We had VTS discussions about the creatures in their huge \
tanks, I went back numerous times and just looked at the creatures, and finally \
I look tons of pictures. I just couldn’t get the images out of my head—I had to \
draw them over and over again in their own little Circles of Life.  They were \
all just so amazing.  I hope you can catch some of my enthusiasm through these coloring \
pages.  </p> \
<p><i>4-Ocean Echoes:  </i>The oval objects are Squid Eggs—they \
are about 5 inches long!  The dotted areas represent the sides of Salmon. The \
swirls are moving water or anemones. The round coiled objects are basket stars \
(Look them up. They’re amazing). At the outside of the circle and again at the \
center are horned-shaped objects—the “reaching hands” of the basket stars.  The \
large-striped areas are fins.  The rounded areas are fish eyes.  The lighter, \
smaller stripes represent fish gills.</p>");





var img05 = new MomsImage("5.png", 5, "Kelp Dance", "<p>I had the spectacular opportunity to work with the amazing \
education staff at the Seattle Aquarium, doing professional development in \
Visual Thinking Strategies (a really effective way of facilitating discussions \
to support observation, evidential reasoning, and open-ended thinking) with a \
colleague from the Wild Center, Natural History Museum of the Adirondacks in \
February, 2016 (whew, that was a LONG sentence).  I was not very knowledgeable \
about sea creatures, especially those of the NW Puget Sound area (although I \
did a lot of fishing with my dad when I was younger). We got a backstage look \
at all of the creatures—I got to be “tasted” by an incredibly vivid scarlet \
octopus, who wrapped a tentacle around my finger; studied a huge, complicated \
Basket Star; carefully looked at several kinds of Rock Fish (the yummy fish I \
had been eating), Salmon, Sea Anemones, and a Wolf Eel.  I was totally blown \
away by the size of Squid eggs. I facilitated discussions with kids about Tidal \
Pools and a large Sea Snail that looked a lot like Jabba the Hut.  I learned \
about Kelp Forests.  It was great to be over 60 years old learning about a \
“Whole New World.” We had VTS discussions about the creatures in their huge \
tanks, I went back numerous times and just looked at the creatures, and finally \
I look tons of pictures. I just couldn’t get the images out of my head—I had to \
draw them over and over again in their own little Circles of Life.  They were \
all just so amazing.  I hope you can catch some of my enthusiasm through these coloring \
pages.  </p> \
<p><i>5- Kelp Dance: </i> Kelp sways in the foreground and \
background of this picture.  I never knew about Kelp Forests until working at \
the Seattle Aquarium.  These beautiful, eerie, oxygenating forests cover vast \
areas of the northwest Pacific Ocean.  The pictures I’ve seen are stunning.  (Look \
it up on Youtube.) Octopus tentacles embrace the scene.  Two rock fish peek out \
from the anemones and basket stars.  The salmon is swimming away in the \
background.</p> ");







var img06 = new MomsImage("6.png", 6, "Salmon Hide-and-Seek", "<p>I had the spectacular opportunity to work with the amazing \
education staff at the Seattle Aquarium, doing professional development in \
Visual Thinking Strategies (a really effective way of facilitating discussions \
to support observation, evidential reasoning, and open-ended thinking) with a \
colleague from the Wild Center, Natural History Museum of the Adirondacks in \
February, 2016 (whew, that was a LONG sentence).  I was not very knowledgeable \
about sea creatures, especially those of the NW Puget Sound area (although I \
did a lot of fishing with my dad when I was younger). We got a backstage look \
at all of the creatures—I got to be “tasted” by an incredibly vivid scarlet \
octopus, who wrapped a tentacle around my finger; studied a huge, complicated \
Basket Star; carefully looked at several kinds of Rock Fish (the yummy fish I \
had been eating), Salmon, Sea Anemones, and a Wolf Eel.  I was totally blown \
away by the size of Squid eggs. I facilitated discussions with kids about Tidal \
Pools and a large Sea Snail that looked a lot like Jabba the Hut.  I learned \
about Kelp Forests.  It was great to be over 60 years old learning about a \
“Whole New World.” We had VTS discussions about the creatures in their huge \
tanks, I went back numerous times and just looked at the creatures, and finally \
I look tons of pictures. I just couldn’t get the images out of my head—I had to \
draw them over and over again in their own little Circles of Life.  They were \
all just so amazing.  I hope you can catch some of my enthusiasm through these coloring \
pages.  </p> \
<p><i>6-Salmon Hide and Seek:  </i>The two rock fish and the \
salmon seem to be playing a game of hide and seek. The silver, patterned skin \
of the salmon is beautiful.  The markings of the rockfish are quite theatrical. \
Amazing basket stars cover the bottom quadrant, with anemones on the right. The \
long elliptically shaped objects on the left are squid eggs. Some kelp is \
growing up from the bottom. </p> ");





var img07 = new MomsImage("7.png", 7, "Climax Forrest", "<p><b><i>Climax Forest</i></b>, a Circle of Life: Trees</p> \
<p>I LOVE trees…almost as much as I love words, or God, or my \
husband, or my kids and grandkids, or my friends. Trees are beautiful to look \
at, shady to sit under, exhilarating in windy weather; and they provide awesome \
things like lumber, maple syrup, and food. We have about 20 acres of forested \
land and I am thankful every day for the view outside of our windows, for the \
wildlife supported by these trees, for the country air I love to breath, and \
the walks I can take with those I love through the woods.  This <i>Circle of \
Life</i> is a tribute to the <b><i>Climax Forest</i></b> of New England—and especially \
to the trees in our own backyard. I hope this information will help you love \
trees as much as I do. The quotes are by an amazing, erudite naturalist named \
Donald Culross Peattie, from a book called, <u>A Natural History of Trees</u>. \
All of his books combine scholarship, great person understanding of the natural \
world, and a poet/artist’s soul.</p> \
<p><b>White Pine (Pinus strobus)</b></p> \
<p>White Pine is a Northern timber-producing tree that played a \
huge part in the growth of our nation.  New York was once a vast White Pine \
forest; and pioneers say that squirrels could live their entire lives in the \
boughs and never some down.  Those virgin forest trees were 150 feet tall (14 \
stories). Fish, fur, and White Pine—the treasures the English settlers \
discovered.  The colonists’ need for boards and fire wood was dwarfed by the \
voracious appetite of the English Navy for masts made of this strong, light soaring \
timber. All White Pine hence belonged to the Crown by decree. The colonists \
were forbidden to cut them or use them.  Secret mills were set up by the early \
Patriots, secret British agents spied out loggers, colonist dressed as native \
people cutting trees at night to thwart the agents.  In 1774 congress forbad \
the sale of White Pine to the English, not desirous of seeing those masts \
returning on enemy ships.  The first flag of the Revolutionary War was \
emblazoned with a White Pine tree.</p> \
 \
<p>After the Revolutionary War, America was literally built on \
White Pine—houses (boards and shingles), furniture, bridges—covered or not, railroad \
ties, matches, toys, the list could go on for pages. For 300 years, the logs \
were hauled in winter by sleds, floated down rivers to saw mills, and exploited \
by businessmen with no sense of future consequences. The massive White Pine \
forests were eventually obliterated in the northeast.  Conservationists used \
this sorry situation to spur efforts to protect forests throughout the United \
States and create the National Park system.</p> \
 \
<p>My husband loves to refer to the white Pine as “emergent,” \
and I love to see its crown sticking out over all the other forest trees. This \
makes them especially desirable as perches for large birds like the American Bald \
Eagle.  The needles are soft and delicate—by daughter’s friend makes lovely \
baskets  from the needles, the cone scales swirl in a Fibonacci sequence like a \
seashell or a pineapple (and they’re REALLY hard to draw!), and they provide \
food and shelter for a myriad of creatures--deer, rabbits, chipmunks, voles, \
moles, mice, Black-capped Chickadees, woodpeckers, nuthatches, squirrels, and even \
black bears.</p> \
 \
<p>&nbsp;</p> \
 \
<p>&nbsp;</p> \
 \
<p><b>Wild Black Cherry (Prunus serotina)</b></p> \
 \
<p>There are many of these tall trees on our property and the \
squirrels especially love them when the small hard cherries drop from the \
trees.  I especially hate it when the Tent Caterpillars invade the treetops.  \
Cherry is a beautiful smooth-grained wood that a treasured friend cut and \
milled with his Wood Mizer to create a beautiful railing for our steps. It is \
second only to black walnut as the finest cabinet wood in temperate North \
America; never warping after seasoning. “It is related that the immortal Daniel \
Boone made himself several Cherry caskets, and used occasionally to sleep in \
them, in his old age, but gave up all but his last to needy corpses.”</p> \
 \
<p>&nbsp;</p> \
 \
<p><b>Eastern Cottonwood (Populus deltoids W. Bartram)</b></p> \
 \
<p>When we moved onto our property nearly 40 years ago 3 huge \
Eastern Cottonwood/Poplars (or as our neighbor/logger calls them “Popples”) \
hugged our rustic hunting camp. Taking those trees down was a challenged to \
country neophytes, but thankfully the county mowing guy came along at just the \
right time and helped save our house.  In the last five years we’ve seen the \
demise of countless cottonwoods felled by voracious beavers on our small crick, \
waging war with us to turn the small valley back into a pond. As the native \
hardwoods on our property have grown, they’ve blocked out the sun for the \
Eastern Cottonwoods and they’ve moved on to former bean fields now abandoned.  \
Its cousin the Quaking Aspen takes your breath away in the autumn when driving \
through the Rockies, covering huge swath of mountainsides. “In Colorado people \
are so rich in Aspen gold they can forget how poor they are in all the other \
hues of the eastern forest.”</p> \
 \
<p>Cottonwoods grow amazingly fast, up to 5 feet a year; and \
these invaders/opportunists love to quickly claim an abandoned field-- a first \
responder during forest succession.  The life of an Eastern Cottonwood is \
short, corresponding to the life of a person. The way the leaves hang on their \
petioles gives them a special way of rustling in the slightest wind.  Their \
young bark is smooth and honey colored, sometimes lighter, almost like a White \
Birch, changing to rougher, platy bark as they age.  I guess again, resembling \
human life. I love this quote by Peattie, “The Cottonwood is forever pruning \
itself of dead wood, and is, indeed, forever dying even while it continues its \
phenomenally rapid growth.  Yet though so short-lived, so swift to decay, the \
Cottonwood, when cut back, sprouts with great vigor.  So that, after all, \
though its years are numbered, youth may return to it over and over.” I feel \
like that sometimes.  This soft, easily warping wood helped build the early \
prairie towns but today is used for humble crates, pallets (think McIntosh), \
and high grade pulp (excelsior). We used it when we heated with wood—a quick \
hot fire. Rabbits and deer love to eat it. Its yellow pollen covers every \
surface in the Spring, and the puffy white seeds lay deep on roads and \
driveways like snow.  </p> \
 \
<p>&nbsp;</p> \
 \
<p><b>&nbsp;</b></p> \
 \
<p><b>Beech (Fagus grandifolia Ehrhart)</b></p> \
 \
<p><i>The Elephant Tree.  The Initial Tree</i>. “Taken in all \
seasons and judged by all that makes a tree noble—strength combined with grace, \
balance, longevity, hardiness, health—the Beech is all that we want a tree to \
be.” To our family the Beech is a reflection of the Golden Woods of \
Lothlorien.  The autumn leaves have a sublime translucent radiance which \
envelop the tree in a “golden light that hallows all around it.”  We have a \
ring of Beeches in our woods, which we’ve named the <i>Fairy Circle</i>; it is \
a favorite place to stand in silence and appreciate God’s amazing glory in creation. \
It’s also great fun identifying the tree in Spring by its long, cigar shaped \
buds. As the “popples” have disappeared over the last 40 years on our property, \
the Beeches have luxuriated in the shade of the pines cherries, oaks, and \
maples and have grown into young shapely elf-trees.  These beloved trees can \
live 400 years. I hope one of our ancestors can enjoy the glory of a fully \
mature beech.</p> \
 \
<p>“Our word <i>book</i> comes from the anglo-Saxon <i>boc</i>, \
meaning a letter or character, which in turn derives from the anglo-Saxon <i>beece,</i> \
for Beech. So if you find a big old Beech tree in the woods, hacked by some \
love-struck boy with the outline of a heart and his girl’s initials in it, \
forgive him.  He is but following a custom older than Shakespeare, who also \
records it:</p> \
 \
<p><i>O Rosalind! These trees shall \
be my books,</i></p> \
 \
<p><i>        And in their bark my \
thoughts I’ll character;</i></p> \
 \
<p><i>That every eye that in this \
forest looks</i></p> \
 \
<p><i>        Shall see thy virtue \
witness’d everywhere.</i></p> \
 \
<p>And Virgil asks:</p> \
 \
<p>Or shall I rather the sad verse \
repeat</p> \
 \
<p>Which on the beech’s bark I lately \
writ?</p> \
 \
<p>An epic line in pure American vein \
might have been read by all who passed that way, until about 1880, on a Beech \
tree on Carrol Creek, in Washington County, Tennessee, on the old stage road \
between Blountsboro and Jonesboro.</p> \
 \
<p>D. Boone</p> \
 \
<p>Cilled A Bar</p> \
 \
<p>On Tree</p> \
 \
<p>In Year 1760”<b><i>The fruit, called \
Beechnuts, are an important food source for many animals, </i></b></p> \
 \
<p>The \
American Beech provides <a href='http://www.fcps.edu/islandcreekes/ecology/glossary.htm#cover'>cover</a> \
for many animals, and is a favorite nesting \
    site of chickadees.Red fox, raccoon, opossum, squirrels, Eastern Chipmunk, \
    beaver, white - tailed Deer, Eastern Cottontail, mice, wild turkey, blue jays, \
    Northern Bobwhite, and woodpeckers enjoy eating the Beechnuts produced by this \
    tree.Beechnuts, or Beech Mast, were the main food eaten by the now extinct \
    passenger pigeon, whose demise was hastened by clear cutting Beech forests as American \
    settlers moved west to farm. (When working at the Rochester Museum and Science \
        Center during the spring of 2016, I learned that RIT is using DNA from the RMSC \
        to try to “resurrect” the Passenger Pigeon ala Jurassic Park.) </p> \
\
<p>&nbsp; </p> \
\
<p><b>Northern Red Oak (Quercus rubra Linnaeus) </b></p> \
 \
<p>Trekking through our woods in springtime yields the \
satisfying crunch of cracking acorns; the ones left by the sated squirrels.  \
Red Oak is useful for furniture, lumber, and veneer, in fact we’ve been asked \
to sell one of our oak trees, but that would be like selling one of the family \
members.  I want to see these trees grow for a couple hundred years more.  Lots \
of critters love to eat the acorns: squirrels, rabbits, mice, voles, raccoons, \
opossums (I was totally freaked out one crepuscular evening by one hanging out \
in an oak tree), wild turkeys, woodpeckers, crows, jays, white-tailed deer, red \
foxes, and bears (who I hope I will never see). I have a few acorns from oaks \
in Nottingham Forest that a family friend shared (random info, I know).</p> \
 \
<p>&nbsp;</p> \
 \
<p><b>Sugar Maple (Acer saccharum):</b></p> \
 \
<p>“The most magnificent display of color in all the kingdom of \
plants is the autumnal foliage of the trees of North America. Over them all, \
over the clear light of the Aspen and Mountain Ash, over the leaping flames of \
sumac and the hell-fire flickering of poison ivy, over the war-paint of the \
many Oaks, rise the colors of one tree—the Sugar Maple—in the shout of a great \
army. It is like the mighty, marching melody that rides upon the crest of some \
symphonic weltering sea and, with its crying song, gives meaning to all the \
calculated dissonance of the orchestra.” </p> \
 \
<p>Last Fall I went on a nature walk with my granddaughters.  \
We searched for the most colorful leaves and then ironed those Sugar Maple leaves \
between pieces of waxed paper.  We talked about the shape and color of the \
leaves and about the Maple Syrup the trees would provide.  My mind traveled \
back to the wonder of pressed leaves and crayon shavings in Mrs. Zucker’s art \
class in 1961, ironing leaves with my own children during the 80’s and 90’s, \
and also ironing leaves with my classroom students each fall.  I can’t help but \
connect Sugar Maple leaves and romance.  I met my husband when he was a botany \
student at ESF and I was an art history major at SU. Dendrology and tree \
identification have been a life-long joy for both of us. My pet name for him is \
Acer Saccharum.  </p> \
 \
<p>Sugar Maple provides great shade in the summer; and we all \
love to watch the “helicopters” (samara) twirling down in the fall.  This \
awesome tree is also extraordinarily strong —in a Philadelphia store, a Hard \
Maple floor outlasted a marble floor installed at the same time.  Maple wood is \
in high demand for furniture and cabinets. Maple syrup! That’s what we really \
love about the Maple Tree. (Well, I love that the branches fork out exactly \
opposite of one another so I can identify them without leaves.)</p>");





var img08 = new MomsImage("8.png", 8, "Florida Peak-A-Boo", "<p>We recently found a cheap flight to Florida and had a \
mini-vacation to celebrate my husband’s 65<sup>th</sup> birthday.  We stayed in \
Juno Beach (at a Hampton Inn of course), which has a short stretch of \
undeveloped beach dedicated to sea turtle conservation.  There was a fantastic \
small community park with easy access to the beach, The Loggerhead Museum, and \
a few hiking trails through undisturbed dunes.  We encountered the lush \
vegetation in this Circle of Life along one of the paths.  The Saw Palmetto was \
such an intriguing plant with its accordion/fan folds at the bottom, opening to \
flat fronds at the top.  How is that accomplished?  And how to draw it?  Still \
need to work on that! The Coralbean was like a soft, fuchsia Christmas tree.   \
All along the trail the East Coast Dune Sunflowers lit up the understory. </p> \
<p>As a Northerner, I was charmed by the small lizards \
scurrying around near our hotel pool and on our Dune walk.  I learned that the \
ones depicted in <b>Florida-Peek-a-Boo</b> are called Anoles and are an \
invasive species, often driving out the native lizards (little bullies).  I was \
taking a number of close-up photos of one and suddenly the cheeky bugger popped \
this large red balloon-like thing with white polka dots out of his chest (it’s \
called a <i>dewflap)</i>. It was SO cool!! I guess it was supposed to \
intimidate me…or court me. Even though they seem pretty feisty I gave them a \
little grin in the picture.</p> \
<p>The bird in the picture is an Ibis; and they definitely do \
NOT walk around on my lawn in upstate NY.  It was so cool to watch this 18” \
bird sticking its beak in the ground outside of The Juno Beach Café.  The color \
of the beak was the same fuchsia of the Coralbeam.  The eye was a shocking \
blue, like the sky or the sea in south Florida. I love the way God works color \
palettes together in a region.    </p> ");




var img09 = new MomsImage("9.png", 9, "Early Birds", "<p><b>Early Birds: Circles of Life in the Eastern White Pine</b></p> \
<p>Doing research for <b>Climax Forest</b> I read a lot about \
the Circle of Life related to the Eastern White Pine and the forest creatures \
closely connected with it. Over the years I’ve noticed many Black-Capped \
Chickadees flitting through our pines, spruces, lilacs, and Echinacea plants \
finding seeds and insects. I just love the chubby little “Chicka-dee-dee-dees” \
and often grab the camera to try and catch a picture.  I learned that Nuthatches \
often hang out with Chickadees and they both build their nest in rotten tree \
cavities. It’s fascinating that nuthatches smear pine resin or crushed insects \
around their nesting holes to keep intruders out, and consequently need to be \
precision flyers like Luke Skywalker targeting the sweet spot in the Death \
Star. </p> \
<p>This spring two Blue Jays have been playing hide and seek \
with me, in the spruce and pine trees outside of our kitchen window, often \
ending up on the highest boughs.  I hope to include them in a future Circle, \
along with the woodpeckers I often hear, but have difficulty seeing.  I’ve also \
seen a couple of Red-winged Blackbirds hanging out on the cattails in some damp \
spots down the road.  Just the incentive I need to learn more about them too.</p> ");

var img10 = new MomsImage("10.png", 10, "Kitchen Kama", "<p> \
 I love to cook and I love to eat (which is quickly apparent when you see me).I collect cookbooks (they have now spilled out of the cookbook closet in the \
 kitchen and onto the bookshelves in the guestroom) and usually bring one home as a souvenir when traveling.Each of our four children sat on the counter \
 and cooked with me.They &apos;re all wonderful cooks today, who enjoy creating food for their family and friends.Now my granddaughters Hannah and Seraphina sit \
on the counter or pull up a chair to &quot; help &quot; me cook.I am also blessed with a husband who appreciates my cooking and encourages my cooking adventures (and he makes a mean omelet). \
</p><p> \
 I&apos;m also most blessed to be a member of an amazing group of women who cook together, self - dubbed <em> The Betty Crockers</em> or the <em>Eat, Drink, and Be Merry</em> Group, or simply <em> Cooking Club</em>. We&apos;ve been able to learn new cooking techniques, support each other in tough times, make meals for sick friends, talk about anything, and experience adventures in theatre, eating, and wine touring. I love this group of women and am thankful for each one of them! \
</p><p> \
 The cooking utensils used in <strong>Kitchen Karma</strong> (thank you to one of my NYC arts friends for the name) come from my own kitchen. They each have \
a bit of a story I&apos; d like to share.Maybe it will help you look at the things in your drawers and cupboards with new affection. \
</p><p> \
I&apos;ll start from the center out: \
 </p><p> \
 The center of the Circle is an <strong> apple corer</strong>-something I learned to appreciate through cooking sessions with <em>The Betty Crockers</em> - \
 sometimes cutting up 20 pounds of apples.It also reminds me of the wonderful Apple Crisp recipe I got from my husband&apos; s mom 40 years ago; that my son, now \
 living in Korea, requested a few months ago.\
</p> <p> \
The next circle is a <strong> strawberry huller</strong>. I remember that raw skin under my fingernails from pulling the stems out by hand. My mom (UberOma) \
was always very stoic and very careful about never wasting food so we never used a huller…just suffered the pain.I think I was married 20 years before I \
allowed myself to use a huller and spare the thumb. \
</p><p> \
The next circle is a <strong> measuring spoon</strong>, and when I looked for one as a model and cleaned out my baking drawer I found about 10 spoons in the \
back of the drawer that I thought had magically disappeared along with the single socks from the dryer. (I also found evidence of mice in the back of the \
 drawer and had to super clean everything.) \
</p> <p> \
 <strong> Bubbles </strong> \
are next—boiling water bubbles, mineral water bubbles, champagne bubbles from our occasional Mimosas at <em> Eat, Drink, and Be Merry </em>gatherings <em>.</em> \
</p> <p> \
The next layer depicts gorgeous Oneida <strong> Silver Tongs</strong> that I purchased at a lawn sale. I was hesitant to use them at first because of their \
 &quot; preciousness,&quot; but now I use them nearly every day to grab hot dogs for the granddaughters, flip Giannelli sausages for family brunches, and grab \
 asparagus for family dinners.Then I toss them in the dishwasher! Beautiful things need to be used EVERY day! \
 </p> <p> \
 <strong> Whisk.</strong> \
 The whisk was a real drawing challenge!!They are so complicated and finding a 2-D way to depict something with so many 3- D layers was hard! I have quite a \
 few whisks left over from my daughter-in-law &apos; s shower, when we got up teams to whip cream with various whisks.\
</p> <p> \
The same round also has a <strong> Lemon Zester</strong> another invention that I first learned to use at Cooking Club. Something so satisfying about the \
lovely curls it makes.A couple of weeks ago when cooking with my daughter, I Iearned that I had a dull zester—yep, sometimes I feel that way about myself.\
</p> <p> \
I LOVE the <strong> Tupperware Orange Peeler </strong>atop the zester. It was worth hosting all those parties for friends back in the 80&apos;s. One of our \
foreign students was so impressed that I bought him some peelers to take back to Germany.\
</p> <p> \
There are some small circles that represent the end of <strong> skewers </strong> tucked in between items. We used to do a lot of fondues. \
 </p> <p> \
 The next layer has a <strong> small rolling pin</strong>—the one used by all my children and granddaughters to make their own small pies. \
 </p> <p> \
 Next to the rolling pin are a couple of <strong> cork screws, </strong>used to open those bottles of wine at 10:30am to help grease the wheels of <em>The Betty Crockers&apos;</em> cooking endeavors.\
 </p> <p> \
 The <strong> flipper </strong> is one used by my husband&apos;s mom. It was one of the few things I took from her kitchen when she recently passed away. Gramma \
was a tiny woman who loved tiny things, and this was her tiny tool.She was a fantastic cook, and <strong> Kitchen Karma</strong> is a bit of a tribute to \
her as well.My husband also uses this flipper now when he makes his amazing cheese omelets or highly demanded French toast. \
 </p> <p> \
 The final element is a small <strong> tart pan</strong>. Sometimes I love to make fussy things, and tarts are indeed that. I also love to brulee/torch \
things, along with my son-in-law, so these are excellent pans for that. \
</p>");


var img11 = new MomsImage("11.png", 11, "Wonder Weed", " \
<p>Humble dandelions, sweet violets, vilified crabgrass, invasive garlic mustard, sunny \
buttercups, painted trillium—I WONDER why these are considered WEEDS?  I did \
some pretty intensive looking at these weeds/plants/flowers and read lots of \
information online in preparation for this Circle of Life.  These plants are \
truly beautiful to look at and a powerhouse of edible vitamins and proteins.  They \
are truly Wonder Weeds.*</p> \
p>All parts of \
the dandelion are edible!  (And they go through the most amazing growth stages https://www.youtube.com/watch?v=UQ_QqtXoyQw.) \
And even better--the individuals florets grow in a Fibonacci curved pattern.)  (Since \
I began selling these Circles, I now have a recipe for Dandelion Fritters and \
Vanilla Dandelion Jam.)  Violet flowers can be eaten or sugared; turned into \
jelly or wine.  (And my youngest daughter always brought me a small bouquet of \
them in the Spring.)  Crabgrass is fast-growing fodder for critters around the \
world.  The quickly maturing seeds can be dried and ground up into flour; especially \
used in Africa and Eastern Europe. (And the radial/star growth form is just \
beautiful.) Garlic Mustard was brought to America by English and French \
settlers, who appreciated the taste it imparted to food (now considered \
invasive in some areas).  </p> \
<p>Buttercups—don’t \
eat them.  They’re super toxic, but the flower has amazing glasslike reflective \
properties—hence the yellow reflection on the chin and the eternal question, \
“Do you like butter?”  Painted Trillium are not really considered a weed; and are \
very much in danger of disappearing due to the voracious appetite of the \
white-tailed deer.  I guess if you find a large patch you can take a few leaves \
and add them to your salad. </p> \
<p>&nbsp;</p> \
<p>&nbsp;</p> \
<p>*Thank you to Phil Alexander for the thought provoking name.</p>");




var img12 = new MomsImage("12.png", 12, "May Zing",
    "<p>These are the flowers that are outside of our back door and under our huge maple and \
cherry trees.They call to the butterflies, bees, birds.They call to me with \
their sweet odor and vibrant color.They speak of the end of the school year; and \
the promise of summer vacation for a weary school teacher.I used to bring \
large bouquets of lilacs to school, loved their short- lived blooms, and never \
minded the mess they made.It was my chance to bring a bit of the country to \
my inner city classroom.Here they are from the center outward: </p> \
        <p> Narcissus poeticus, Pheasants Eye Daffodil, a refugee from the friend’s \
garden.</p> \
        <p> Wild Strawberry Leaves and then the flowers and berries</p> \
            <p> Myrtle or Periwinkle, the deep green leaves play so beautifully against \
the purple/blue flowers, which have an amazing pentagon shape at the center of \
each flower.</p> \
        <p> Lilacs, the enchanter of the Swallowtail butterfly.</p> \
            <p> This piece was an experiment with a more geometric forms and a conscious \
attention to negative and positive space.It reminds me of a doily</p>");



var img13 = new MomsImage("13.png", 13, "Waldheim", "<p>Carol Canne is a beloved friend, fellow Betty Crocker, Rhode \
Island School of Design graduate, awesome mom and all-around kind person.  She \
has been incredibly supportive of my new art endeavors.  Carol has lived on Big \
Moose Lake in the Adirondacks during the summer for most of her life.She and \
her daughters, in high school and college, worked summers at a place called The \
Waldheim Camp.The place was redoing their dining hall and Carol wanted to \
present the owners with one of my Circles of Life to commemorate the opening \
day.Wow!!My first commission!!Eeek!!I hope I can do this.I love the \
Adirondacks.Check.I have spent time on the Beaver River and the Fulton Chain \
of Lakes.Check.I will do my best for Carol.Check.Now I need to learn \
about the Waldheim Camp!  </p> \
    <p> Carol shared a bit of her knowledge with me, but it was \
fascinating to research the place online.We had a short family vacation in \
Lake Placid and on the way home, we actually went to the Waldheim for a \
first - hand look.This drawing was going to be a surprise for the owners.The \
place wasn’t open for the season and they were feverishly working on the new \
dining hall.I felt like a spy.I told Kelly, one of the owners, that we knew \
Carol(and her daughter, who was painting the ceiling of the dining hall when \
    we arrived, vouched for us) and asked if we could look around in the hopes of \
staying there in the fall.She was extremely gracious and helpful.  My \
son-in-law Sam and I began feverishly taking pictures!</p> \
    <p> Here’s the description from their website: <i>For more than \
100 years, this Adirondack resort on the north shore of Big Moose Lake offers \
the same hospitality, by the same family, as it did when it opened in 1904. \
Unlike many resorts today, we still operate on the American Plan, serving three \
meals daily.Guests are served their meals in a central dining room while \
staying in one of our seventeen cottages. &nbsp; The Waldheim offers families a \
place where they can disconnect, in order to reconnect with each other.</i> </p> \
<p>The cottages all have amazing views of the water.There’s \
swimming, hiking, canoeing, kayaking, and relaxing.I love the idea of all the \
meals being prepared, and I’ve heard they’re wonderful.I also think it will \
be great to stay there in the fall and have a “woodboy” come and light the \
woodstove or fireplace each morning.So, on to the Circle of Life, Big Moose \
style—The center has the Waldheim logo, moving outward are forget- me - nots(lots \
    of wildflowers here), and then ferns unfolding.Hidden in the ferns are some \
black bears, always hiding somewhere in the ADK.One of the really beautiful \
things about the Waldheim is the use of native rough cut lumber to create \
interesting designs on the cottages and outbuildings—this is the next design \
element.Next, the lake’s namesake--moose.Proceeding outward I drew the \
iconic “Adirondack Chair, ” along with a Wild Azelea branch.Carol shared a \
story about an experience as a cottage cleaner.One summer she picked some of \
these beautiful flowers and placed them in a vase in one of the cottages.The \
owner was quite upset and upbraided Carol.That memory stuck with her, and \
consequently the flowers found their way into this Circle.The oars connect the \
chairs and the canoes.The canoes, joined by loons, are heading for a small \
island near the Waldheim.</p> \
    <p> This was an extremely fun project!  I hope the owners enjoy \
their Circle of Life and I hope lots of camp guests enjoy coloring the \
picture.And thank you to Carol Canne for having faith in me.</p>");


var img14 = new MomsImage("14.png", 14, "Sparkle and Splash", "<p> \
    A potter friend suggested that I do a piece to enter in the State Fair.This was an intriguing idea to me.When I was the Associate Curator of Education at \
the Everson Museum of Art I judged the competition a couple time along with another art person. &quot; Real &quot; artist don&apos;t enter the State Fair. It&apos;s too plebian. \
    Well, that's me. Plebian. I love that my art speaks to everyone. I really enjoy interacting with people and seeing their delight when they find all the \
        &quot;hidden&quot; things in my Circles of Life. I&apos;m so happy they want to color them!! \
            </p><p> \
So I took her up on her challenge.I thought I would do an homage to New York- a state that I really love! I began perusing the internet and our own picture \
files looking for state symbols and iconic images.I drew Niagara Falls and Taughannock Falls (which is pretty hard to spell, let alone draw) many times, \
    trying to get them down to their basic elements.I learned how to draw the Empire State building- honest, and practiced the Statue of Liberty.I learned a \
lot.But I just couldn't make them &quot;work&quot; on the Circle. I drew a whole round of Empire State Buildings and erased them-revising is a great thing to teach \
patience.I sketched in the State of Liberty and just didn't like it. Hmmm&#8230;.literally back to the drawing board. \
    </p><p> \
Brook Trout are the state fish.I learned to appreciate the beauty of brook trout in the tanks at the Wild Center in Tupper Lake.I used to skip school on \
opening day of trout season each year I high school.I loved fishing with my dad.Now here was something I could sink my teeth into (especially at The \
    Hungry Trout in Wilmington, NY near Whiteface Mountain).The trout needed water! Not Niagara Falls, not Taughannock Falls, just a pond&#8230; ooh, a big \
splash would be cool.And what would cause that splash? A beach ball.I was on my way!! \
    </p><p> \
The dragon flies were buzzing around the pool.The raspberries (and blueberries) were ripenimg.The glorious day lilies were starting to bloom (and btw you \
    can eat every part of a day lily).And back to symbols of NY- the maple tree (see Climax Forest for a LOT of info on maple trees) and the bluebird.I was \
trying to think of another endearing critter in NY and our kids have always loved finding the little red newts under rocks, so I included a few of them. \
</p><p> \
My dad died about 20 years ago, but he was the master of all holidays.He particularly loved to light fire crackers and put them under unsuspecting \
victim's seats on the 4th of July. He also purchased boxes and boxes of sparklers for us when we were kids&#8230;and often one huge 4 foot sparkler from \
which to light our & quot; little sisters.&quot; Sparklers were a BIG DEAL back in the 1960's!! We would see how many times we could run around the house and then \
spell our names over and over in the evanescent brilliance. \
</p><p> \
I love NY city in small doses- 3 or 4 days, but I LOVE upstate NY.We have high taxes.We have lots of restrictions, but the state is just beautiful.So \
what began as an homage using NY symbols became a heartfelt tribute to Summer in New York and secondarily a memorial to my dad. \
</p><p> \
        (And I did enter a piece in the State Fair- Climax Forest.I'll let you know if it was accepted.) \
</p>");


var img15 = new MomsImage("15.png", 15, "Tool Time", "<p>This Circle of Life has been swimming around in my head ever since completing Kitchen Karma. I thought it would make a great Father&apos;s Day present.  We purchased a run-down hunting cabin nearly 40 years ago with no electricity or indoor plumbing and learned about “cob-jobs” and do-it-yourself fix-ups.  Most of our initial fixes have been redone, thankfully, and after a few additions we now have a lovely country house—The Roeder’s Free Bed and Breakfast and Home for International Students. <br> Anyway, that opening paragraph was written to give me the props/ chops to talk about tools.I have indeed used a circular saw to cut boards for our board and batten siding.I then hammered those boards to the side of the house.Nuts and washers remind me of all the times we’ve put together things like swings, bookcases(lots of bookcases), and furniture.The channel locks remind me of prehistoric beasts with unlocking/ unhinging jaws.I had to ask my husband about the wood chisel bit.He used it to bore through wood when he was rewiring the house.I just love the shape of it.The needle nose pliers have been useful for jewelry making, flower arranging, and pulling teeth (just kidding on the last one).I just love all the different sized wrenches down in the toolbox—open - ended and closed.It’s very satisfying to find the right wrench for the right nut.I also really enjoy using a screwdriver to fix my glasses or take something apart…and put it back together again. <br> It was really fun making this Circle of Life--lots of really close looking, lots of revisions, lots of practice, lots of choices. I love the ironic delicacy of the line and movement in this eclectic selection of  &quot;manly&quot; tools.</p>");



var imgs = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12, img13, img14];