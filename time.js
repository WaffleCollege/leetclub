//実行時間を測ります
const performance = require('perf_hooks').performance;

// 開始時間を取得
let startTime = performance.now();

// 実行したいコードを入れる
for(let i = 0; i < 1000000; i++) {
    // 何か処理
}


// 終了時間を取得
let endTime = performance.now();

// 実行時間を計算
let timeElapsed = endTime - startTime;

console.log(`実行時間: ${timeElapsed} ミリ秒`);