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