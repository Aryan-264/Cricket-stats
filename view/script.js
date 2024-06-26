const apiurl= "http://localhost:3000/go?name="

 let search = document.querySelector(".box")
 let btn = document.querySelector(".btn")
 let nam = document.querySelector(".nam")
 let stats = document.querySelector(".stats")
 let er= document.querySelector(".err")
 


async function getData(value){
    const response = await fetch("http://localhost:3000/go?name="+value)
    var data = await response.json()
    console.log(data)
    // console.log(data.data.length)
    if (data.data.length!=0) {
        stats.style.display="block"
        er.style.display="none"
        const table = document.querySelector('.table');
        nam.textContent=data.data[0].name
        table.rows[1].cells[1].textContent = data.data[0].format.ODI.matches;
        table.rows[1].cells[2].textContent = data.data[0].format.T20.matches;
        table.rows[1].cells[3].textContent = data.data[0].format.Test.matches;
    
        table.rows[2].cells[1].textContent = data.data[0].format.ODI.runs;
        table.rows[2].cells[2].textContent = data.data[0].format.T20.runs;
        table.rows[2].cells[3].textContent = data.data[0].format.Test.runs;
        
        table.rows[3].cells[1].textContent = data.data[0].format.ODI.average;
        table.rows[3].cells[2].textContent = data.data[0].format.T20.average;
        table.rows[3].cells[3].textContent = data.data[0].format.Test.average;
        
        table.rows[4].cells[1].textContent = data.data[0].format.ODI.centuries;
        table.rows[4].cells[2].textContent = data.data[0].format.T20.centuries;
        table.rows[4].cells[3].textContent = data.data[0].format.Test.centuries;
    }
    else{
        stats.style.display="none"
        er.style.display="block"
    }
}


btn.addEventListener("click",(evt)=>{
        getData(search.value)
    })
    search.addEventListener("keydown", (evt) => {
        if (evt.keyCode === 13) { // Check if Enter key was pressed
            getData(search.value);
        }
    });




















