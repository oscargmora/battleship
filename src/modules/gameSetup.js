/* eslint-disable no-plusplus */

function createSetupGrid() {
    const setupContainer = document.querySelector('setup-container');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const div = document.createElement('setup-div');
            div.classList.add(i);
            div.id = j;
            setupContainer.append(div);
        }
    }
}

function createOrientationButton() {
    const buttonContainer = document.querySelector('button-container');
    const orientationButton = document.createElement('button');
    orientationButton.innerText = 'Horizontal';
    buttonContainer.append(orientationButton);
    orientationButton.onclick = function orientationChange() {
        if (orientationButton.innerText === 'Horizontal') {
            orientationButton.innerText = 'Vertical';
        } else {
            orientationButton.innerText = 'Horizontal';
        }
    };
    return orientationButton.innerText;
}

function getCoordinates(e) {
    const x = e.target.className;
    const y = e.target.id;
    return [x, y];
}

function getShipPlacement(player, shipType, shipLength) {
    const orientation = createOrientationButton();
    const divs = document.querySelectorAll('setup-div');
    divs.forEach((div) => {
        div.addEventListener('click', getCoordinates);
    });
    player.chooseShipLocation(shipType, shipLength, 5, 5, orientation);
}

export { createSetupGrid, getShipPlacement };
