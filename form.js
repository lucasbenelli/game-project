 console.log("form console");

 let form = document.querySelector("form");
 let submit = document.querySelector("submit");
 form.addEventListener("submit", function(e){
  e.preventDefault();
  let title = titleInput.value;
  let publisher = devInput.value;
  let releaseDate = releaseDateInput.value;
  let imgSrc = imgInput.value; 
  let newObj = {
    "id": getNextId(),
    "title" : title,
    "publisher" : publisher,
    "releaseDate" : releaseDate,
    "imgSrc" : imgSrc };
  submitData(newObj);
  form.reset();

});