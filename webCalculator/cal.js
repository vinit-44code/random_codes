let  but = document.querySelectorAll('#butBox #inputbut button');

let dis = document.querySelector('#display p') ;

 let expression = " " ;
 let  equ = document.querySelector('#butBox #inputbut .equal');
  let  clr = document.querySelector('#butBox #inputbut .clr');
  equ.Disabled = true ;

but.forEach(function(btn){
    btn.addEventListener("click",function(event){
       
      console.log(event.target.value);
      if(event.target.value != "=" && event.target.value != "clr"){
        equ.Disabled = false
                 expression += event.target.value ;
                  dis.innerText = expression ;
                }
      if(event.target.value === "="){
            dis.innerText = eval(expression);
      }else if(event.target.value === "clr"){
        dis.innerText = ""
        expression = " "
      }
    })
});

document.addEventListener("keydown",function(e){
       console.log(e.key);

       if("1234567890-+/*".includes(e.key)){
        expression += e.key ;
         dis.innerText = expression ;

       }
      else if(e.key === "=" || e.key === "Enter" ){
          dis.innerText = eval(expression);

       }else if(e.key === "Backspace"){
        dis.innerText = ""
        expression = " "
       }
     
});





