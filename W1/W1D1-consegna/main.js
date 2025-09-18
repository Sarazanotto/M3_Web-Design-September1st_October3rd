// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". 
// Deve avvenire al caricamento della pagina, automticamente.

/*const linkTwitter = document.querySelector(".blog-sidebar .p-4:nth-of-type(3) ol li:nth-of-type(2)")

function linkTwitterRemouve() {
    if (linkTwitter)
        linkTwitter.remove()
}
linkTwitterRemouve()*/


function removeElement(element) {
    element.remove();
}

removeElement(linkTwitter)

// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

const anchorsToRemove = document.querySelectorAll(".col a, .jumbotron p>a");

anchorsToRemove.forEach(anchor => {
    const parent = anchor.parentElement
    anchor.addEventListener("click", () => {
        removeElement(parent)
    })
})

// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

const authorsAlert = document.querySelectorAll(".blog-post-meta a")

authorsAlert.forEach(author => {
    author.addEventListener("mouseover", () => {
        alert(author.textContent)
    })
})



/**/