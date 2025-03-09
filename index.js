let homeScore = 0
let guestScore = 0
let homeScoreLabel = document.getElementById("homeScore")
let guestScoreLabel = document.getElementById("guestScore")
function isMax() {
  if (homeScore >= 997 || guestScore >= 997) {
    reset()
  }
}
function plusOne() {
  const clickedElement = event.target;
  const parentElement = clickedElement.parentNode;
  isMax()
  if (parentElement.id == "home") {
        homeScore++
        homeScoreLabel.textContent = homeScore

  } else {
        guestScore++
        guestScoreLabel.textContent = guestScore
  }
}

function plusTwo() {
    const clickedElement = event.target;
    const parentElement = clickedElement.parentNode;
    isMax()
    if (parentElement.id == "home") {
            homeScore += 2
            homeScoreLabel.textContent = homeScore

    } else {
            guestScore += 2
            guestScoreLabel.textContent = guestScore
    }

}

function plusThree() {
    const clickedElement = event.target;
    const parentElement = clickedElement.parentNode;
    isMax()
    if (parentElement.id == "home") {
            homeScore += 3
            homeScoreLabel.textContent = homeScore

    } else {
            guestScore += 3
            guestScoreLabel.textContent = guestScore
    }
}

function reset() {
    guestScore = 0
    homeScore = 0
    guestScoreLabel.textContent = guestScore
    homeScoreLabel.textContent = homeScore
}
