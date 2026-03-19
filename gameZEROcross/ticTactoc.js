let but = document.querySelectorAll('#board3x3 .cell') ;
let view = document.querySelector('#setup #viewer p') ;
let replay = document.querySelector('#control #buttonBox button')
let winnerpatt = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6],

]

let board = ['','','','','','','','','']

function checkwinner(){
    for(let win of winnerpatt){
        let a = board[win[0]] ;
           let b = board[win[1]] ;
              let c = board[win[2]] ;

              if(a !== "" && a === b && b === c){
                return a ;
              }
    }
    return null ;
}
let player = 'O'
but.forEach((btn,index)=>{
 btn.addEventListener("click",()=>{  
                board[index] = player ;
                console.log(player) ;
           btn.innerText = player ;         
           let winner = checkwinner();

          if(winner){
              view.innerText = `player ${player} won hurrr` ;
            but.forEach(btn => btn.disabled = true)
          }else{
                but[index].disabled = true;
       player = player === 'O'? 'X' : 'O'; 

             view.innerText = `player ${player} turn` ;
          }

          replay.addEventListener("click",function(){
                    board = ['','','','','','','','','']    ;
                     but.forEach(btn => btn.disabled = false) ;
                     but.forEach(btn => btn.innerText = '') ;
                     View.innerText = `player ${player} turn`

          });
 }) 
});