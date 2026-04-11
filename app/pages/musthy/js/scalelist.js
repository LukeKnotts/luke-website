export function list_scales(edo, include_transpositions = false) {

    console.log(edo, include_transpositions);

    // init scale list
    // include the empty set
    let scale_list = [[]];
    
    // temp variables for calculations
    let unbranched = [];
    let temporary = [];

    
    for (let ii = 0; ii < edo; ii++) {
        // 'starting values' to init recursive process
        // force everything to start on 0 or allow transpositions
        if (include_transpositions) {
            temporary = [];
        }
        else {
            temporary = [0];
            if (ii == 0) ii++;
        }
        temporary.push(ii);
        unbranched.push(temporary);
    }

    // function to recursively generate scales
    const branch = (P) => {
        let lastP = P[P.length - 1];
        for (let ii = 1; ii < edo - lastP; ii++) {
            temporary = [];
            for (let jj = 0; jj < P.length; jj++) {
            temporary.push(P[jj]);
            }
            temporary.push(ii + lastP);
            unbranched.push(Array.from(temporary));
        }
        unbranched.shift();
        scale_list.push(Array.from(P));
    };

    // generate scales until all "branches" have been made and unbranched is empty
    while (unbranched.length > 0) {
        branch(unbranched[0]);
    };

    return scale_list;
}