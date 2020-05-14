function getRandomInt(max) {
    let x;
    x = Math.floor(Math.random() * Math.floor(max + 1)) + 5;

    return x;

}

function random() {


    let x = getRandomInt(20);

    return x;
}


function randomLocation() {

    x = Math.floor(Math.random() * Math.floor(4 + 1)) + 5;

    let containerLocation = 'New Yorker';
    if (x == 5) {
        containerLocation = 'Chicago';
    }
    if (x == 6) {
        containerLocation = 'Constanta';
    }
    if (x == 7) {
        containerLocation = 'Hon Kong';
    }
    if (x == 8) {
        containerLocation = 'Rijeka';
    }
    if (x == 9) {
        containerLocation = 'Monaco';
    }

return containerLocation;
}