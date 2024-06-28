const dec=document.getElementById("dec");
const re=document.getElementById("re");
const inc=document.getElementById("inc");
const mylabel=document.getElementById("mylabel");
let count=0;


inc.onclick=function(){
    count++;
    mylabel.textContent= count;
}
dec.onclick=function(){
    count--;
    mylabel.textContent= count;
}
re.onclick=function(){
    count=0;
    mylabel.textContent= count;
}