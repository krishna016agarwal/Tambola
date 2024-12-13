v=(h)=>{
        console.log(h)
       bb=document.querySelector(`#a${h}`);
       bb.classList.add("ji")

}
hi=document.querySelector(".pannel");

s=document.querySelector("#pp")
s.addEventListener("click",()=>{
  location.reload()})
  y=document.querySelector("#jk");
 
l=[];
 function make(){
  m=document.querySelector(".jjk");
  for(let i=1;i<=90;i++){
    l.push(i);
  
    a=document.createElement("div");
    a.classList.add("jj");
    a.innerHTML=i;
    a.setAttribute("id","a"+i);
    m.append(a);
    
  }
       
 
 make()
 kk=()=>{
      j=Math.floor(Math.random()*l.length);
      
     
      h=l[j];
      o=l.indexOf(h);
      l.splice(o,1);
      y.innerText=h;

      v(h);
     
}
lo=document.querySelector(".ll");

  lo.addEventListener("click",()=>{
    if(l.length>0){
      kk();
    }else{
  alert("Game Finish, Click on NEW button for New Game")
}
  });
