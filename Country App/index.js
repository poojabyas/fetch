let cont = document.getElementById("container");
let button = document.getElementById("sortBtn");


button.addEventListener("click", function(){
    fetchData();
})

async function fetchData(){
    try {
        let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries")
        
        let data = await res.json()
         console.log(data)

         showData(data.data)
    } catch (error) {
        console.log(error)
        
    }
}

function showData(data){
    data.forEach(element => {
          let sepDiv = document.createElement("div");
          sepDiv.className = "sepdiv"
        
          let ID = document.createElement("h4");
          ID.innerHTML = element.id

          let Rank = document.createElement("h4");
          Rank.innerHTML = element.rank

          let Population = document.createElement("p");
          Population.innerHTML = element.population

          let Country = document.createElement("h4");
          Country.innerHTML = element.country

        sepDiv.append(Country,ID,Rank,Population)
        cont.appendChild(sepDiv)


    });
}