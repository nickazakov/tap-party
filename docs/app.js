// #region Global Variables
let view = "welcome";
let leaderBoardBones = [
    "url(assets/general/seasonal/halloween22/abg/Bone-1.png)",
    "url(assets/general/seasonal/halloween22/abg/Bone-2.png)",
    "url(assets/general/seasonal/halloween22/abg/Bone-3.png)",
    "url(assets/general/seasonal/halloween22/abg/Bone-4.png)",
    "url(assets/general/seasonal/halloween22/abg/Bone-5.png)",
    "url(assets/general/seasonal/halloween22/abg/Bone-6.png)",
    "url(assets/general/seasonal/halloween22/abg/Bone-7.png)",
    "url(assets/general/seasonal/halloween22/abg/Bone-8.png)",
    "url(assets/general/seasonal/halloween22/abg/Bone-9.png)",
];
// #endregion

// #region Gesture Block

let drags = new Set() //set of all active drags
document.addEventListener("touchmove", function(event){
  if(!event.isTrusted)return //don't react to fake touches
  Array.from(event.changedTouches).forEach(function(touch){
    drags.add(touch.identifier) //mark this touch as a drag
  })
})
document.addEventListener("touchend", function(event){
  if(!event.isTrusted)return
  let isDrag = false
  Array.from(event.changedTouches).forEach(function(touch){
    if(drags.has(touch.identifier)){
      isDrag = true
    }
    drags.delete(touch.identifier) //touch ended, so delete it
  })
  if(!isDrag && document.activeElement == document.body){
    //note that double-tap only happens when the body is active
    event.preventDefault() //don't zoom
    event.stopPropagation() //don't relay event
    event.target.focus() //in case it's an input element
    event.target.click() //in case it has a click handler
    event.target.dispatchEvent(new TouchEvent("touchend",event))
    //dispatch a copy of this event (for other touch handlers)
  }
})

// #endregion

// #region Time System
// VARIABLES RELATED TO TIME
let game = "";

let admin = false;

let lootboxCount;

let lootboxContentHalloween22 = [ 1, 2, 3 ];

// GAME LIST ARRAY
// 0 : CORNFALL
// 1 : GRAVEGUESS
// 2 : POTIONCRAFT

// FUNCTION TO UPDATE ELEMENTS RELATED TO THE TIME
updateTime();

function updateTime() {

    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let gameList = [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1];

    /*if(document.getElementById("unopened-count")) {
        var x = Number(document.getElementById("unopened-count").innerHTML);
        console.log("Increment!" + x);
        x++;
        document.getElementById("unopened-count").innerHTML = x;
    }*/

    if(admin) {
        var firstDay = new Date(d.getFullYear(), d.getMonth()+1, 1);
        // get total seconds between the times
        var delta = Math.abs(firstDay - d) / 1000;

        // calculate (and subtract) whole days
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        // what's left is seconds
        var seconds = delta % 60;  // in theory the modulus is not required

        document.getElementById("time-left-month").innerHTML = days + " : " +hours+ " : " +minutes + " : " +Math.ceil(seconds);
    }

    // CALCULATE TIME TO NEXT GAME
    leftTime = (60 - m - 1) + "m " + (60 - s) + "s ";
    if(document.getElementById("time-left")) {
        document.getElementById("time-left").innerHTML = leftTime;
    }

    temp = Number(h) + 1;
    if(temp == 24){
        // SET 24 TO 0
        temp = 0;
    }
    temp = gameList[Number(temp)];

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

// #endregion

// #region Firebase Firestore

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
    "globallb",
    "cornfalllb",
    "graveguesslb",
    "potioncraftlb"
];

let bannersUnlocked = [
    true,
    false,
    false,
    false,
    false,
];

let bannerEquipped = 0;

// PUBLIC CATEGORY NAMES
let categoriesPublic = [
    "Monthly",
    "Cornfall",
    "Grave Guess",
    "Potioncraft"
];

// CURRENT CATEGORY PRIVATE ID
let category = "globallb";

// CURRENT CATEGORY INDEX
let categoryIndex = 0;

// SET/UPDATE SCORE
const saveScore = () => {

    console.log("-");
    currentScore = document.getElementById("score").innerHTML;
    db.collection(category)
    .doc(user)
    .update({ 
        score: Number(currentScore),
        banner: bannerEquipped
    });

    calcGlobal();
}

const calcGlobal = () => {
    totalScore = 0;
    for(i = 1; i < categories.length; i++) {
        db.collection(categories[i]).doc(user)
        .get()
        .then((doc) => {
            totalScore = totalScore + doc.data().score;

            db.collection("globallb")
            .doc(user)
            .update({ 
                score:  totalScore
            });
            console.log("New Total Score: " + totalScore);
        });
    }
}

const createScores = () => {
    for(i = 0; i < categories.length; i++) {
        db.collection(categories[i]).doc(user)
        .set({ 
            score: 0,
            banner: bannerEquipped
        });
    }
}

