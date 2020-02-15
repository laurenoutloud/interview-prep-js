var longestStrChain = function(words) {
    if (words.length < 1){
        return words.length;
    }
    let longestChain = 0;
    
    let i = 0;
    let wordsByLength = [];
    
    words.sort((a,b)=> a.length - b.length);
    wordsByLength.push([words.shift()])
    
    for (word of words){
        word = [...word].sort().join('');
        if (word.length === wordsByLength[wordsByLength.length - 1][0].length){
            wordsByLength[wordsByLength.length - 1].push(word);
        } else{
            wordsByLength.push([word]);
        }
    }
    
    console.log(wordsByLength);
    
    function dfs(wordList, chain = ['']){
        //console.log(chain);
        longestChain = Math.max(chain.length, longestChain);
        if (wordList.length < 1){
            return;
        }
        
        let options = wordList.pop();
        options.forEach(option => {
            if (option == 'chpvzz'){
                console.log(chain);
            }
            let tempSet = new Set (chain[chain.length - 1]);
            if ([...option].every(c => tempSet.has(c)) && (chain[chain.length - 1].length === option.length + 1)){
                if (option == 'chpvzz'){
                    console.log("test");
                    console.log(chain.concat([option]))
                }   
                dfs(wordList, chain.concat([option]));
            } else{
                dfs(wordList, [option]);
            }
        });
        dfs(wordList);
        
    }
    dfs(wordsByLength);
    
    return longestChain;
    
};

longestStrChain(["ksqvsyq","ks","kss","czvh","zczpzvdhx","zczpzvh","zczpzvhx","zcpzvh","zczvh","gr","grukmj","ksqvsq","gruj","kssq","ksqsq","grukkmj","grukj","zczpzfvdhx","gru"]);