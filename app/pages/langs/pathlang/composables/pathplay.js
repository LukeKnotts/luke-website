// Path play!
// Functions that manipulate arrays representing "paths".

// these functions expect ordered arrays of numbers 0 through 11, i.e. [0, 1, 3] or [4, 5, 6].

export default function usePath() {

    //
    //
    //
    
    // return sides adjacent to a given side.
    const adj = (num) => {
        switch (num) {
            case 0:
               return [1, 2, 3]; 
            case 1:
                return [0, 3, 4];
            case 2:
                return [0, 5, 7];
            case 3:
                return [0, 1, 5, 6, 8];
            case 4:
                return [1, 6, 9];
            case 5:
                return [2, 3, 6, 7, 8];
            case 6:
                return [3, 4, 5, 8, 9];
            case 7:
                return [2, 5, 10];
            case 8:
                return [3, 5, 6, 10, 11];
            case 9:
                return [4, 6, 11];
            case 10:
                return [7, 8, 11];
            case 11:
                return [8, 9, 10];
        }
    }

    //
    //
    //

    // determine whether there are disconnected segments so you don't have to "hop" between parts of the path.
    const isPath = (arr) => {
        let r = toRaw(arr);

       
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
        isPath,
        edgeNotate,
        prettyEdges,
        // return functions here.
    };
}