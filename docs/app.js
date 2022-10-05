// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||| PRELOAD ASSETS |||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//window.addEventListener('load', (event) => {
//    document.body.style.backgroundImage = "url('assets/cornfall/background-special.png')";
//});

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||||| TIME CHECK ||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// VARIABLES RELATED TO TIME
let game = "";

// GAME LIST ARRAY
// 0 : CORNFALL
// 1 : GRAVEGUESS
// 2 : POTIONCRAFT
let gameList = [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1];

// FUNCTION TO UPDATE ELEMENTS RELATED TO THE TIME
updateTime();

function updateTime() {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    // CALCULATE TIME TO NEXT GAME
    leftTime = (60 - m) + "m " + (60 - s) + "s ";
    if(document.getElementById("time-left")) {
        document.getElementById("time-left").innerHTML = leftTime;
    }

    temp = Number(h) + 1;
    if(temp == 24){
        // SET 24 TO 0
        temp = 0;
    }
    temp = gameList[temp];

    // SET INFO BANNER & UPCOMING GAME TITLE RELATIVE TO TIME
    switch(temp){
        case 0:
            temp = "Cornfall";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-cornfall.png')";
            }
            break;
        case 1:
            temp = "Grave Guess";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-graveguess.png')";
            }
            break;
        case 2:
            temp = "Cornfall";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-cornfall.png')";
            }
            break;
        case 3:
            temp = "Grave Guess";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-graveguess.png')";
            }
            break;
        case 4:
            temp = "Cornfall";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-cornfall.png')";
            }
            break;
        case 5:
            temp = "Grave Guess";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-graveguess.png')";
            }
            break;
        case 6:
            temp = "Cornfall";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-cornfall.png')";
            }
            break;
        case 7:
            temp = "Grave Guess";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-graveguess.png')";
            }
            break;
        case 8:
            temp = "Cornfall";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-cornfall.png')";
            }
            break;
        case 9:
            temp = "Grave Guess";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-graveguess.png')";
            }
            break;
        case 10:
            temp = "Cornfall";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-cornfall.png')";
            }
            break;
        case 11:
            temp = "Grave Guess";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-graveguess.png')";
            }
            break;
        case 12:
            temp = "Cornfall";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-cornfall.png')";
            }
            break;
        case 13:
            temp = "Guessguess";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-graveguess.png')";
            }
            break;
        case 14:
            temp = "Cornfall";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-cornfall.png')";
            }
            break;
        case 15:
            temp = "Grave Guess";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-graveguess.png')";
            }
            break;
        case 16:
            temp = "Cornfall";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-cornfall.png')";
            }
            break;
        case 17:
            temp = "Grave Guess";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-graveguess.png')";
            }
            break;
        case 18:
            temp = "Cornfall";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-cornfall.png')";
            }
            break;
        case 19:
            console.log("1");
            temp = "Grave Guess";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-graveguess.png')";
            }
            break;
        case 20:
            temp = "Cornfall";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-cornfall.png')";
            }
            break;
        case 21:
            console.log("1");
            temp = "Grave Guess";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-graveguess.png')";
            }
            break;
        case 22:
            temp = "Cornfall";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-cornfall.png')";
            }
            break;
        case 23:
            console.log("1");
            temp = "Grave Guess";
            if(document.getElementById("info-window")){
                document.getElementById("info-window").style.backgroundImage = "url('assets/general/banner-graveguess.png')";
            }
            break;
    }

    if(document.getElementById("upcoming-game")) {
        document.getElementById("upcoming-game").innerHTML = temp;
    }

    // SELF UPDATE EVERY 1S
    setTimeout(updateTime, "1000");

    // SET GAME RELATIVE TO TIME
    switch(h){
        case 0:
            game = "cornfall";
            break;
        case 1:
            game = "graveguess";
            break;
        case 2:
            game = "cornfall";
            break;
        case 3:
            game = "graveguess";
            break;
        case 4:
            game = "cornfall";
            break;
        case 5:
            game = "graveguess";
            break;
        case 6:
            game = "cornfall";
            break;
        case 7:
            game = "graveguess";
            break;
        case 8:
            game = "cornfall";
            break;
        case 9:
            game = "graveguess";
            break;
        case 10:
            game = "cornfall";
            break;
        case 11:
            game = "graveguess";
            break;
        case 12:
            game = "cornfall";
            break;
        case 13:
            game = "graveguess";
            break;
        case 14:
            game = "cornfall";
            break;
        case 15:
            game = "graveguess";
            break;
        case 16:
            game = "cornfall";
            break;
        case 17:
            game = "graveguess";
            break;
        case 18:
            game = "cornfall";
            break;
        case 19:
            game = "graveguess";
            break;
        case 20:
            game = "cornfall";
            break;
        case 21:
            game = "graveguess";
            break;
        case 22:
            game = "cornfall";
            break;
        case 23:
            game = "graveguess";
            break;
    }
}

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||| FIRESTORE ||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// INITIALIZE FIREBASE
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB3F4Uowi0vH7jMLDfp1QO1TXtgL-_QLgg",
    authDomain: "the-app-daily.firebaseapp.com",
    projectId: "the-app-daily",
    storageBucket: "the-app-daily.appspot.com",
    messagingSenderId: "780060560819",
    appId: "1:780060560819:web:db7c74e3c112e8c7af0fc6",
    measurementId: "G-MQZX83YBK2"
});

