const assert = require('chai').assert;
const index = require('../app.js');

describe('app.js', () => {
    it('Adding 2 numbers', () => {
        const result = index.addNumbers(3,4);
        assert.equal(result, answers.questionOne)
    })
    it('Subtracting 2 numbers', () => {
        const result = index.subNumbers(5,3);
        assert.equal(result, answers.questionTwo);
    })
    it('Using 2 arrays to make a sum of one new Array', () => {
        const arrayOne = [1,123,412,4123,5123,5412,5235,23];
        const arrayTwo = [1,123,412,4123,5123,5412,5235,123];
        const result = index.sumTwoArrays(arrayOne,arrayTwo)
        assert.deepEqual(result, answers.questionThree)
    })
    it('Finding the missing number in the array', () => {
        const missingNumberArray = randomNumberFill();
        const result = index.findMissingNumber(missingNumberArray);
        assert.equal(result, answers.questionFour)
    })
    it('Sorting array using Bubble Sort',() => {
        const sortArray = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
        const result = index.bubbleSort(sortArray);
        assert.deepEqual(result, answers.questionFive);
    })
    it('Find if the word is a palindrome', () => {
        const palindrome = "racecar";
        const result = index.palindromeChecker(palindrome);
        assert.equal(result, answers.questionSix);
    })
})



const answers = {
    "questionOne": 7,
    "questionTwo": 2,
    "questionThree": [2,246,824,8246,10246,10824,10470,146],
    "questionFour": 0,
    "questionFive": [0,1,2,4,5,6,44,63,87,99,283],
    "questionSix": "true"
}

function randomNumberFill(){
    let arr = []
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    answers.questionFour = randomNumber;
    for(let i = 0; i < 100; i++){
        if(i + 1 === randomNumber){
            arr.push(null);
        }else{
            arr.push(i+1);
        }
    }
    return arr;
}