let totalScore = 0;

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

    let medals = 0;
    document.getElementById("scores-container").innerHTML = "";
    db.collection(category)
    .orderBy("score", "desc")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().score);
            let username = doc.id;
            let oldScore = doc.data().score;
            let banner = doc.data().banner;
            
            let card;
            switch(medals){
                case 0:
                    // GOLD
                    if (username == user) {
                        // SELF
                        card = document.createElement('div');
                        card.classList.add("self");
                        console.log(username + " is using banner: " + banner + " and is in Gold!");
                        if(banner != 0) {
                            id = "banner-" + banner;
                            card.setAttribute("id", "entry-card-gold-self");
                            card.classList.add(id);
                        } else {
                            card.setAttribute("id", "entry-card-gold-self");
                            card.classList.add("gold");
                        }
                        card.setAttribute("ontouchstart", "touchStart(this.id)");
                        card.setAttribute("ontouchend", "touchEnd(this.id)");
                    } else if (banner) {
                        card = document.createElement('div');
                        if(banner != 0) {
                            id = "banner-" + banner;
                            card.setAttribute("id", "entry-card-gold");
                            card.setAttribute("class", id);
                        } else {
                            card.setAttribute("id", "entry-card-gold");
                            card.setAttribute("class", "gold");
                        }
                    } else {
                        card = document.createElement('div');
                        card.setAttribute("id", "entry-card-gold");
                        card.setAttribute("class", "gold");
                    }
                    break;
                case 1:
                    // SILVER
                    if (username == user) {
                        // SELF
                        card = document.createElement('div');
                        card.classList.add("self");
                        console.log(username + " is using banner: " + banner + " and is in Silver!");
                        if(banner != 0) {
                            id = "banner-" + banner;
                            card.setAttribute("id", "entry-card-silver-self");
                            card.classList.add(id);
                        } else {
                            card.setAttribute("id", "entry-card-silver-self");
                            card.classList.add("silver");
                        }
                        card.setAttribute("ontouchstart", "touchStart(this.id)");
                        card.setAttribute("ontouchend", "touchEnd(this.id)");
                    } else if (banner) {
                        card = document.createElement('div');
                        if(banner != 0) {
                            id = "banner-" + banner;
                            card.setAttribute("id", "entry-card-silver");
                            card.setAttribute("class", id);
                        } else {
                            card.setAttribute("id", "entry-card-silver");
                            card.setAttribute("class", "silver");
                        }
                    } else {
                        card = document.createElement('div');
                        card.setAttribute("id", "entry-card-silver");
                        card.setAttribute("class", "silver");
                    }
                    break;
                case 2:
                    // BRONZE
                    if (username == user) {
                        // SELF
                        card = document.createElement('div');
                        card.classList.add("self");
                        console.log(username + " is using banner: " + banner + " and is in Bronze!");
                        if(banner != 0) {
                            id = "banner-" + banner;
                            card.setAttribute("id", "entry-card-bronze-self");
                            card.classList.add(id);
                        } else {
                            card.setAttribute("id", "entry-card-bronze-self");
                            card.classList.add("bronze");
                        }
                        card.setAttribute("ontouchstart", "touchStart(this.id)");
                        card.setAttribute("ontouchend", "touchEnd(this.id)");
                    } else if (banner) {
                        card = document.createElement('div');
                        if(banner != 0) {
                            id = "banner-" + banner;
                            card.setAttribute("id", "entry-card-bronze");
                            card.setAttribute("class", id);
                        } else {
                            card.setAttribute("id", "entry-card-bronze");
                            card.setAttribute("class", "bronze");
                        }
                    } else {
                        card = document.createElement('div');
                        card.setAttribute("id", "entry-card-bronze");
                        card.setAttribute("class", "bronze");
                    }
                    break;
                default:
                    // UNRANKED
                    if (username == user) {
                        // SELF
                        card = document.createElement('div');
                        card.classList.add("self");
                        console.log(username + " is using banner: " + banner + " and is in Unranked!");
                        if(banner != 0) {
                            id = "banner-" + banner;
                            card.setAttribute("id", "entry-card-unranked-self");
                            card.classList.add(id);
                        } else {
                            card.setAttribute("id", "entry-card-unranked-self");
                            card.classList.add("unranked");
                        }
                        card.setAttribute("ontouchstart", "touchStart(this.id)");
                        card.setAttribute("ontouchend", "touchEnd(this.id)");
                    } else if (banner) {
                        card = document.createElement('div');
                        if(banner != 0) {
                            id = "banner-" + banner;
                            card.setAttribute("id", "entry-card-unranked");
                            card.setAttribute("class", id);
                        } else {
                            card.setAttribute("id", "entry-card-unranked");
                            card.setAttribute("class", "unranked");
                        }
                    } else {
                        card = document.createElement('div');
                        card.setAttribute("id", "entry-card-unranked");
                        card.setAttribute("class", "unranked");
                    }
            }
            medals++;

            // CREATE & APPEND USERNAME ENTRY
            temp = document.createElement('div');
            temp.setAttribute("id", "username-entry");
            tempT = document.createTextNode(username);
            temp.appendChild(tempT);
            card.appendChild(temp);

            // CREATE & APPEND SCORE ENTRY
            tempS = document.createElement('div');
            tempS.setAttribute("id", "score-entry");
            tempST = document.createTextNode(oldScore);
            tempS.appendChild(tempST);
            card.appendChild(tempS);

            document.getElementById("scores-container").appendChild(card);
        });

        tempSep = document.createElement('div');
        tempSep.setAttribute("id", "leaderboard-fix");
        document.getElementById("scores-container").appendChild(tempSep);

        if(document.getElementById("entry-card-gold-self")) {
            document.getElementById("entry-card-gold-self").addEventListener('click', function (event) {
                loadPage("profile");
            });
        }
        if(document.getElementById("entry-card-silver-self")) {
            document.getElementById("entry-card-silver-self").addEventListener('click', function (event) {
                loadPage("profile");
            });
        }
        if(document.getElementById("entry-card-bronze-self")) {
            document.getElementById("entry-card-bronze-self").addEventListener('click', function (event) {
                loadPage("profile");
            });
        }
        if(document.getElementById("entry-card-unranked-self")) {
            document.getElementById("entry-card-unranked-self").addEventListener('click', function (event) {
                loadPage("profile");
            });
        }
    })
}

