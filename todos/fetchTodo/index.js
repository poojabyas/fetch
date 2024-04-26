let cont = document.getElementById("cont");

let button = document.getElementById("fetchbtn")

button.addEventListener("click",function(){
    fetchData()
})
async function fetchData(){
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos");
        let res = await response.json();
        console.log(res)

        displayData(res);
    } catch (error) {
     console.log(error) ;  
    }
}
function displayData(res){
    res.forEach(element => {
        let subDiv = document.createElement("div");
        subDiv.classname = "subDiv";

        let userID = document.createElement("h3")
        userID.innerHTML = element.userId;

        let ID = document.createElement("h3")
        ID.innerHTML = element.id;

        let title = document.createElement("p")
        title.innerHTML = element.title;

        let checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        checkbox.checked = element.completed;


        subDiv.append(userID,ID,title,checkbox);
        cont.appendChild(subDiv)
    });
}