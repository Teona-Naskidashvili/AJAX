

function getusers (page){
    let requist = new XMLHttpRequest();
    requist.addEventListener("load", render);
    requist.addEventListener ("error",errorrender );
    requist.open("GET", "https://reqres.in/api/users?page=" + page);
    requist.send();
}

let carentpage = 1;
let totalpage;
function render (){
        let response = this.responseText;
        let responsedata = JSON.parse(response);

        var fragment = document.createDocumentFragment();
        responsedata.data.forEach(element => {
            let li = document.createElement("li");
            let pemail = document.createElement("p")
            pemail.textContent=element.email;
            let imguser= document.createElement("img");
            imguser.classList.add("image-block")
            imguser.src = element.avatar;
            li.classList.add('color-li');
            li.appendChild(imguser);
            li.appendChild(pemail);
    
            fragment.appendChild(li);
            
        });
        
        document.getElementById("list").innerHTML = " ";
        document.getElementById("list").appendChild(fragment);
        totalpage = responsedata.total_pages;
    }
    function errorrender(){
        if ( error == 404){
            let p = document.createElement("p");
             p.textContent = "server error";
             document.querySelector(".user-emaile").appendChild(p);
           } else {
             let p = document.createElement("p");
             p.textContent = "page is not find";
             document.querySelector(".user-emaile").appendChild(p);
           }}
          document.getElementById("loadpre").addEventListener("click", function(){
           if( carentpage == 1){
               return;
           }
           carentpage=carentpage-1;
           getusers(carentpage);
       })
       document.getElementById("loadnext").addEventListener("click", function(){
           if(carentpage == totalpage){
               return;
           }
           carentpage=carentpage+1;
           getusers(carentpage);
       });
       getusers(carentpage);
