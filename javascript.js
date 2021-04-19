const notes = [

    {
        text: "go learn",
        completed: true
    },

    {
        text: "shopping",
        completed: false
    },

    {
        text: "sleep",
        completed: true
    },

]




const completed = notes.filter(function(note,index){
    return note.completed === true;
}).length

const  newP = document.createElement("p");
   newP.textContent = `you have ${completed} completed tasks`;
   document.querySelector("body").appendChild(newP);

notes.forEach(function (todo, index) {

   const  newP = document.createElement("p");
   newP.textContent = todo.text;
   document.querySelector("body").appendChild(newP);

})

const  newPar = document.createElement("p");
newPar.textContent = "new ssss text"
function addP(){ document.querySelector("body").appendChild(newPar)};

document.querySelector('#button').addEventListener('click', ()=>{addP()} )