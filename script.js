const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const pricesarray=document.querySelectorAll("price")
	var totalsum=0
	for(let eachprice of pricesarray){
		totalsum+=eachprice
	}
	const tabletotal=document.getElementByTagName("table")
	const lastrow=document.createElement("tr")
	lastrow.innerHtml="totalsum"
	tabletotal.append("lastrow")
	document.body.appendChild("tabletotal")
	
  
};

getSumBtn.addEventListener("click", getSum);

