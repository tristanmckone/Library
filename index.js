// Create a book class

class Book {
    constructor(author, title, date) {
      this.author = author;
      this.title = title;
      this.date = date;
      
    }
  }

  // Create the array
  const book_array = [];

  // create a book and add it to the array
  // const exampleBook = {author:"John", title:"Doe", date:1995};
  // const exampleBook2 = {author:"John", title:"Doe", date:1995};

  // book_array.push(exampleBook);
  // book_array.push(exampleBook2);

// Button


let libraryButton = document.getElementById("libraryButton");




libraryButton.addEventListener("click", (e) => 
{
    e.preventDefault();

    //Clear the Table if there is one.
    let tableDiv = document.getElementById("booksTable");
    if (tableDiv.hasChildNodes())
    {
      tableDiv.innerHTML = "";
    }
    
    

    // Get the textbox inputs

    //Author
    let author = document.getElementById("author").value;

    //Title
    let title = document.getElementById("title").value;

    //Date
    let date = document.getElementById("date").value;

   // Create the object
    const book = {author:author, title:title, date:date};

    // push the object to the array
    book_array.push(book);


    book_array.forEach(element => 
      {
          // create a table row
          let tableRow = document.createElement("tr");
          tableRow.setAttribute("id","tableRow");
    
          // Get the book info
          let author = "Author: " + element.author;
          let title = "Title: " + element.title;
          let date = "Date: " + element.date;
         
    
          // add info to the row
          tableRow.innerHTML = ` <td> ${author} </td>
          <td> ${title} </td>
          <td> ${date} </td>
          <button id="deleteButton" type="button">Delete!</button>
          ` 
    
           let tableDiv = document.getElementById("booksTable");
    
           tableDiv.appendChild(tableRow);
    
           console.log(book_array);
    
          
          // add event listener to parent of delete button, to use delete
      tableRow.addEventListener("click", (e) => 
    {
      
      let tableDiv = document.getElementById("booksTable");
      tableDiv.removeChild(tableRow);


      // remove the book
      book_array.forEach((book, index) =>
      {
        if(book.title === title)
        {
          book_array.splice(index,1);
        }
      })
    
    
    
    
    
      
    });
    
          
    
      });
   
});





