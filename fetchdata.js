fetch("data.json")
.then(res=> {return res.json()})
.then(d=>{ detail(d.details);
    other(d.multipleData);})

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