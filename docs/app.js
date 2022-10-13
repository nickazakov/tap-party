// #region MAINTENANCE

let admin_HTMLSnippet = `
    <div id="admin-panel">
        <h1 id="admin-title">Admin Dashboard</h1>
        <h2 id="time-left-month">-</h2>

        <div id="button-dashboard">
            <button id="admin-button1" class="scale-transition" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)" onclick="adminLoadScores()">Load Scores</button>
            <button id="admin-button2" class="scale-transition" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)" onclick="adminCalcGlobal()">Calculate</button>
            <button id="admin-button3" class="scale-transition" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)" onclick="adminClearTable()">Clear List</button>
            <button id="admin-button4" class="scale-transition" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)" onclick="adminWipeMonthly()">End Event</button>

            <button id="admin-button5" class="scale-transition" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)" onclick="adminAddNewBanner()">Add Banner</button>
            <button id="admin-button6" class="scale-transition" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)" onclick="adminAddGameScore()">Add Game</button>
            <button id="admin-button7" class="scale-transition" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)" onclick="adminDeleteUser()">Remove User</button>
        </div>

        <input type="text" placeholder="String" id="admin-game-lb-input">

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
        <div id="abg22-halloween-cat"></div>
    </div>

    <content id="home-ui">
        <div id="ui">
            <div id="ui-top">

                <div id="event-info" class="ds-light">
                    <div id="event-title" class="scale-transition" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)" onclick="loadPage('leaderboard')">
                        <h1 id="event-title-string"></h1>
                    </div>
                    <div id="lootbox-button" class="scale-transition" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)" onclick="loadPage('lootbox')">
                        <div class="lootbox-image">
                            <p id="unopened-count">-</p>
                        </div>
                    </div>
                </div>

            </div>
            <div id="secret-hitbox" onclick="unlockSecret()"></div>
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

            <div id="lootbox-self-button" onclick="openLootbox()"></div>
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

// ADD EVENT NAME HERE
// PREVIOUS NAMES:
// HALLOWEEN 22 - SPOOKSTOBER
let currentEventTitle = "Spookstober"

// EDIT CURRENT LOOTBOX
let currentLootbox = "halloween22";

// ADD NEW LOCKED BANNERS HERE
let bannersUnlocked = [
    true,  // 0 : UNLOCKED, DEFAULT
    false, // 1 : LOCKED, HALLOWEEN22 1
    false, // 2 : LOCKED, HALLOWEEN22 2
    false, // 3 : LOCKED, HALLOWEEN22 3
    false, // 4 : LOCKED, CORNFALL
    false, // 5: LOCKED, GRAVE GUESS
    false  // 6: LOCKED, SECRET CAT BANNER
];

// ADD NEW BANNERS HERE
// CREATE CSS ID & CLASS - "equip-icon-#" & "banner-#-preview"
// CREATE ONCLICK ATTRIBUTE - equipBanner(#)
let leaderboard_HTMLSnippet = `
    <content id="leaderboard-content">
        <div id="abg22-halloween">
            <div id="abg22-halloween-bone"></div>
        </div>

        <h1>Leaderboard</h1>
        <div id="time-left-event-indicator">
            <div id="time-left-event">0d 0h 0m 0s</div>
            <div id="top-bar-lb">
                <button id="switch-lb" class="scale-transition ds-even-heavy" onclick="switchlb()" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)">Cornfall</button>
                <button id="faq-lb" class="scale-transition material-symbols-rounded ds-even-heavy" onclick="faq('open')" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)">question_mark</button>
                <button id="reload-lb" class="scale-transition material-symbols-rounded ds-even-heavy" onclick="refreshlb()" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)">sync</button>
            </div>
        </div>

        <div id="board">
            <div id="scores-container">
            </div>
        </div>
        <button id="purple-button" class="purple-button ds-heavy" onclick="loadPage('home')" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)">Back</button>

        <div id="absolute-faq">
            <div id="faq-popup">
                <h1>Event Leaderboard</h1>

                <h2 id="faq-description">
                Collect lootboxes by scoring on the monthly leaderboard! <br>
                <br>
                Your highscore in all minigames adds up to your total monthly score. <br>
            </h2>

            <h2 id="faq-alert">
                Gold, Silver and Bronze competitors receive extra rewards.
            </h2>

                <image id="faq-image" src="assets/general/faq.png">
                <h2 id="faq-description">
                    Everyone else gets only 1x lootbox.
                </h2>

                <button id="sure-button" class="orange-button ds-heavy" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)" onclick="faq('close')">Sure!</button>
            </div>
        </div>

        <div id="absolute-profile">
            <div id="profile-page">
                <div id="ui">
                    <div id="ui-top-profile">
                        <div id="profile-top-bar">
                            <h3 id="change-banner-hint">Tap to change your banner!</h3>
                            <div id="profile-user-preview" class="scale-transition" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)" onclick="bannerLibrary()">
                                <h3 id="profile-username">-</h3>
                            </div>
                        </div>
                    </div>
                    <div id="ui-bottom-profile">
                    <h3>Statistics</h3>
                    <div id="stats">

                        <div id="stat-card">
                            <div id="stat-panel">
                                <h4 id="stat-name">Total Score: </h4>
                                <h4 id="totalScore" class="stat-score">0</h4>
                            </div>
                            <div id="stat-panel">
                                <h4 id="stat-name">Games Played: </h4>
                                <h4 id="gamesPlayed" class="stat-score">0</h4>
                            </div>
                            <div id="stat-panel">
                                <h4 id="stat-name">Banners Collected: </h4>
                                <h4 id="bannersCollected" class="stat-score">0</h4>
                            </div>
                            <div id="stat-panel">
                                <h4 id="stat-name">Lootboxes Opened: </h4>
                                <h4 id="lootboxesOpened" class="stat-score">0</h4>
                            </div>
                        </div>

                        <div id="stat-card2">
                        </div>

                        <div id="leaderboard-fix"></div>

                    </div>
                        <button id="back-button" class="purple-button ds-heavy" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)" onclick="loadPage('leaderboard')">Back</button>
                    </div>
                </div>
            </div>

            <div id="banner-library-popup">
                <h1>Banner Library</h1>
                <p>Get more banners from lootboxes!</p>

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

                    <div id="banner-card-option" class="banner-5-preview" onclick="equipBanner(5)">
                        <div id="banner-equip-indicator">
                            <span id="equip-icon-5" class="material-symbols-rounded">circle</span>
                        </div>
                        <div id="banner-unlock-hint">Reach 10 in Grave Guess</div>
                    </div>

                    <div id="banner-card-option" class="banner-6-preview" onclick="equipBanner(6)">
                        <div id="banner-equip-indicator">
                            <span id="equip-icon-6" class="material-symbols-rounded">circle</span>
                        </div>
                        <div id="banner-unlock-hint">Secret</div>
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
                <button id="orange-button" class="orange-button ds-heavy" ontouchstart="touchStart(this.id)" ontouchend="touchEnd(this.id)" onclick="saveBanner()">Save</button>
            </div>
        </div>
    </content>
