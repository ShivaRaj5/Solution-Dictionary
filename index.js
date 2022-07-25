let day=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
let ans=[];
const stuff={

}
const ansObj={

}
function solution(items){
    //code
    let newArr=[];
    for (const item in items)
        newArr.push(items[item])
    for(let i=0;i<newArr.length-1;i++){
        for(let j=i+1;j<newArr.length;j++){
            if(newArr[j]<newArr[i])
                [newArr[j],newArr[i]]=[newArr[i],newArr[j]];
        }
    }
    let diff=Math.abs(newArr[1]-newArr[0]);
    stuff[day[0]]=newArr[0];
    for(let i=2;i<newArr.length;i++){
        if(i==8)
            break;
        let temp=Math.abs(newArr[i]-newArr[i-1]);
        if(temp>diff){
            stuff[day[i-1]]=diff+newArr[i-2];
            newArr.length++;
        }
        else{
            stuff[day[i-1]]=newArr[i-1];
            newArr.length++;
        }
    }
    let d1=stuff[day[1]]-stuff[day[0]];
    for(let i=2;i<newArr.length;i++){
        let d2=stuff[day[i]]-stuff[day[i-1]];
        if(d2>d1){
            for(let j=i;j<newArr.length;j++){
                stuff[day[j]]=undefined
            }
        }
    }
    let d3=stuff[day[0]];
    for(let i=1;i<7;i++){
        if(stuff[day[i]]==undefined){
            stuff[day[i]]=d3+stuff[day[i-1]];
        }
    }
    for(let i=0;i<7;i++){
        ansObj[day[i]]=stuff[day[i]]
    }
    return ansObj
}
const dataObj={
    "2020-01-01":6,
    // "2020-01-02":4,
    // "2020-01-03":6,
    "2020-01-04":12,
    "2020-01-05":14,
    "2020-01-06":2,
    "2020-01-07":4,
    // "2020-01-08":-2
}
console.log(solution(dataObj));