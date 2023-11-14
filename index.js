const requestButton = document.getElementById("request-button");
const autoDetails = document.querySelector(".auto-details");
// const model = document.querySelector(".model")
// const brand = document.querySelector(".brand")
// const fuelType = document.querySelector(".fuel_type")
// const price = document.querySelector(".price")

// if (!autoDetails.hasChildNodes){

let flag = true;

async function getAutosData() {

  const autosUrl = "https://raw.githubusercontent.com/derkach2288/derkach2288-.github.io/main/autos.json";

  const response = await fetch(autosUrl);
  // console.log(response);

  if (response.ok) {
    const result = await response.json();
    // console.log(result)  
    const autosInfo = result.products;
    // console.log(autosInfo[0]);

    // brand.textContent = autosInfo[0].brand;
    // model.textContent = autosInfo[0].model;
    // fuelType.textContent = autosInfo[0].fuel_type;
    // price.textContent = autosInfo[0].price;
    
  
      autosInfo.forEach((auto) => {
        const div = document.createElement("div");
        div.innerHTML = `
          <p><strong>brand:</strong> ${auto.brand}</p>
          <p><strong>model:</strong> ${auto.model}</p>
          <p><strong>fuel Type:</strong> ${auto.fuel_type}</p>
          <p><strong>price:</strong> ${auto.price}</p>
          <br>
        `
  
        if (flag){
          autoDetails.appendChild(div);
          flag = false;
        }
        autoDetails.appendChild(div);
        // brand.textContent = auto.brand;
        // model.textContent = auto.model;
        // fuelType.textContent = auto.fuel_type;
        // price.textContent = auto.price;
      })

  } else {
    console.log("Some Error");
  }

}
  requestButton.addEventListener("click", getAutosData);

// }