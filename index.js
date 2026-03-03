let homeScore = 0;
let guestScore = 0;


let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

function add1_h(){
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
  highlightLeader();
}

function add2_h(){
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
  highlightLeader();
}

function add3_h(){
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
  highlightLeader();
}

function minus1_h(){
  homeScore -= 1;
  if(homeScore < 0){homeScore = 0};
  homeScoreEl.textContent = homeScore;
  highlightLeader();
}

function add1_g(){
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
  highlightLeader();
}

function add2_g(){
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
  highlightLeader();
}

function add3_g(){
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
  highlightLeader();
}

function minus1_g(){
  guestScore -= 1;
  if(guestScore < 0){guestScore = 0};
  guestScoreEl.textContent = guestScore;
  highlightLeader();
}

function reset(){
  homeScore = 0;
  guestScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = guestScore;
  highlightLeader();
}

function highlightLeader() {
  let homeBox = homeScoreEl.parentElement;
  let guestBox = guestScoreEl.parentElement;

  // 先清除发光
  homeBox.style.boxShadow = "";
  guestBox.style.boxShadow = "";

  if (homeScore > guestScore) {
    homeBox.style.boxShadow = "0 0 25px rgba(249,79,109,0.7)";
  } else if (guestScore > homeScore) {
    guestBox.style.boxShadow = "0 0 25px rgba(249,79,109,0.7)";
  }
}