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

//2.5.3
const test = (N) => {
  let ans = 1;
  for (let i = 1; i <= N; i++) {
    ans *= i;
  }
  return ans;
};

console.log(test(20));

//2.5.4
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

//AtCoder
let N = [1,2,3,4,5];
let K = 1000000000;

let index = N.findIndex((element) => element >= K);
console.log(index);

//
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