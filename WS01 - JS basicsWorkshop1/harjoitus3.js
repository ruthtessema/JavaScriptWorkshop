var x = 50;
var order = 'Beer';

if (x > 50) {
    console.log("He's over 50!");
    document.write("<h4>He's over 50!</h4>");
} else if (x <= 50 && x > 30) {
    console.log("Middle-aged man, who ordered some " + order);
    document.write("<strong>Middle-aged man, who ordered some " + order + "</strong>");
} else {
    console.log("It seems you're a bit underaged.");
    document.write("It seems you're a bit underaged.");
}
