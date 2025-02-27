function generateQuote() {
    const quotes = [
        "Yesterday is not ours to recover, but tomorrow is ours to win or lose.",
        "The noblest search is the search for excellence.",
        "If we stand tall it is because we stand on the backs of those who came before us.",
        "A president’s hardest task is not to do what is right, but to know what is right.",
        "You might say that Lyndon Johnson is a cross between a Baptist preacher and a cowboy.",
        "We can draw lessons from the past, but we cannot live in it.",
        "This administration here and now declares unconditional war on poverty in America.",
        "If you can convince the lowest white man he’s better than the best colored man, he won’t notice you’re picking his pocket.",
        "The vote is the most powerful instrument ever devised by man for breaking down injustice.",
        "We must open the doors of opportunity. But we must also equip our people to walk through those doors."
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteGenerator").textContent = randomQuote;
}

// Run the function when the page loads
window.onload = generateQuote;