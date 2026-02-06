import './style/lego.css'
import { products } from './assets/legodudes'
import { useState } from 'react'
function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])

  console.log("Cart", cart)


  function Header({setIsOpen}){
    return(
      <header>
        <h1>
          <a href="index.html">             
            <img src="website_images/LD_logo.svg" alt="LEGOdudes" />
          </a>
          </h1>
          <button id="cart-button" onClick={()=> setIsOpen((prev) => !prev)}>
            <div id="cart-quantity">0</div>
            <img src="website_images/legocart.svg" alt="Handlevogn" />
          </button>
      </header>
    )
  }

  function Nav(){
    return(
       <nav>
          <a href="#">City</a>
          <a href="#">Ninjago</a>
          <a href="#">Castles & Knights</a>
          <a href="#">Marine & Pirates</a>
          <a href="#">Movie characters</a>
        </nav>
    )
  }

  function CategoryTitle(){
    return (<h2>Ninjago</h2>)
  }

  function Products({products, setCart}){
    return (
    <div id="product-list">
      {products.map(p => <ProductCard key={p.prodid} p={p} setCart={setCart}/>)}
      
    </div>)
  }

  function ProductCard({p, setCart}){
    const handleClick = ()=>{
      setCart("Funker")
      console.log("Legg i handlekurv")
    }

    return (
      <article className="product-card">
          <img src={`website_images/PROD_${p.imagefile}`} alt={p.title} />
          <a href="#">${p.category}</a>
          <h3>{p.title}</h3>
          <p>Kr. {p.price},-</p>
          <button onClick={handleClick}>Legg til handlevogn</button>
      </article>
    )
  }

  function Cart({isOpen}){
    return (
      <section id="cart" className={isOpen ? "" : "hidden"}>
            <table id="cart-items">
              <tbody>
                  <tr>
                    <td>Ingen varer i handlevognen enda.</td>
                  </tr>
              </tbody>
            </table>
            <p>Total pris: <span id="total-price">0</span>NOK</p>
        </section>
    )
  }
  
  function CartItem(){
    return (
      <tr>
        <td className="title">${product.title}</td>
        <td className="price">${product.price}</td>
        <td className="quantity">${ci.quantity}</td>
        <td className="delete"><button onClick="deleteFromCart(${product.prodid})">X</button></td>
      </tr>
    )
  }  


  return (
    <div id="container">
      <Header setIsOpen={setIsOpen} />
      <Nav />
      <main>
        <CategoryTitle />
        <Products products={products} setCart={setCart} />
      </main>
      <Cart isOpen={isOpen} />
    </div>
  )
}

export default App
