

function imgSlider(val){
    document.querySelector("#starbucks").src= val;
}

document.querySelector("#one").addEventListener("click",function(){
  
    imgSlider(`/img/coffee1.png`);
    document.querySelector("#circle").style.backgroundColor="#017143";
   

})
document.querySelector("#two").addEventListener("click",function(){
  imgSlider(`/img/coffee2.png`);
  document.querySelector("#circle").style.backgroundColor="#EC7998";
      
})
document.querySelector("#three").addEventListener("click",function(){
      imgSlider(`/img/coffee3.png`);
      document.querySelector("#circle").style.backgroundColor="#CD3EA2";
 
    
})