// INITIALIZE FIRESTORE
const db = firebaseApp.firestore();

// PRIVATE CATEGORY IDS
let categories = [
    "cornfalllb",
    "graveguesslb",
    "potioncraftlb"
];

// PUBLIC CATEGORY NAMES
let categoriesPublic = [
    "Cornfall",
    "Grave Guess",
    "Potioncraft"
];

// CURRENT CATEGORY PRIVATE ID
let category = "cornfalllb";

// CURRENT CATEGORY INDEX
let categoryIndex = 0;

// SET/UPDATE SCORE
const saveScore = () => {
    currentScore = document.getElementById("score").innerHTML;
    db.collection(category)
    .doc(user)
    .set({ 
        score: Number(currentScore)
    });
}

// PERFORM CHECK TO SEE IF UPDATING SCORE IS NEEDED
const getHS = () => {
    currentScore = document.getElementById("score").innerHTML;
    db.collection(category).doc(user)
    .get()
    .then((doc) => {
        if (doc.exists) {
            console.log("Document exists!");
            if(doc.data().score >= Number(currentScore)){
                console.log("Less than HS");
            } else {
                console.log("Upgrading HS");
                saveScore();
            }
        } else {
            console.log("No such document!");
            console.log("Creating HS");
            saveScore();
        }
    })
}

// LOAD SCORES TO LEADERBOARD FOR CURRENT CATEGORY
const loadScores = () => {
    document.getElementById("scores-container").innerHTML = "";
    db.collection(category)
    .orderBy("score", "desc")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().score);
            username = doc.id;
            oldScore = doc.data().score;

            temp = document.createElement('div');
            temp.setAttribute("id", "username-entry");
            tempT = document.createTextNode(username);
            temp.appendChild(tempT);
            document.getElementById("scores-container").appendChild(temp);

            tempS = document.createElement('div');
            tempS.setAttribute("id", "score-entry");
            tempST = document.createTextNode(oldScore);
            tempS.appendChild(tempST);
            document.getElementById("scores-container").appendChild(tempS);
        });
    })
}

// CHECK IF #1 IN ANY CATEGORY
const placeCheck = () => {
    winnerInIndex = [];
    for(let i = 0; i < categories.length; i++) {
        db.collection(categories[i])
        .orderBy("score", "desc")
        .limit(1)
        .get()
        .then((querySnapshot) => {
            if(user == querySnapshot.docs[0].id) {
                console.log("We're currently #1 in " + categories[i]);
                messageCheck(i);
            }
        })
    }
}

let currentlySetting;

const messageCheck = (i) => {
    db.collection("winnermessages").doc(categories[i])
    .get()
    .then((doc) => {
        if(doc.data().user == user) {
            console.log("Message already set for " + categoriesPublic[i]);
        } else {
            console.log("Message not set for " + categoriesPublic[i])

            document.getElementById("prompt-hint").innerHTML = "Looks like you ranked first in " + categoriesPublic[i] + " 👑🎉<br><br>Write down some wise words or share a random cat fact!";
            document.getElementById("message-prompt").style.display = "flex";

            currentlySetting = i;
        }
    })
}

