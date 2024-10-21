/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    sum=[];
    for(let i = 0; i<accounts.length;i++){
        
        let indiwealth=accounts[i];
        let wealth=0;
        
        for(let j=0;j<indiwealth.length;j++){
        wealth += indiwealth[j]; 
        }
        sum.push(wealth);
    }

    const max = sum.reduce((acc,cur)=>{
        if(acc<cur){
            acc=cur;
        } 
        return acc;
    },0)
    return max;
};