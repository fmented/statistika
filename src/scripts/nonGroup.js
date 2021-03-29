function getMode(arr){
    let uniqueArr = []
    arr.forEach(i => {
        if (!uniqueArr.includes(i)){
            uniqueArr.push(i)
        }
    });

    let counted = uniqueArr.map(i=>{
        return {num:i, count :arr.filter(j=>j==i).length
    }}).sort((a,b)=>{
        return a.count < b.count ? 1:-1
    })

    let hf = Math.max(...counted.map(i=>i.count))
    let filtered = counted.filter(i=>i.count==hf).map(i=>i.num)
    return filtered.length == arr.length? [] : filtered
}


export default function (arr) {
    if (arr.length == 0) return
    
    let sorted = [...arr].sort((a,b)=>{
        return a > b ? 1:-1
    })


    let sum = sorted.reduce((total, n)=>total+n)

    let avg = (sum/sorted.length).toFixed(2)

    let median = sorted.length%2==1 ? sorted[Math.ceil(sorted.length/2)-1]:(sorted[sorted.length/2-1]+sorted[sorted.length/2])/2
    let avgDisplay = ['Averag\\e = frac{sum value}{sum item}','= frac{'+sum+'}{'+sorted.length+'}', `= ${avg}`]
    let medianDisplay = sorted.length%2==0 ? ['Median = "Middle point of sorted data"','= frac{'+sorted[sorted.length/2-1]+'+'+sorted[sorted.length/2]+'}{2}', `= ${median}`] : [`= ${median}`]
    let mode = getMode(sorted)
    let medianIndex = sorted.length%2==0 ? [sorted.length/2-1, sorted.length/2] : [Math.ceil(sorted.length/2)-1]
    let display={
        median: medianDisplay,
        avg: avgDisplay,
        mode: ['Mode = "Most Frequent value"', (mode.length)?mode.toString():'No Mode']
    }


    return {sorted, avg, median, mode, sum, display, medianIndex}
}