const getBanners = () => {
    db.collection("unlocks").doc(user)
    .get()
    .then((doc) => {
        if (doc.exists) {
            console.log("Unlocks Document exists!");
            bannersUnlocked = doc.data().banners;
            bannerEquipped = doc.data().equipped;
            // SET EQUIPPED FROM DOC.DATA().EQUIPPED
            console.log(bannersUnlocked);
        } else {
            console.log("No Unlocks Document!");
            setBanners();
        }
    })
}

const setBanners = () => {
    console.log(bannersUnlocked);
    
    db.collection("unlocks").doc(user)
    .get()
    .then((doc) => {
        if (doc.exists) {
            db.collection("unlocks")
            .doc(user)
            .update({ 
                banners: bannersUnlocked,
                equipped: bannerEquipped
            });
        
            for(i = 0; i < categories.length; i++) {
                db.collection(categories[i]).doc(user)
                .update({ 
                    banner: bannerEquipped
                });
            }
        } else {
            db.collection("unlocks")
            .doc(user)
            .set({ 
                banners: bannersUnlocked,
                equipped: bannerEquipped,
                lootboxes: 0
            });
        
            for(i = 0; i < categories.length; i++) {
                db.collection(categories[i]).doc(user)
                .update({ 
                    banner: bannerEquipped
                });
            }
        }
    })
}

const existingUserCheck = () => {
    db.collection("globallb").doc(user)
    .get()
    .then((doc) => {
        if (doc.exists) {
            console.log("Existing user!");
        } else {
            console.log("New user!");
            setTimeout(createScores, 100);
        }
    })
}

const lootbox = (arg) => {
    console.log(user);
    if(arg == "get") {
        console.log("Getting Lootbox Data! " + user);
        db.collection("unlocks").doc(user)
        .get()
        .then((doc) => {
            if (doc.exists) {
                console.log("Existing user!");
                lootboxCount = doc.data().lootboxes;
                console.log(lootboxCount);
                if(document.getElementById("unopened-count")) {
                    document.getElementById("unopened-count").innerHTML = lootboxCount;
                }
                if(document.getElementById("unopened-count-button-preview")) {
                    document.getElementById("unopened-count-button-preview").innerHTML = lootboxCount;
                }
            } else {
                console.log("New user!");
                setTimeout(createScores, 100);
            }
        })
    } else if(arg == "set") {
        console.log("Setting Lootbox Data!");
        db.collection("unlocks")
        .doc(user)
        .update({ 
            lootboxes: lootboxCount
        });
    }
}

let userArray = [];

const adminLoadScores = () => {
    var table = document.getElementById("usertable");
    userArray = [];

    db.collection("cornfalllb")
    .get()
    .then((querySnapshot) => {
        
        // POPULATE USER ARRAY
        querySnapshot.forEach((doc) => {
            userArray.push(doc.id);
            console.log(userArray);
        });

        // GET SCORES
        for(let i = 0; i < userArray.length; i++) {

            let userRow = table.insertRow(-1);
            var usernameCell = userRow.insertCell(-1);
            usernameCell.innerHTML = userArray[i];

            for(let y = 1; y < categories.length; y++) {
                db.collection(categories[y]).doc(userArray[i])
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        console.log("Document exists!");
                        var scoreCell = userRow.insertCell(-1);
                        scoreCell.innerHTML = doc.data().score;
                    } else {
                        var scoreCell = userRow.insertCell(-1);
                        scoreCell.innerHTML = 0;
                    }
                })
            }
        }
    })
}

const adminCalcGlobal = () => {
    var table = document.getElementById("usertable");
    for(let i = 1; i <= userArray.length; i++) {
        let globalScore = 0;
        console.log("----");
        for(let y = 1; y < categories.length; y++) {
            globalScore = globalScore + Number(table.rows[i].cells[y].innerHTML);
            console.log(globalScore + " | i:" + y);
        }
        table.rows[i].insertCell(categories.length).innerHTML = globalScore;
    }
}

const adminClearTable = () => {
    var table = document.getElementById("usertable");
    table.innerHTML = table.rows[0].innerHTML;
}

