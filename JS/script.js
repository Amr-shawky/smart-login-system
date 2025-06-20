document.querySelector(".quote-text").innerHTML = "Click the button to get a quote";
document.querySelector(".reset-btn").style.display = "none";
var AllQuotes = ["Be yourself; everyone else is already taken. ― Oscar Wilde",
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.― Marilyn Monroe",
    "A room without books is like a body without a soul.― Marcus Tullius Cicero",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.― Ralph Waldo Emerson",
    "It is better to be hated for what you are than to be loved for what you are not.― Andre Gide, Autumn Leaves",
    "Never tell the truth to people who are not worthy of it.― Mark Twain",
    "You only live once, but if you do it right, once is enough.― Mae West",
    "In three words I can sum up everything I've learned about life: it goes on.― Robert Frost",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "You can never cross the ocean until you have the courage to lose sight of the shore. - Christopher Columbus",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.― Nelson Mandela",
    "The way to get started is to quit talking and begin doing.― Walt Disney",
    "Life is what happens when you're busy making other plans.― John Lennon",
    "The purpose of our lives is to be happy.― Dalai Lama",
    "Get busy living or get busy dying.― Stephen King, Rita Hayworth and Shawshank Redemption",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.― Brian Tracy",
    "Believe you can and you're halfway there.― Theodore Roosevelt",
    "The only impossible journey is the one you never begin.― Tony Robbins",
    "Act as if what you do makes a difference. It does.― William James",
    "Success usually comes to those who are too busy to be looking for it.― Henry David Thoreau",
    "Opportunities don't happen. You create them.― Chris Grosser",
    "Don't be afraid to give up the good to go for the great.― John D. Rockefeller",
    "I find that the harder I work, the more luck I seem to have.― Thomas Jefferson",
    "Success is not in what you have, but who you are.― Bo Bennett",
    "Success is not how high you have climbed, but how you make a positive difference to the world.― Roy T. Bennett",
    "Success is walking from failure to failure with no loss of enthusiasm.― Winston S. Churchill",
    "Don't watch the clock; do what it does. Keep going.― Sam Levenson",
]
var selectedQuote = [];
var remainingQuotes;
const quotesCopy = [...AllQuotes];
// Shuffle the quotes array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
    }

shuffleArray(quotesCopy);

var quotes = quotesCopy.slice(0, 5);

remainingQuotes = quotes.length;
document.getElementById("remaining-count").innerHTML = remainingQuotes;
function quotefunc() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    if (selectedQuote.length >= quotes.length) {
        document.querySelector(".quote-text").innerHTML = "All quotes have been displayed , if you want to see them again click on reset";
        document.querySelector(".reset-btn").style.display = "inline-block";

    }
    else {
        while (selectedQuote.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * quotes.length);
        }
        selectedQuote.push(randomIndex);
        remainingQuotes = quotes.length - selectedQuote.length;
        document.getElementById("remaining-count").innerHTML = remainingQuotes;
        document.querySelector(".quote-text").innerHTML = quotes[randomIndex];
    }
}
function reset() {
    selectedQuote = [];
    shuffleArray(quotesCopy);
    quotes = quotesCopy.slice(0, 5);
    remainingQuotes = quotes.length;
    document.getElementById("remaining-count").innerHTML = remainingQuotes;
    document.querySelector(".quote-text").innerHTML = "Click the button to get a quote";
    document.querySelector(".reset-btn").style.display = "none";

}