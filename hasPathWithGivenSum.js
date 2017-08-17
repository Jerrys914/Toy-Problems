/*
Given a binary tree t and an integer s,
determine whether there is a root to leaf path in t such that the sum of vertex values equals s.

Definition for binary tree:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}
*/
function hasPathWithGivenSum(t, s) {
    let result = false;
    let num = 0
    const recurse = (tree,sum) => {
        if(tree){
            sum += tree.value
            console.log("sum: ", sum)
            if(sum === s && (tree.left === null && tree.right === null)){
                result = true;
                return
            }
            if(tree.left != null && result === false){
                recurse(tree.left, sum)
            }
            if(tree.right != null && result === false){
                recurse(tree.right, sum)
            }
        }
        return
    }

    if(!t && s === 0){return true}
    recurse(t,0);
    return result
}
