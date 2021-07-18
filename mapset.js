let types = new Map()
types.set('apple', 'fruit')
types.set('dog', 'animal')
types.set('tomato','vegetable')

// Entries, Keys and Values
a = types.entries()
console.log(a)
console.log(types.keys())
console.log(types.values())

// Finding using get and has
console.log(types.get('dog'))
console.log(types.has('cat'))

// Size of a set
console.log(types.size)

// Clearing can be done using types.clear()

// Looping: 1st way
console.log(types.entries())
for(let [key,value] of types)
console.log(key+ ' is a/an ' + value)

//Looping: 2nd Way
types.forEach((keys,values)=>{
    console.log(keys,values)
});