function onPageLoad(){
   getNewQuote();
}

function getNewQuote(){
    document.getElementById("quote").innerHTML = "loading...";
    WikiquoteApi.getRandomQuote( "Kurt Vonnegut", function(newQuote) {newQuoteFound(newQuote);}, function(errorMsg){ errorFindingQuote(msg);});
}

function newQuoteFound(jsonQuote){
    document.getElementById("quote").innerHTML = jsonQuote.quote;
}

function errorFindingQuote(msg){
    console.log(msg);
}