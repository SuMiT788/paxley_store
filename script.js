const packs = [
  {
    price: "25",
    diamonds: "14",
  },
  {
    price: "70",
    diamonds: "42",
  },
  {
    price: "92",
    diamonds: "79",
  },
  {
    price: "115",
    diamonds: "86",
  },
  {
    price: "184",
    diamonds: "156",
  },
  {
    price: "230",
    diamonds: "172",
  },
  {
    price: "275",
    diamonds: "232",
  },
  {
    price: "345",
    diamonds: "258",
  },
  {
    diamonds: "312",
    price: "390",
  },
  {
    diamonds: "344",
    price: "460",
  },
  {
    diamonds: "430",
    price: "575",
  },
  {
    diamonds: "514",
    price: "690",
  },
  {
    diamonds: "636",
    price: "757",
  },
  {
    diamonds: "706",
    price: "850",
  },
  {
    diamonds: "1050",
    price: "1310",
  },
  {
    diamonds: "1976",
    price: "2276",
  },
  {
    diamonds: "2195",
    price: "2540",
  },
  {
    diamonds: "3321",
    price: "3791",
  },
  {
    diamonds: "3688",
    price: "4440",
  },
  {
    diamonds: "4980",
    price: "5688",
  },
  {
    diamonds: "5532",
    price: "6410",
  },
  {
    diamonds: "8360",
    price: "9482",
  },
  {
    diamonds: "9288",
    price: "10700",
  },
];

function insertPacks() {
  console.log("-> packs:", packs);
  const container = document.getElementById("pack_info");

  container.innerHTML = "";

  let i = 0;
  while (i < packs.length) {
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    for (let j = 0; j < 3 && i < packs.length; j++, i++) {
      const value = packs[i];
      const newDiv = document.createElement("div");
      newDiv.classList.add("col-sm");
      newDiv.classList.add("card");

      // Create span elements for each text
      const priceSpan = document.createElement("span");

      const diamondDiv = document.createElement("div");
      diamondDiv.classList.add("diamond-div");

      const descriptionSpan = document.createElement("span");
      descriptionSpan.classList.add("span-bold");
      const diamondImg = document.createElement("img");
      diamondImg.setAttribute("src", "./assets/diamonds.png");

      // Set the text content for each span
      priceSpan.textContent = "₹" + value.price;
      descriptionSpan.textContent = value.diamonds + " Diamonds"; // Assuming you have a 'description' property in your value object

      diamondDiv.appendChild(descriptionSpan);
      diamondDiv.appendChild(diamondImg);

      // Append the spans to the newDiv
      newDiv.appendChild(diamondDiv);
      newDiv.appendChild(priceSpan);

      newRow.appendChild(newDiv);
    }

    container.appendChild(newRow);
  }
}

insertPacks();