`;

// ADD NEW GAME LEADERBOARDS HERE
let categoriesPublic = [
    "Monthly",
    "Cornfall",
    "Grave Guess",
    "Potioncraft"
];

// ADD NEW FIRESTORE COLLECTIONS FOR THE LEADERBOARDS HERE
let categories = [
    "globallb",
    "cornfalllb",
    "graveguesslb",
    "potioncraftlb"
];

// CHENGE GAME AVAILABILITY HERE
// 0 - CORNFALL
// 1 - GRAVE GUESS
// 2 - POTIONCRAFT
// 3 - CANDY SKEWER
let gameList = [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1];


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

// #region Time System
// VARIABLES RELATED TO TIME
let game = "";

let admin = false;

let lootboxCount;

// FUNCTION TO UPDATE ELEMENTS RELATED TO THE TIME
updateTime();

// UPDATE WHEN ADDING A NEW GAME!
function updateTime() {

    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

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

    if(admin) {
        document.getElementById("time-left-month").innerHTML = days + " : " +hours+ " : " +minutes + " : " +Math.ceil(seconds);
    }

    if(document.getElementById("time-left-event")) {
        document.getElementById("time-left-event").innerHTML = days + "d " +hours+ "h " +minutes + "m " +Math.ceil(seconds) + "s";
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

    if(document.getElementById("upcoming-game")) {
        document.getElementById("upcoming-game").innerHTML = temp;
    }

    // SELF UPDATE EVERY 1S
    setTimeout(updateTime, "1000");

    // SET GAME RELATIVE TO HOUR
    // EDIT TO MATCH PLAY("GAME") & GAMELIST VARIABLE
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

// FUNCTION TO PLAY THE CURRENT GAME
// EDIT TO ADD NEW GAMES
function play () {
    getBanners();
    incrementGamesPlayed();
    switch(game) {
        case "cornfall":
            cornfall();
            break;
        case "graveguess":
            graveGuess();
            break;
    }
}

// FUNCTION TO SWITCH BACKGROUND
// ADD NEW GAME BACKGROUNDS HERE
function backdrop(n){
    switch(n){
        case 0:
            console.log("Set Cornfall back!");

            // CHANCE FOR A DIFFERENT WALLPAPER
            if(rng(1,10) <= 3) {
                document.body.style.backgroundImage = "url('assets/cornfall/background-special.png')";
            } else {
                document.body.style.backgroundImage = "url('assets/cornfall/background-corn.png')";
            }
            break;
        case 1:
            console.log("Set Grave Guess back!");

            // SET WALLPAPER
            document.body.style.backgroundImage = "url('assets/graveguess/background-grave.png')";
            break;
    }
}

// GLOBAL GOTO FUNCTION
// MAKE REFERENCES TO GAME HTML SNIPPETS HERE
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
            document.getElementById("event-title-string").innerHTML = currentEventTitle;
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

        // ADD NEW GAMES HERE
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
            getBanners();
            if(bannersUnlocked[6] == false) {
                console.log("Started Secret Timer!");
                setTimeout(secret, 60000);
            } else {
                console.log("Secret Banner already owned!");
            }

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

        // ADD BANNER EQUIP ICON HERE
        case "profile":
            view = "profile"
            document.getElementById("absolute-profile").style.display = "flex";

            profileLoad();

            id = "equip-icon-"
            newId = id+bannerEquipped
            document.getElementById(newId).style.display = "block";

            for(i = 0; i < bannersUnlocked.length; i++){
                if(!bannersUnlocked[i]) {
                    className = "banner-"+i+"-preview";
                    document.getElementsByClassName(className)[0].style.filter = "brightness(25%)";
                }
            }

            newClassName = "banner-"+bannerEquipped+"-preview";
            document.getElementById("profile-user-preview").classList.add(newClassName);

            document.getElementById("profile-username").innerHTML = user;

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

            break;
    }
}

// ADD SWITCH CASES FOR DIFFERENT EVENT LOOTBOXES HERE
function lootboxLoot(event) {
    switch(event) {
        case "halloween22":
            value = rng(1,100);

            if(value <= 15) {
                document.getElementById("lootbox-reward").style.backgroundImage = "url(assets/general/banners/banner-halloween22-3.gif)"
                bannersUnlocked[3] = true;
            } else if (value <= 40) {
                document.getElementById("lootbox-reward").style.backgroundImage = "url(assets/general/banners/banner-halloween22-2.gif)"
                bannersUnlocked[2] = true;
            } else {
                document.getElementById("lootbox-reward").style.backgroundImage = "url(assets/general/banners/banner-halloween22-1.png)"
                bannersUnlocked[1] = true;
            }
            break;
    }
}

// ADD GAME CODE HERE
// #region GAMES CODE
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

        if(score >= 10) {
            bannersUnlocked[5] = true;
            setBanners();
            console.log("Unlocked Grave Guess Banner!");
        }

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

function secret() {
    if(view == "home") {
        console.log("Enabled Cat Secret!");
        document.getElementById("secret-hitbox").style.display = "block";
        document.getElementById("abg22-halloween-cat").style.display = "block";
        setTimeout(secretFadeIn, 100);
        function secretFadeIn() {
            document.getElementById("abg22-halloween-cat").style.opacity = "1";
        }
    } else {
        console.log("Not in home!");
    }
}

function unlockSecret() {
    bannersUnlocked[6] = true;
    setBanners();
    console.log("Unlocked Secret Cat Banner!");
}

setTimeout(secret, 60000);

// #endregion

// #region GLOBAL VARIABLES
let view = "welcome";
// #endregion

// #region GESTURE BLOCK

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

// #region FIREBASE FIRESTORE

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

let bannerEquipped = 0;

// CURRENT CATEGORY PRIVATE ID
let category = "globallb";

// CURRENT CATEGORY INDEX
let categoryIndex = 0;

// SET/UPDATE SCORE
const saveScore = () => {

    currentScore = document.getElementById("score").innerHTML;
    db.collection(category)
    .doc(user)
    .update({
        score: Number(currentScore),
        banner: bannerEquipped
    });

    db.collection("_profiles").doc(user)
    .get()
    .then((doc) => {

        let highscoresArray = doc.data()._gameHighscores;

        highscoresArray[categoryIndex - 1] = Number(currentScore);

        db.collection("_profiles").doc(user)
        .update({
            _gameHighscores: highscoresArray
        });
    })

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

    db.collection("globallb").doc(user)
    .set({
        score: 0,
        banner: bannerEquipped
    });

    let blankHighscores = [];
    for(i = 1; i < categories.length; i++) {
        blankHighscores.push(0);
    }

    for(i = 1; i < categories.length; i++) {
        db.collection("_profiles").doc(user)
        .set({
            _bannersCollectedStat: 0,
            _gamesPlayedStat: 0,
            _lootboxStat: 0,
            _totalScoreStat: 0,
            _gameHighscores: blankHighscores
        });
    }
}

let totalScore = 0;

// PERFORM CHECK TO SEE IF UPDATING SCORE IS NEEDED
const getHS = () => {
    currentScore = document.getElementById("score").innerHTML;

    db.collection("_profiles").doc(user)
    .get()
    .then((doc) => {
        let currentTotalScore = Number(doc.data()._totalScoreStat);
        let newTotalScore = currentTotalScore +  Number(currentScore);
        db.collection("_profiles").doc(user)
        .update({
            _totalScoreStat: newTotalScore
        });
    })

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
    db.collection("_unlocks").doc(user)
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

    db.collection("_unlocks").doc(user)
    .get()
    .then((doc) => {
        if (doc.exists) {
            db.collection("_unlocks")
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

            let bannerCount = Number(bannersUnlocked.filter(value => value === true).length) - 1;
            console.log(bannerCount);
            db.collection("_profiles").doc(user)
            .update({
                _bannersCollectedStat: bannerCount
            });

        } else {
            db.collection("_unlocks")
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
        db.collection("_unlocks").doc(user)
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
        db.collection("_unlocks")
        .doc(user)
        .update({
            lootboxes: lootboxCount
        });
    }
}

// ADMIN OPTIONS
let userArray = [];
let calc = false;

const adminLoadScores = () => {
    adminClearTable();
    var table = document.getElementById("usertable");
    userArray = [];

    db.collection("globallb")
    .orderBy("score", "desc")
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
    if(calc) {
        return;
    }

    var table = document.getElementById("usertable");
    for(let i = 1; i <= userArray.length; i++) {
        let globalScore = 0;
        console.log("----");
        for(let y = 1; y < categories.length; y++) {
            globalScore = globalScore + Number(table.rows[i].cells[y].innerHTML);
            console.log(globalScore + " | i:" + y);
        }

        table.rows[i].insertCell(categories.length).innerHTML = globalScore;
        switch(i){
            case 1:
                temp = table.rows[i].insertCell(categories.length + 1);
                temp.innerHTML = 3;
                temp.setAttribute("contenteditable", "true");
                break;
            case 2:
                temp = table.rows[i].insertCell(categories.length + 1);
                temp.innerHTML = 2;
                temp.setAttribute("contenteditable", "true");
                break;
            case 3:
                temp = table.rows[i].insertCell(categories.length + 1);
                temp.innerHTML = 2;
                temp.setAttribute("contenteditable", "true");
                break;
            default:
                temp = table.rows[i].insertCell(categories.length + 1);
                temp.innerHTML = 1;
                temp.setAttribute("contenteditable", "true");
                break;
        }
    }

    calc = true;
}

const adminClearTable = () => {
    calc = false;
    var table = document.getElementById("usertable");
    table.innerHTML = table.rows[0].innerHTML;
}

const adminWipeMonthly = () => {
    var table = document.getElementById("usertable");
    console.log("Wiping monthly scores... ");
    for(let i = 0; i < userArray.length; i++) {
        let lb = 0;
        for(let c = 0; c < categories.length; c++) {
            db.collection(categories[c])
            .doc(userArray[i])
            .update({
                score: 0
            });
        }

        lb = Number(table.rows[i+1].cells[categories.length+1].innerHTML)

        db.collection("_unlocks").doc(userArray[i])
        .get()
        .then((doc) => {
            oldLb = doc.data().lootboxes;
            newLb = oldLb + lb;
            db.collection("_unlocks")
            .doc(userArray[i])
            .update({
                lootboxes: newLb
            });
        })
    }

    console.log("DB || CLEARED MONTHLY!");
}

const adminAddNewBanner = () => {
    for(let i = 0; i < userArray.length; i++) {
        let bannersArray = [];
        let statement = false;

        db.collection("_unlocks").doc(userArray[i])
        .get()
        .then((doc) => {
            if (doc.exists) {
                console.log("Unlocks Document exists!");

                bannersArray = doc.data().banners;
                bannersArray.push(statement);

                db.collection("_unlocks")
                .doc(userArray[i])
                .update({
                    banners: bannersArray
                })

            } else {
                console.log("No Unlocks Document!");
            }
        })
    }
}

const adminAddGameScore = () => {
    let newGame = document.getElementById("admin-game-lb-input").value;
    for(let i = 0; i < userArray.length; i++) {

        let bannerE = 0;
        db.collection("globallb").doc(userArray[i])
        .get()
        .then((doc) => {
            if (doc.exists) {
                console.log("Document exists!");
                bannerE = doc.data().banner;

                db.collection(newGame).doc(userArray[i])
                .set({
                    score: 0,
                    banner: bannerE
                });

                db.collection("_profiles").doc(user)
                .get()
                .then((doc) => {
            
                    let highscoresArray = doc.data()._gameHighscores;
                    highscoresArray.push(0);
            
                    db.collection("_profiles").doc(user)
                    .update({
                        _gameHighscores: highscoresArray
                    });
                })

            } else {
                console.log("Document doesn't exist!");
            }
        })
    }
}

const adminDeleteUser = () => {
    let userTag = document.getElementById("admin-game-lb-input").value;

    db.collection("_profiles").doc(userTag).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });

    db.collection("_unlocks").doc(userTag).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });

    for(let i = 0; i < categories.length; i++) {
        db.collection(categories[i]).doc(userTag).delete();
    }
}

const profileLoad = () => {
    db.collection("_profiles").doc(user)
    .get()
    .then((doc) => {
        if (doc.exists) {
            console.log("Profile exists!");

            // LOAD DEFAULT STATS
            totalScoreStat = doc.data()._totalScoreStat;
            gamesPlayedStat = doc.data()._gamesPlayedStat;
            bannersCollectedStat = doc.data()._bannersCollectedStat;
            lootboxStat = doc.data()._lootboxStat;

            document.getElementById("totalScore").innerHTML = totalScoreStat;
            document.getElementById("gamesPlayed").innerHTML = gamesPlayedStat;
            document.getElementById("bannersCollected").innerHTML = bannersCollectedStat;
            document.getElementById("lootboxesOpened").innerHTML = lootboxStat;

            // LOAD HIGH SCORES
            let par = document.getElementById("stat-card2");
            par.innerHTML = "";

            for(let i = 1; i < categories.length; i++) {

                statPanel = document.createElement('div');
                statPanel.id = "stat-panel";

                statName = document.createElement('h4');
                statName.id = "stat-name";
                statName.innerHTML = categoriesPublic[i] + ":";
                statPanel.appendChild(statName);
    
                statScore = document.createElement('h4');
                statScore.classList.add("stat-score");

                statScore.innerHTML = doc.get("_gameHighscores")[i-1];

                statPanel.appendChild(statScore);
    
                par.appendChild(statPanel);
            }

        } else {
            console.log("Profile doesn't exist!");
        }
    })
}

const incrementGamesPlayed = () => {
    db.collection("_profiles").doc(user)
    .get()
    .then((doc) => {
        let currentGamesPlayed = Number(doc.data()._gamesPlayedStat);
        let newGamesPlayed = currentGamesPlayed +  1;
        db.collection("_profiles").doc(user)
        .update({
            _gamesPlayedStat: newGamesPlayed
        });
    })
}

const incrementLootboxesOpened = () => {
    db.collection("_profiles").doc(user)
    .get()
    .then((doc) => {
        let currentLootboxesOpened = Number(doc.data()._lootboxStat);
        let newLootboxesOpened = currentLootboxesOpened +  1;
        db.collection("_profiles").doc(user)
        .update({
            _lootboxStat: newLootboxesOpened
        });
    })
}
 
// #endregion

// #region INDEXEDDB

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

// #region NAVIGATION

function faq(state) {
    if(state == "open") {
        document.getElementById("absolute-faq").style.display = "flex";

        // CUSTOM TRANSITION
        setTimeout(faqFadeIn, 100);
        function faqFadeIn() {
            document.getElementById("absolute-faq").style.opacity = "1";
        }
    } else if (state == "close") {
        document.getElementById("absolute-faq").style.opacity = "0";

        // CUSTOM TRANSITION
        setTimeout(faqFadeOut, 100);
        function faqFadeOut() {
            document.getElementById("absolute-faq").style.display = "none";
        }
    }
}

function openLootbox() {
    // FIRESTORE CHECKS

    getBanners();

    incrementLootboxesOpened();

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

        lootboxLoot(currentLootbox);

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

function leaderBoardBack() {
    console.log("hh");
    if(document.getElementById("abg22-halloween-bone")){
        document.getElementById("abg22-halloween-bone").style.opacity = "0";
    }

    if(document.getElementById("abg22-halloween-bone")){
        setTimeout(leaderBoardBackFollowUp, 2000);
    }

    function leaderBoardBackFollowUp() {
        if(document.getElementById("abg22-halloween-bone")){
            document.getElementById("abg22-halloween-bone").style.opacity = "1";
            setTimeout(leaderBoardBack, 2000);
        }
    }
}

function equipBanner(b) {
    if(bannersUnlocked[b]) {
        let id = "equip-icon-";
            for(i = 0; i < bannersUnlocked.length; i++) {
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

let newClassName;

function saveBanner() {

    setBanners();

    document.getElementById("profile-user-preview").classList.remove(newClassName);

    newClassName = null;

    document.getElementById("banner-library-popup").style.opacity = "0";
    document.getElementById("profile-page").style.display = "block";

    setTimeout(saveBannerFollowUp, 500);

    function saveBannerFollowUp() {
        newClassName = "banner-"+bannerEquipped+"-preview";
        document.getElementById("profile-user-preview").classList.add(newClassName);

        document.getElementById("banner-library-popup").style.display = "none";
        document.getElementById("profile-page").style.opacity = "1";
    }
}

function bannerLibrary() {
    document.getElementById("banner-library-popup").style.display = "block";
    document.getElementById("profile-page").style.opacity = "0";

    setTimeout(bannerLibraryFollowUp, 500);

    function bannerLibraryFollowUp() {
        document.getElementById("banner-library-popup").style.opacity = "1";
        document.getElementById("profile-page").style.display = "none";
    }
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

    // ADMIN PASSCODE
    if(user == "SedemOsem78Admin") {
        admin = true;
        goTo("admin-dash");
        return;
    }

    goTo("home");
    existingUserCheck();
    getBanners();
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

// #endregion

// #region UTILITIES
function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// #endregion