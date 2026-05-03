let userInput = document.querySelector('#new_task_container #task_input') ;
let addButton = document.querySelectorAll('#new_task_container .add') ;
let dailyTask = document.querySelector("#daily_task") ;
let weeklyTask = document.querySelector("#weekly_task") ;
let monthlyTask = document.querySelector("#monthly_task") ;
let yearlyTask = document.querySelector("#yearly_task") ;
let filter = document.querySelector('#new_task_container select')  ;
let clear = document.querySelector('footer button') ;



      function filterbox(filter){

        filter.addEventListener("change",function(){
            let val = this.value ;

            if(val === "all"){
               weeklyTask.style.display = null
                 monthlyTask.style.display = null
                 yearlyTask.style.display = null
                  dailyTask.style.display = null
                   dailyTask.style.width = null
                    weeklyTask.style.width = null
                     yearlyTask.style.width =null
                 monthlyTask.style.width = null
            }

            if(val === "daily"){
                 weeklyTask.style.display = "none"
                 monthlyTask.style.display = "none"
                 yearlyTask.style.display = "none"
                  dailyTask.style.display = ""
                 dailyTask.style.width = "50%"
            }

             if(val === "weekly"){
                 dailyTask.style.display = "none"
                 monthlyTask.style.display = "none"
                 yearlyTask.style.display = "none"
                  weeklyTask.style.display  = ""
                 weeklyTask.style.width = "50%"
                 console.log("in weekly")
            }

             if(val === "monthly"){
                 weeklyTask.style.display = "none"
                 dailyTask.style.display = "none"
                 yearlyTask.style.display = "none"
                  monthlyTask.style.display = ""

                 monthlyTask.style.width = "50%"
            }

             if(val === "yearly"){
                 weeklyTask.style.display = "none"
                 monthlyTask.style.display = "none"
                 dailyTask.style.display = "none"
                  yearlyTask.style.display = ""
                 yearlyTask.style.width = "50%"
            }
        })

      }

      clear.addEventListener("click",function(){
  console.log("clearning data")
         localStorage.clear();
})
 
 function createTask(btu,userInput){
  return {
            id: Date.now(),
            text : userInput.value,
            category : btu.value,
            complete : false
  }
 }
  
 
 function newtask(task){
   let new_task = document.createElement("div");
new_task.classList.add("new_tasks");

   let span = document.createElement("span");
   span.innerText = task.text ;

   let  checkbox = document.createElement("input");
   checkbox.type = "checkbox";

   checkbox.checked = task.complete ;

   if(task.complete){
    new_task.classList.add("completed");
   }


   checkbox.addEventListener("change",()=>{
    task.complete = checkbox.checked;
    
   new_task.classList.toggle("completed");

   localStorage.setItem("tasks",JSON.stringify(tasks));

   console.log("update",task);
   });

        new_task.appendChild(span);
        new_task.appendChild(checkbox);


    if(task.category === "daily"){
      dailyTask.appendChild(new_task);
    }
     
    if(task.category === "weekly"){
      weeklyTask.appendChild(new_task);
    }
     
    if(task.category === "monthly"){
      monthlyTask.appendChild(new_task);
    }
     
    if(task.category === "yearly"){
      yearlyTask.appendChild(new_task);
    }

    if(task.complete === true){
          new_task.style.backgroundColor = "green"
          

    }
             



  }
   addButton.forEach((btu)=>{

  btu.addEventListener("click",function(){
    let task ;
    if(userInput.value != "" ){
        task = createTask(btu,userInput);
         newtask(task); 
            tasks.push(task);
            console.log(tasks); }else{
              alert("no task entered");
            }
            userInput.value = "";

 


        
          
              localStorage.setItem("tasks",JSON.stringify(tasks));

        })
})

 let tasks= JSON.parse(localStorage.getItem("tasks"))||[] ;

console.log(tasks);


  tasks.forEach(task => newtask(task)) ;


   filterbox(filter) ;


