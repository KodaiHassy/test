'use strict'
// 1行目に記載している 'use strict' は削除しないでください
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.trace();
    console.groupEnd();
  }
}
/**
 * @param {Array<any>} array
 * @returns {Array<any>} 重複していない値のみが入った新しい配列
 */
// ここにコードを書きましょう
function unique(array) {
    const result = [];
    let j = 0;
    for (let i = 0; i < array.length-1; i++){
        for (j = i + 1; j < array.length; j++){
            if(array[i] === array[j])break;
            //console.log("i"+array[i]);
            //console.log("j"+array[j]);
        }//console.log("test "+j);
        if (j-1 === array.length-1) result.push(array[i]);
    }return result;
}

test(unique([1, 1, 1, 1, 1]), []);
test(unique([1, 3, 4, 5, 2, 4]), [1, 3, 5, 2]);

console.log("-----応用３-------------------------------");

/**
 * @param {...number} number
 * @returns {number} 引数の合計値
 */
// ここにコードを書きましょう
function mySum(...number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) sum += number[i];
    return sum;
}

test(mySum(1), 1);
test(mySum(1, 1, 1, 1, 1), 5);
test(mySum(1, 2, 3, 4, 5), 15);

console.log("-----応用4-------------------------------");
/**
 * @param {...<Array<any>} array
 * @returns {Array<any>} 与えられた配列内のすべての値を持つ新しい配列
 */
// ここにコードを書きましょう
function zip(...array) {
    const result =[];
    //console.log(array);
    for (let i = 0; i < array.length; i++){
        for (const tempArray of array[i]){
            result.push(tempArray);
        }
    }return result;
}

test(zip([1], [2], [3], [4]), [1, 2, 3, 4]);
test(zip([1, 2, 3], [4, 5], [1], [4]), [1, 2, 3, 4, 5, 1, 4]);
