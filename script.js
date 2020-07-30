//DELARING DOM ELEMENTS
let next        = document.getElementById("next");
let author      = document.getElementById('author')
let quoteText   = document.getElementById('quote-text');
let tweet       = document.getElementById("tweet");
let quote       = document.getElementById("quote-text").innerHTML;
let authorName  = document.getElementById('author').innerHTML;


//INITIALIZING EVENTS
next.addEventListener('click', getQuote);
tweet.addEventListener('click', post)


//DECLARING FUNCTIONS
function getQuote(){
    //USING FETCH API TO GET DATA FROM URL    
    fetch('https://random-quote-generator.herokuapp.com/api/quotes/')
    .then(res => res.json())
    .then(function(data){ 
        let randomize       = Math.floor(Math.random() * data.length);
        quoteText.innerHTML = data[randomize].quote
        author.innerHTML    = "- " + data[randomize].author

        quote = quoteText.innerHTML;
        authorName =  author.innerHTML ;
    })
}
//POSTING TO TWEETER
function post(e){
    e.preventDefault();
    window.open("https://twitter.com/share?text="+quote + " " + authorName +"&url=false", 'tweet');

}