const lbRating = () => {
    placeCheck();
}

let catFacts = [
    "Stubbs, a 17-year-old orange tabby, is mayor of the historic district of Talkeetna, Alaska.",
    "A cat’s learning style is about the same as a 2- to 3-year-old child.",
    "A group of kittens is called a “kindle.”",
    "It turns out that Abraham Lincoln was a crazy cat president! He had four cats that lived in the White House with him.",
    "A green cat was born in Denmark in 1995.",
    "Studies suggest that domesticated cats first appeared around 3600 B.C.",
    "The first known cat video was recorded in 1894.",
    "Male cats are the most sensitive to catnip, while kittens under 3 months old have no response at all.",
    "Most world languages have a similar word to describe the “meow” sound.",
    "Cats can be toilet-trained.",
    "Cats perceive people as big, hairless cats, says Wilde.",
    "If you can’t find your cat, you should look in a box or a bag, as these are some of their favorite hiding spots!",
    "Many cats like to lick their owner’s freshly washed hair.",
    "Your cat drapes its tail over another cat, your dog, or you as a symbol of friendship.",
    "Meowing is a behavior that cats developed exclusively to communicate with people.",
    "Hissing is defensive, not aggressive, says Wilde.",
    "Cats find it threatening when you make direct eye contact with them.",
    "A cat with a question-mark-shaped tail is asking, “Want to play?”",
    "Cats have up to 100 different vocalizations — dogs only have 10.",
    "Cats’ purring may be a self-soothing behavior, since they make this noise when they’re ill or distressed, as well as when they’re happy.",
    "Cats can spend up to a third of their waking hours grooming.",
    "Cats live longer when they stay indoors.",
    "Cats are fastidious creatures about their “bathroom.” If you have more than one cat, you should have one litter box for each.",
    "According to The Huffington Post, cats typically sleep for 12 to 16 hours a day.",
    "Between 2002 and 2012 the average lifespan of a cat increased by a year.",
    "Cats dream, just like people do.",
    "Each cat’s nose print is unique, much like human fingerprints.",
    "A house cat is genetically 95.6% tiger.",
    "While us humans have 206 bones, cats on average have 244. It ranges between 230-250 depending on how long a cat’s tail is and how many toes the cat has.",
    "Cats can jump 5 times their height.",
    "Cats can run around 48 kph (30 mph), but only over short distances. A house cat could beat superstar runner Usain Bolt in the 200 meter dash.",
    "Cats have an extra organ that allows them to taste scents in the air.",
    "Cat whiskers are the same width as their body.",
    "Cats walk like camels and giraffes, both right feet then both left feet.",
    "If your cat approaches you with a straight, almost vibrating tail, this means that he/she is extremely happy to see you.",
    "An ailurophile is a person who loves cats. The word ailuro is the ancient Greek word for cat.",
    "When your cat shows their belly, it is a sign of trust and a relaxed cat- this is not an invite for belly rub typically."
]

// FUNCTION TO SET WINNER MESSAGE
const setMessage = (b) => {
    // currentScore = document.getElementById("score").innerHTML;
    if(b){
        db.collection("winnermessages")
        .doc(categories[currentlySetting])
        .set({
            msg: document.getElementById("custom-message").value,
            user: user
        });
    } else {
        db.collection("winnermessages")
        .doc(categories[currentlySetting])
        .set({
            msg: catFacts[rng(0, 36)],
            user: user
        });
    }
    document.getElementById("message-prompt").style.display = "none";
}

// UPDATE MARQUEE MESSAGE
const updateMessage = () => {
    console.log("Marquee Message Updating");
    // CLEAR MARQUEE TEXT
    if(document.getElementById("marquee")) {
        document.getElementById("marquee").innerHTML = "";
    }
    for(let i = 0; i < categories.length; i++) {
        db.collection("winnermessages").doc(categories[i])
        .get()
        .then((doc) => {
            temp = "";
            temp = doc.data().user + " : " + doc.data().msg;
            if(document.getElementById("marquee")) {
                currentMsg = document.getElementById("marquee").innerHTML;
            }

            if(document.getElementById("marquee")) {
                document.getElementById("marquee").innerHTML = currentMsg + " " + temp;
            }
        })
    }
}

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||| INDEXEDDB ||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// USER VARIABLE
let user = "";

