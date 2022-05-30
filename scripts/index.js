// Add the coffee to local storage with key "coffee"
async function monk()
{
    try {
    let url = "https://masai-mock-api.herokuapp.com/coffee/menu"
    let ren = await fetch(url);
    let cong = await ren.json();
    let hun = cong.menu.data;
    appendfun(hun);
    }
    catch(error)
    {
        console.log(error);
    }
}
monk()

let het = document.getElementById("menu")

var coffestore = JSON.parse(localStorage.getItem("coffee"));

function appendfun(kenu)
{
    kenu.forEach(function(elem)
    {
        let box = document.createElement("div")
             box.className = "remo";
        let h2 = document.createElement("h2")
        h2.innerText = elem.title;

        let img = document.createElement("img")
        img.src = elem.image;
        img.className = "stap";

        let p = document.createElement("p")
        p.innerText = elem.price;

        let btn = document.createElement("button")
        btn.textContent = "Add to Bucket";
        btn.addEventListener("click",function()
        {
                alert("Item add to Bucket")
                h2.style.color = "Red";
                btn.style.color = "Teal"
        })
        box.append(img,h2,p,btn);

        het.append(box);
    })
    function finu(elem)
    {
        coffestore.push(elem);
        localStorage.setItem("coffee",JSON.stringify(kenu)); 
    }
    console.log( coffestore);
}