//問題解決のためのアルゴリズムがしっかり身につく本

//2.4.3 006
const test = (n) => {
	return 2*n+3;
}
console.log(test(100));

//2.4.4
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