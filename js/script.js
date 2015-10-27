var deck = [{ //1
    cardnumber: "",
    term: "Term 1",
    definition: "def1 lachesism n. the desire to be struck by disaster—to survive a plane crash, to lose everything in a fire, to plunge over a waterfall—which would put a kink in the smooth arc of your life, and forge it into something hardened and flexible and sharp, not just a stiff prefabricated beam that barely covers the gap between one end of your life and the other.",
    correct: false
  }, { //2
    cardnumber: "",
    term: "Term 2",
    definition: "def 2 n. the tendency to give up trying to talk about an experience because people are unable to relate to it—whether through envy or pity or simple foreignness—which allows it to drift away from the rest of your life story, until the memory itself feels out of place, almost mythical, wandering restlessly in the fog, no longer even looking for a place to land.",
    correct: false
  }, { //3
    cardnumber: "",
    term: "Term 3",
    definition: "def 3 n. the habit of forgetting how important someone is to you until you see them again in person, making you wish your day would begin with a “previously on” recap of your life’s various plot arcs, and end with “to be continued…” after those will-they-won’t-they cliffhanger episodes that air just before the show goes back into months of repeats.",
    correct: false
  }, { //4
    cardnumber: "",
    term: "Term 4",
    definition: "def 4 n. fear that your connections with people are ultimately shallow, that although your relationships feel congenial at the time, an audit of your life would produce an emotional safety deposit box of low-interest holdings and uninvested windfall profits, which will indicate you were never really at risk of joy, sacrifice or loss.",
    correct: false
  }, { //5
    cardnumber: "",
    term: "Term 5",
    definition: "def 5 n. the realization that each random passerby is living a life as vivid and complex as your own—populated with their own ambitions, friends, routines, worries and inherited craziness—an epic story that continues invisibly around you like an anthill sprawling deep underground, with elaborate passageways to thousands of other lives that you’ll never know existed, in which you might appear only once, as an extra sipping coffee in the background, as a blur of traffic passing on the highway, as a lighted window at dusk.",
    correct: false
  }, { //6
    cardnumber: "",
    term: "Term 6",
    definition: "def 6 n. the frustration of photographing something amazing when thousands of identical photos already exist—the same sunset, the same waterfall, the same curve of a hip, the same closeup of an eye—which can turn a unique subject into something hollow and pulpy and cheap, like a mass-produced piece of furniture you happen to have assembled yourself.",
    correct: false
  }, { //7
    cardnumber: "",
    term: "Term 7",
    definition: "def 7 n. the strange wistfulness of used bookstores, which are somehow infused with the passage of time—filled with thousands of old books you’ll never have time to read, each of which is itself locked in its own era, bound and dated and papered over like an old room the author abandoned years ago, a hidden annex littered with thoughts left just as they were on the day they were captured.",
    correct: false
  }, { //8
    cardnumber: "",
    term: "Term 8",
    definition: "def 8 n. the desire to care less about things—to loosen your grip on your life, to stop glancing behind you every few steps, afraid that someone will snatch it from you before you reach the end zone—rather to hold your life loosely and playfully, like a volleyball, keeping it in the air, with only quick fleeting interventions, bouncing freely in the hands of trusted friends, always in play.",
    correct: false
  }, { //9
    cardnumber: "",
    term: "Term 9",
    definition: "def9 lachesism n. the desire to be struck by disaster—to survive a plane crash, to lose everything in a fire, to plunge over a waterfall—which would put a kink in the smooth arc of your life, and forge it into something hardened and flexible and sharp, not just a stiff prefabricated beam that barely covers the gap between one end of your life and the other.",
    correct: false
  }, { //10
    cardnumber: "",
    term: "Term 10",
    definition: "def 10 n. the tendency to give up trying to talk about an experience because people are unable to relate to it—whether through envy or pity or simple foreignness—which allows it to drift away from the rest of your life story, until the memory itself feels out of place, almost mythical, wandering restlessly in the fog, no longer even looking for a place to land.",
    correct: false
  }, { //11
    cardnumber: "",
    term: "Term 11",
    definition: "def 11 n. the habit of forgetting how important someone is to you until you see them again in person, making you wish your day would begin with a “previously on” recap of your life’s various plot arcs, and end with “to be continued…” after those will-they-won’t-they cliffhanger episodes that air just before the show goes back into months of repeats.",
    correct: false
  }, { //12
    cardnumber: "",
    term: "Term 12",
    definition: "def 12 n. fear that your connections with people are ultimately shallow, that although your relationships feel congenial at the time, an audit of your life would produce an emotional safety deposit box of low-interest holdings and uninvested windfall profits, which will indicate you were never really at risk of joy, sacrifice or loss.",
    correct: false
  }, { //13
    cardnumber: "",
    term: "Term 13",
    definition: "def 13 n. the realization that each random passerby is living a life as vivid and complex as your own—populated with their own ambitions, friends, routines, worries and inherited craziness—an epic story that continues invisibly around you like an anthill sprawling deep underground, with elaborate passageways to thousands of other lives that you’ll never know existed, in which you might appear only once, as an extra sipping coffee in the background, as a blur of traffic passing on the highway, as a lighted window at dusk.",
    correct: false
  }, { //14
    cardnumber: "",
    term: "Term 14",
    definition: "def 14 n. the frustration of photographing something amazing when thousands of identical photos already exist—the same sunset, the same waterfall, the same curve of a hip, the same closeup of an eye—which can turn a unique subject into something hollow and pulpy and cheap, like a mass-produced piece of furniture you happen to have assembled yourself.",
    correct: false
  }, { //15
    cardnumber: "",
    term: "Term 15",
    definition: "def 15 n. the strange wistfulness of used bookstores, which are somehow infused with the passage of time—filled with thousands of old books you’ll never have time to read, each of which is itself locked in its own era, bound and dated and papered over like an old room the author abandoned years ago, a hidden annex littered with thoughts left just as they were on the day they were captured.",
    correct: false
  }, { //16
    cardnumber: "",
    term: "Term 16",
    definition: "def 16 n. the desire to care less about things—to loosen your grip on your life, to stop glancing behind you every few steps, afraid that someone will snatch it from you before you reach the end zone—rather to hold your life loosely and playfully, like a volleyball, keeping it in the air, with only quick fleeting interventions, bouncing freely in the hands of trusted friends, always in play.",
    correct: false
  }
];

