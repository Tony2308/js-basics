
//creating the close button on list items

let myList = document.getElementsByTagName('li');

for (var i = 0; i < myList.length; i++) {
	let span = document.createElement('span');
	let text = document.createTextNode('\u00D7');

	span.className = 'close';
	span.appendChild(text);

	myList[i].appendChild(span);
}


//clicking to close the list items

let closeItem = document.getElementsByClassName('close');

for (var i = 0; i < closeItem.length; i++) {
	
	closeItem[i].onclick = function closeItem() {
		let listItem = this.parentElement;
		listItem.style.display = 'none';
	}

}


// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');

list.addEventListener('click', function(event) 
	{if (event.target.tagName === 'li') 
			{event.target.classList.toggle('checked');} 
							}, false);
		

//creating new list item

function newListItem() {
	let li = document.createElement('li');
	let inputValue = document.getElementById('textInput').value;
	let text = document.createTextNode(inputValue);

	li.appendChild(text);

	if (inputValue === '') {
		alert('Title is required');
	} else{
		document.getElementById('myUl').appendChild(li);
	}

	//clear the text area after posting
	document.getElementById("textInput").value = '';

	//adding the closing button on every list item added
	
	let addedItem = document.createElement('span');
	let exx = document.createTextNode('\u00D7');
	addedItem.className = 'close';
	addedItem.appendChild(exx);
	li.appendChild(addedItem);

	//making the closing button interactive

	for (var i = 0; i < closeItem.length; i++) {
		closeItem[i].onclick = function(){
			let list = this.parentElement;
			list.style.display = 'none';
		}
	}

}

// use fucntions to reduce repetition
// variable declarations should be meaningful
//