//実行時間を測ります
const performance = require("perf_hooks").performance;

// 開始時間を取得
let startTime = performance.now();

// 実行したいコードを入れる
let N = [1,2,3,4,5];
let K = 1000000000;

let left = 0;
let right = N.length - 1;
let index = -1;

while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (N[mid] >= K) {
        index = mid;
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}

console.log(index);
// 終了時間を取得
let endTime = performance.now();

// 実行時間を計算
let timeElapsed = endTime - startTime;

console.log(`実行時間: ${timeElapsed} ミリ秒`);
console.log(`実行時間: ${timeElapsed / 1000} 秒`);
