export default function scaleID() {
    // compute the nth triangle number
    const tri = (num) => {
        return (num * (num + 1)) / 2;
    }

    const id = (scale, edo) => {
        console.log("The inputted scale is", scale, "edo is", edo, "tri of edo:", tri(edo));
    }

    // id is an integer, 0 and up.
    // edo cannot be negative.
    const scale = (id, edo) => {
        // console.log("The inputted id is", id, "edo is", edo, "tri of edo:", tri(edo));

        // empty set if 0
        if (id == 0) {
            return [];
        }
        
        
    }

    return {
        id,
        scale
    }
}