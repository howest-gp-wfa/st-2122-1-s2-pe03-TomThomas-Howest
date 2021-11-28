"use strict";

window.addEventListener("load",initialize);

let slcProductCategories;
let slcCategoryDetails;
let divProductInfo;
let sctShopping;
let divShoppingList;
let allData;
let animals;
let selectedCategory;


function initialize(){

    bindHTMLTags();
    addEventListeners();
    json();
    selectCategorySource();
    changeCategory();
}

function bindHTMLTags(){
    slcProductCategories = document.getElementById("product-categories");
    slcCategoryDetails = document.getElementById("category-details");
    divProductInfo = document.getElementById("product-info");
    sctShopping = document.getElementById("shopping");
    divShoppingList = document.getElementById("shopping-list");
}

function addEventListeners(){
    slcProductCategories.addEventListener("change", changeCategory);
    slcCategoryDetails.addEventListener("change", detailsChange);
}

function detailsChange(){

}

function json(){
    allData = fetch("https://howest-gp-wfa.github.io/st-2122-1-s2-pe03-TomThomas-Howest/api/data.json")
    .then(response=>response.json());
}

function selectCategorySource(){

        const optCat1 = document.createElement("option");
        optCat1.textContent = "Freshwater";
        optCat1.value = "freshwater"
        slcProductCategories.appendChild(optCat1);

        const optCat2= document.createElement("option");
        optCat2.textContent = "Saltwater";
        optCat2.value = "saltwater";
        slcProductCategories.appendChild(optCat2);

        const optCat3 = document.createElement("option");
        optCat3.textContent = "Products";
        optCat3.value = "products";
        slcProductCategories.appendChild(optCat3);
}

function changeCategory(){

    while(slcCategoryDetails.lastElementChild) {
        slcCategoryDetails.removeChild(slcCategoryDetails.lastElementChild);
    }

    if (slcProductCategories.selectedIndex !== -1) {
        fillCategoryProducts();
    }

}

function fillCategoryProducts(){

    const selectedValue = slcProductCategories[slcProductCategories.selectedIndex].value;

    if("freshwater"===selectedValue){
        allData.then(function(data){
            selectedCategory = data.freshwater;
            data.freshwater.forEach(element => {
            const optProd = document.createElement("option");
            optProd.textContent = element.name;
            optProd.value = element.name;
            slcCategoryDetails.appendChild(optProd);
            });
        });
    }
    if("saltwater"===selectedValue){
        allData.then(function(data){
            selectedCategory = data.saltwater;
            data.saltwater.forEach(element => {
                const optProd = document.createElement("option");
                optProd.textContent = element.name;
                optProd.value = element.name;
                slcCategoryDetails.appendChild(optProd);
            });
        });
    }
    if("products"===selectedValue){
        allData.then(function(data){
            
            selectedCategory = data.products;
            
            data.products.forEach(element => {
                const optProd = document.createElement("option");
                optProd.value = element.name;
                optProd.textContent = element.name;
                slcCategoryDetails.appendChild(optProd);
            });
        });
    }
}

function detailsChange(){

    while(divProductInfo.lastElementChild){
        divProductInfo.removeChild(divProductInfo.lastElementChild);
    }
    if(slcCategoryDetails.selectedIndex !== -1){
        const selectedProdValue = slcCategoryDetails[slcCategoryDetails.selectedIndex].value;
        const selectedProduct = selectedCategory.find(product=>product.name === selectedProdValue);

        const divProd = document.createElement("div");
        const hdrProd = document.createElement("h2");
        const imgProd = document.createElement("img");
        if(selectedCategory[0].name==="Freshwater Flakes"){
            imgProd.src = selectedProduct.image;
        }
        else{
            imgProd.src = selectedProduct.info.image;
        }
        hdrProd.textContent = selectedProduct.name;
        divProd.appendChild(hdrProd);
        divProd.appendChild(imgProd);
        divProductInfo.appendChild(divProd);
    }
}