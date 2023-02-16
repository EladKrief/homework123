// function isImageExist(oldPhoto, newPhoto) {
//   if (oldPhoto) {

//   oldPhoto = localStorage.getItem("imageURL");
//   console.log(oldPhoto);
//   if (oldPhoto == newPhoto) {
//   } else {
//     localStorage.setItem("imageURL", newPhoto);
//   }
// }
let image = fetch("https://go-apod.herokuapp.com/apod")
  .then((response) => response.json())
  .then((data) => {
    let imageExplanation = data.explanation;
    let hdURL = data.hdurl;
    localStorage.setItem("sun", hdURL);
    localStorage.setItem("moon", hdURL);
    localStorage.setItem("nature", hdURL);
  });
