function interpret(command) {
    const ans = [];
    for (let i = 0; i < command.length; i++) {
        if (command[i] === 'G') ans.push(command[i]);
        if (command[i] === '(' && command[i + 1] === ')') ans.push('o');
        if (command[i] === '(' && command[i + 1] === 'a') ans.push('al');
    }
    return ans.join('');
}

function interpretSolution(command) {
    return command.replaceAll('()', 'o').replaceAll('(al)', 'al');
}

let command = "G()(al)";
let command2 = "G()()()()(al)";
let command3 = "(al)G(al)()()G"
console.log(interpret(command));
console.log(interpret(command2));
console.log(interpret(command3));
console.log(interpretSolution(command));
console.log(interpretSolution(command2));
console.log(interpretSolution(command3));