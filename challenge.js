'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'findLongestSingleSlot' function below.
 *
 * The function is expected to return a CHARACTER.
 * The function accepts 2D_INTEGER_ARRAY leaveTimes as parameter.
 */

function findLongestSingleSlot(leaveTimes) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const leaveTimesRows = parseInt(readLine().trim(), 10);

    const leaveTimesColumns = parseInt(readLine().trim(), 10);

    let leaveTimes = Array(leaveTimesRows);

    for (let i = 0; i < leaveTimesRows; i++) {
        leaveTimes[i] = readLine().replace(/\s+$/g, '').split(' ').map(leaveTimesTemp => parseInt(leaveTimesTemp, 10));
    }

    const result = findLongestSingleSlot(leaveTimes);

    ws.write(result + '\n');

    ws.end();
}
