module.exports = function check(str, bracketsConfig) {
    let brackets = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        brackets.push(bracketsConfig[i][0]);
    }

    const bracketsPair = {};

    for (let j = 0; j < bracketsConfig.length; j++) {
        bracketsPair[bracketsConfig[j][1]] = bracketsConfig[j][0];
    }

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let currentBracket = str[i];
        if (brackets.includes(currentBracket)) {
            stack.push(currentBracket);
        } else if (stack.length === 0) {
            return false;
        }

        topElement = stack[stack.length - 1];

        if (bracketsPair[currentBracket] == topElement) {
            stack.pop();
        } else if (stack.length === 0) {
            // return false;
        }
    }
    return stack.length == 0;
};

/*console.log(
    check("|(|)", [
        ["(", ")"],
        ["|", "|"],
    ])
);*/

//const config1 = [["(", ")"]];
//check("()", config1), true;
