// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// ---------------- OPDRACHT 1: ARRAY METHODEN ----------------------

// 1A
const tvNames = inventory.map((tv) => {
  return tv.name;
});
console.log(tvNames);

//1B
const tvSoldOut = inventory.filter((tv) => {
  return tv.originalStock - tv.sold === 0;
});
console.log(tvSoldOut);

//1C
const tvAmbiLight = inventory.filter((tv) => {
  return tv.options.ambiLight === true;
});
console.log(tvAmbiLight);

//1D
const tvHighestPriceToLowest = inventory.sort((a, b) => {
  return a.price - b.price;
});
console.log(tvHighestPriceToLowest);



// ---------------- OPDRACHT 2: ELEMENTEN IN DE DOM PLAATSEN ----------------------

//2A
let tvsSold = 0;
for (let i = 0; i<inventory.length; i++) {
  tvsSold += inventory[i].sold;
}
console.log(tvsSold);

//2B
tvsSoldHTML = document.getElementById("tvs-sold");
tvsSoldHTML.textContent = tvsSold;

//2C
let tvsBought = 0;
for (let i = 0; i<inventory.length; i++) {
  tvsBought += inventory[i].originalStock;
}
console.log(tvsBought);

//2D
tvsBoughtHTML = document.getElementById("tvs-bought");
tvsBoughtHTML.textContent = tvsBought;

//2E
let tvsToBeSold = tvsBought-tvsSold;
tvsSoldHTML = document.getElementById("tvs-to-be-sold");
tvsSoldHTML.textContent = tvsToBeSold;


// ---------------- OPDRACHT 3 ARRAY METHODEN EN FUNCTIES ----------------------

//3A
// const tvBrands = inventory.map((tv) => {
//   return tv.brand + " ";
// });
// tvBrandsHTML = document.getElementById("tv-brands");
// tvBrandsHTML.textContent = tvBrands;
// console.log(tvBrands);

//3B
function showTvBrands () {
  const tvBrands = inventory.map((tv) => {
    return tv.brand + " ";
  });
  tvBrandsHTML = document.getElementById("tv-brands");
  tvBrandsHTML.textContent = tvBrands;
  console.log(tvBrands);
}

showTvBrands();



// ---------------- OPDRACHT 4 FUNCTIONS----------------------

//4A
let tvInfo= "";
function showTvInfo (tv) {
 return tvInfo = `${tv.brand} ${tv.type} - ${tv.name}`;
}
console.log(showTvInfo(inventory[4]));

// 4B
function showTvPrice (tv) {
  let tvPrice = "";
  return tvPrice = `€${tv.price},-
  `
}
console.log(showTvPrice(inventory[4]));

//4C
function availableScreenSizes (tv) {
  let tvScreenSize = "";
  for (let i = 0; i <tv.availableSizes.length; i++) {
    if (i === 0) {
      tvScreenSize += `${tv.availableSizes[i]} inch (${tv.availableSizes[i] * 2.5} cm)`;
    }
    else { tvScreenSize += `| ${tv.availableSizes[i]} inch (${tv.availableSizes[i] * 2.5} cm)`;
    }
    }
  return  tvScreenSize
}

console.log(availableScreenSizes(inventory[4]));

//4D
const philipsTV = document.getElementById("philips-tv");
let philipsTVInfo = `       ${showTvInfo( inventory[4])}</br>
                            ${showTvPrice(inventory[4])} </br>
                            ${availableScreenSizes(inventory[4])}`
philipsTV.innerHTML =
    `<p>
        ${philipsTVInfo}
    </p>`



//4E
const allTvInfo = document.getElementById("all-tvs");

function displayAllTvs (listOfTvs) {
  let allTvsInfoString ='';
  allTvsInfoString = listOfTvs.map((tv) => {
    return `
    </br>
    ${showTvInfo(tv)}</br>
    ${showTvPrice(tv)}</br>
    ${availableScreenSizes(tv)}</br></br>`
  });
  allTvInfo.innerHTML =
      `<p>
        ${allTvsInfoString}
      </p>`
}
displayAllTvs(inventory);



