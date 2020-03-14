let ano1 = 1980;
let ano2 = 2000;

if (ano2 < ano1 && ano2 < ano1 + 2){
	console.log(-1);
}else if (ano1 % 4 !== 0){
	ano1 += 2;
	while (ano1 <= ano2){
		console.log(ano1);
		ano1 += 4;
	}
}else{
	while (ano1 <= ano2){
		console.log(ano1);
		ano1 += 4;
	}
}