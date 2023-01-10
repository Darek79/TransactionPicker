let map = new Map();

// map.set('darek', 1);
// map.set(true, 2);
// console.log(map.get(true));

const arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

arr.forEach(el => {
    map.set(el.split('').sort().join('').toLocaleLowerCase(), el);
});
console.log([...map.keys()]);
console.log(Object.fromEntries(map))
let set = new Set();
let john = { name: 'John' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set.entries())

