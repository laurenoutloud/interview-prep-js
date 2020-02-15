var minWindow = function(s, t) {
    let minW;
    let front = 0, back = 0;
    let tSet1 = new Set(t);
    let tSet2 = new Set();
    let removed = 0;
    
    if (s.length < t.length || t.length < 1 || s.length < 1){
        return "";
    }
    
    while(back < s.length){
        
        if (tSet1.size > 0){
            if (tSet1.has(s[back])){
                tSet1.delete(s[back]);
                tSet2.add(s[back]);
            } 
            back++;
            
        } else {
            if (tSet2.has(s[front])){
                let currW = s.slice(front, back);
                console.log(currW)
                if (!minW){minW = currW}
                if (currW.length < minW.length){minW = currW}
                    tSet2.delete(s[front]);
                    tSet1.add(s[front]);
            }
            front++;
        }
    }
    console.log('test'.slice(0,0))
    return minW;
};

minWindow("ADOBECODEBANC","ABC")