const indexedDB =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

const request = indexedDB.open("UsernameData", 1);

// ERROR PRINT
request.onerror = function (event) {
    console.error("An error occurred with IndexedDB");
    console.error(event);
}

// SAVE USERNAME TO THE LOCAL STORAGE
request.onupgradeneeded = function () {
    const db = request.result;
    const store = db.createObjectStore("username", { keyPath: "id" });
    store.createIndex("un", ["unstring"], {unique: true});
}

// PERFORM A CHECK TO SEE IF A USERNAME IS SAVED IN THE LOCAL STORAGE
request.onsuccess = function () {
    const db = request.result;
    const transaction = db.transaction("username", "readwrite");

    const store = transaction.objectStore("username");
    const userIndex = store.index("un");

    const idQuery = store.get(1);

    idQuery.onsuccess = function () {
        console.log('Username: ', idQuery.result);
        if(idQuery.result == undefined) {
            console.log("No username.");
            goTo("welcome");
            /*var welcome = document.getElementById("welcome-content");
            var home = document.getElementById("home-content");
            welcome.style.display = "flex";
            home.style.display = "none";*/

        } else {
            goTo("home");
            console.log("Username found!");
            user = idQuery.result.unstring;
            document.getElementById("local-username").innerHTML = user;
            
            /*var welcome = document.getElementById("welcome-content");
            var home = document.getElementById("home-content");
            welcome.style.display = "none";
            home.style.display = "flex";*/
        }
    }
}

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||| PAGES ||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// MARQUEE

// MARQUEE

let landing_HTMLSnippet = `
`;

let welcome_HTMLSnippet = `
    <div id="bg-container">
        <div id="bg-scroll"></div>
    </div>

    <content id="welcome-content">
        <input id="username-input" class="ds-light" type="text" placeholder="Marilyn Monrock">
        <button id="enter-button" class="purple-long-button ds-light" onclick="remember()">Remember me!</button>
    </content>
`;

let home_HTMLSnippet = `
    <div id="bg-container">
        <div id="bg-scroll"></div>
    </div>

    <div id="marquee" class="rightTI ds-light"></div>
    <content id="home-content">
        <div id="info-window">
            <h1 id="info-title">Upcoming!</h1>
            <h1 id="upcoming-game">-</h1>
            <h1 id="time-left">-</h1>
        </div>
        <h1 id="local-username"></h1>
        <button id="play-button" class="purple-long-button ds-light" onclick="play()">Play</button>
        <button id="lboard-button" class="yellow-long-button ds-light" onclick="leaderboardLoad()">Leaderboard</button>
    </content>
`;

let leaderboard_HTMLSnippet = `
    <div id="bg-container-skull">
        <div id="bg-scroll-skully"></div>
    </div>

    <content id="leaderboard-content">
        <div id="message-prompt">
            <h1 id="prompt-title" class="">🎉🎊</h1>
            <textarea placeholder="Brag about it..." maxlength="80" id="custom-message"></textarea>
            <h1 id="prompt-hint" class="ds-light">-</h1>
            <button class="orange-custom-long-button ds-light" onclick="setMessage(true)">Save Message</button>
            <button class="purple-long-cat-button ds-light" onclick="setMessage(false)">Random Cat Fact</button>
        </div>
        <div id="top-bar-lb">
            <button id="switch-lb" class="purple-long-button ds-heavy" onclick="switchlb()">Cornfall</button>
            <button id="reload-lb" class="blue-circle-button material-symbols-rounded ds-even-heavy" onclick="refreshlb()">sync</button>
        </div>
        <div id="board">
            <div id="scores-container">
            </div>
        </div>
        <button id="back-button" class="purple-long-button ds-heavy" onclick="back()">Back</button>
    </content>
`;

