console.log("flash cards");
//deck of cards with front/back
//object that contains cards/values
var deck = [
  { //1
    cardnumber: "",
    term: "lachesism",
    definition: "n. the desire to be struck by disaster—to survive a plane crash, to lose everything in a fire, to plunge over a waterfall—which would put a kink in the smooth arc of your life, and forge it into something hardened and flexible and sharp, not just a stiff prefabricated beam that barely covers the gap between one end of your life and the other.",
    correct: false
  },
  { //2
    cardnumber: "",
    term: "exulansis",
    definition: "n. the tendency to give up trying to talk about an experience because people are unable to relate to it—whether through envy or pity or simple foreignness—which allows it to drift away from the rest of your life story, until the memory itself feels out of place, almost mythical, wandering restlessly in the fog, no longer even looking for a place to land.",
    correct: false
  },
  { //3
    cardnumber: "",
    term: "lethobenthos",
    definition: "n. the habit of forgetting how important someone is to you until you see them again in person, making you wish your day would begin with a “previously on” recap of your life’s various plot arcs, and end with “to be continued…” after those will-they-won’t-they cliffhanger episodes that air just before the show goes back into months of repeats.",
    correct: false
  },
  { //4
    cardnumber: "",
    term: "apomakrysmenophobia",
    definition: "n. fear that your connections with people are ultimately shallow, that although your relationships feel congenial at the time, an audit of your life would produce an emotional safety deposit box of low-interest holdings and uninvested windfall profits, which will indicate you were never really at risk of joy, sacrifice or loss.",
    correct: false
  },
  { //5
    cardnumber: "",
    term: "sonder",
    definition: "n. the realization that each random passerby is living a life as vivid and complex as your own—populated with their own ambitions, friends, routines, worries and inherited craziness—an epic story that continues invisibly around you like an anthill sprawling deep underground, with elaborate passageways to thousands of other lives that you’ll never know existed, in which you might appear only once, as an extra sipping coffee in the background, as a blur of traffic passing on the highway, as a lighted window at dusk.",
    correct: false
  },
  { //6
    cardnumber: "",
    term: "vemödalen",
    definition: "n. the frustration of photographing something amazing when thousands of identical photos already exist—the same sunset, the same waterfall, the same curve of a hip, the same closeup of an eye—which can turn a unique subject into something hollow and pulpy and cheap, like a mass-produced piece of furniture you happen to have assembled yourself.",
    correct: false
  },
  { //7
    cardnumber: "",
    term: "vellichor",
    definition: "n. the strange wistfulness of used bookstores, which are somehow infused with the passage of time—filled with thousands of old books you’ll never have time to read, each of which is itself locked in its own era, bound and dated and papered over like an old room the author abandoned years ago, a hidden annex littered with thoughts left just as they were on the day they were captured.",
    correct: false
  },
  { //8
    cardnumber: "",
    term: "liberosis",
    definition: "n. the desire to care less about things—to loosen your grip on your life, to stop glancing behind you every few steps, afraid that someone will snatch it from you before you reach the end zone—rather to hold your life loosely and playfully, like a volleyball, keeping it in the air, with only quick fleeting interventions, bouncing freely in the hands of trusted friends, always in play.",
    correct: false
  }
];

var numberTheDeck = function() {
  for (var i = 0; i < deck.length; i++) { // IMPROVE create higher order function that loops that can be called for this
    deck[i].cardnumber = (i + 1);
  }
};

var deckToHTML = function() {
  for (var i = 0; i < deck.length; i++) {
    var term = deck[i].term;
    var definition = deck[i].definition;
    $(".cards").append("<div class='flashCard raised'><div class='cardFlipper'><div class='cardFront'><h2 class='term'></h2></div><div class='cardBack'><p class='definition'></p></div></div></div>");
    $(".term").eq(i).text(term);
    // $(".definition").hide();
    $(".definition").eq(i).text(definition);
  }
};

$(document).ready(function() {
  //function that generates html elements from deck object
  deckToHTML();
  //flip between front/back
    // start out using .toggle();
  $(".flashCard").on("click", function() {
    var c = this.classList;
    c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
  });
  //control using keyboard OR mouse
  // user instructions
  // event listeners for mouse/keyboard functions
  // buttons?
  //mark either right or wrong
  // button? keyboard input?
  // store in variable
  //track which are incorrect, redisplay until right
});
