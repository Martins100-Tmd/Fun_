const USER_DIV = document.getElementById("users");
const FORM = document.getElementById("form");
const BUTTON = document.getElementById("btn");

BUTTON.onclick = () => {
  let form = new FormData(FORM);
  form = Object.fromEntries([...form.entries()]);
  fetch("http://localhost:8080/api/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
const url = "http://localhost:8080/api/get";

function Make(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    const div = document.createElement("div");
    div.className =
      "rounded-md p-2 shadow flex flex-col items-center justify-between";
    // document.getElementById("del").onclick = (e) => {
    //   let target = e.target.dataset.email;
    // };
    div.innerHTML = `
        <p class="font-hev w-full text-lg dark:bg-gray-100 dark:text-gray-500 text-center font-medium shadow">User ${i}</p>
        <p class="font-hev w-full my-3 text-sm dark:bg-gray-100 dark:text-gray-500 text-center font-medium shadow">${arr[i].name}</p>
        <p class="font-hev w-full text-sm dark:bg-gray-100 dark:text-gray-500 text-center font-medium shadow">${arr[i].email}</p>
        <i class="text-2xl text-center font-black" id="del" data-name="${arr[i].email}">&#9282;</i>
        `;
    USER_DIV.appendChild(div);
  }
}

const Fetch = async () => {
  const A = await fetch(url);
  const B = await A.json();
  const C = await B;
  Make(C.data);
};

Fetch();
