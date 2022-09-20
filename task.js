let table = document.querySelector(".table");
let btn = document.querySelector(".btn-primary");


async function getPosts() {
  let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  let result = await posts.json();

  result.forEach((elem) => {
    table.innerHTML += `<td>${elem.userId}</td>
    <td>${elem.id}</td>
    <td>${elem.title}</td>
    <td>${elem.body}</td>
    `;
  });
}


btn.addEventListener("click", function () {
  getPosts();
});
