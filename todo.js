let noteButton =  document.querySelector("#slide_bar .bar_box #notes-ch button");
let taskButton =  document.querySelector("#slide_bar .bar_box #task-ch button");
let task_container = document.querySelector("#main_container");
let note_container = document.querySelector("#notes_main_container");

  
  note_container.style.display = "none";

noteButton.addEventListener("click",()=>{
            task_container.style.display = "none";
           note_container.style.display = "";
         noteButton.style.borderBottom = "3px solid green"
          taskButton.style.borderBottom = ""
})

taskButton.addEventListener("click",()=>{
            task_container.style.display = "";
           note_container.style.display = "none";
                    noteButton.style.borderBottom = ""
                             taskButton.style.borderBottom = "3px solid green"

})

function taskFilterTag(){
      let status = document.querySelectorAll("#all_tab .tab button");
      let lineBar = document.querySelectorAll("#all_tab .tab ");
      let taskItem = document.querySelectorAll("#task_container #task");
              lineBar[0].style.borderBottom = "2px solid blue"

                        status.forEach((btu)=>{
                          btu.addEventListener("click",()=>{

                           if(btu.value === "all"){
                             lineBar[0].style.borderBottom = "2px solid blue"
                              lineBar[1].style.borderBottom = ""
                               lineBar[2].style.borderBottom = ""
                                      console.log("all was pressed") ;
                                  taskItem.forEach((task)=>{
                                          task.style.display =""
                                  })

                           }
                           
                           if(btu.value === "complete"){
                               lineBar[0].style.borderBottom = ""
                              lineBar[1].style.borderBottom = "2px solid blue"
                               lineBar[2].style.borderBottom = ""
                            
                            console.log("complete was pressed")  
                              taskItem.forEach((task)=>{
                                        
                                 if(task.classList.contains("complete")){
                                              task.style.display ="" ;
                             

                            }else{
                                       task.style.display = "none" 
                                  }
        
                            })

                           }

                             if(btu.value === "pending"){
                                lineBar[0].style.borderBottom = ""
                              lineBar[1].style.borderBottom = ""
                               lineBar[2].style.borderBottom = "2px solid blue"
                            

                                  console.log("pending was pressed")  
                              taskItem.forEach((task)=>{
                                        
                                 if(task.classList.contains("pending")){
                                              task.style.display ="" ;
                             

                            }else{
                                       task.style.display = "none" 
                                  }
        
                            })


                           
                           }


                          

                          })

                        })
                    
      

}


function addTask(taskname,dueDate,tag){


let  newTask = document.createElement("div") ;
newTask.classList.add("pending");
newTask.id = "task" ;


newTask.innerHTML =`

       <input type="checkbox" class="task_checkbox">
                           <div class="task_content">
                            <span class="task_name">${taskname}</span>
                            <div id="logs">
                                <span class="due-date">due date: ${dueDate} </span>
                                <span class="tags" >${tag}</span>
                            </div>
                           </div>
                            <button class="delete_task">🗑️</button>


`
            let tasksListContainer = document.querySelector("#task_container");

            tasksListContainer.appendChild(newTask) ;

                     // checkbox logic
    let checkbox = newTask.querySelector(".task_checkbox");

    checkbox.addEventListener("change", () => {

        if (checkbox.checked) {

           newTask.classList.remove("pending");
            newTask.classList.add("complete");

            newTask.querySelector(".task_name").style.textDecoration = "line-through";

        } else {

            newTask.classList.remove("complete");
            newTask.classList.add("pending");

            newTask.querySelector(".task_name").style.textDecoration = "none";
        }

    });

    // delete logic
    let deleteBtn = newTask.querySelector(".delete_task");

    deleteBtn.addEventListener("click", () => {
        newTask.remove();
    });




}


  let openBtn = document.querySelector("#add_task");

let closeBtn = document.querySelector("#close_popup");

let overlay = document.querySelector("#popup");
 
let hiddenbox = document.querySelector(".hidden")
let addbutton = document.querySelector("#add-task-btn")

hiddenbox.style.display = "none"

// OPEN POPUP

openBtn.addEventListener("click", ()=>{

    overlay.classList.remove("hidden");
    
     hiddenbox.style.display = ""


});


// CLOSE POPUP

closeBtn.addEventListener("click", ()=>{

    overlay.classList.add("hidden");
     hiddenbox.style.display = "none"

});


addbutton.addEventListener("click",()=>{

      let taskTital = document.querySelector("#task_name").value;
      let taskDue = document.querySelector("#due_date").value;
      let tasktag = document.querySelector("#category").value;

       

          
    overlay.classList.add("hidden");
     hiddenbox.style.display = ""
     
        addTask(taskTital,taskDue,tasktag) ;
        taskFilterTag();

})













