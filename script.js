function generateQuote() {
    const quotes = [
        '"Yesterday is not ours to recover, but tomorrow is ours to win or lose." - Johnson',
        '"The noblest search is the search for excellence." - Johnson',
        '"If we stand tall it is because we stand on the backs of those who came before us." - Johnson',
        '"A president’s hardest task is not to do what is right, but to know what is right." - Johnson',
        '"You might say that Lyndon Johnson is a cross between a Baptist preacher and a cowboy." - Johnson',
        '"We can draw lessons from the past, but we cannot live in it." - Johnson',
        '"This administration here and now declares unconditional war on poverty in America." - Johnson',
        '"If you can convince the lowest white man he’s better than the best colored man, he won’t notice you’re picking his pocket." - Johnson',
        '"The vote is the most powerful instrument ever devised by man for breaking down injustice." - Johnson',
        '"We must open the doors of opportunity. But we must also equip our people to walk through those doors." - Johnson'
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteGenerator").textContent = randomQuote;
}

// Run the function when the page loads
window.onload = generateQuote;

function checkAnswers() {
    let score = 0;
    let answer1 = document.querySelector('input[name="q1"]:checked');
    let answer2 = document.querySelector('input[name="q2"]:checked');
    
    if (answer1 && answer1.value === "b") {
        score++;
    }
    if (answer2 && answer2.value === "a") {
        score++;
    }
    
    document.getElementById("result").innerText = `You scored ${score}/2!`;
}