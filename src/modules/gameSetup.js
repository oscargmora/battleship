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

async function getShipPlacement() {
    const divs = document.querySelectorAll('setup-div');
    return new Promise((resolve) => {
        divs.forEach((div) => {
            div.addEventListener('click', (e) => {
                const x = e.target.className;
                const y = e.target.id;
                const orientation = document.querySelector('button');
                const orientationText = orientation.innerText;
                resolve({ x, y, orientationText });
            });
        });
    });
}

export { createSetupGrid, getShipPlacement };
