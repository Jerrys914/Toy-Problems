/*
A cryptarithm is a mathematical puzzle for which the goal is to
find the correspondence between letters and digits,
such that the given arithmetic equation consisting of letters
holds true when the letters are converted to digits.

You have an array of strings crypt, the cryptarithm,
and an an array containing the mapping of letters and digits, solution.
The array crypt will contain three non-empty strings that follow the structure:
[word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm.

If crypt, when it is decoded by replacing all of the letters in the cryptarithm
with digits using the mapping in solution, becomes a valid arithmetic equation
containing no numbers with leading zeroes, the answer is true.
If it does not become a valid arithmetic solution, the answer is false.
*/
function isCryptSolution(crypt, solution) {
    let finalResult = true;
    solution = solution.reduce((accum, pair) => {
        accum[pair[0]] = pair[1]
        return accum
    },{});
    let result = crypt.map(word => {
        let num = '';
        word.split('').forEach(letter => {
            num += solution[letter];
        })
        return num;
    })
    console.log(result)
    if((+result[0] + +result[1] !== +result[2])){
        finalResult = false;
    }
    if((result[0][0] === '0' || result[1][0] === '0' || result[2][0] === '0') && result[0].length !== 1){
        finalResult = false;
    }
    return finalResult
}
