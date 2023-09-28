import Ship from './factories/shipFactory';

const carrier = new Ship(5);

function hitCarrier() {
    carrier.hit();
    return carrier.hits;
}

export default hitCarrier;
