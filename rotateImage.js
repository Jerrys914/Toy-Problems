/*
You are given an n x n 2D matrix that represents an image.
Rotate the image by 90 degrees (clockwise).

Note: Try to solve this task in-place (with O(1) additional memory)
*/

function rotateImage(a) {
    let result = [];
    while(result.length !== a.length){
        let temp = [];
        for(let i = a.length-1; i>=0; i-=1){
            for(let j=result.length; j<a.length;j+=1){
                temp.push(a[i][j]);
                 break
            }
        }
        result.push(temp);
    }
    return result
}
