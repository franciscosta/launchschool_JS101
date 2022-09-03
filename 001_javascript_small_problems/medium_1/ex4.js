function minilang(instructions) {

  const operation = {
    push: () => { stack.push(register) },
    pop: () => { register = stack.pop() },
    print: () => { console.log(register) },
    add: () => { register += stack.pop(); },
    sub: () => { register -= stack.pop() },
    mult: () => { register *= stack.pop() },
    div: () => { register = parseInt(register / stack.pop()) },
    remainder: () => { register = parseInt(register % stack.pop()) }
  };

  let register = 0;
  const stack = [];

  const operations = operationManager(instructions);

  operations.forEach( input => {
    if (typeof input === 'string') {
      operation[input]();
    } else {
      register = input;
    }
  });
}

function operationManager(instructions) {
  instructions = instructions.split(' ');

  instructions = instructions.map( instruction => {
    const number = parseInt(instruction);
    if (isNaN(number)) return instruction.toLowerCase();
    if (number) return number;
  });

  return instructions;
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
