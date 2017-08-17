/*
Given a binary tree t,
determine whether it is symmetric around its center
i.e. each side mirrors the other.

Definition for binary tree:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}
*/
function isTreeSymmetric(t) {
    let result = true;
    if(t===null){
        return result
    }
    const recurse = (left, right) => {
        if(left.value != right.value){
            console.log('hit')
            result = false;
            return
        }
        if(left.left && right.right){
            recurse(left.left, right.right)
        } else {
            if(left.left === null && right.right===null){
                result = true;
            } else {
                result = false;
            }
        }
        if(left.right && right.left){
            recurse(left.right, right.left)
        } else {
            if(left.right === null && right.left===null){
                result = true;
            } else {
                result = false;
            }
        }
        return
    }
    if(t.left && t.right){
        recurse(t.left, t.right);
        return result;
    }
    return false;
}
