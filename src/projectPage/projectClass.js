class Project {
    constructor(name) {
        this.name = name;
        this.descriptionShort = "";
        this.descriptionLong = "";
        this.stack = [];
        this.image;
        this.icon;

        this.listOfFeatures = [];
        this.link = "";
    }
}

const allProjectsArray = [];

export function getAllProjects() {
    return allProjectsArray;
}

// CLASS TEMPLATE
/**
import PHOTO from "src/assets/photos/PHOTO.png";
import ICON from "src/assets/icons/ICON.svg";

const NEWPROJECT = new Project("NEW PROJECT NAME");

NEWPROJECT.descriptionShort = "Quiz yourself with questions from the NSCA CPT textbook";
NEWPROJECT.descriptionLong = "I wanted to make something that other personal trainers could use to help study for the NSCA CPT exams, so I posted this in the r/personaltrainig sub on Reddit.\n\nYou can select which chapters you would like to quiz on, and all the questions are pulled from the study questions at the end of each chapter in the official textbook.";

NEWPROJECT.image = PHOTO;
NEWPROJECT.icon = ICON;

NEWPROJECT.listOfFeatures.push("Select chapters to quiz on");
NEWPROJECT.listOfFeatures.push("Score display when finished");
NEWPROJECT.listOfFeatures.push("Current/total questions display");

NEWPROJECT.link = "https://socrastein.github.io/PROJECT/";

allProjectsArray.push(NEWPROJECT);
*/


// Lifting School Website
import liftingSchoolSitePhoto from "src/assets/photos/liftingSchoolSite.png";
import liftingSchoolSiteIcon from "src/assets/icons/logo.svg";

const liftingSchoolSite = new Project("Lifting School Site");

liftingSchoolSite.descriptionShort = "The site for my online personal training company";
liftingSchoolSite.descriptionLong = "When I first started learning how to build a website, one of my major goals was to eventually rebuild my own business site so I didn't have to pay for or deal with Wix anymore. Mission accomplished!\n\nIt's exciting to get emails saying a new client has signed up through the form I created!";

liftingSchoolSite.image = liftingSchoolSitePhoto;
liftingSchoolSite.icon = liftingSchoolSiteIcon;

liftingSchoolSite.listOfFeatures.push("Several pages, including blog posts");
liftingSchoolSite.listOfFeatures.push("Signup form for new clients");
liftingSchoolSite.listOfFeatures.push("Testimonials can be swiped through");

liftingSchoolSite.link = "https://theliftingschool.com/";

allProjectsArray.push(liftingSchoolSite);

// Lifting App
import liftingAppPhoto from "src/assets/photos/liftingApp.png";
import liftingAppIcon from "src/assets/icons/dumbbell.svg";

const liftingApp = new Project("Lifting App");

liftingApp.descriptionShort = "Build, adjust and record your workout programs";
liftingApp.descriptionLong = "My wife and I have been using this app to track our workouts for several months now, and I eventually want to implement a backend to replace using Google Sheets for my training clients.";

liftingApp.image = liftingAppPhoto;
liftingApp.icon = liftingAppIcon;

liftingApp.listOfFeatures.push("Clean, easy to read workout display");
liftingApp.listOfFeatures.push("Create, update and delete folders");
liftingApp.listOfFeatures.push("Simple to edit and rearrange workouts");


liftingApp.link = "https://the-lifting-app.web.app/";

allProjectsArray.push(liftingApp);

// Battleship
import battleshipPhoto from "src/assets/photos/battleship.png";
import battleshipIcon from "src/assets/icons/ship.svg";

const battleShip = new Project("Battleship");

battleShip.descriptionShort = "The classic game, made for two players";
battleShip.descriptionLong = "I learned most of what I know about building webpages and webapps by working through The Odin Project. Building a battleship game is the last project in their vanilla JavaScript course.\n\nI implemented drag and drop for ship placement as an extra challenge!";

battleShip.image = battleshipPhoto;
battleShip.icon = battleshipIcon;

battleShip.listOfFeatures.push("'Pass to player' timed screen");
battleShip.listOfFeatures.push("Drag and drop ships to place");
battleShip.listOfFeatures.push("CSS icons for ships and minimap");

battleShip.link = "https://socrastein.github.io/battleship/";

allProjectsArray.push(battleShip);

// NSCA Quizzer
import nscaQuizzerPhoto from "src/assets/photos/nscaQuizzer.png";
import nscaQuizzerIcon from "src/assets/icons/quiz.svg";

const nscaQuizzer = new Project("NSCA Study App");

