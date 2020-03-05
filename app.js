export const originalArray = (arr) => {
  return arr
}

const numberArray =[1,2,3,4]

export const doubleArray = (double) =>{
  return double.map((value)=>{
    return value *2
  })

}

export const evensOnlyArray = (even) =>{
  return even.filter((value)=>{
    return value %2 === 0
  })
}


export const arraySum = (sum) =>{
  return sum.reduce((total,value)=>{
    return total+value;
  })
}

export const allNumbersGreaterThanZero = (greater) =>{
  return greater.every((value) =>{
    return value > 0
  }

  )
}

export const someNumbersAreOdd = (someNumber) =>{
  return someNumber.some((value) =>{
    return value %2 !== 0
  }

  )
}

export const evensOnlyAndDoubleArray = (douEvn) =>{
   let even = douEvn.filter((value) =>{
      return value %2 ===0
    })
    return even.map((value) =>{
      return value *2
    })
  

}

export const findItem = (arr, num) => {
  return arr.find(x => {
    if (x === num) {
      return num
    } 
  })
}



export const sortArray = (arr) =>{
  return arr.sort((a,b)=>{
    return b - a
  })
}

artists = [
  {name: 'a', likes:100},
  {name: 'c', likes:99},
  {name: 'c', likes:101}, 
]


export const doubleLikes =(name,like) =>{
  
}