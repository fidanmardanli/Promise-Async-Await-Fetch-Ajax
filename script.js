// let users = [
//     {
//         name: "Orxan",
//         surname: "Ekberov",
//         age: 26
//     },
//     {
//         name: "Fidash",
//         surname: "Mardanli",
//         age: 18
//     },
//     {
//         name: "Mahmud",
//         surname: "Mardanli",
//         age: 13
//     },
//     {
//         name: "Lala",
//         surname: "Mardanli",
//         age: 8
//     },

// ]

// let ul = document.querySelector(".list-group");

// function getUsers(){
//     setTimeout(() => {

//         let elem = "";
//         users.forEach(user =>{
//             elem += `<li class="list-group-item">
//             <b>${user.name}</b>
//             <b>${user.surname}</b>
//             <b>${user.age}</b>
//             </li>`
//         })

//         ul.innerHTML = elem;

//     }, 2000);
// }

// getUsers();

// function createUser(user, callback) {
//     setTimeout(() => {
//         users.push(user)
//        callback();
//     }, 3000);

// }

// createUser({name: "Ali", surname: "Mardanli", age: 13}, getUsers)

// function getUsers(){
//     setTimeout(() => {

//         let elem = "";
//         users.forEach(user =>{
//             elem += `<li class="list-group-item">
//             <b>${user.name}</b>
//             <b>${user.surname}</b>
//             <b>${user.age}</b>
//             </li>`
//         })

//         ul.innerHTML = elem;

//     }, 2000);
// }

// getUsers();

// function createUser(user) {

//     return new Promise((resolved, rejected) =>{
//         setTimeout(() => {
//             users.push(user)

//             let err = false;
//             if(!err){
//                 resolved(user);
//             }
//             else{
//                 rejected("nese sehvlik vare");
//             }
//         }, 3000);
//     })

// }

// createUser({name: "Ali", surname: "Mardanli", age: 13}).then(response =>{
//     // console.log(users); 
//     getUsers();
//     console.log(response)
// }).catch(err =>{
//     console.log(err)
// })

let ul = document.querySelector(".list-group");
let btn = document.querySelector("get-datas");

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(json => console.log(json))

// btn.addEventListener("click", function(){
//      console.log();
// })

// async function getPosts() {

//     let posts = await fetch("https://jsonplaceholder.typicode.com/posts");

//     let result = await posts.json();

//     let elem = "";

//     result.forEach(post => {
//         elem += `<li class="list-group-item">
//                 <b>${post.userid}</b>
//                 <b>${post.Id}</b>
//                 <b>${post.title}</b>
//                 <b>${post.body}</b>
//                 </li>`
//     })

//     ul.innerHTML = elem;

// }

// getPosts();

