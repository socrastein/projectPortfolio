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
liftingSchoolSite.descriptionLong = "This is a longer description";

liftingSchoolSite.image = liftingSchoolSitePhoto;
liftingSchoolSite.icon = liftingSchoolSiteIcon;

liftingSchoolSite.listOfFeatures.push("Feature 1");
liftingSchoolSite.listOfFeatures.push("Feature 2");
liftingSchoolSite.listOfFeatures.push("Feature 3");

liftingSchoolSite.link = "https://theliftingschool.com/";

allProjectsArray.push(liftingSchoolSite);

// Lifting App
import liftingAppPhoto from "src/assets/photos/liftingApp.png";
import liftingAppIcon from "src/assets/icons/dumbbell.svg";

const liftingApp = new Project("Lifting App");

liftingApp.descriptionShort = "Build, adjust and record your workout programs";
liftingApp.descriptionLong = "This is a longer description";

liftingApp.image = liftingAppPhoto;
liftingApp.icon = liftingAppIcon;

liftingApp.listOfFeatures.push("Feature 1");
liftingApp.listOfFeatures.push("Feature 2");
liftingApp.listOfFeatures.push("Feature 3");

liftingApp.link = "https://the-lifting-app.web.app/";

allProjectsArray.push(liftingApp);

// Battleship
import battleshipPhoto from "src/assets/photos/battleship.png";
import battleshipIcon from "src/assets/icons/ship.svg";

const battleShip = new Project("Battleship");

battleShip.descriptionShort = "The classic game, made for two players";
battleShip.descriptionLong = "This is a longer description";

battleShip.image = battleshipPhoto;
battleShip.icon = battleshipIcon;

battleShip.listOfFeatures.push("Feature 1");
battleShip.listOfFeatures.push("Feature 2");
battleShip.listOfFeatures.push("Feature 3");

battleShip.link = "https://socrastein.github.io/battleship/";

allProjectsArray.push(battleShip);

// NSCA Quizzer
import nscaQuizzerPhoto from "src/assets/photos/nscaQuizzer.png";
import nscaQuizzerIcon from "src/assets/icons/quiz.svg";

const nscaQuizzer = new Project("NSCA Study App");

nscaQuizzer.descriptionShort = "Quiz yourself with questions from the NSCA CPT textbook";
nscaQuizzer.descriptionLong = "This is a longer description";

nscaQuizzer.image = nscaQuizzerPhoto;
nscaQuizzer.icon = nscaQuizzerIcon;

nscaQuizzer.listOfFeatures.push("Feature 1");
nscaQuizzer.listOfFeatures.push("Feature 2");
nscaQuizzer.listOfFeatures.push("Feature 3");

nscaQuizzer.link = "https://socrastein.github.io/NSCAstudying/";

allProjectsArray.push(nscaQuizzer);