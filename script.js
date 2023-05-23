const container = document.getElementById("container");
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = 'black';
    })
    //   cell.innerText = (c + 1);
      container.appendChild(cell).className = "grid-item";
    };
  };

  makeRows(16, 16);
  const button = document.getElementById("button");
  function promptGrid(){
    let gridSize= parseInt(prompt("Enter dimensions (Row x Column"));
   if(gridSize >100){
    alert("Too big")
   } else{
    container.innerHTML="";
    makeRows(gridSize,gridSize);
  }
  }
    
  //  function changeGrid(){
    
  // }  function changeGrid(){
    
  // } 