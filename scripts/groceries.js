	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli $1.99",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		organic:true
	},
	{
		name: "Bread $2.35",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		organic:false

	},
	{
		name: "Salmon $10.00",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
		organic:false

	},

	{
		name: "Chicken $8.99",
		vegetarian: false,
		glutenFree: true,
		price: 8.99,
		organic:false

	},

	{
		name: "Macaroni $2.99",
		vegetarian: false,
		glutenFree: false,
		price: 2.99,
		organic:false

	},

	{
		name: "Cake mix $3.99",
		vegetarian: false,
		glutenFree: false,
		price: 3.99,
		organic:true

	},

	{
		name: "Jam $4.99",
		vegetarian: true,
		glutenFree: true,
		price: 4.99,
		organic:true

	},

	{
		name: "Banana $2.25",
		vegetarian: true,
		glutenFree: true,
		price: 2.25,
		organic:true

	},

	{
		name: "Eggs $1.50",
		vegetarian: false,
		glutenFree: true,
		price: 1.50,
		organic:true

	},

	
	{
		name: "Apples $2.49",
		vegetarian: true,
		glutenFree: true,
		price: 2.49,
		organic:true
	}

];
	
products = products.sort((a, b) => (a.price > b.price) ? 1 : -1)



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {

		
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Gluten Free") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}

		else if((restriction == "GlutenFree and Vegetarian") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) ){
			product_names.push(prods[i].name);
		}

		else if((restriction == "Organic") && (prods[i].organic == true) ){
			product_names.push(prods[i].name);
		}

		else if((restriction == "GlutenFree and Organic") && (prods[i].organic == true) && (prods[i].glutenFree == true) ){
			product_names.push(prods[i].name);
		}

		else if((restriction == "GlutenFree and Vegetarian") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) ){
			product_names.push(prods[i].name);
		}

		else if((restriction == "Vegetarian and Organic") && (prods[i].vegetarian == true) && (prods[i].organic == true) ){
			product_names.push(prods[i].name);
		}

		else if((restriction == "GlutenFree, Vegetarian and Organic") && (prods[i].organic == true) && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) ){
			product_names.push(prods[i].name);
		}

		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	
	}
	return product_names;
}





// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
