fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(console.log);

/* ****************************************************************** */


async function fetchUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data);
}


/* ****************************************************************** */


const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
)).then(array => {
    console.log('users', array[0]);
    console.log('posts', array[1]);
    console.log('albums', array[2]);
}).catch('oops');


/* ****************************************************************** */

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

const getData = async function(){
    try{
    const [users,posts,albums] = await Promise.all(urls.map(url =>
        fetch(url).then(resp => resp.json())
    ));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
    } catch (err) {
        console.log('oops', err);
    }
}