let cornfall_HTMLSnippet = `
    <h1 id="score">0</h1>

    <content id="falling-corn-game">
        <div id="game-over-screen">
            <button id="retry-button" class="purple-long-button ds-heavy">Retry</button>
            <button id="home-button" class="purple-long-button ds-heavy">Home</button>
        </div>
        <div id="segment-loader"></div>
        <canvas id="halloween-game-canvas"></canvas>
        <img id="cauldron" src="assets/cornfall/cauldron.png">
        <img id="corn" src="assets/cornfall/corn.png">
        <img id="bone" src="assets/cornfall/bone.png">

        <div id="segment-fix"></div>
    </content>
`;

let graveguess_HTMLSnippet = `
    <h1 id="score">0</h1>

    <content id="grave-guess-game">
        <div id="segment-fix"></div>
        <div id="grave-guess-container">
            <div id="grave-tile-container">
                <div id="mask"></div>
                <button id="grave-1" class="grave-tile"></button>
                <button id="grave-2" class="grave-tile"></button>
                <button id="grave-3" class="grave-tile"></button>
                <button id="grave-4" class="grave-tile"></button>
            </div>
        </div>
        <div id="segment-loader"></div>
        <div id="game-over-screen-grave-guess">
            <button id="retry-button-grave-guess" class="purple-long-button ds-light game-over-ui">Retry</button>
            <button id="home-button-grave-guess" class="purple-long-button ds-light game-over-ui">Home</button>
        </div>
    </content>
`;

function goTo(page) {
    // goTo("home");
    switch(page) {

        // PAGES
        case "landing":
            document.getElementById("absolute-body").innerHTML = "";
            document.getElementById("absolute-body").innerHTML = landing_HTMLSnippet;
            break;
        case "welcome": 
            document.getElementById("absolute-body").innerHTML = "";
            document.getElementById("absolute-body").innerHTML = welcome_HTMLSnippet;
            fakeLoad();
            break;
        case "home":  
            updateMessage();
            document.getElementById("absolute-body").innerHTML = "";
            document.getElementById("absolute-body").innerHTML = home_HTMLSnippet;
            fakeLoad();
            break;
        case "leaderboard":  
            document.getElementById("absolute-body").innerHTML = "";
            document.getElementById("absolute-body").innerHTML = leaderboard_HTMLSnippet;
            fakeLoad();
            break;

        // GAMES
        case "cornfall":
            document.getElementById("absolute-body").innerHTML = "";
            document.getElementById("absolute-body").innerHTML = cornfall_HTMLSnippet;
            setTimeout(backgroundArtefactCleaner, 100);
            veryQuickfakeLoad();
            break;
        case "graveguess":
            document.getElementById("absolute-body").innerHTML = "";
            document.getElementById("absolute-body").innerHTML = graveguess_HTMLSnippet;
            setTimeout(backgroundArtefactCleaner, 100);
            quickFakeLoad();
            break;
    }
}

function backgroundArtefactCleaner() {
    document.getElementById("segment-loader").style.display = "block";
    setTimeout(backgroundArtefactCleanerStop, 150)
}

function backgroundArtefactCleanerStop() {
    document.getElementById("segment-loader").style.display = "none";
}

let loadingColors = [
    "#15924d",
    "#6495ed",
    "#ffa135",
    "#c374f0",

]

let loadingTips = [
    "Players at the top of the leaderboard have a higher chance of winning.",
    "There's a built-in cat fact generator inside this game.",
    "If you score more than 7 on Grave Guess, you've officially beaten the dev high score.",
    "Cornfall has a super rare orange level background",
    "Love Cats.",
    "Fun fact: This is a fake loading screen.<br>There's nothing to load.",
]

function veryQuickfakeLoad(){
    setTimeout(stopLoad, 100);
    document.getElementById("loading-screen").style.display = "flex";
}

function quickFakeLoad(){
    setTimeout(stopLoad, 250);
    document.getElementById("loading-screen").style.display = "flex";
}

function fakeLoad(){
    document.getElementById("loading-screen").style.backgroundColor = loadingColors[rng(0,3)];
    document.getElementById("tip-content").innerHTML = loadingTips[rng(0,5)];
    document.getElementById("loading-screen").style.display = "flex";
    setTimeout(stopLoad, 500);
}


