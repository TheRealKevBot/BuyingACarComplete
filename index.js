//  Buying a Car Code Challenge - Starter Code 

function nbMonths(startPriceOld, startPriceNew, savingsPerMonth, percentLossByMonth){
    let savings = 0
    let months = 0
    while ((savings + startPriceOld) < startPriceNew) {
        startPriceOld -= (startPriceOld * (percentLossByMonth/100))
        startPriceNew -= (startPriceNew * (percentLossByMonth/100))
        months++
        savings+= savingsPerMonth
        months%2 === 1 ? percentLossByMonth+= .5 : null
    }
    return [months, Math.round((startPriceOld+savings)-startPriceNew)]  
} 


console.log(nbMonths(2000, 8000, 1000, 1.5), [6, 766])
console.log(nbMonths(12000, 8000, 1000, 1.5) ,[0, 4000])
console.log(nbMonths(25000, 180000, 1000, 1.5) ,[31, 3247])
console.log(nbMonths(12000, 80000, 1500, 1.5) ,[20, 13])
console.log(nbMonths(2000 ,4800 ,1000 ,1.4), [ 3, 343 ])
console.log(nbMonths(2000 ,4000 ,1000 ,1.3), [ 2, 62 ])
console.log(nbMonths(1000 ,4100 ,1000 ,1.4), [ 3, 58 ])
console.log(nbMonths(1100 ,4200 ,1000 ,1.3), [ 3, 49 ])
console.log(nbMonths(2200 ,3000 ,1000 ,1), [ 1, 208 ])
console.log(nbMonths(1900 ,4700 ,1000 ,1.2), [ 3, 327 ])
console.log(nbMonths(2200 ,3100 ,1000 ,1.1), [ 1, 110 ])
console.log(nbMonths(1500 ,3500 ,1000 ,1.3), [ 2, 62 ])
console.log(nbMonths(1200 ,4300 ,1000 ,1.4), [ 3, 58 ])
console.log(nbMonths(1500 ,4600 ,1000 ,1), [ 3, 22 ])
console.log(nbMonths(2500 ,3500 ,1000 ,1), [ 1, 10 ])
console.log(nbMonths(2000 ,4400 ,1000 ,1.5), [ 3, 730 ])
console.log(nbMonths(1400 ,3200 ,1000 ,1.5), [ 2, 262 ])
console.log(nbMonths(1700 ,3800 ,1000 ,1.3), [ 3, 1001 ])
console.log(nbMonths(2400 ,3600 ,1000 ,1.5), [ 2, 842 ])
console.log(nbMonths(1600 ,2800 ,1000 ,1.2), [ 2, 835 ])
console.log(nbMonths(1300 ,3800 ,1000 ,1.5), [ 3, 635 ])
console.log(nbMonths(2300 ,2900 ,1000 ,1.4), [ 1, 408 ])
console.log(nbMonths(1900 ,4500 ,1000 ,1.5), [ 3, 540 ])
console.log(nbMonths(1600 ,4500 ,1000 ,1.5), [ 3, 257 ])
console.log(nbMonths(2300 ,3500 ,1000 ,1.1), [ 2, 832 ])
console.log(nbMonths(1200 ,3300 ,1000 ,1.2), [ 3, 995 ])
console.log(nbMonths(2100 ,3500 ,1000 ,1), [ 2, 635 ])
console.log(nbMonths(2700 ,4300 ,1000 ,1.5), [ 2, 456 ])
console.log(nbMonths(1400 ,4700 ,1000 ,1.5), [ 4, 956 ])
console.log(nbMonths(3000 ,4900 ,1000 ,1), [ 2, 147 ])
console.log(nbMonths(2700 ,2900 ,1000 ,1.1), [ 1, 802 ])
console.log(nbMonths(2900 ,3900 ,1000 ,1.3), [ 1, 13 ])
console.log(nbMonths(1700 ,3600 ,1000 ,1.5), [ 2, 166 ])
console.log(nbMonths(1200 ,4100 ,1000 ,1.3), [ 3, 240 ])
console.log(nbMonths(2900 ,3300 ,1000 ,1.4), [ 1, 606 ])
console.log(nbMonths(2100 ,4800 ,1000 ,1.1), [ 3, 414 ])
console.log(nbMonths(1000 ,4100 ,1000 ,1.3), [ 3, 49 ])
console.log(nbMonths(2100 ,4400 ,1000 ,1.1), [ 3, 798 ])
console.log(nbMonths(1400 ,3500 ,1000 ,1.4), [ 3, 1007 ])
console.log(nbMonths(2000 ,4300 ,1000 ,1.1), [ 3, 798 ])
console.log(nbMonths(2000 ,2900 ,1000 ,1.2), [ 1, 111 ])
console.log(nbMonths(2500 ,3700 ,1000 ,1), [ 2, 830 ])
console.log(nbMonths(2000 ,2500 ,1000 ,1.4), [ 1, 507 ])
console.log(nbMonths(2700 ,3000 ,1000 ,1.2), [ 1, 704 ])