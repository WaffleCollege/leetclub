//実行時間を測ります
const performance = require('perf_hooks').performance;

// 開始時間を取得
let startTime = performance.now();

// 実行したいコードを入れる
const test = (N,X,Y) => {
	let count = 0;
	for(let i=1; i<=N; i++){
		if(i%X === 0 || i%Y===0){
			count++;
		}
	}
	return count;
}

console.log(test(15,3,5));

// 終了時間を取得
let endTime = performance.now();

// 実行時間を計算
let timeElapsed = endTime - startTime;

console.log(`実行時間: ${timeElapsed} ミリ秒`);
console.log(`実行時間: ${timeElapsed/1000} 秒`);