const adminSortByGlobal = () => {
    var table = document.getElementById("usertable");
    let array = [];
    for(let i = 1; i <= userArray.length; i++) {
        let last = table.rows[i].cells[categories.length].innerHTML
        console.log(table.rows[i].cells[categories.length].innerHTML);
        // array.push(Number(table.rows[i].cells[categories.length].innerHTML));
        if(table.rows[i+1].cells[categories.length].innerHTML > last) {
            table.insertRow(-1).innerHTML = table.rows[i].innerHTML();
        }
    }


    /* console.log(array);
    array.sort(function(a, b) {
        return a - b;
    });
    console.log(array); */
}


// #endregion

/* CAT FACT GENERATOR
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
*/

// #region IndexedDB
// USER VARIABLE
let user = "";
let currentLodState = "High";

const indexedDB =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

const request = indexedDB.open("UsernameData", 1);
const request2 = indexedDB.open("LodState", 1);

// ERROR PRINT
request.onerror = function (event) {
    console.error("An error occurred with IndexedDB");
    console.error(event);
}

// ERROR PRINT
request2.onerror = function (event) {
    console.error("An error occurred with IndexedDB");
    console.error(event);
}

// SAVE USERNAME TO THE LOCAL STORAGE
request.onupgradeneeded = function () {
    const db = request.result;
    const store = db.createObjectStore("username", { keyPath: "id" });
    store.createIndex("un", ["unstring"], {unique: true});
}

// SAVE LOD STATE TO THE LOCAL STORAGE
request2.onupgradeneeded = function () {
    const db2 = request2.result;
    const store = db2.createObjectStore("lod", { keyPath: "id2" });
    store.createIndex("lds", ["lodstate"], {unique: true});
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
            console.log("Username found!");
            user = idQuery.result.unstring;
            if(user == "SedemOsem78Admin") {
                admin = true;
                console.log("User is admin!");
                goTo("admin-dash");
            } else {
                goTo("home");
            }
            // document.getElementById("local-username").innerHTML = user;
            
            /*var welcome = document.getElementById("welcome-content");
            var home = document.getElementById("home-content");
            welcome.style.display = "none";
            home.style.display = "flex";*/
        }
    }
}

// PERFORM A CHECK TO SEE IF LOD STATE IS SAVED IN THE LOCAL STORAGE
request2.onsuccess = function () {
    const db2 = request2.result;
    const transaction = db2.transaction("lod", "readwrite");

    const store = transaction.objectStore("lod");
    const userIndex = store.index("lds");

    const idQuery = store.get(1);

    idQuery.onsuccess = function () {
        console.log('Username: ', idQuery.result);
        if(idQuery.result == undefined) {
            console.log("No saved LOD Level.");
            lodSet(currentLodState);
        } else {
            // document.getElementById("lod-quality").innerHTML = "LOD: " + idQuery.result.lodstate;
            currentLodState = idQuery.result.lodstate;

            console.log("Loaded LOD Level: " + currentLodState);
            lodSet(currentLodState);
        }
    }
}

function lodSwitch() {
    if(currentLodState == "High"){
        currentLodState = "Low";
    } else {
        currentLodState = "High";
    }

    lodSet(currentLodState);

    console.log('lod tap');
    const db2 = request2.result;
    const transaction = db2.transaction("lod", "readwrite");
    const store = transaction.objectStore("lod");

    store.put({ id2: 1, lodstate: currentLodState});
}

function lodSet(lod) {
    switch(lod) {
        case "High":
            if(document.getElementById("lod-quality")) {
                document.getElementById("lod-quality").innerHTML = "LOD: " + currentLodState;
            }

            if(document.getElementById("bg-container")){
                document.getElementById("bg-container").style.display = "block";
            }
            if(document.getElementById("bg-container-skull")){
                document.getElementById("bg-container-skull").style.display = "block";
            }
            break;
        case "Low":
            if(document.getElementById("lod-quality")) {
                document.getElementById("lod-quality").innerHTML = "LOD: " + currentLodState;
            }

            if(document.getElementById("bg-container")){
                document.getElementById("bg-container").style.display = "none";
            }
            if(document.getElementById("bg-container-skull")){
                document.getElementById("bg-container-skull").style.display = "none";
            }
            break;
    }
}

// #endregion

