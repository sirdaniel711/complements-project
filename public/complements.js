// Complements Web App Project version 1.0
// By: sirdaniel711
// Linked files: index.html, server.js, Express server framework
//
// This front end client adds a event listener to a button from index.html.
// Once this button is clicked, it will request a complement from the server. 
//   -This is done using fetch("/complement"), where "/complement" refers to the path "http://localhost:3000/complement" from the server (server.js).
//   -This "http://localhost:3000/complement" path will cause the server to give us a random complement as a JSON object.
// Then, it will display that complement on the index.html page.

document
    .querySelector(".request-complement")
    .addEventListener("click", function() {
        fetch("/complement")
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                document.querySelector(".complement").innerText = data.complement;
            })
            .catch(function(err) {
                console.error(err);
            });
    });