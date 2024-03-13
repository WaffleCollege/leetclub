//実行時間を測ります
const performance = require("perf_hooks").performance;

// 開始時間を取得
let startTime = performance.now();

// 実行したいコードを入れる
const test = (N) => {
  for (let i = 2; i <= N; i++) {
    if (sosu(i) === true) {
      console.log(i);
    }
  }
  return;
};
const sosu = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(test(23));

// 終了時間を取得
let endTime = performance.now();

// 実行時間を計算
let timeElapsed = endTime - startTime;

console.log(`実行時間: ${timeElapsed} ミリ秒`);
console.log(`実行時間: ${timeElapsed / 1000} 秒`);