// #region Navigation
// #region HTMLSnippets

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
    <div id="abg22-halloween">
        <div id="abg22-halloween-back"></div>
        <div id="abg22-halloween-witch"></div>
        <div id="abg22-halloween-flame"></div>
        <div id="abg22-halloween-fore"></div>
    </div>

    <content id="home-ui">
        <div id="ui">
            <div id="ui-top">

                <div id="event-info" class="ds-light">
                    <div id="event-title" class="scale-transition" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)" onclick="loadPage('leaderboard')">
                        <h1>Spookstober</h1>
                    </div>
                    <div id="lootbox-button" class="scale-transition" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)" onclick="loadPage('lootbox')">
                        <div class="lootbox-image">
                            <p id="unopened-count">-</p>
                        </div>
                    </div>
                </div>

            </div>
            <div id="ui-bottom">
                <div id="time-left-indicator">
                    <div id="time-left">0m 0s</div>
                    <button id="purple-button" class="purple-button ds-heavy" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)" onclick="setTimeout(play, 100)">Play</button>
                </div>
                <button id="orange-button" class="orange-button ds-heavy" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)" onclick="loadPage('leaderboard')">Leaderboard</button>
            </div>
        </div>
    </content>

    <content id="lootbox-content">
        <div id="ui">
            <div id="ui-top">
            </div>

            <div id="ui-bottom">
                <div id="time-left-indicator">
                    <div id="unopened-count-button-preview">-</div>
                    <button id="purple-button1" class="orange-button ds-heavy" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)" onclick="openLootbox()">Open</button>
                </div>
                <button id="orange-button1" class="purple-button ds-heavy" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)" onclick="loadPage('home')">Back</button>
            </div>
        </div>

        <div id="lootbox-back"></div>
        <div id="lootbox-glow"></div>
        <div id="lootbox-front"></div>

        <div id="lootbox-reward-container">
            <h1>New Banner!</h1>
            <div id="lootbox-reward">
                <div id="lootbox-banner-spacer">.</div>
            </div>
        </div>

        <div id="lootbox-flash"></div>
        <div id="lootbox-page-background"></div>
    </content>
`;

let leaderboard_HTMLSnippet = `
    <content id="leaderboard-content">
        <div id="abg22-halloween">
            <div id="abg22-halloween-bone"></div>
        </div>

        <h1>Leaderboard</h1>
        <div id="top-bar-lb">
            <button id="switch-lb" class="scale-transition ds-even-heavy" onclick="switchlb()" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)">Cornfall</button>
            <button id="faq-lb" class="scale-transition material-symbols-rounded ds-even-heavy" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)">question_mark</button>
            <button id="reload-lb" class="scale-transition material-symbols-rounded ds-even-heavy" onclick="refreshlb()" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)">sync</button>
        </div>

        <div id="board">
            <div id="scores-container">
            </div>
        </div>
        <button id="purple-button" class="purple-button ds-heavy" onclick="loadPage('home')" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)">Back</button>

        <div id="absolute-profile">
            <div id="profile-popup">
                <h1>Banner Library</h1>

                <div id="banner-collection">

                    <div id="banner-card-option" class="banner-0-preview" onclick="equipBanner(0)">
                        <div id="banner-equip-indicator">
                            <span id="equip-icon-0" class="material-symbols-rounded">circle</span>
                        </div>
                        <div id="banner-unlock-hint">Default Banner</div>
                    </div>

                    <div id="banner-card-option" class="banner-1-preview" onclick="equipBanner(1)">
                        <div id="banner-equip-indicator">
                            <span id="equip-icon-1" class="material-symbols-rounded">circle</span>
                        </div>
                        <div id="banner-unlock-hint">Halloween Exclusive</div>
                    </div>

                    <div id="banner-card-option" class="banner-2-preview" onclick="equipBanner(2)">
                        <div id="banner-equip-indicator">
                            <span id="equip-icon-2" class="material-symbols-rounded">circle</span>
                        </div>
                        <div id="banner-unlock-hint">Halloween Exclusive</div>
                    </div>

                    <div id="banner-card-option" class="banner-3-preview" onclick="equipBanner(3)">
                        <div id="banner-equip-indicator">
                            <span id="equip-icon-3" class="material-symbols-rounded">circle</span>
                        </div>
                        <div id="banner-unlock-hint">Halloween Exclusive</div>
                    </div>

                    <div id="banner-card-option" class="banner-4-preview" onclick="equipBanner(4)">
                        <div id="banner-equip-indicator">
                            <span id="equip-icon-4" class="material-symbols-rounded">circle</span>
                        </div>
                        <div id="banner-unlock-hint">Reach 50 in Cornfall</div>
                    </div>

                    <div id="banner-card-option" class="banner-coming-soon">
                        <div id="banner-equip-indicator">
                            <span id="equip-icon-1" class="material-symbols-rounded">circle</span>
                        </div>
                        <div id="banner-unlock-hint">Coming Soon!</div>
                    </div>

                    <div id="banner-card-option" class="banner-coming-soon">
                        <div id="banner-equip-indicator">
                            <span id="equip-icon-2" class="material-symbols-rounded">circle</span>
                        </div>
                        <div id="banner-unlock-hint">Coming Soon!</div>
                    </div>

                    <div id="banner-card-option" class="banner-coming-soon">
                        <div id="banner-equip-indicator">
                            <span id="equip-icon-3" class="material-symbols-rounded">circle</span>
                        </div>
                        <div id="banner-unlock-hint">Coming Soon!</div>
                    </div>

                    <div id="banner-card-option" class="banner-coming-soon">
                        <div id="banner-equip-indicator">
                            <span id="equip-icon-4" class="material-symbols-rounded">circle</span>
                        </div>
                        <div id="banner-unlock-hint">Coming Soon!</div>
                    </div>
                </div>
                <button id="orange-button" class="orange-button ds-heavy" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)" onclick="loadPage('leaderboard')">Save</button>
            </div>
        </div>
    </content>
