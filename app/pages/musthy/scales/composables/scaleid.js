export default function scaleID() {


    // compute the nth triangle number
    const tri = (num) => {
        return (num * (num + 1)) / 2;
    }


    // error messages if edo is somereason not positive int (including zero).
    const valid_edo = (edo) => {
        if (edo < 0) {
            console.error("Error, invalid edo less than zero.")
            return false;
        }
        if (!Number.isInteger(edo)) {
            console.error("Error, invalid edo is not an integer.")
            return false;
        }
        return true;
    }


    // TODO
    const valid_id = (id) => {
        return false;
    }


    // TODO
    const valid_scale = (id) => {
        return false;
    }


    // count all transpositionally equaivalent pc sets with edo notes.
    const count_scales = (edo) => {
        if (!valid_edo(edo)) {
            return "[Error; invalid edo.]"
        }
        let count = 0;
        return count;
    }


    // take a scale as input and generate its ID number.
    const id = (scale, edo) => {
        // scale must be sorted, cannot have repeats, cannot have element greater than edo
        // TODO: make separate function to ensure scale is correct format; this maybe useful other places

        // TODO: generate dense unique ID that sorts scales by chirality (number of notes; length) and then lexicographically (alphabetically; i.e., [0,1,3] before [0,1,4]).

        console.log("The inputted scale is", scale, "edo is", edo, "tri of edo:", tri(edo));
    }


    // take id as input and generate the scale.
    const scale = (id, edo) => {
        // TODO: make sure id is not greater than number of possible scales or negative
        // TODO: actually, make id check its own function, that could be useful.

        console.log("The inputted id is", id, "edo is", edo, "tri of edo:", tri(edo));

        // empty set if 0
        if (id == 0) {
            return [];
        }
    }


    return {
        id,
        scale,
        
        tri,
        valid_edo,
        valid_id,
        valid_scale,
        count_scales
    }
}