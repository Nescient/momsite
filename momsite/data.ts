﻿class MomsImage {
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
}

var img1 = new MomsImage("image1.jpg", 1, "Zentangle Tribute", "There can be only one and thus it was and shall now always be known as the first for that is when it was and that is when it is.");
var img2 = new MomsImage("image2.jpg", 2, "Spring Storm", "Sometimes it rains in the spring.");
var img3 = new MomsImage("image3.jpg", 3, "Octopus Dance", "It involves a lot of stepping on things squishy.");
var img4 = new MomsImage("image4.jpg", 4, "Oceans Echoes", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
var img5 = new MomsImage("image5.jpg", 5, "Kelp Dance", "This is some fish and kelp and stuff cus I'm artzy and whatnots with water things that some people call mariene life but I say more like MARLEENE LIFE yak yak yak");
var img6 = new MomsImage("image1.jpg", 6, "Zentangle Tribute", "There can be only one and thus it was and shall now always be known as the first for that is when it was and that is when it is.");
var img7 = new MomsImage("image2.jpg", 7, "Spring Storm", "Sometimes it rains in the spring.");
var img8 = new MomsImage("image3.jpg", 8, "Octopus Dance", "It involves a lot of stepping on things squishy.");
var img9 = new MomsImage("image4.jpg", 9, "Oceans Echoes", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
var img10 = new MomsImage("image5.jpg", 10, "Kelp Dance", "This is some fish and kelp and stuff cus I'm artzy and whatnots with water things that some people call mariene life but I say more like MARLEENE LIFE yak yak yak");
var imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];