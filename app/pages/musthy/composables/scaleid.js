export default function scaleID() {
    // -------------------------------------------------------------------
    //  GENERAL PURPOSE FUNCTIONS
    // -------------------------------------------------------------------

    // compute the nth triangle number
    const tri = (num) => {
        return (num * (num + 1)) / 2;
    }

    // get the factorial of n
    const fact = (num) => {
        if (!Number.isInteger(num) || num < 0) {
            console.error("Factorial was passed invalid input.");
            return NaN;
        }
        if (num == 0) {
            return 1;
        }
        else {
            return num * fact(num - 1);
        }
    }

    // get binomial coefficient (combination formula) of n,k
    const comb = (n, k) => {
        if (!Number.isInteger(n) || !Number.isInteger(k) || n < k || k < 0) {
            console.error("Combination formula was passed invalid input.");
            return NaN;
        }
        else {
            return fact(n) / (fact(k) * fact(n - k));
        }
    }

    // error messages if edo is somereason not positive int (including zero).
    const valid_edo = (edo) => {
        if (edo < 0) {
            console.error("'Edo Error' with ("+edo+"): is less than zero.")
            return false;
        }
        if (!Number.isInteger(edo)) {
            console.error("'Edo Error' with ("+edo+"): is not an integer.")
            return false;
        }
        return true;
    }

    // Count number of musical scales in edo
    // (Counts the empty set by default)
    const count_scales = (edo, transpositions=false) => {
        if (!valid_edo(edo)) {
            return "[Error; invalid edo.]"
        }
        if (transpositions) {
            return 2 ** edo;
        } else {
            return ((2 ** (edo - 1)) + 1);
        }
    }

    // make array of incrementing values with start and end
    const range = (start, end) => {
        return Array.from({ length: end - start }, (_, i) => start + i)
    }


    // -------------------------------------------------------------------
    //  "CARD, LEX" ID SYSTEM
    // -------------------------------------------------------------------

    // TODO
    const valid_id = (id, edo) => {
        if (!Number.isInteger(id)) {
            console.error(id, "is an invalid id; not an integer.")
            return false;
        }
        if (id < 0) {
            console.error(id, "is not a valid id; can't be less than zero.")
            return false;
        }
        if (id > count_scales(edo)) {
          console.error(id, "id is greater than number of possible scales in", edo+"edo.");
          return false;
        }

        return true;
    }

    // TODO
    const valid_scale = (id) => {
        // TODO
        return false;
    }

    // take a scale as input and generate its ID number.
    const id = (scale, edo) => {
        // scale must be sorted, cannot have repeats, cannot have element greater than edo
        // TODO: make separate function to ensure scale is correct format; this maybe useful other places

        // TODO: generate dense unique ID that sorts scales by cardinality (number of notes; length) and then lexicographically (alphabetically; i.e., [0,1,3] before [0,1,4]).

        // console.log("The inputted scale is", scale, "edo is", edo, "tri of edo:", tri(edo));
    }

    // take id as input and generate the scale.
    const scale = (id, edo) => {
        // TODO: valid_id(id, edo) function
       
        // console.log("The inputted id is", id, "edo is", edo, "tri of", edo+"edo:", tri(edo));

        // empty set if 0
        if (id == 0) {
            return [];
        }

        return "TODO"
    }


    // -------------------------------------------------------------------
    //  BINARY ID SYSTEM
    // -------------------------------------------------------------------

    // binary ID's are special; negative values here are actually the complementary scales of their positive versions.
    // Google "Two's complment" for more information.
    const valid_bin_id = (id, edo) => {
        if (!Number.isInteger(id))  {
            console.error(id, "Is not a valid binary id; must be integer.");
            return false;
        }
        if (Math.abs(id) >= count_scales(edo)) {
            console.error(id, "Is not a valid binary id; absolute value can't be greater than number of scales.");
            return false;
        }

        return true;
    }

    const bin = (num, edo) => {
        // check ID with "num + 1" and "edo + 1" because binary representations include the additional transpositionally equivalent scales.
        if (!valid_bin_id(num + 1, edo + 1)) {
            return "[INVALID ID num.]";
        }
        // use a bitshift so negative numbers work "properly", like complemenet scales
        return (num >>> 0).toString(2).padStart(edo, "0").slice(-edo);
    }


    const scale_from_bin = (num, edo) => {
        let num_string = String(num);
        let scale_notes = range(0, edo);
        let output = [];

        for (let ii = 0; ii < num_string.length; ii++) {
            if (num_string[(num_string.length - 1) - ii] == "1") {
                output.push(scale_notes[ii])
            }
        }

        return output;
    }


    // -------------------------------------------------------------------
    //  Function EXPORTS
    // -------------------------------------------------------------------
    return {
        tri,
        fact,
        comb,
        range,
        valid_edo,
        count_scales,

        valid_id,
        valid_scale,
        id,
        scale,

        bin,
        scale_from_bin,
    }
}