/*
  MedianStream

  Here is a more complicated, extensive coding challenge. You'll face many challenges of this stature during the interview process. At times you'll be given a problem where the time provided will not be sufficient to construct an ideal solution for, so what will you do? This problem may or may not provide you with the opportunity to experience this sort of interviewing situation. 

  This one is heaps of fun...

  Here's a resource which may help:
  http://eloquentjavascript.net/1st_edition/appendix2.html

  Given a stream of unordered integers, find the median of the stream any time we want it. 
  We will be asked to find the median multiple times, so the peekMedian function should have optimal time complexity.

  Note: The median is the middle number of a sorted set. , or the average of the two middle numbers in an even set (when the set is .

  [1, 4, 8]
  Median is 4 (middle number)

  [1, 3, 7, 8]
  Median is 5 (difference between two middle numbers)


  Using the MedianStream class: 
  var mStream = new MedianStream();
  mStream.insert(1);
  mStream.insert(3);
  mStream.insert(2);
  mStream.peekMedian(); 
  => 2
  mStream.insert(5);
  mStream.insert(4);
  mStream.peekMedian(); 
  => 3
*/

var MedianStream = function () {
  this.numbers = [];
};
MedianStream.prototype = {
  insert: function (n) {
    this.bubble(this.numbers.push(n) -1)
  },
  peekMedian: function () {
    if(this.numbers.length % 2 === 0){
      return (this.numbers[this.numbers.length/2] + this.numbers[(this.numbers.length/2)-1]) / 2
    }
    return (this.numbers[Math.floor(this.numbers.length/2)])
  },
  size: function () {
    return this.numbers.length
  },
  bubble: function(index) {
    let parentIndex = Math.ceil(index/2);
    if (this.numbers[parentIndex] > this.numbers[index]) {
      this.swap(index, parentIndex);
      this.bubble(parentIndex);
    }
  },
  swap: function(i,j) {
    if (j< 0) {j += this.numbers.length;}
    this.numbers[i] ^= this.numbers[j];
    this.numbers[j] ^= this.numbers[i];
    this.numbers[i] ^= this.numbers[j];
  }
};