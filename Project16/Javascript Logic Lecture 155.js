const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

console.log(array.sort());

// for (q1 of array.sort()) {
//     console.log(q1);
// }

const q1Array = array.map( (q1, index, self) => {
    console.log('self index', self.indexOf(q1), 'just index', index);
    return [];
});


let array2 = array.reduce( (acc, q11, self) => {
    if (acc === self.indexOf(q11)) {
        console.log('reduce',self.indexOf(q11));
        return q1;
    }
},0);



let array2 = array.sort().reduce( (acc, q11, index, self) => {
    // if (acc === q11) {
    //     console.log('value',q11, 'acc', acc);
    //     return q11;
    // }
    return acc === q11;
},array[0]);