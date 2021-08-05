for(let i = 0; i < 21; i++){
    console.log("bat");


console.dir(randUser);
console.dir(randUser.results[i]);
console.dir(randUser.results[i].name.first);


let profiles = document.querySelector("#profiles");


let newDiv = document.createElement("div")
let text = document.createElement("p")
let newImg = document.createElement("img")

text. innerHTML = "name: " + randUser.results[i].name.first + " " + randUser.results[i].name.last + "<br>" + "Email " + randUser.results[i].email;

newImg.src=randUser.results[i].picture.large

newDiv.appendChild(newImg);
newDiv.appendChild(text);
profile.appendChild(newDiv);




}