function stopLoad(){
    document.getElementById("loading-screen").style.display = "none";
}

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||| MENUS ||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// FUNCTION TO SAVE USERNAME
function remember () {
    const db = request.result;
    const transaction = db.transaction("username", "readwrite");
    const store = transaction.objectStore("username");

    const unval = document.getElementById("username-input").value;

    store.put({ id: 1, unstring: unval });
    user = unval;
    if(document.getElementById("local-username")) {
        document.getElementById("local-username").innerHTML = user;
    }

    goTo("home");
}

// FUNCTION TO GO TO THE LEADERBOARD
function leaderboardLoad() {
    goTo("leaderboard");
    loadScores();
    // CHECK RANKING
    lbRating();
}

// FUNCTION TO GO BACK TO THE HOME PAGE FROM THE LEADERBOARD
function back() {
    document.getElementById("scores-container").innerHTML = "";
    goTo("home");
}

// FUNCTION TO PLAY THE CURRENT GAME
function play () {
    switch(game) {
        case "cornfall":
            cornfall();
            break;
        case "graveguess":
            graveGuess();
            break;
    }
}

// FUNCTION TO REFRESH LEADERBOARD
function refreshlb() {
    document.getElementById("reload-lb").style.animation="spin 0.5s linear";
    setTimeout(stopRefreshAnim, "500");
    document.getElementById("scores-container").innerHTML = "";
    loadScores();
}
function stopRefreshAnim() {
    document.getElementById("reload-lb").style.animation="";
}

// FUNCTION TO SWITCH LEADERBOARD CATEGORY
function switchlb(i) {
    if(i) {
        categoryIndex = i;
        category = categories[categoryIndex];
        console.log(category);
        return;
    }
    categoryIndex++;
    if(categoryIndex < categories.length){
        category = categories[categoryIndex];
        document.getElementById("switch-lb").innerHTML = categoriesPublic[categoryIndex];
        console.log(categoryIndex);
        loadScores();
    } else {
        categoryIndex = 0;
        category = categories[categoryIndex]
        document.getElementById("switch-lb").innerHTML = categoriesPublic[categoryIndex];
        console.log(categoryIndex);
        loadScores();
    }
}

