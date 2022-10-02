// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||| PRELOAD ASSETS |||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

window.addEventListener('load', (event) => {
    document.body.style.backgroundImage = "url('background-grave.png')";
});

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||| FIRESTORE ||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB3F4Uowi0vH7jMLDfp1QO1TXtgL-_QLgg",
    authDomain: "the-app-daily.firebaseapp.com",
    projectId: "the-app-daily",
    storageBucket: "the-app-daily.appspot.com",
    messagingSenderId: "780060560819",
    appId: "1:780060560819:web:db7c74e3c112e8c7af0fc6",
    measurementId: "G-MQZX83YBK2"
});
const db = firebaseApp.firestore();

const saveScore = () => {
    currentScore = document.getElementById("score").innerHTML;
    db.collection("leaderboard")
    .doc(user)
    .set({ 
        score: Number(currentScore)
    });
}

let obj = {};

const getHS = () => {
    currentScore = document.getElementById("score").innerHTML;
    db.collection("leaderboard").doc(user)
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

const loadScores = () => {

    db.collection("leaderboard")
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

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||| INDEXEDDB ||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// User Variable
let user = "";

const indexedDB =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

const request = indexedDB.open("UsernameData", 1);

request.onerror = function (event) {
    console.error("An error occurred with IndexedDB");
    console.error(event);
}

request.onupgradeneeded = function () {
    const db = request.result;
    const store = db.createObjectStore("username", { keyPath: "id" });
    store.createIndex("un", ["unstring"], {unique: true});
}

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
            var welcome = document.getElementById("welcome-content");
            var home = document.getElementById("home-content");
            welcome.style.display = "flex";
            home.style.display = "none";
        } else {
            console.log("Username found!");
            user = idQuery.result.unstring;
            document.getElementById("local-username").innerHTML = user;
            var welcome = document.getElementById("welcome-content");
            var home = document.getElementById("home-content");
            welcome.style.display = "none";
            home.style.display = "flex";
        }
    }
}

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||| MENUS ||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function remember () {
    const db = request.result;
    const transaction = db.transaction("username", "readwrite");
    const store = transaction.objectStore("username");

    const unval = document.getElementById("username-input").value;

    store.put({ id: 1, unstring: unval });
    user = unval;
    document.getElementById("local-username").innerHTML = user;

    var welcome = document.getElementById("welcome-content");
    var home = document.getElementById("home-content");
    welcome.style.display = "none";
    home.style.display = "flex";
}

function leaderboardLoad() {
    var home = document.getElementById("home-content");
    var backgroundCorn = document.getElementById("bg-container");
    var backgroundSkull = document.getElementById("bg-scroll-skully");
    var leaderboard = document.getElementById("leaderboard-content");
    home.style.display = "none";
    backgroundCorn.style.display = "none";
    backgroundSkull.style.display = "block";
    leaderboard.style.display = "flex";

    var backgroundSkulll = document.getElementById("bg-container-skull");
    backgroundSkulll.style.display = "block";

    loadScores();
}

function back() {
    var home = document.getElementById("home-content");
    var backgroundCorn = document.getElementById("bg-container");
    var backgroundSkull = document.getElementById("bg-scroll-skully");
    var leaderboard = document.getElementById("leaderboard-content");
    home.style.display = "flex";
    backgroundCorn.style.display = "block";
    backgroundSkull.style.display = "none";
    leaderboard.style.display = "none";

    var backgroundSkulll = document.getElementById("bg-container-skull");
    backgroundSkulll.style.display = "none";

    document.getElementById("scores-container").innerHTML = "";
}

function play () {
    graveGuess();
}

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||| GAMES ||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function fallingCorn() {
    var home = document.getElementById("home-content");
    var gameAssets = document.getElementById("falling-corn-game");
    var background = document.getElementById("bg-container");
    var backgroundSkull = document.getElementById("bg-container-skull");
    var leaderboard = document.getElementById("leaderboard-content");
    home.style.display = "none";
    gameAssets.style.display = "block";
    background.style.display = "none";
    backgroundSkull.style.display = "none";
    leaderboard.style.display = "none";

    const canvas = document.getElementById("halloween-game-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight - 20;

    // BACKGROUND CHOOSE
    dice = rng(1,10);
    console.log(dice);
    if(dice <= 2){
        document.body.style.backgroundImage = "url('background.png')";
    } else {
        document.body.style.backgroundImage = "url('background-original.png')";
    }

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
        menu.style.display = "block";

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
        var welcome = document.getElementById("welcome-content");
        var home = document.getElementById("home-content");
        var gameAssets = document.getElementById("falling-corn-game");
        var background = document.getElementById("bg-container");
        var menu = document.getElementById("game-over-screen");
        welcome.style.display = "none";
        home.style.display = "flex";
        gameAssets.style.display = "none";
        background.style.display = "block";
        menu.style.display = "none";
        document.getElementById("score").innerHTML = "0";
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
    let score = 0;
    let iterations = 2;
    let completion = 0;
    let timeOffset = "1500";
    let upTime = "700";
    let list = [];
    let tappable = false;
    let taps = 0;

    var home = document.getElementById("home-content");
    var gameAssets = document.getElementById("grave-guess-game");
    var background = document.getElementById("bg-container");
    var backgroundSkull = document.getElementById("bg-container-skull");
    var leaderboard = document.getElementById("leaderboard-content");

    home.style.display = "none";
    gameAssets.style.display = "block";
    background.style.display = "none";
    backgroundSkull.style.display = "none";
    leaderboard.style.display = "none";

    document.getElementById("grave-guess-score").innerHTML = "0";
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
                if(taps == list.length) {
                    console.log("Score Up!");
                    score++;
                    document.getElementById("grave-guess-score").innerHTML = score;
                    iterations++;
                    round();
                }
            } else {
                gameover();
                console.log("Game Over!");
            }
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
        menu.style.display = "block";

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
        var welcome = document.getElementById("welcome-content");
        var home = document.getElementById("home-content");
        var gameAssets = document.getElementById("grave-guess-game");
        var background = document.getElementById("bg-container");
        var menu = document.getElementById("game-over-screen-grave-guess");
        welcome.style.display = "none";
        home.style.display = "flex";
        gameAssets.style.display = "none";
        background.style.display = "block";
        menu.style.display = "none";
        document.getElementById("grave-guess-score").innerHTML = "0";
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