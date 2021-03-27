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
    
    let sorted = arr.sort((a,b)=>{
        return a > b ? 1:-1
    })
    let sum = sorted.reduce((total, n)=>total+n)
    let avg = (sum/sorted.length).toFixed(2)
    let median = sorted.length%2==1 ? sorted[Math.ceil(sorted.length/2)-1]:(sorted[sorted.length/2-1]+sorted[sorted.length/2])/2
    let avgDisplay = '`= frac{'+sum+'}{'+sorted.length+'}`'
    let medianDisplay = sorted.length%2==0 ? '`= frac{'+sorted[sorted.length/2-1]+'+'+sorted[sorted.length/2]+'}{2}`' : ''
    let mode = getMode(sorted)

    return {sorted, avg, median, mode, medianDisplay, sum, avgDisplay, unsorted:arr}
}
