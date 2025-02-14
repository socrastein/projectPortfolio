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