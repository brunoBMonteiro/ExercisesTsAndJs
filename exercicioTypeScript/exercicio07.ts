function presence(arr: number[]): Map<number, number> {
    let result = new Map<number, number>();

    arr.forEach((val: number, index: number) => {
        let actual = val;
        let counter = 0;
        arr.forEach((v: number) => {
            if (actual == v) counter++;
        })
        result.set(val, counter);
    })
    return result;
}

console.log(presence([2, 2, 2, 3, 4, 5, 6, 7, 8]));