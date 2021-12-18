function loadjson(file,callback)
{
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200")
        {
            callback(xhr.responseText);
        }
    };
    xhr.send(null);

}

 loadjson("data.json",function(text){
     var data = JSON.parse(text);
     console.log(data);
     display(data.cards)
 })
 function display (mb){
 var deck=document.querySelector(".card-deck")
 deck.classList.add("text-center")
 deck.classList.add("border-solid")
 console.log(deck)

     for(var i in mb){
      //   console.log(mb[i].name) 
        var caddiv=document.createElement("div")
        caddiv.classList.add("card")
        var cadimg=document.createElement("img")
        cadimg.src=mb[i].img
        caddiv.appendChild(cadimg)
        deck.appendChild(caddiv)

        //namearea

        var cname=document.createElement("h2")
        cname.textContent=mb[i].name;
        caddiv.appendChild(cname)
    
        var price=document.createElement("h2")
        price.textContent=mb[i].price;
        caddiv.appendChild(price)
    
        var offer=document.createElement("h2")
        offer.textContent=mb[i].offer;
        caddiv.appendChild(offer)
    
        var btn=document.createElement("h2")
        btn.classList.add("btn-success")
        btn.textContent=mb[i].button;
        caddiv.appendChild(btn)
    
     
     }
 }