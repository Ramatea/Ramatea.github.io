
function myFunction(){
    alert("Under Maintenance!")
}


var icon= document.getElementById("icon");

icon.onclick= function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src= "gambar/sun.jpg";
    }else{
        icon.src= "gambar/moon1.png";
    }
}

const Service = document.getElementById("service");

Service.addEventListener("click",
    function(){
        alert("Under Maintanance!!")
    }
)
