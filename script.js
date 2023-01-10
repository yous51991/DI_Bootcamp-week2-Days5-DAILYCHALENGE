// Prompt the user for a number to begin counting down bottles.
let bottles = prompt("Enter the bottles number");

if (!isNaN(bottles)) {

    let i = 0;
    let nbrBootle = 0;
    for (let p = 0; p < bottles; p++) {
                
        i++;
        if (p == 0) {
            nbrBootle = bottles;
            console.log(`${nbrBootle} ${nbrBootle>1 ? 'bottles' : 'bottle'} of beer on the wall`);
            console.log(`Take ${(i)} down, pass them around`);
        } else {
            nbrBootle = nbrBootle - p;
            console.log(`${nbrBootle} ${nbrBootle>1 ? 'bottles' : 'bottle' } of beer on the wall`);
            ((p+1)<nbrBootle) ? console.log(`Take ${(p+1)} down, pass them around`) : console.log("no bottle of beer on the wall");
        }

        // stop song
        if ((p+1)>nbrBootle) {
            break;
        }
    }
}