// FUNCTION TO SWITCH BACKGROUND
function backdrop(n){
    switch(n){
        case 0:
            console.log("Set Cornfall back!");
            if(rng(1,10) <= 3) {
                document.body.style.backgroundImage = "url('assets/cornfall/background-special.png')";
            } else {
                document.body.style.backgroundImage = "url('assets/cornfall/background-corn.png')";
            }
            break;
        case 1:
            console.log("Set Grave Guess back!");
            document.body.style.backgroundImage = "url('assets/graveguess/background-grave.png')";
            break;
    }
}

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||| GAMES ||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function cornfall() {
    goTo("cornfall");
    backdrop(0);
    switchlb("0");

    /*let canvasElement = document.createElement('canvas');
    canvasElement.id = "halloween-game-canvas";
    document.getElementById("falling-corn-game").appendChild(canvasElement);*/

    const canvas = document.getElementById("halloween-game-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight - 20;

    // START POSITION BASKET
    fingerX = (canvas.width)/2 - 50;
    // ARR
    let candies = [];
    let bones = [];

    document.addEventListener("touchstart", e => {
        fingerX = e.changedTouches[0].pageX;
        fingerY = e.changedTouches[0].pageY;
        fingerX = fingerX - 50;
    })

    document.addEventListener("touchmove", e => {
        fingerX = e.changedTouches[0].pageX;
        fingerY = e.changedTouches[0].pageY;
        fingerX = fingerX - 50;
    })

    function handleObjects (deltaTime) {

        if(candyTimer > candyInterval){
            candies.push(new Candy(canvas.width, canvas.height));
            candyTimer = 0;
        } else {
            candyTimer += deltaTime;
        }

        candies.forEach(candy => {
            candy.draw(ctx);
            candy.update(ctx);
        });
        candies = candies.filter(candy => !candy.markedForDeletion);

        if(boneTimer > boneInterval){
            bones.push(new Bone(canvas.width, canvas.height));
            boneTimer = 0;
        } else {
            boneTimer += deltaTime;
        }

        bones.forEach(bone => {
            bone.draw(ctx);
            bone.update(ctx);
        });
        bones = bones.filter(bone => !bone.markedForDeletion);
    }

    class Player {
        constructor(gameWidth, gameHeight){
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 100;
            this.height = 100;
            this.x = (this.gameWidth)/2 - (this.width)/2;
            this.y = this.gameHeight - this.height - 80;
            this.image = document.getElementById("cauldron");
        }
        draw(context){
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
            //context.fillRect(this.x, this.y, this.width, this.height);
        }
        update(){
            this.checkCollision(candies, bones);
            this.x = (lerp (this.x, fingerX, 0.1));

            if(this.x > this.gameWidth - 100){
                this.x = this.gameWidth - 100;
            } else if (this.x < 0){
                this.x = 0;
            }
        }
        checkCollision(candies, bones){
            // CANDIES, BONES
            candies.forEach(candy => {
                const dx = candy.x - this.x;
                const dy = candy.y - this.y;
                const distance = Math.sqrt(dx*dx + dy*dy);
                if(distance < candy.width/2 + this.width/2){
                    // COLLISION
                    if(candyLock == false){
                        candyLock = true;

                        candy.markedForDeletion = true;
                        
                        console.log("Collected Candy!");

                        score++;
                        document.getElementById("score").innerHTML = score.toString();

                        candyInterval = rng(500, 3200);
                        boneInterval = rng(700, 1400);
                    }
                } else {
                    // NO COLLISION
                    candyLock = false;
                }
            });

            bones.forEach(bone => {
                const dx = bone.x - this.x;
                const dy = bone.y - this.y;
                const distance = Math.sqrt(dx*dx + dy*dy);
                if(distance < bone.width/2 + this.width/2){
                    console.log("Collected Bone!");
                    gameover();
                }
            });
        }
    }

    class Candy {
        constructor(gameWidth, gameHeight){
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 60;
            this.height = 60;
            this.x = rng(10, 290);
            this.y = -100;
            this.markedForDeletion = false;
            this.image = document.getElementById("corn");
        }
        draw(context){
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        update(){
            this.y = lerp (this.y, 1500, 0.005);
            if(this.y > this.gameHeight + 100) this.markedForDeletion = true;
        }
    }

    class Bone {
        constructor(gameWidth, gameHeight){
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 70;
            this.height = 70;
            this.x = rng(10, 290);
            this.y = -100;
            this.markedForDeletion = false;
            this.image = document.getElementById("bone");
        }
        draw(context){

            context.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        update(){
            this.y = lerp (this.y, 1500, 0.005);
            if(this.y > this.gameHeight + 100) this.markedForDeletion = true;
        }
    }
    
    function lerp (start, end, amt) {
        return (1-amt)*start+amt*end
    }

    function gameover () {
        gameOver = true;
        var menu = document.getElementById("game-over-screen");
        menu.style.display = "flex";

        // SAVE SCORE TO FIREBASE LEADERBOARD
        getHS();
    }

    function retry() {
        score = 0;
        fingerX = (canvas.width)/2 - 50;
        candies = [];
        bones = [];
        var menu = document.getElementById("game-over-screen");
        menu.style.display = "none";
        document.getElementById("score").innerHTML = "0";
        gameOver = false;
        animate(0);
    }

    function menu() {
        document.getElementById("score").innerHTML = "0";
        goTo("home");
    }

    document.getElementById('retry-button').onclick = function() {
        retry();
    };

    document.getElementById('home-button').onclick = function() {
        menu();
    };

    const player = new Player(canvas.width, canvas.height);

    let lastTime = 0;
    let candyTimer = 0;
    let candyInterval = rng(500, 3200);
    let boneTimer = 0;
    let boneInterval = rng(700, 900);
    let gameOver = false;
    let score = 0;
    let candyLock = false;

    function animate (timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0,0,canvas.width, canvas.height);
        handleObjects(deltaTime);
        player.draw(ctx);
        player.update(candies, bones);
        if (!gameOver) requestAnimationFrame(animate);
    }
    animate(0);
}

function graveGuess() {
    goTo("graveguess");
    backdrop(1);
    switchlb("1");

    let score = 0;
    let iterations = 2;
    let completion = 0;
    let timeOffset = "1500";
    let upTime = "700";
    let list = [];
    let tappable = false;
    let taps = 0;

    document.getElementById("score").innerHTML = "0";
    round();

    function round() {
        tappable = false;
        makeTappable(false);
        timeOffset = "1500";
        for(i = 0; i < iterations; i++) {
            setTimeout(iterate, timeOffset);
            temp = Number(timeOffset);
            temp += 1500;
            timeOffset = temp.toString();
        }
    }

    function iterate() {
        switch(rng(1,4)) {
            case 1:
                document.getElementById("grave-1").classList.add("hint-green");
                list.push(1);
                setTimeout(release, upTime);
                console.log("act1");
                break;
            case 2:
                document.getElementById("grave-2").classList.add("hint-orange");
                list.push(2);
                setTimeout(release, upTime);
                console.log("act2");
                break;
            case 3:
                document.getElementById("grave-3").classList.add("hint-purple");
                list.push(3);
                setTimeout(release, upTime);
                console.log("act3");
                break;
            case 4:
                document.getElementById("grave-4").classList.add("hint-red");
                list.push(4);
                setTimeout(release, upTime);
                console.log("act4");
                break;
        }
        completion++;
        if(completion == iterations) {
            console.log('Done!');
            tappable = true;
            makeTappable(true);
            completion = 0;
        }
    }

    document.getElementById("grave-1").addEventListener("click", function() {
        tap(1);
    });
    document.getElementById("grave-2").addEventListener("click", function() {
        tap(2);
    });
    document.getElementById("grave-3").addEventListener("click", function() {
        tap(3);
    });
    document.getElementById("grave-4").addEventListener("click", function() {
        tap(4);
    });

    function tap(i) {
        console.log("Tap!");
        if(tappable){
            if(list[taps] == i) {
                console.log("Correct!");
                taps++;
                light(i);
                if(taps == list.length) {
                    console.log("Score Up!");
                    score++;
                    document.getElementById("score").innerHTML = score;
                    iterations++;
                    round();
                    getHS();
                }
            } else {
                gameover();
                console.log("Game Over!");
            }
        }
    }

    function light(n) {
        switch(n){
            case 1:
                document.getElementById("grave-1").classList.add("hint-green");
                setTimeout(release, "500");
                break;
            case 2:
                document.getElementById("grave-2").classList.add("hint-orange");
                setTimeout(release, "500");
                break;
            case 3:
                document.getElementById("grave-3").classList.add("hint-purple");
                setTimeout(release, "500");
                break;
            case 4:
                document.getElementById("grave-4").classList.add("hint-red");
                setTimeout(release, "500");
                break;
        }
    }

    function release() {
        document.getElementById("grave-1").classList.remove("hint-green");
        document.getElementById("grave-2").classList.remove("hint-orange");
        document.getElementById("grave-3").classList.remove("hint-purple");
        document.getElementById("grave-4").classList.remove("hint-red");
    }

    function gameover() {
        var menu = document.getElementById("game-over-screen-grave-guess");
        menu.style.display = "flex";

        release();
        iterations = 2;
        list = [];
        tappable = false;
        makeTappable(false);
        completion = 0;
        taps = 0;
        document.getElementById("grave-1").replaceWith(document.getElementById("grave-1").cloneNode(true));
        document.getElementById("grave-2").replaceWith(document.getElementById("grave-2").cloneNode(true));
        document.getElementById("grave-3").replaceWith(document.getElementById("grave-3").cloneNode(true));
        document.getElementById("grave-4").replaceWith(document.getElementById("grave-4").cloneNode(true));
    }

    function makeTappable(b) {
        if(b) {
            document.getElementById("mask").style.display = "none";
        } else {
            document.getElementById("mask").style.display = "block";
        }
    }

    function retry() {
        var menu = document.getElementById("game-over-screen-grave-guess");
        menu.style.display = "none";
        play();
    }

    function menu() {
        document.getElementById("score").innerHTML = "0";
        goTo("home");
    }

    document.getElementById('retry-button-grave-guess').onclick = function() {
        retry();
    };

    document.getElementById('home-button-grave-guess').onclick = function() {
        menu();
    };
}

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||| UTILITIES ||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}