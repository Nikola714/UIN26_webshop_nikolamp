document.getElementById("cart-button").addEventListener("click", function(){
    document.getElementById("cart").classList.toggle("hidden") //legge til ny class som heter hidden
})


//Funksjon for produktopplisting: den funksjon viser produkter kort på nettside, vi brukte den metode isteden for html strukturen i index.html
function fetchProducts(){
    let productHTML = ""

    products.map(p => productHTML += `
        <article class="product-card">
                <img src="website_images/PROD_${p.imagefile}" alt="${p.title}">
                <a href="#">${p.category}</a>
                <h3>${p.title}</h3>
                <p>Kr. ${p.price} ,-</p>
                <button onClick="addToCart(${p.prodid})" > Legg til handlevogn</button>
        </article>`)
    document.getElementById("product-list").innerHTML = productHTML
}

fetchProducts()


//Funksjon for å generere handlevogn 
function showCart(){
//Unike produkter
    let uniqueItems = new Set(cart)     //new Set er datastruktur som ikke tillater duplikater, dvs. at i handlevogn vi kan ikke se to eller flere ganger det samme produkt
    let uniqueArray = [...uniqueItems] //lage Array med produkter


    //Oversikt over antall per produkt
    let cartItems = [] //lage en tom array (liste) som skal fylle med objekter
    uniqueArray.map(item => { //går gjennom hvert unike produkt fra array med unike produkter som vi laget over
        //lager objekt og legger det i cartItems som er liste i handlevogn for produkter
        cartItems.push({prodid: item,
             quantity: cart.filter(i => i === item).length}) //teller hvor mange ganger produktet finnes, altså hvor mange ganger brukeren lagt et produkt til handlevogn
    }) 


    //Gå gjennom cartItems (dvs. elementer som brukeren lagt til handlevogn) for å lage HTML til handlekurven og regne ut totalpris
    let cartHTML = "" //utskrift for lagt produkter i handlevogn
    let totalPrice = 0 //start verdi for sum av alle produkter i handlevogn

    // ci er forkortelse av cartItems
    cartItems.map(ci => { //Fordi cartItems inneholder prodid, kan du finne: tittel og pris
        //hente produktinformasjon
        let product = products.find(i => i.prodid === ci.prodid) //lage variabel som skal gå gjennom array med alle produkter, finner id for produkt og sjekker om den har samme id som produkt fra handlevogn

        //Skrive ut HTML 
        cartHTML += `<tr>
                        <td><img class="cart-img" src="website_images/PROD_${product.imagefile}" alt="${product.title}"></td>
                        <td class="title">${product.title}</td>
                        <td class="price">${product.price}</td>
                        <td class="quantity">${ci.quantity}</td>
                        <td class="delete"><button onClick="deleteFromCart(${product.prodid})">X</button></td>
                     </tr>`

        //Summere totalpris
        totalPrice += Number(product.price) * Number(ci.quantity) //bruke Number for å sikre at vi jobber med tall; 
        // sum av alle produkter i handlevogn: pris som tilhører alle produkter i handlevogn og mengde av produkter
    })

    //Hva som skjer hvis i handlevogn er ikke noe produkt
    if(cart.length === 0){
        cartHTML += "<tr><td>Ingen varer i handlevognen.</td></tr>"
    }


    //Oppdatere HTML-elementer
    document.getElementById("cart-items").innerHTML = cartHTML  //skrive ut informasjon om produkt dvs. navn, prris, antall og knappen for å slette, som er koble sammen med id for produkt
    document.getElementById("total-price").innerHTML = totalPrice //skrive ut summen
    document.getElementById("cart-quantity").innerHTML = cart.length  //skrive ut antall produkter som er i handlevogn
}


    //Slett produkt fra handlevogn
    function deleteFromCart(prodid){
        let deleteIndex = cart.indexOf(prodid) //finner plasseringen (indeksen) til dette produktet i cart-arrayet

        //denne if-test sørger for at vi ikke prøver å slette noe som ikke finnes.
        if(deleteIndex > -1){
            cart.splice(deleteIndex, 1) //sletter bare et produkt
        }

        //Oppdatere handlevogn-utskrift
        showCart()
    }





//Legg til handlevogn
function addToCart(prodid){
    console.log("Legg til produkt med id: " + prodid)
    cart.push(prodid)
    console.log(cart)
    // document.getElementById("cart-quantity").innerHTML = cart.length
    
    
    //Oppdater handlevisning:
    showCart()
}