nscaQuizzer.descriptionShort = "Quiz yourself with questions from the NSCA CPT textbook";
nscaQuizzer.descriptionLong = "I wanted to make something that other personal trainers could use to help study for the NSCA CPT exams, so I posted this in the r/personaltrainig sub on Reddit.\n\nYou can select which chapters you would like to quiz on, and all the questions are pulled from the study questions at the end of each chapter in the official textbook.";

nscaQuizzer.image = nscaQuizzerPhoto;
nscaQuizzer.icon = nscaQuizzerIcon;

nscaQuizzer.listOfFeatures.push("Select chapters to quiz on");
nscaQuizzer.listOfFeatures.push("Score display when finished");
nscaQuizzer.listOfFeatures.push("Current/total questions display");

nscaQuizzer.link = "https://socrastein.github.io/NSCAstudying/";

allProjectsArray.push(nscaQuizzer);

// Minesweeper

import minesweeperPhoto from "src/assets/photos/minesweeper.png";
import minesweeperIcon from "src/assets/icons/bomb.svg";

const minesweeper = new Project("Minesweeper");

minesweeper.descriptionShort = "Old school logic game with three different grid sizes";
minesweeper.descriptionLong = "I believe this is the first project I built that utilized some recursion; the function for checking and clearing all the empty space around a selected square calls itself to keep checking neighboring regions.\n\nI played this game as a kid, so being able to build it myself years later felt pretty cool!";

minesweeper.image = minesweeperPhoto;
minesweeper.icon = minesweeperIcon;

minesweeper.listOfFeatures.push("Three levels of difficulty");
minesweeper.listOfFeatures.push("Mark sus squares with flags");
minesweeper.listOfFeatures.push("Empty space cleared recursively");

minesweeper.link = "https://socrastein.github.io/minesweeper/";

allProjectsArray.push(minesweeper);

// Weight Plate Counter

import plateCounterPhoto from "src/assets/photos/weightCalculator.png";
import plateCounterIcon from "src/assets/icons/weight.svg";

const plateCounter = new Project("Plate Counter");

plateCounter.descriptionShort = "Calculate the total weight on your barbell";
plateCounter.descriptionLong = "Sometimes, when you're really tired, doing the 'plate math' on your barbell is easy to mess up, especially if you have several different sizes.\n\nThis app lets you punch in the weights and totals everything, including the standard 45 lbs of the barbell. Currently only supports Freedom Units, but I plan to expand its functionality to include different sized barbells and KG plates.";

plateCounter.image = plateCounterPhoto;
plateCounter.icon = plateCounterIcon;

plateCounter.listOfFeatures.push("CSS representation of barbell");
plateCounter.listOfFeatures.push("Add or remove plates as you lift");
plateCounter.listOfFeatures.push("Total updates as you change plates");

plateCounter.link = "https://socrastein.github.io/weightPlateCounter/";

allProjectsArray.push(plateCounter);

// Weather App

import weatherAppPhoto from "src/assets/photos/weatherApp.png";
import weatherAppIcon from "src/assets/icons/temperature.svg";

const weatherApp = new Project("Weather App");

weatherApp.descriptionShort = "Look up current weather by city or zip code";
weatherApp.descriptionLong = "This was my first project that involved retrieving and displaying data from an API, which involved careful reading of the documentation.\n\nYou can switch between imperial and metric units by clicking the temperature and wind speed containers. I also incorporated gifs into the banner that reflect the current sky conditions. ";

weatherApp.image = weatherAppPhoto;
weatherApp.icon = weatherAppIcon;

weatherApp.listOfFeatures.push("Pulls data from Open Weather API");
weatherApp.listOfFeatures.push("Animated GIFs for sky condition");
weatherApp.listOfFeatures.push("Toggle between imperial and metric");

weatherApp.link = "https://socrastein.github.io/weather-app/";

allProjectsArray.push(weatherApp);

// Calculator

import calculatorPhoto from "src/assets/photos/calculator.png";
import calculatorIcon from "src/assets/icons/calculator.svg";

const calculator = new Project("Calculator");

calculator.descriptionShort = "Calculator that shows last few lines of history";
calculator.descriptionLong = "This was an Odin Project assignment that I made a bit more challenging by incorporating a history display for the last four operations, and I went a little beyond the basic arithmetic by adding square roots and exponents.\n\nI modeled the style off of a Linux calculator app, and found a custom font to get the classic seven-segment number display.";

calculator.image = calculatorPhoto;
calculator.icon = calculatorIcon;

calculator.listOfFeatures.push("Basic arithmetic, exponents and square root");
calculator.listOfFeatures.push("History displays last four operations");
calculator.listOfFeatures.push("Styled to look like a physical device");

calculator.link = "https://socrastein.github.io/calculator/";

allProjectsArray.push(calculator);