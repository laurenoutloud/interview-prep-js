var expand = function(S) {
    let result = [''];
    let options = S.match(/{.*?}/g);  //[“{a,b}”,”{d,e}”] 
    let letters = S;
    let letterArray = [];

    if (!options){
        return [str];
    }

    options.forEach(option => letters = letters.replace(option, ''));
    letters = letters.split('');
    options = options.map(s  => s.replace(/[^a-z]/g, '').split('')); //[[a,b], [d,e]]
 
    if (S[0] === '{'){
        letterArray.push(options.shift());
    }

    while (options.length > 0 || letters.length > 0){
        if (letters.length > 0){
            letterArray.push(letters.shift());
        }

        if (options.length > 0){
            letterArray.push(options.shift());
        }
    }
    
    letterArray.forEach(char => {
        let tmp = [];
        if (Array.isArray(char)){
            char.forEach(option => {
                result.forEach(string => tmp.push(string + option))
            })
        }else {
            result.forEach(string => tmp.push(string + char))
        }
        result = tmp;
        
    })
    console.log(result);
    return result.sort();
};

expand("{a,b}d{e,f}");



// var expand = function(S) {
//     let str = S;
//  let result = [''];
//     let count = 0;
 
//     let options = str.match(/{.*?}/g);  //[“{a,b}”,”{d,e}”] 
    
//     if (!options){
//         return [str];
//     }
//     options = options.map(s  => s.replace(/[^a-z]/g, '').split('')); //[[a,b], [d,e]]
 
//     strArray = str.replace(/{.*?}/g, '0').split(''); //[‘0’,’c’,’0’,’f’]
 
//     strArray.forEach( char => {
//         let tempStrings = [];
//         if (char !== '0'){
//             for (let str of result){
//             tempStrings.push(str + char);
//         }
 
//         } else {
//             options[count].forEach(option => {
//                 for (let str of result){
//                 tempStrings.push(str + option);
//                 }
//             });
//             count++;
//         }
//         result = tempStrings;
//     });
//     return result.sort();
// };
