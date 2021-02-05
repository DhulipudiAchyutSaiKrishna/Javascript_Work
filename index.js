// alert("Achyut Started it")

// // var h1 = document.querySelector("#root");

// //     h1.innerHTML="Achyut modified it 😀";

// var container = document.querySelector("#root");
// // console.log(root)

// var card = document.createElement("div");

// card.setAttribute("id","card")

// container.appendChild(card)

// // sub child of parent 

// var image = document.createElement("img");

// image.src = "https://img.cinemablend.com/filter:scale/quill/5/c/f/f/7/f/5cff7f24b620e1ce857feb50415c4d45294653ab.jpg?mw=600";

// image.alt = "My pic";

// card.appendChild(image)

// var audio = document.createElement("audio")

// audio.src = "Johnny Depp Bgm Remix.mp3"

// audio.play();

// card.appendChild(audio);


// var email = document.createElement("input")
// email.type = email;
// email.placeholder = "Email Id"

// card.appendChild(email)


// var alink = document.createElement("a")
// alink.href = "#";

// card.appendChild(alink);


// var button = document.createElement("button")
// // button.value = 
// button.innerHTML = "Click Here"

// alink.appendChild(button)

function loadJSON(file,callback){

    var ajax = new XMLHttpRequest();

    ajax.overrideMimeType("application/json");

    ajax.open("GET",file,true);


    ajax.onreadystatechange = function(){
        if (ajax.readyState === 4 && ajax.status === 200) {
            callback(ajax.responseText) ;         
        }
    }

    ajax.send();

}

loadJSON("data.json",function(text){
    var d = JSON.parse(text);
    // console.log(d);
    detail(d.details);
    other(d.multipleData);
});


var root = document.getElementById("root");
function detail(cse){

    var n = document.createElement("h1");
    n.setAttribute("class","name");
    n.textContent = cse.name;
    root.appendChild(n);


    var n2 = document.createElement("h1");
    n2.setAttribute("class","mobile");
    n2.textContent = cse.mobile;
    root.appendChild(n2);

}


// print details in the unordered list format


function other(r){
    var ul = document.createElement("ul");
    root.appendChild(ul);
    for (let i = 0; i < r.length; i++) {
        
        var li = document.createElement("li");
        li.textContent = r[i].name;
        li.style.fontSize = "2rem";
        li.style.fontWeight = "bold";
        li.color = "cyan";
        ul.appendChild(li);


          
        var li1 = document.createElement("li");
        li1.textContent = r[i].mobile;
        li1.style.fontSize = "1.3rem";
        li1.style.fontWeight = "roman";
        li1.color = "lightblue";
        ul.appendChild(li1);
    }
    
}