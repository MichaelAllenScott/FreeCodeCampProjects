function onPageLoad(){
   getNewQuote();
}

function getNewQuote(){
    document.getElementById("quote").innerHTML = '<img src=\'Assets/ring.svg\'>';
    WikiquoteApi.getRandomQuote( "Kurt Vonnegut", function(newQuote) {newQuoteFound(newQuote);}, function(errorMsg){ errorFindingQuote(msg);});
}

function newQuoteFound(jsonQuote){
    var regex = /(<([^>]+)>)/ig;
    var cleansedQuote = jsonQuote.quote.replace(regex, " ");

    if(cleansedQuote.length < 200){
        document.getElementById("quote").innerHTML = cleansedQuote;
    }
    else {
        getNewQuote();
    }
}

function errorFindingQuote(msg){
    console.log(msg);
}

function tweetQuote(){
    openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' 
    + encodeURIComponent('"' + document.getElementById("quote").innerHTML + '"'));
}

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}