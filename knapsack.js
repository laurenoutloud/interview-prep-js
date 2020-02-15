//recursive solution O(2^n) exponential
/*
function knapsack(maxWeight, items) {
    if (items.length === 0 || maxWeight === 0){
        return 0;
    }
    
    let item = items[items.length - 1];
    if (item.weight > maxWeight){
        return knapsack(maxWeight, items);
    }
    
    return Math.max(knapsack(maxWeight - item.weight, items.slice(0,-1)) + item.value, knapsack(maxWeight, items.slice(0,-1)));
}
//console.log(knapsack(5, [{weight:1,value:100000},{weight:2,value:2000},{weight:3,value:1500}]));
*/

//dynamic programming solution
class DynamicKnapsack {
    constructor(){
        this.cache = [];
    }
    
    buildCache(row, col){
        for (let i = 0; i < row; i++){
            this.cache.push(Array(col).fill(''));
        }
    }

    knapsack(maxWeight, items) {
        if (items.length === 0 || maxWeight === 0){
            return 0;
        }
        if (this.cache.length < 1){
            this.buildCache(items.length + 1, maxWeight + 1);
        } else if (this.cache[items.length][maxWeight]){
            return this.cache[items.length][maxWeight];
        }

        
        let item = items[items.length - 1];
        if (item.weight > maxWeight){
            this.cache[items.length][maxWeight] = this.knapsack(maxWeight, items);
        } else {
            this.cache[items.length][maxWeight] = Math.max(this.knapsack(maxWeight - item.weight, items.slice(0,-1)) + item.value, this.knapsack(maxWeight, items.slice(0,-1)));
        }
        
        return this.cache[items.length][maxWeight];
    }
}

let dkp = new DynamicKnapsack();
console.log(dkp.knapsack(5,[{weight:1,value:6},{weight:2,value:10},{weight:3,value:12}]));