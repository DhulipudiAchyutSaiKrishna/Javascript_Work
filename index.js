alert("Achyut Started it")

// var h1 = document.querySelector("#root");

//     h1.innerHTML="Achyut modified it 😀";

var container = document.querySelector("#root");
// console.log(root)

var card = document.createElement("div");

card.setAttribute("id","card")

container.appendChild(card)

// sub child of parent 

var image = document.createElement("img");

image.src = "https://img.cinemablend.com/filter:scale/quill/5/c/f/f/7/f/5cff7f24b620e1ce857feb50415c4d45294653ab.jpg?mw=600";

image.alt = "My pic";

card.appendChild(image)

var audio = document.createElement("audio")

audio.src = "Johnny Depp Bgm Remix.mp3"

audio.play();

card.appendChild(audio);


var email = document.createElement("input")
email.type = email;
email.placeholder = "Email Id"

card.appendChild(email)


var alink = document.createElement("a")
alink.href = "#";

card.appendChild(alink);


var button = document.createElement("button")
// button.value = 
button.innerHTML = "Click Here"

alink.appendChild(button)

