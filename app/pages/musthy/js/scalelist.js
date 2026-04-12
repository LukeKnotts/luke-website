export function list_scales(edo, include_transpositions = false) {

    console.log("Edo:", edo, "Include transpositions?:", include_transpositions);
    console.log("Generating scales...");

    // math functions to help prepare list size
    const factorial = (num) => {
        if (num == 0) {
            return 1;
        }
        return num * factorial(num - 1);
    }
    const combinations = (num, take) => {
        return factorial(num) / (factorial(take) * factorial(num - take));
    }

    // calc how many scales we need to make room for in memory
    const calc_list_size = (edo, include_transpositions) => {
        // include additional one for empty set
        let size = 1;
        for (let ii = 0; ii < (edo); ii++) {
            if (include_transpositions) {
                size += combinations(edo, ii);
            }
            else {
                size += combinations(edo - 1, ii);
            }
            
        }
        return size;
    }
    const scale_list_size = calc_list_size(edo, include_transpositions);

    console.log("there will be", scale_list_size, "scales.");

    // init scale list
    let scale_list = new Array(scale_list_size).fill(['x'.repeat(edo)]);
    // include the empty set
    scale_list[0] = [];

    // count so we know where to insert new arrays
    let scale_list_index = 0;
    // increment because we filled first with empty array
    scale_list_index++;
    
    // temp variables for calculations
    let unbranched = [];
    let temporary = [];

    
    for (let ii = 0; ii < edo; ii++) {
        // 'starting values' to init recursive process
        // force everything to start on 0 or allow transpositions
        temporary = [];
        temporary.push(ii);
        unbranched.push(temporary);
        
        if (!include_transpositions) {
            break;
        }
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
        scale_list[scale_list_index] = (Array.from(P));
        scale_list_index++;
    };

    // generate scales until all "branches" have been made and unbranched is empty
    while (unbranched[0]) {
        branch(unbranched[0]);
        console.log(scale_list.length)
    };

    console.log("finished generating scales!")
    return {arr: scale_list, size: scale_list_size};
}