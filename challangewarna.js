let warna = ['#686de0', '#eb4d4b', '#30336b', '#e056fd'];

let getColor=document.querySelectorAll("#box");

for(let i=0;i<getColor.length;i++){
    getColor.item[i].style.backgroundColor = warna[i];
}