function shuffle_orginal(shuffled,original){
let res=new Map();
for(let i=0;i<shuffled.length;i++){
	res.set(shuffled[i],i)
}
let swap=0;
let i=0;
let n=shuffled.length;
while(i<n){
if(shuffled[i]!==original[i]){
	let swapped=res.get(original[i]);
    [original[i],original[swapped]]=[original[swapped],original[i]];
    swap+=1;
    i--;}
    i++;
}
return swap;
}