var expand = function(S) {
    let str = S;
 let result = [''];
    let count = 0;
 
    let options = str.match(/{.*?}/g);  //[“{a,b}”,”{d,e}”] 
    let strArray = str.match(/^{.*?}/g)//.split('0').filter(x => x != ''); //[‘0’,’c’,’0’,’f’]
    let charQ = [];
    if (!options){
        return [str];
    }
    options = options.map(s  => s.replace(/[^a-z]/g, '').split('')); //[[a,b], [d,e]]
 
    if (str[0] === '{'){
        charQ.push(options.shift());
    }

    while (options.length > 0 || strArray.length > 0){
        if (strArray.length > 0){
            charQ.push(strArray.shift());
        }

        if (options.length > 0){
            charQ.push(options.shift());
        }
    }
    console.log(charQ)
    
};

console.log(expand("{a,b,c}d{e,f}"))



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

expand("{a,b,c}d{e,f}");