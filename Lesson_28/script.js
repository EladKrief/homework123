let input = document.querySelector(".input");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let inputName = input.value;
  let user = fetch(`https://api.agify.io/?name=${inputName}`).then((response) =>
    response.json().then((data) => {
      let actionDiv = document.querySelector(".action");
      let newHeader = document.createElement("h2");
      newHeader.setAttribute("id", "headerId");
      actionDiv.appendChild(newHeader);
      newHeader.innerHTML = `The age of death of ${data.name} is ${data.age}`;
      setTimeout(() => {
        newHeader.innerHTML = "";
      }, 3000);
    })
  );
});
