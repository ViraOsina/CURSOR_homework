
export function returnSum (intervalStart, intervalEnd, noEven) {
    let sum = '';
    for (let i = intervalStart; i <= intervalEnd; i++){  
        if (noEven && intervalStart % 2 === 0){
            continue
        }    
        sum = intervalStart + sum;
    }
    return sum;
}
