let button = document.getElementById("submitButton");
let input = document.getElementById("inputBox");

button.onclick = function(){
  console.log(input.value);

  if(input.value === ""){
    return;
  }
  let url = "https://dog.ceo/api/breeds/image/random/" + input.value
  fetch(url).then(function(response){
    return response.json()

  }).then(function(json){
    let container = document.getElementById("imageContainer")
    let array = json["message"]
    for(let ele of array){
      let img = document.createElement("img")
      img.setAttribute("src",ele)
      container.appendChild(img);



    }

  })

}
