// TRAVIRSING THE DOM

// const itemList = document.querySelector('#items');

// itemList.parentNode.style.background = 'gray';

// child Nodes
// console.log(itemList.childNodes);

// children
// console.log(itemList.children[3]);

// first element child
// console.log(itemList.firstElementChild)



const submitBtn = document.querySelector('input[type="submit"]')

console.log(submitBtn);

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()


    const inputEle = document.querySelector('.form-control');

    // UL
    const ul = document.querySelector('ul[id="items"]');

    // first create li and add it to the node  
    const li = document.createElement('li');
    textNode = document.createTextNode(inputEle.value)
    li.className = 'list-group-item';
    li.appendChild(textNode);
    ul.appendChild(li);

})