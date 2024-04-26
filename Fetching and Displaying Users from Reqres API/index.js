// let cont = document.getElementById("cont");
let button = document.getElementById("fetchbtn")
let userDataDisplay = document.getElementById("userDataDisplay")

button.addEventListener("click", function(){
    fetchData()
})

async function fetchData(){
    try {
        let res = await fetch("https://reqres.in/api/users")
        let data = await res.json();
        console.log(data)

        showData(data.data)
        
    } catch (error) {
        console.log(error)
        
    }
}
function showData(users){
    userDataDisplay.innerHTML=""

  users.forEach(user => {
    userDataDisplay.innerHTML+=`
    <div class="user-card">
    <img src="${user.avatar}" alt="" class="user-avatar">
    <div class="user-name">${user.first_name} ${user.last_name}</div>
    <div class="user-email">${user.email}</div>
</div>
    `
  });  
}