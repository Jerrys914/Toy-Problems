//coding and coding.. shorter and more shorter.. 70 is easy to code, 60.. good luck! ;-)
const palindrome=(n,c)=>{
let r='',l=c.length,f=c.substring(0,l-1),m=c.substring(l-1,n),i
for(i=0;i<n-(f.length*2);i++){r+=m}return f+r+f.split('').reverse().join('')
}