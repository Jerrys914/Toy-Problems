/*
  - reduce through array or blocks
  - initiate accumulator(waterBlocks) at 0
  - accumulator is the waterBlocks, value iterating on is currentBlock,
    Index is current index of currentBlock, blocks is the full array
  - get the tallest block to the left and right of the current block
  - the water(water accumulated this iteration) needed to add is the minimum between the highest point of the 
    left and right minus the current row of blocks
  - add the number of water to waterblocks or 0 if it is negative
  - return the reduce;
*/
var waterBlocks = function (blocks) {
  return blocks.reduce((waterBlocks, currentBlock, index, blocks) => {
    let heightToLeft = Math.max.apply(null,blocks.slice(0,index));
    let heightToRight = Math.max.apply(null,blocks.slice(index));
    let water = Math.min(heightToLeft,heightToRight) - currentBlock;
    return waterBlocks + Math.max(water,0);
  },0)
};