`;

let admin_HTMLSnippet = `
    <div id="admin-panel">
        <h1 id="admin-title">Logged in as admin!</h1>
        <h2 id="time-left-month">-</h2>
        <button onclick="adminLoadScores()">Load Scores</button>
        <button onclick="adminCalcGlobal()">Calculate Global</button>
        <button onclick="adminClearTable()">Clear Table</button>
        <button onclick="adminSortByGlobal()">Sort</button>
        <button>Wipe Leaderboards</button>

        <div id="admin-userlist">
            <h2 id="admin-userlist-title">User List</h2>
            <div id="userlist">

                <table id="usertable">
                    <tr>
                        <th>User</th>
                        <th>Cornfall</th>
                        <th>Graveguess</th>
                        <th>Potioncraft</th>
                        <th>Global</th>
                        <th>Reward</th>
                    </tr>
                </table>

            </div>
        </div>
    </div>
`;

let cornfall_HTMLSnippet = `
    <h1 id="score">0</h1>

    <content id="falling-corn-game">
        <div id="game-over-screen">
            <button id="retry-button" class="purple-button ds-heavy" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)">Retry</button>
            <button id="home-button" class="purple-button ds-heavy" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)">Home</button>
        </div>
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
        <div id="game-over-screen-grave-guess">
            <button id="retry-button" class="purple-button ds-light game-over-ui" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)">Retry</button>
            <button id="home-button" class="purple-button ds-light game-over-ui" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)">Home</button>
        </div>
    </content>
