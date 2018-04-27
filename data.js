$(document).ready(function () {

  //JSON Quotes
  const quote = [
    {
      "text": '"It never rains in Manchester, but it pours"',
      "author": " - Kevin Keegan"
    },

    {
      "text": '"In all modesty, my summing up of 1955-6 and 1956-7 must be that no club in the country could live with Manchester United."',
      "author": " - Matt Busby"
    },

    {
      "text": '"I didn\'t do myself justice after joining Manchester City but, having said that, I shared a house with George Best for two years so it had its compensations!"',
      "author": " - Mick Horswill"
    },

    {
      "text": '"I feel close to the rebelliousness and vigour of the youth here. Perhaps time will separate us, but nobody can deny that here, behind the windows of Manchester, there is an insane love of football, of celebration and of music."',
      "author": " - Eric Cantona"
    },

    {
      "text": '"I never comment on referees and I’m not going to break the habit of a lifetime for that prat."',
      "author": " - Ron Atkinson"
    },

    {
      "text": '"Cole should be scoring from those distances, but I’m not going to single him out."',
      "author": " - Sir Alex Ferguson"
    },

    {
      "text": '"As long as we are successful on the pitch, then I will be here—unless Manchester United put in a call. But I dont think Sir Alex Ferguson is planning to step down just yet!"',
      "author": " - Paul Ince"
    },

    {
      "text": '"Fergie said I was a Manchester United player in the wrong shirt—I said he was an Arsenal manager in the wrong blazer."',
      "author": " - Tony Adams"
    },

    {
      "text": '"Paul Jewell\'s sides are always hard to break down, although Manchester United have a habit of breaking his sides down pretty easily."',
      "author": " - Charlie Nicholas"
    },

    {
      "text": '"When Manchester United are at their best I am close to orgasm."',
      "author": " - Gianluca Vialli"
    },

    {
      "text": '"It\'s getting tickly now - squeaky-bum time, I call it."',
      "author": " - Sir Alex Ferguson"
    },

    {
      "text": '"He\'s a novice - he should keep his opinions to Japanese football."',
      "author": " - Sir Alex Ferguson"
    },

    {
      "text": '"If Chelsea drop points, the cat\'s out in the open. And you know what cats are like - sometimes they don\'t come home."',
      "author": " - Sir Alex Ferguson"
    },

    {
      "text": '"We have to keep the ball better and we have to move the ball quicker – that\'s always what we have to do. Desire... it is a great word. I often use the word "horny" with my players."',
      "author": " - Louis van Gaal"
    }
  ];

  // Generates new quote
  var randomQuote = () => {  
    let current;
    let idx;
    // Avoid printing same quote twice in a row
    do {
      idx = Math.floor(Math.random() * quote.length);
    }
    while (current === idx);

    current = idx;

    $("#quoteText").html(quote[idx].text);

    $("#quoteAuthor").html(quote[idx].author);

  }; //End randomQuote()


  // Tweet quote
  const tweetQuote = () => {

    // Get quote text
    const tweetText = $("#quoteText").text();

    // Get quote author
    const tweetAuthor = $("#quoteAuthor").text();

    //Open twitter in a new window and tweet quote
    window.open("https://twitter.com/intent/tweet?text=" + tweetText + tweetAuthor)
  };

  // Event listeners
  $("#football").click(() => randomQuote());
  $("#twitter-logo").click(() => tweetQuote());
  
}); // End $(document).ready()