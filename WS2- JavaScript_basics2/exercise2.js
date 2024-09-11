function repeatingText() {
    let text = "";
    for (let i = 0; i < 50; i++) {
        text += 'This is line ' + (i + 1) + '<br>';
    }
    document.getElementById("exercise2").innerHTML = text;
}

repeatingText();
