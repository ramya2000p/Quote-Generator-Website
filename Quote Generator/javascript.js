//Array of randome quotes
var quotes = [
    '"I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy." - Ray Kroc',
    '"When we have respect for ourselves and others, we gravitate towards connections that encourage that." - Simeon Lindstrom',
    '"Anger is the ultimate destroyer of your own peace of mind." - Dalai Lama',
    '"A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful." - L. R. Ellert',
    '"Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you dont take the shot." - Wayne Gretzky',
    '"Dont be afraid. Be focused. Be determined. Be hopeful. Be empowered." - Michelle Obama',
    '"The fact is that grief today is a family matter as much a s it is an individual one." - Barbara Okun"',
    '"Children really brighten up a household. They never turn the lights off." - Ralph Bus',
    '"No one would have crossed the ocean if he could have gotten off the ship in the storm." - Charles Kettering',
    `"Congratulations! today is your day. You're off to Great Places! You're off and away. - Dr. Seuss`

];

/*Function to generate random number,
Round down to the nearest decimal,
Multiple this value with the number of quotes in the array and
Display the chosen quote in the div
*/
function newQuote(){
    var num = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[num];
}
