// Path play!
// Functions that manipulate arrays representing "paths".

// these functions expect ordered arrays of numbers 0 through 11, i.e. [0, 1, 3] or [4, 5, 6].

export default function usePath() {

    //
    //
    //
    
    // return sides adjacent to a given side.
    const adj = (num, prior = 'none') => {
        let output;

        switch (num) {
            case 0:
                output = [1, 2, 3];
                break;
            case 1:
                output = [0, 3, 4];
                break;
            case 2:
                output = [0, 5, 7];
                break;
            case 3:
                output = [0, 1, 5, 6, 8];
                break;
            case 4:
                output = [1, 6, 9];
                break;
            case 5:
                output = [2, 3, 6, 7, 8];
                break;
            case 6:
                output = [3, 4, 5, 8, 9];
                break;
            case 7:
                output = [2, 5, 10];
                break;
            case 8:
                output = [3, 5, 6, 10, 11];
                break;
            case 9:
                output = [4, 6, 11];
                break;
            case 10:
                output = [7, 8, 11];
                break;
            case 11:
                output = [8, 9, 10];
                break;
        }

        if (prior == 'none') {
            return output;
        }
        else {
            // filter out adjacent segments that were also adj to prior segmenet
            // this makes sense visually, when you see the paths drawn.
            output = output.filter( function(ele) { return !adj(prior).includes(ele) });
        }

        // console.log(output);
        return output;
    }

    //
    //
    //

    const new_arr = (arry) => {
        let r = arry;
        if (!Array.isArray(arry)) {
            r = [arry];
        }

        return r.slice();
    }

    const arr_equal = (arr1, arr2) => {
        if (arr1.length != arr2.length) {
            return false;
        }
        for (let ii = 0; ii < arr1.length; ii++) {
            if (arr1[ii] != arr2[ii]) {
                return false;
            }
        }
        return true;
    }

    // determine whether path can be made without disconnected segments or backtracking.
    const continuous = (arr) => {
        // console.log("adj from", toRaw(arr));
        let output = {};
        output.num = 0;
        output.seqs = [];
        const r = toRaw(arr);

        // size-based checks
        if (r.length == 0) {
            output.num = 0;
            return output;
        }
        if (r.length == 1) {
            output.num = 1;
            output.seqs = new_arr(r[0]);
            return output;
        }

        // go through every root and try to build 'r' from an adjacent segments.
        r.forEach((ii) => {
            let c = [];
            let d = [];

            c.push(new_arr(ii));

            while (c.length > 0) {
                for (let kk = 0; kk < c.length; kk++) {
                    let current = new_arr(c[0]);

                    if (current.length == r.length) {
                        d.push(new_arr(current));
                    }
                    else {
                        const adj_set = new Set(adj(current.at(-1), current.at(-2)));
                        const r_set = new Set(new_arr(r));
                        const intersect = adj_set.intersection(r_set);

                        intersect.forEach((jj) => {
                            let add_arr = new_arr(current);
                            add_arr.push(jj);

                            if (!current.includes(jj)) {
                                c.push(new_arr(add_arr));
                            }
                        })
                    }
                    // remove 'current' so "c" is eventually emptied
                    c.splice(0, 1);
                }
            }

            // console.log(r, ":", "find", r, "in", d);
            for (let jj = 0; jj < d.length; jj++) {
                let dj = new_arr(d[jj]);
                dj.sort((a,b) => a - b);
                // console.log(d[jj]);
                if (arr_equal(dj, r)) {
                    output.num++;
                    output.seqs.push(new_arr(d[jj]));
                }
            }
        })
        // if we found it then that means the can be built continuously, and is therefore not forked.
        return output;
    }
    
    //
    //
    //

    // convert an array of sides to an array of edges from node verticies.
    //
    //  A-[0]-B-[1]-C
    //  |     |     |
    // [2]   [3]   [4]
    //  |     |     |
    //  D-[5]-E-[6]-F
    //  |     |     |
    // [7]   [8]   [9]
    //  |     |     |
    //  G-[t]-H-[e]-I
    //
    // for example, Side 0 becomes [A,B] and Side 9 becomes [F,I].
    //
    const edgeNotate = (arr) => {
        let output = [];
        arr.forEach((ele) => {
            switch(ele) {
                case 0:
                    output.push(['A','B']);
                    break;
                case 1:
                    output.push(['B','C']);
                    break;
                case 2:
                    output.push(['A','D']);
                    break;
                case 3:
                    output.push(['B','E']);
                    break;
                case 4:
                    output.push(['C','F']);
                    break;
                case 5:
                    output.push(['D','E']);
                    break;
                case 6:
                    output.push(['E','F']);
                    break;
                case 7:
                    output.push(['D','G']);
                    break;
                case 8:
                    output.push(['E','H']);
                    break;
                case 9:
                    output.push(['F','I']);
                    break;
                case 10:
                    output.push(['G','H']);
                    break;
                case 11:
                    output.push(['H','I']);
                    break;
            }
        })

        return output;
    }

    // convert result from edgeNotate() into something pretty for the user to see.
    const prettyEdges = (edge_arr) => {
        let output = [];
        edge_arr.forEach((ele) => {
            output.push(ele.join(''));
        })

        return output;
    }

    //
    //
    //

    return {
        adj,
        new_arr,
        arr_equal,
        continuous,
        edgeNotate,
        prettyEdges,
        // return functions here.
    };
}