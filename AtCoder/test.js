//実行時間を測ります
const performance = require('perf_hooks').performance;

// 開始時間を取得
let startTime = performance.now();

// 実行したいコードを入れる
const test = (N,S,A) => {
	for(let i=0; i<=N; i++){
		for(let j=0; j<=N; j++){
			console.log((A[i]+A[j]));
			if(A[i]+A[j]===S){
				return true;
			}
		}
	}
	return false;
}

console.log(test(3,11,[2,5,9]));

// 終了時間を取得
let endTime = performance.now();

// 実行時間を計算
let timeElapsed = endTime - startTime;

console.log(`実行時間: ${timeElapsed} ミリ秒`);
console.log(`実行時間: ${timeElapsed/1000} 秒`);