document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form');
  const sortBtn = document.querySelector('#sortBTN');

  console.log("my sortBTN is: ", sortBtn);

  form.addEventListener('submit', function(e){
    e.preventDefault();
    let input = e.target.querySelector('#new-task-description').value;
    let priority = e.target.querySelector('#priorities').value;
    console.log("the input value is:",input," The priority is: ", priority);
    if(input !== ""){
      addToList(input, priority);
    }
  });

  sortBtn.addEventListener('click', function(e){toggleButton(e)});

  function addToList(listItem, priority){
    //debugger;
    const list = document.querySelector('#tasks');
    let myItem = document.createElement('li');
    
    myItem.innerHTML = listItem + " <span style=\"color:black\"><u>[delete]</u></span>";
    myItem.className = priority === "red" ? 3 : priority === "yellow" ? 2 : 1;
    myItem.style.color = priority;
    myItem.addEventListener('click', function(e){deleteItem(e)});
    list.appendChild(myItem);
    console.dir(list);
  }
  function deleteItem(e){
    e.target.parentNode.remove();
  }

  function toggleButton(e){
    console.log(e.target);
    
    const direction = e.target.innerText;
    const itemsArray = createTextArray(e.target.parentNode.querySelectorAll('li'));
  
    if (direction === "Ascending"){
      itemsArray.sort();
      console.dir(itemsArray);
      // debugger;
      e.target.innerText = "Descending";
    }else{

      itemsArray.reverse();
      e.target.innerText = "Ascending";
    }
    e.target.parentNode.querySelector('ul').innerHTML = createHTML(itemsArray);
  }

  function createTextArray(listNode){
    const resultArray = [];
    let i = 0;
    for(let listItem of listNode){
      // debugger;
      resultArray[i++] = listItem.outerHTML;
    }
    return resultArray;
  }

  function createHTML(textArray){
    let resultString = "";
    // debugger;
    for (let text of textArray){
      //text.replace(/\s\[delete\]/g,"");
      resultString += text; //`<li>${text}</li>`+ `<span style=\"color:black\"><u>[delete]</u></span>`;
      console.log(resultString);
    }
    return resultString;
  }
});