//Use recursive to produce all the permutations of an array: remove the first element of the array, find out the permutation of the rest until there's only one element in the array. Then push the removed element back to the array to complete the permutation. When the permutations complete, push the result to the results array.

function allPermutations(arr){
    let results=[];

    //base case
    if(arr.length==1){
        return [[...arr]];
    }

    for (let i=0; i<arr.length; i++){
        let fixed=arr.shift();
        const permutations=allPermutations(arr);
        for (perm of permutations){
            perm.push(fixed);
        }
        results.push(...permutations);
        arr.push(fixed);
    }

    return results; 
}

function permAlone(str) {
    let strArr=str.split('');
    let strArrPerms=allPermutations(strArr);
    let noRepeatCount=0;
    for (perm of strArrPerms){
        let flag=0;
        for (let i=0;i<perm.length-1;i++){
            if(perm[i]===perm[i+1]){
                flag=1;
                break;
            }
        }
        if(flag===1){
            continue;
        }else{
            noRepeatCount++;
        }
    } 
    return noRepeatCount;
}