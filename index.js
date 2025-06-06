const quotes = [
    "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
    "Life is what happens when you're busy making other plans." ,
    "The future belongs to those who believe in the beauty of their dreams." ,
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "It has always been easy to hate and destroy. To build and to cherish is much more difficult.",
    "Do not wait for the perfect time and place to enter, for you are already onstage.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things." ,
    "Just one small positive thought in the morning can change your whole day.",
    "Opportunitties don't happpen, you create them.",
    "It's never too late to be what you might have been.",
    "Do what you can, with what you have, where you are.",
    "Life is like riding a bycicle. To keep your balance, you must keep moving.",
    "If the decisions you make about where you invest your blood, sweat, and tears are not consistent with the person you aspire to be, you'll never become that person."

]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
     const randomIdx = Math.floor(Math.random() * quotes.length)

     if(usedIndexes.has(randomIdx)) continue

     const quote = quotes[randomIdx]
     quoteElement.innerHTML = quote;
     usedIndexes.add(randomIdx)
     break
    }
}