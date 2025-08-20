var romanToInt = function(s) {
    let obj={ 
        I:1,V:5,X:10,L:50,C:100,D:500,M:1000
    };
    let n=s.length;
    let res=0;
    for(let i=0;i<s.length;i++){
        if(i+1< n && obj[s[i]]<obj[s[i+1]]){
            res=res+ obj[s[i+1]]-obj[s[i]];
            i++;
        }
        else{
            res+=obj[s[i]];
        }
    }
    return res;
};