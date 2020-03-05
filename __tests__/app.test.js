import {
  // methods,
  // methons,
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
  someNumbersAreOdd,
  evensOnlyAndDoubleArray,
  findItem,
  sortArray,
  doubleLikes,
  moreThan100Likes,
  justArtistMoreThan100Likes,
  numberOfLikes,
  findObjByName,
  sortArtistByName

} from '../app'


// hit of look in before_each before_all
describe('originalArray test',() => {
  test('',() => {
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
  })
})

describe('doubleArray',() =>{
  test('',() => {
    expect(doubleArray([2,4,6,8])).toEqual([4,8,12,16])
  })
})

describe('evensOnlyArray',() =>{
  test('',() => {
    expect(evensOnlyArray([2,4,6,8,9,7])).toEqual([2,4,6,8])
  })
})

describe('arraySum',() =>{
  test('',() => {
    expect(arraySum([1,1,1,1,6,])).toEqual(10)
  })
})

describe('allNumbersGreaterThanZero',() =>{
  test('',()=>{
    expect(allNumbersGreaterThanZero([1,2,3,4])).toEqual(true)
  })
}
)

describe('someNumbersAreOdd',() =>{
  test('',()=>{
    expect(someNumbersAreOdd([1,2,3,4,5,6])).toEqual(true)
  })
})

describe('evensOnlyAndDoubleArray',()=>{
  test('',() =>{
    expect(evensOnlyAndDoubleArray([1,2,3,4])).toEqual([4,8])
  })
})

describe('findItem',()=>{
  test('',() =>{
    expect(findItem([1,4,3,5], 3)).toEqual(3)
  })
})

describe('sortArray',()=>{
  test('',() =>{
    expect(sortArray([1,4,3,2])).toEqual([4, 3, 2, 1])
  })
})

