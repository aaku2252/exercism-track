//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (num) => {
    let finalArr = [];
    if (num == 0) {
        return [];
    } else if (num > 0) {
        for (let counter = 1; counter <= num; counter++) {
            let arr = [];
            arr[0] = 1;
            arr[counter - 1] = 1;
            let start = 0;
            if (counter > 2) {
                for (let x = 1; x <= counter - 2; x++) {
                    arr[x] =
                        rows(counter - 1)[counter - 2][start] +
                        rows(counter - 1)[counter - 2][start + 1];
                    start += 1;
                }
            }

            finalArr.push(arr);
        }
        return finalArr;
    }
};
