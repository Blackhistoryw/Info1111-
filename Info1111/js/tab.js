let tabName=document.querySelector("#tabNav");//Get tabNav selector Assign value to tabName
/* console.log(tabName); */
let lis=tabName.querySelectorAll("li");//Get all li in tabName

let items=document.querySelectorAll(".item");//Get item selector
//items.forEach(value=>console.log(value));//Test if the selector is fetched

for(let i=0;i<lis.length;i++){//Iterate over the li in the tabnav array
	lis[i].onclick=function(){//Add click-triggered events to i-indexed li
		lis.forEach(value=>{value.className='';});//Set the style of all li to empty, i.e. cancel the original style
		lis[i].className='active';//Set the currently traversed li to the active style
		
		items.forEach(value=>{value.className='item'});//Set the contents of the item to be hidden when it is clicked
		items[i].className='item show';//Set the index of this traversal to display the content
	}
}