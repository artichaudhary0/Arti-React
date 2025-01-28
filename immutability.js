// // Immutability : 

// let array = [21,231,3,124,3,21,321,5]
// // let array2 = array // refrenece 

// let array2 = [...array] // spread opertaor

// array2[5]= "fted"

// console.log(array)
// console.log(array2)


// let obj1 = {
//     name : "XYZ",
//     age :435,
// }

// let obj2 = {...obj1} // refrence

// obj2.name = "ABC"

// console.log(obj1)
// console.log(obj2)


// nested object with immutability  : 

// let state = {
//     user :{
//         id : 1,
//         name : "xyz",
//         address : 
//         {
//             city : "surat",
//             zip :234234
//         }
//     },
//     count : 0
// }

// let pre = state

// state["user"]["address"]["city"] = "Mathura"

// function updateCity(newCity)
// {
//     state = {
//         ...state,
//         user : {
//             ...state.user,
//             address : {
//                 ...state.user.address,
//                 city : newCity
//             }
//         }
//     }
// }


// // updateCity("Mathura")

// console.log(state) // update value
// console.log(pre) // surat



// Array updates  in immutable:

// let state = {
//     items : [1,2,3],
//     count : 3,
// }

// let prev = state

// function addItem(newItem){
//     state = {
//         ...state,
//         items : [...state.items,newItem],
//         count : state.count+1
//     }
// }
// addItem(4)

// console.log(state)
// console.log(prev)

// let state = {
//     name : 'xyz',
//     count : 0,
// }

// let prev = state

// function incremenet(){
//     state = {
//         ...state,
//         count : state.count+1
//     };

// }

// incremenet()
// incremenet()
// incremenet()
// incremenet()
// console.log(state)
// console.log(prev)

// multiple refrence to same object :

// let state = {
//     status : "active",
//     details : {
//         role : "admin",
//         permisssions : ["read","write"]
//     }
// }


// let prev = state // prev maintain
// let copy = state // pointer to the same refrerence

// function deactivate(){
//     state = {
//         ...state,
//         status : "inactive"
//     }
// }

// deactivate()
// console.log(state)
// console.log(copy)
// console.log(prev)


// dynamic keys : 

// let state = {
//     values : {
//         a : 2,
//         b : 3,
//     }
//     , total : 5
// }



// let prev = state

// function updateValue(key, value)
// {
//     state = {
//         ...state,
//         values : {
//             ...state.values,
//             key : value
//         },

//         total : Object.values({
//             ...state.values,
//             key : value,
//         }).reduce((sum,v)=>sum+v,0)
//     }
// }


// updateValue("c",3)

// console.log(state)
// console.log(prev)






items = [1, 2, 3]

let res = items.reduce((sum, value) => sum + value, 0)
console.log(res)







