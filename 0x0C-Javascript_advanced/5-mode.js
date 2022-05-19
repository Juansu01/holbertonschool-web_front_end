
function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const paragraph = document.createElement('p');
    paragraph.innerHTML  = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    const firstButton = document.createElement('button');
    firstButton.innerHTML = 'Spooky';
    document.body.appendChild(firstButton);
    firstButton.onclick = function () {
        spooky();
    }

    const secondButton = document.createElement('button');
    secondButton.innerHTML = 'Dark mode';
    document.body.appendChild(secondButton);
    secondButton.onclick = function () {
        darkMode();
    }

    const thirdButton = document.createElement('button');
    thirdButton.innerHTML = 'Scream mode';
    document.body.appendChild(thirdButton);
    thirdButton.onclick = function () {
        screamMode();
    }
}

main()