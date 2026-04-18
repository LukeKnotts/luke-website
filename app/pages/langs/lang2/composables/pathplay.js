// Path play!
// Functions that manipulate arrays representing "paths".

// these functions expect ordered arrays of numbers 0 through 11, i.e. [0, 1, 3] or [4, 5, 6].

export default function usePathPlay() {
    
    // check there are no disconnected parts
    const isConnected = (arr) => {
        if (arr.length == 1) {
            return false;
        }
        else {
            // Go through each line segment and ensure that each is connected to an adjacent segment.
            if (arr.includes(0)) {
                if (!arr.includes(1) && !arr.includes(2) && !arr.includes(3)) {
                    return false;
                }
            }
            if (arr.includes(1)) {
                if (!arr.includes(0) && !arr.includes(3) && !arr.includes(4)) {
                    return false;
                }
            }
        }
        return true;
    }

    return {
        isConnected
        // return functions here.
    };
}