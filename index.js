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
  const exampleBook = {author:"John", title:"Doe", date:1995};

  book_array.push(exampleBook);

  // Create the books table
  book_array.forEach(element => 
    {
        // create a table row
        let tableRow = document.createElement("tr");
        

        // Get the book info
        let author = "Author: " + element.author;
        let title = "Title: " + element.title;
        let date = "Date: " + element.date;
        let book = author + title + date;

        console.log(book);

        // add info to the row
        tableRow.innerHTML = ` <td> ${author} </td>
        <td> ${title} </td>
        <td> ${date} </td>
        <button id="deleteButton" type="button">Delete!</button>
        ` 


        
        


        
        

         let tableDiv = document.getElementById("booksTable");

         tableDiv.appendChild(tableRow);

        

    });

  















// Button


let libraryButton = document.getElementById("libraryButton");


libraryButton.addEventListener("click", (e) => 
{
    //e.preventDefault();
    
});