if (s.length !== t.length) return false;
    let arr=new Array(26).fill(0);
    for(let i=0;i<s.length;i++){
        arr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    for(let i=0;i<t.length;i++){
        arr[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;

    }
    for(let i=0;i<26;i++){
        if(arr[i]!==0)  return false;
    }
    return true;