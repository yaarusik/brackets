module.exports = function check(str, bracketsConfig) {
    const bracketsPair = {};

    for (let j = 0; j < bracketsConfig.length; j++) {
        bracketsPair[bracketsConfig[j][0]] = bracketsConfig[j][1];
    }

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let currentBracket = str[i];

        topElement = stack[stack.length - 1];

        if (currentBracket === bracketsPair[topElement]) {
            stack.pop();
        } else if (bracketsPair[currentBracket]) {
            stack.push(currentBracket);
        } else {
            return false;
        }
    }
    return stack.length == 0;
};