`;

// #endregion

// GLOBAL GOTO FUNCTION
function goTo(page) {
    document.getElementById("absolute-body").innerHTML = "";
    document.body.style.backgroundImage = "";

    switch(page) {

        // PAGES
        case "admin-dash": 
            document.getElementById("absolute-body").innerHTML = admin_HTMLSnippet;
            view = "admin"
            break;
        case "landing":
            document.getElementById("absolute-body").innerHTML = landing_HTMLSnippet;
            view = "landing";
            break;
        case "welcome": 
            document.getElementById("absolute-body").innerHTML = welcome_HTMLSnippet;
            view = "welcome";
            break;
        case "home":
            document.getElementById("absolute-body").innerHTML = home_HTMLSnippet;
            view = "home";
            setTimeout(lootbox, 100, "get");
            break;
        case "leaderboard":
            getBanners();
            document.getElementById("absolute-body").innerHTML = leaderboard_HTMLSnippet;
            leaderBoardBack();
            categoryIndex = 0;
            category = categories[categoryIndex];
            document.getElementById("switch-lb").innerHTML = categoriesPublic[categoryIndex];
            calcGlobal();
            loadScores();
            view = "leaderboard";
            break;

        // GAMES
        case "cornfall":
            document.body.style.backgroundImage = "";
            document.getElementById("absolute-body").innerHTML = cornfall_HTMLSnippet;

            view = "game";
            break;
        case "graveguess":
            document.body.style.backgroundImage = "";
            document.getElementById("absolute-body").innerHTML = graveguess_HTMLSnippet;

            view = "game";
            break;
    }

    lodSet(currentLodState);
}

function loadPage(page) {
    switch(page) {

        // PAGES
        case "landing":
            break;
        case "welcome": 
            break;
        case "home":
            lootbox("get");
            // CUSTOM TRANSITION
            if(view == "leaderboard") {
                document.getElementById("leaderboard-content").style.opacity = "0";
                setTimeout(fadeInHome, 500);
                function fadeInHome() {
                    document.getElementById("scores-container").innerHTML = "";
    
                    // CHANGE VIEW
                    goTo("home");
                    document.getElementById("abg22-halloween").style.transform = "translateY(-120vh)";
                    document.getElementById("home-ui").style.opacity = "0";
                    setTimeout(fadeInHomeFollowUp, 500);
                }
                function fadeInHomeFollowUp() {
                    document.getElementById("abg22-halloween").style.transform = "translateY(0vh)";
                    document.getElementById("home-ui").style.opacity = "1";
                }
            }
            if(view == "lootbox") {
                document.getElementById("lootbox-content").style.opacity = "0";
                setTimeout(fadeInHome, 500);
                function fadeInHome() {
                    document.getElementById("home-ui").style.display = "flex";
                    setTimeout(fadeInHomeFollowUp, 10);
                }
                function fadeInHomeFollowUp() {
                    document.getElementById("home-ui").style.opacity = "1";
                    document.getElementById("lootbox-content").style.display = "none";
                }
                view = "home";
            }
            break;
        case "leaderboard":
            // CUSTOM TRANSITION
            if (view == "home") {
                document.getElementById("abg22-halloween").style.transform = "translateY(-120vh)";
                document.getElementById("abg22-halloween-fore").style.transform = "translateY(5vh)";
                document.getElementById("home-ui").style.opacity = "0";

                setTimeout(fadeInLeaderboard, 1500);
                function fadeInLeaderboard() {
    
                    // CHANGE VIEW
                    goTo("leaderboard");
                    document.getElementById("leaderboard-content").style.opacity = "0";
                    setTimeout(fadeInLeaderboardFollowUp, 500);
                }
                function fadeInLeaderboardFollowUp() {
                    document.getElementById("leaderboard-content").style.opacity = "1";
                }
            }
            if (view == "profile") {
                console.log("Exit Profile!");
                document.getElementById("absolute-profile").style.opacity = "0";
                setTimeout(profileFadeOut, 550);
                function profileFadeOut() {
                    document.getElementById("absolute-profile").style.display = "none";
                }
                loadScores();
            }
            view = "leaderboard";
            break;
        case "profile":
            view = "profile"
            document.getElementById("absolute-profile").style.display = "flex";
            switch(bannerEquipped){
                case 0:
                    document.getElementById("equip-icon-0").style.display = "block";
                    break;
                case 1:
                    document.getElementById("equip-icon-1").style.display = "block";
                    break;
                case 2:
                    document.getElementById("equip-icon-2").style.display = "block";
                    break;
                case 3:
                    document.getElementById("equip-icon-3").style.display = "block";
                    break;
                case 4:
                    document.getElementById("equip-icon-4").style.display = "block";
                    break;
            }
            for(i = 0; i < 5; i++){
                if(!bannersUnlocked[i]) {
                    className = "banner-"+i+"-preview";
                    document.getElementsByClassName(className)[0].style.filter = "brightness(25%)";
                }
            }

            // CUSTOM TRANSITION
            setTimeout(profileFadeIn, 100);
            function profileFadeIn() {
                document.getElementById("absolute-profile").style.opacity = "1";
            }
            break;
        case "lootbox":
            view = "lootbox";
            lootbox("get");

            document.getElementById("home-ui").style.opacity = "0";

            setTimeout(lootboxFadeIn, 500);
            function lootboxFadeIn() {

                document.getElementById("lootbox-content").style.display = "flex";
                document.getElementById("home-ui").style.display = "none";
                setTimeout(lootboxFadeInFollowUp, 100);
            }
            function lootboxFadeInFollowUp() {

                document.getElementById("lootbox-content").style.opacity = "1";
            }
            break;

            // GAMES
        case "cornfall":
            break;
        case "graveguess":
            break;
    }
}

function openLootbox() {
    // FIRESTORE CHECKS

    getBanners();

    if(lootboxCount < 1) {
        return;
    }

    lootboxCount--;

    console.log("Opening Halloween Lootbox...");

    document.getElementById("lootbox-front").style.transform = "scale(0.5)";
    document.getElementById("lootbox-glow").style.transform = "scale(0.5)";
    document.getElementById("lootbox-back").style.transform = "scale(0.5)";

    document.getElementById("lootbox-flash").style.display = "block";
    setTimeout(flashFadeIn, 10);

    function flashFadeIn() {
        document.getElementById("lootbox-flash").style.opacity = "1";

        document.getElementById("lootbox-reward-container").style.display = "flex";

        setTimeout(flashFadeOut, 700);
    }

    function flashFadeOut() {
        lootbox("get");

        console.log(bannersUnlocked);

        // PREVIEW BANNER
        value = rng(1,100);
        if(value <= 15) {
            document.getElementById("lootbox-reward").style.backgroundImage = "url(assets/general/banners/banner-halloween22-3.png)"
            bannersUnlocked[3] = true;
        } else if (value <= 40) {
            document.getElementById("lootbox-reward").style.backgroundImage = "url(assets/general/banners/banner-halloween22-2.png)"
            bannersUnlocked[2] = true;
        } else {
            document.getElementById("lootbox-reward").style.backgroundImage = "url(assets/general/banners/banner-halloween22-1.png)"
            bannersUnlocked[1] = true;
        }

        console.log(bannersUnlocked);
        setBanners();

        document.getElementById("lootbox-reward-container").style.opacity = "1";


        document.getElementById("lootbox-front").style.transform = "scale(1)";
        document.getElementById("lootbox-glow").style.transform = "scale(1)";
        document.getElementById("lootbox-back").style.transform = "scale(1)";

        document.getElementById("lootbox-front").style.transition = "all 0s";
        document.getElementById("lootbox-front").style.backgroundImage = "url(assets/general/seasonal/halloween22/lootbox/opened.png)";
        document.getElementById("lootbox-front").style.filter = "brightness(50%)";

        document.getElementById("lootbox-glow").style.display = "none";
        document.getElementById("lootbox-back").style.display = "none";

        document.getElementById("lootbox-flash").style.opacity = "0";

        setTimeout(lootboxCycle, 3000);
    }

    function lootboxCycle() {
        document.getElementById("lootbox-front").style.transition = "all 1s";
        document.getElementById("lootbox-glow").style.display = "block";
        document.getElementById("lootbox-back").style.display = "block";
        document.getElementById("lootbox-front").style.backgroundImage = "url(assets/general/seasonal/halloween22/lootbox/lootbox-front.png)";
        document.getElementById("lootbox-flash").style.display = "none";
        document.getElementById("lootbox-reward-container").style.opacity = "0";
    }

    lootbox("set");
}

function fakeLoad(){
    document.getElementById("loading-screen").style.display = "block";
    setTimeout(fakeLoadFollowUp, 10);
}

function fakeLoadFollowUp() {
    // document.getElementById("loading-screen").style.transform = "translateY(100vh)";
    setTimeout(stopLoad, 125);
}

function stopLoad(){
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("loading-screen").style.transform = "translateY(0vh)";
}


function leaderBoardBack() {
    if(document.getElementById("abg22-halloween-bone")){
        document.getElementById("abg22-halloween-bone").style.opacity = "0";
    }

    if(rng(1,10) < 7) {
        if(document.getElementById("abg22-halloween-bone")){
            document.getElementById("abg22-halloween-bone").style.opacity = "1";
            document.getElementById("abg22-halloween-bone").style.backgroundImage = leaderBoardBones[rng(0,8)];
        }
    }
    if(document.getElementById("abg22-halloween-bone")){
        setTimeout(leaderBoardBack, 1500);
    }
}

function equipBanner(b) {
    if(bannersUnlocked[b]) {
        let id = "equip-icon-";
            for(i = 0; i < 5; i++) { // SET AMOUNT OF BANNERS
                id = "equip-icon-"+i;
                document.getElementById(id).style.display = "none";
            }
            id = "equip-icon-"+b;
            console.log(id);
            document.getElementById(id).style.display = "block";
            bannerEquipped = b;
            setBanners();
    } else {
        console.log("Locked Banner!");
        className = "banner-"+b+"-preview";
        document.getElementsByClassName(className)[0].classList.add("wobble");
        setTimeout(bannerAnimStop, 1000, className);
    }
}

function bannerAnimStop(className) {
    document.getElementsByClassName(className)[0].classList.remove("wobble");
}

// GLOBAL BUTTON HOVER FUNCTIONS
function touchStart(id) {
    console.log(id);
    buttonType = document.getElementById(id).classList[0];
    switch(buttonType){
        case "purple-button":
            document.getElementById(id).classList.replace("purple-button", "purple-button-touch");
            break;
        case "orange-button":
            document.getElementById(id).classList.replace("orange-button", "orange-button-touch");
            break;
        case "blue-circle-button":
            document.getElementById(id).classList.replace("blue-circle-button", "blue-circle-button-touch");
            break;
        case "blue-circle-button":
            document.getElementById(id).classList.replace("blue-circle-button", "blue-circle-button-touch");
            break;

        case "self":
            document.getElementById(id).classList.replace("self", "self-touch");
            break;
        case "scale-transition":
            console.log(buttonType);
            document.getElementById(id).classList.replace("scale-transition", "scale-transition-touch");
            break;
    }
}
function touchEnd(id) {
    buttonType = document.getElementById(id).classList[0];
    switch(buttonType){
        case "purple-button-touch":
            document.getElementById(id).classList.replace("purple-button-touch", "purple-button");
            break;
        case "orange-button-touch":
            document.getElementById(id).classList.replace("orange-button-touch", "orange-button");
            break;
        case "blue-circle-button-touch":
            document.getElementById(id).classList.replace("blue-circle-button-touch", "blue-circle-button");
            break;

        case "self-touch":
            document.getElementById(id).classList.replace("self-touch", "self");
            break;
        case "scale-transition-touch":
            document.getElementById(id).classList.replace("scale-transition-touch", "scale-transition");
            break;
    }
}

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

    if(user == "SedemOsem78Admin") {
        admin = true;
        goTo("admin-dash");
        return;
    }

    goTo("home");
    existingUserCheck();
    getBanners();
}

// FUNCTION TO PLAY THE CURRENT GAME
function play () {
    getBanners();
    switch(game) {
        case "cornfall":
            cornfall();
            break;
        case "graveguess":
            graveGuess();
            break;
    }
}

let canCalcB = true;

// FUNCTION TO REFRESH LEADERBOARD
function refreshlb() {
    document.getElementById("reload-lb").style.animation="spin 0.5s linear";
    setTimeout(stopRefreshAnim, "500");
    document.getElementById("scores-container").innerHTML = "";
    loadScores();

    if(canCalcB) {
        calcGlobal();
        canCalcB = false;
        setTimeout(canCalc, 1000);
    }
}
function canCalc() {
    canCalcB = true;
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
        category = categories[categoryIndex];
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

// #endregion

// #region Games
function cornfall() {
    goTo("cornfall");
    backdrop(0);
    switchlb("1");

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

        if(score >= 50) {
            bannersUnlocked[4] = true;
            setBanners();
            console.log("Unlocked Cornfall Banner!");
        }

        // SAVE SCORE TO FIREBASE LEADERBOARD
        getHS();
    }

    document.getElementById('retry-button').onclick = function() {
        setTimeout(play, 100);
    };

    document.getElementById('home-button').onclick = function() {
        document.getElementById("score").innerHTML = "0";
        setTimeout(goTo, 100, "home");
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
    switchlb("2");

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

    document.getElementById('retry-button').onclick = function() {
        setTimeout(play, 100);
    };

    document.getElementById('home-button').onclick = function() {
        document.getElementById("score").innerHTML = "0";
        setTimeout(goTo, 100, "home");
    };
}
// #endregion

// #region Utilities
function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// #endregion