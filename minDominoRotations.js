var minDominoRotations = function(A, B) {
    let mapA = [null,0,0,0,0,0,0];
    let mapB = [null,0,0,0,0,0,0];
    let minRotations = 0;
    
    if (A.length === 1){
        return A[0] === B[0] ? 0 : -1;
    }
    
    for (let i = 0; i < A.length; i++){
        const a = A[i];
        const b = B[i];
        
        mapA[a] = mapA[a] + 1;
        mapB[b] = mapB[b] + 1;
    }
    
    let option = null;
    
    for (let i = 1; i < mapA.length; i++){
        if (mapA[i] + mapB[i] >= A.length){
            option = i;
            break;
        }
    }
    if (!option){return -1}
    
    let arr1, arr2;
    if (mapA[option] >= mapB[option]){
        arr1 = A;
        arr2 = B;
    } else {
        arr1 = B;
        arr2 = A;
    }
    
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] === option){
            continue;
        } else if (arr2[i] === option){
            minRotations++;
        } else {
            return -1;
        }
    }
    
    return minRotations;
};

minDominoRotations([2,1,2,4,2,2],[5,2,6,2,3,2]);