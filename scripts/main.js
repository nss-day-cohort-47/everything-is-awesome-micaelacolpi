console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) =>{
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showAll"){
		makeLegoList(useLegos())
	}
})

navElement.addEventListener("click", (event) =>{
	if (event.target.id === "showGreen") {
		filterLegos("Green")
	} else if (event.target.id === "showAll"){
		makeLegoList(useLegos())
	}
})

///CLICK EVENTS FOR DROPDOWN///
navElement.addEventListener("change", (event) =>{
	console.log(event.target.value)
	if (event.target.id === "materialSelection") {
		const filter = event.target.value
		filterMaterial(filter)
	} else if (event.target.id === "showAll"){
		makeLegoList(useLegos())
	}
	console.log("you want to see solid legos",makeLegoList )
})

const filterMaterial = (filter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.Material.includes(filter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}


const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	})

}

startEIA();