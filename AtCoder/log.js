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

//2.4.5
const test = (N,S) => {
	let count = 0;
	for(let i=1; i<=N; i++){
		for(let j=1; j<=N; j++){
			if(i+j<=S){
				count++;
			} 	
		}
	}
	return count;
}

console.log(test(3,4));

//2.4.6
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