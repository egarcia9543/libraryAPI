function fetchBook(isbn) {
    fetch(`https://openlibrary.org/isbn/${isbn}`)
    .then (response => response.json())
    .then (data => console.log(data))
}

function buscar() {
    indentifier = document.getElementById("search").value 
    fetchBook(indentifier);
}