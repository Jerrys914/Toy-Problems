/*
Create a finite automaton that has three states. Finite automatons are the same as finite state machines for our purposes.

Our simple automaton, accepts the language of A, defined as {0, 1} and should have three states,
q1, q2, and q3.

q1 is our start state. We begin reading commands from here.
q2 is our accept state. We return true if this is our last state.

q1 moves to q2 when given a 1, and stays at q1 when given a 0.
q2 moves to q3 when given a 0, and stays at q2 when given a 1.
q3 moves to q2 when given a 0 or 1.

Our automaton should return whether we end in our accepted state, or not (true/false.)

Here's an example.

var a = new Automaton();
var isAccepted = a.readCommands(["1", "0", "0", "1", "0"]);
We make these transitions based on the input of ["1", "0", "0", "1", "0"],

1 q1 -> q2
0 q2 -> q3
0 q3 -> q2
1 q2 -> q2
0 q2 -> q3
We end in q3, which is not our accept state, so return false.

The input of ["1", "0", "0", "1", "0"] would cause us to return false, as we would end in q3.
*/

function Automaton()
{
   this.states = ['q1'];
}

Automaton.prototype.readCommands = function(commands){
  // Return true if we end in our accept state, false otherwise.
  commands.forEach(command => {
    if(command === '0') {
      if(this.states[1] && !this.states[2]){
        this.states.push('q3');
      } else if(this.states[2]){
        this.states.pop();
      }
    } else if(command === '1') {
      if(!this.states[1]) {
        this.states.push('q2')
      } else if(this.states[2]){
        this.states.pop();
      }
    }
  });
  return this.states.length === 2;
}