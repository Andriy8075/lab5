import {countOfVertexes, matrixLength, seedRandom, textAreaFontSize, } from "./data.js";

const createDirectedMatrix = (k, size) => {
    let matrix = [];
    for(let row = 0; row < size; row++) {
        matrix[row] = [];
        for (let column = 0; column < matrixLength; column++) {
            const number = seedRandom() * 2;
            const resultNumber = number * k;
            matrix[row][column] = resultNumber < 1 ? 0 : 1;
        }
    }
    return matrix
}

const createTextArea = (left, top, rows, cols) => {
    const textArea = document.createElement('textarea');
    textArea.style.position = 'absolute';
    textArea.rows = rows;
    textArea.cols = cols;
    textArea.style.top = `${top}px`;
    textArea.style.left = `${left - textArea.cols*textAreaFontSize/4}px`;
    textArea.style.fontSize = `${textAreaFontSize}px`;
    document.body.appendChild(textArea)
    return textArea
}

const writeMatrixInTextArea = (textArea, matrix) => {
    const matrixLength = matrix.length;
    for(let row = 0; row < matrixLength; row++) {
        textArea.textContent += `${row+1}. `;
        if(row < 9) textArea.textContent += ' '
        for(let column = 0; column < matrixLength; column++) {
            if(column > 9) textArea.textContent += ' '
            textArea.textContent += `${matrix[row][column]} `;
        }
        textArea.textContent += `\n`;
    }
    textArea.textContent += '    '
    for(let column = 1; column <= matrixLength; column++) {
        textArea.textContent += `${column} `
    }
}

const createTextAreaForMatrix = (left, top, matrix) => {
    const textArea = createTextArea(left,
        top, countOfVertexes + 1, countOfVertexes * 3 - 6);
    writeMatrixInTextArea(textArea, matrix);
    textArea.style.resize = 'none';
    textArea.readOnly = true;
}

export {createDirectedMatrix, createTextAreaForMatrix, createTextArea, writeMatrixInTextArea}