var numberTheDeck = function() {
  for (var i = 0; i < deck.length; i++) { // IMPROVE create higher order function that loops that can be called for this
    deck[i].cardnumber = (i + 1);
  }
};

//on page load generate first 4 cards of deck
//place them in currentCard, next1-next3
var generateStart = function() {
  var startPositions = cardPositions.slice(3, 7);
  for (var i = 0; i < startPositions.length; i++) {
    generateCard(i, startPositions[i]);
  }
};

var generateCard = function(deckIndexVal, destination) {
  var cardnumber = deck[deckIndexVal].cardnumber;
  var termToPlace = deck[deckIndexVal].term; // stores term from deck object
  var defToPlace = deck[deckIndexVal].definition; // stores definition from deck object
  $(destination).append("<div class='innerCard raised'><div class='cardFace cardFront'><h2 class='term'></h2></div><div class='cardFace cardBack'><p class='definition'></p></div></div>");
  $(destination + " .term").text(termToPlace); // places stored term into 'h2 .term'
  $(destination + " .definition").text(defToPlace); // places stored def into 'p .definition'
  $(destination + " .innerCard").attr("name", cardnumber);
};

var cardPositions = [".back3", ".back2", ".back1", ".currentCard", ".next1", ".next2", ".next3"];
var reversePositions = [".next3", ".next2", ".next1", ".currentCard", ".back1", ".back2", ".back3"];
// var reversePositions = cardPositions.reverse();

var cardMove = function(cardToMove, positionArray) {
  var storeContents = $(positionArray[cardToMove] + " .innerCard"); // get contents of '.innerCard' of card to move
  $(positionArray[cardToMove - 1]).html(storeContents); // place that contents in next element to left(cardPositions) or right(reversePositions)
  if ($(".currentCard").children().length < 3) {
    $(".currentCard").append("<div class='wrongButton fab'>X</div><div class='correctButton fab'>O</div>");
  }
};

//on NEXT, move currentCard->back1, next1->currentCard, next2->1, next3->2
var cycleNext = function() {
  var next1Contents = $(".next1").html();
  if (next1Contents) { // if next1 is not empty, advance everything 1 to left
    for (var i = 0; i < deck.length; i++) {
      cardMove(i, cardPositions); //might be able to modify this to make a generalized cycle function
    }
    fillEmptyNext3();
  }
};

var fillEmptyNext3 = function() {
  // figure out card in ".next3", genate appropriate replacement card
  var cardInNext2 = Number($(".next2").children().attr("name"));

  if (cardInNext2 < deck.length) { //checks if there is another card to generate
    generateCard(cardInNext2, ".next3");
  }
};

// remove next3, next2->next3, next1->2, currentCard->next1, back1->currentCard
var cycleBack = function() {
  var back1Contents = $(".back1").html();
  if (back1Contents) { // if back1 is not empty, advance everything 1 to left
    for (var i = 0; i < deck.length; i++) {
      cardMove(i, reversePositions); //might be able to modify this to make a generalized cycle function
    }
    fillEmptyBack3();
  }
};

var fillEmptyBack3 = function() {
  // figure out card in ".back3", genate appropriate replacement card
  var cardInBack2 = Number($(".back2").children().attr("name"));

  if (cardInBack2 > 1) { //checks if there is another card to generate
    generateCard(cardInBack2 - 2, ".back3");
  }
};

var toggleFlip = function() {
  var c = $(".currentCard .innerCard");
  c.hasClass("flipped") === true ? c.removeClass("flipped") : c.addClass("flipped");
};

var flipToFront = function() {
  var c = $(".currentCard .innerCard");
  if (c.hasClass("flipped")) {
    c.removeClass("flipped");
  }
};

$(document).ready(function() {
  //function that generates html elements from deck object
  numberTheDeck();
  generateStart();

  //flip between front/back
  $(".currentCard").on("click", ".innerCard", function() {
    toggleFlip();
  });

  $(".next1").on("click", function() {
    flipToFront();
    cycleNext();
  });
  $(".back1").on("click", function() {
    flipToFront();
    cycleBack();
  });

  $("html").keydown(function(e) {
    if (e.keyCode == "37") { // Right Arrow
      flipToFront();
      cycleNext();
    }
    if (e.keyCode == "39") { // Left Arrow
      flipToFront();
      cycleBack();
    }
    if (e.keyCode == "38" || e.keyCode == "40") { // Up Arrow OR Down Arrow
      toggleFlip();
    }
  });

  //mark either right or wrong
  // button? keyboard input?
  // store in variable
  //track which are incorrect, redisplay until right =!!NEED TO FIX!!=

  $(".cards").on("click", ".wrongButton", function() {
    var cardInCurrent = Number($(".currentCard .innerCard").attr("name"));
    deck[cardInCurrent - 1].correct = false;
  });

  $(".cards").on("click", ".correctButton", function() {
    var cardInCurrent = Number($(".currentCard .innerCard").attr("name"));
    deck[cardInCurrent - 1].correct = true;
  });
});
