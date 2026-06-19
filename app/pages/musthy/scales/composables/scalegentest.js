export default function test() {


    // function to help me understand scale generation
    const printScales = (edo) => {
        console.log("TEST PRINT SCALES FUNCTION");

        console.log("0-note set:");
        console.log([]);
        console.log("1-note set:");
        console.log([0]);

        let arr = [0];

        console.log("2-note sets:");
        for (let ii = 1; ii < edo; ii++) {
            arr = [0];
            arr.push(ii)
            console.log(arr);
        }

        console.log("3-note sets:");
        for (let ii = 1; ii < edo; ii++) {
            for (let jj = ii + 1; jj < edo; jj++) {
                arr = [0,ii]
                arr.push(jj)
                console.log(arr);
            }
        }
    }


    return {
        printScales
    }
}