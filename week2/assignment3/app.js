import DUMMYDATA from "./DUMMYDATA.json" assert { type: "json" };
const displayProductList = document.getElementById("productList");
const displayTotalPrice = document.getElementById("totalPrice");

const displayData = DUMMYDATA;

function calculate(data) {
  let total = 0;
  let finalPrice;
  const productList = data.products;
  const discount = Number(data.discount);

  for (let i = 0; i < productList.length; i++) {
    total += Number(productList[i].price);
  }

  finalPrice = total * (1 - discount);
  //   console.log(total);
  //   console.log(discount);
  console.log(`Total price : ${finalPrice}`);

  return finalPrice;
}

const calPrice = calculate(displayData);
displayData.totalPrice = calPrice;

// console.log(displayData);

function showDisplay(data) {
  const productList = data.products;
  const discount = data.discount;
  const undiscountPrice = calUndiscountTotal(productList);
  const totalPrice = data.totalPrice;

  displayList(productList);
  displayDiscount(discount, undiscountPrice);
  displayTotal(undiscountPrice, discount, totalPrice);
}

function displayList(productList) {
  for (let i = 0; i < productList.length; i++) {
    let productContainer = document.createElement("div");
    productContainer.className = "productContainer";

    let productName = document.createElement("div");
    productName.className = "productName";
    productName.appendChild(document.createTextNode(`${productList[i].name}`));

    let productPrice = document.createElement("div");
    productPrice.className = "productPrice";
    productPrice.appendChild(
      document.createTextNode(`$ ${productList[i].price}`)
    );

    productContainer.appendChild(productName);
    productContainer.appendChild(productPrice);
    displayProductList.appendChild(productContainer);
  }
}

function displayDiscount(discount, totalPrice) {
  let discountContainer = document.createElement("div");
  discountContainer.className = "discountContainer";
  discountContainer.appendChild(
    document.createTextNode(
      `Discount: ${discount * 100}% total discount:${discount * totalPrice}`
    )
  );

  displayProductList.appendChild(discountContainer);
}

function calUndiscountTotal(productList) {
  let total = 0;
  for (let i = 0; i < productList.length; i++) {
    total += Number(productList[i].price);
  }
  return total;
}

function displayTotal(undiscountPrice, discount, totalPrice) {
  let totalContainer = document.createElement("div");
  totalContainer.className = "totalContainer";

  let totalTitle = document.createElement("div");
  totalTitle.className = "totalTitle";
  totalTitle.appendChild(document.createTextNode(`Total`));

  let totalFormula = document.createElement("div");
  totalFormula.className = "totalFormula";
  totalFormula.appendChild(
    document.createTextNode(
      `${undiscountPrice} - ${discount * undiscountPrice} =`
    )
  );

  let total = document.createElement("div");
  total.className = "total";
  total.appendChild(document.createTextNode(`$ ${totalPrice}`));

  totalContainer.appendChild(totalTitle);
  totalContainer.appendChild(totalFormula);
  totalContainer.appendChild(total);
  displayTotalPrice.appendChild(totalContainer);
}
showDisplay(displayData);
