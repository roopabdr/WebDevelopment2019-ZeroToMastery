const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const sortArray = (arr) => arr.slice().sort( (a,b) => a-b); //function to sort the array

const cleanRoom = () => {
    const sorted = sortArray(array);
    let prev = 0;
    const cleanRoom = [];
    let room = [];

    for (let i=0 ; i<sorted.length ; i++) {
        if (sorted[i+1] === sorted[i]) {
            console.log('index',i,'val',sorted[i]);
            room.push(sorted[i]);

            if (sorted[i] != sorted[i+1] && sorted[i] != sorted[i-1] && i !=0) {
                console.log('room 1', room);
                cleanRoom.push(room);
                room = [];
            }
        } else if (sorted[i-1] === sorted[i]) {
            console.log('index',i,'val',sorted[i]);
            room.push(sorted[i]);
            if (sorted[i] != sorted[i+1]) {
                console.log('room 2', room);
                cleanRoom.push(room);
                room = [];
            }
        } else {
            console.log('otherwise',sorted[i]);
            cleanRoom.push(sorted[i]);
        }
    }
    console.log('cleanRoom',cleanRoom);
}

/************************************************* 2nd question ********************************************/

const findNumbers = (array, target) => {
    const myArray = array.forEach((item1, index1) => {
        array.forEach((item2,index2) => {
            if (index1 != index2) {                
                if (item1+ item2 === target) {
                    console.log('item1',item1,'item2',item2,'sum', item1+ item2);
                    return false;
                }
            }
        });
        return false;
    });
    console.log(myArray);
}

const findNumbers = (array, target) => {
    const filterNum = array.map( (item1) => {
        array.filter(item2 => {
            console.log('item1',item1,'item2',item2,'sum',item1+item2);
            if (item1+item2===target){
            return item2;
            }
        });
        return item1;
    });
    console.log(filterNum);
}

const array = [1,2,3];
findNumbers(array, 4);