let cards = document.querySelectorAll('.recipe .steps li');

for (let index = 0; index < cards.length; index++) {
    let element = cards[index];
    
    if (index % 3 === 0) {
        // Every 1st card (red background, default text color)
        element.style.backgroundColor = '#823E3E';
        element.style.color = 'white'; // Reset text color if needed
    } else if (index % 3 === 1) {
        // Every 2nd card (white background, white text color)
        element.style.backgroundColor = '#f1f1f1';
        element.style.color = 'black'; // White text color
    } else if (index % 3 === 2) {
        // Every 3rd card (green background, default text color)
        element.style.backgroundColor = '#3F823E';
        element.style.color = 'white'; // Reset text color if needed
        // add an html seperator after the element
        let seperator = document.createElement('hr');
        element.after(seperator);
        seperator.style.margin = '3vh auto';
        seperator.style.width = '80%';
    }
}
