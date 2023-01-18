
// const getCountryByName = () => { 
//     fetch("https://restcountries.com/v3.1/all")
//     .then(response => response.json()) 
//     .then(data => console.log(data)) 
   

// }

// getCountryByName()
 

   // asynch/await version


 
 
 
 
 
 
 
//    const getCountryByName = async () => {
    
//  const response = await fetch("https://restcountries.com/v3.1/all");
//  const jsonData = await response.json();
//  document.querySelector("section").places=data.message
 
// const name


//  }

//  getCountryByName()









// const countries = document.getElementById('places')


//  const getCountryByName = () => { 
//      fetch("https://restcountries.com/v3.1/name/{name}")
//      .then(response => response.json()) 
//      .then(responseJson => document.createElement("section").document.section.appendChild(data)) 
   

//  }

// getCountryByName(Somalia)
 

// document.addEventListener('DOMContentLoaded', () => {
// const name = document.getElementById('countries')
// document.section.appendChild(name)

// const getCountryByName = () => { 
//          fetch("https://restcountries.com/v3.1/all")
//          .then(response => {
//             return response.json();
//          }).then(data => {
//             const output = "";
//             data.forEach(country => {
//                 output += `<option> ${country.name} </option>`;
//             })
//             name.innerHTML = output;

//         //console.log(data)
//          })
        
       
    
//      }

//      getCountryByName()

// });



const searchButton =document.querySelector(".search-btn");
const inputBar =document.querySelector(".input-bar")

 const getCountryByName = () => { 
     fetch(`https://restcountries.com/v3.1/all`)
     .then(response => response.json()) 
     .then(data => console.log(data)) 
   };

   searchButton.addEventListener("click", getCountryByName)

   const displayCountries = (data) => {
    data.forEach(country => {
    
        const section = document.getElementById('section')
        const header = document.createElement('h2')

        result.appendchild(section);
    
    //section.innerHTML = <section>`${country.name}` </section>
        //console.log(country.name);
    })
   }
  
 getCountryByName()


 
 
 
 
 
 
//  const getAllCountries = () => { 
//     fetch(`https://restcountries.com/v3.1/all`)
//     .then(response => response.json()) 
//     .then(data => console.log(data)) 
//   };

//   searchButton.addEventListener("click", getCountryByName, getCountryByPopulation)

//   const displayAllCountries = (data) => {
//    data.forEach(country => {
//    const div = document.createElement('div')
//        //console.log(country.name);
//    })
  //}