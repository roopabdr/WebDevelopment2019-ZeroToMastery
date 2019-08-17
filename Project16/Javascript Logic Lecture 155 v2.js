const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const sortArray = (arr) => arr.sort(); //function to sort the array

const cleanRoom = () => {
    const sorted = sortArray(array);
    let prev = 0;
    const cleanRoom = [];
    let room = [];

    for (const[index, value] of sorted.entries()) {
        
        if (prev === value || index === 0) {
            room.push(value);
            // console.log(prev, value);
            console.log('room',room);
        } else {
            console.log(prev, value);
            cleanRoom.push(room);
            // room = value;
            // cleanRoom.push(room);
            room = [];
        }
        prev = value;
    }
    console.log('cleanRoom',cleanRoom);
}