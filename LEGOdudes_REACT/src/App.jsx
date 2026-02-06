import './style/lego.css'
import { products } from './assets/legodudes'
import { useEffect, useState } from 'react'
function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [cartQuanity, setCartQuanity] = useState(0)

  console.log("Cart", cart)

  useEffect(()=>{
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)
    setCartQuanity(totalQuantity)
  },[cart])


  function Header({setIsOpen, cartQuanity}){
    return(
      <header>
        <h1>
          <a href="index.html">             
            <img src="website_images/LD_logo.svg" alt="LEGOdudes" />
          </a>
          </h1>
          <button id="cart-button" onClick={()=> setIsOpen((prev) => !prev)}>
            <div id="cart-quantity">{cartQuanity}</div>
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
      setCart((prev) => 
        prev.some(item => item.prodid === p.prodid) ?
        prev.map(item => item.prodid === p.prodid ? {...item, quantity: item.quantity + 1}
        : item) : [...prev, {...p, quantity: 1}])

        
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

  function Cart({isOpen, cart, setCart}){
    return (
      <section id="cart" className={isOpen ? "" : "hidden"}>
            <table id="cart-items">

              <tbody>
                {/*Hvis cart.lenght er mindre enn 0, dvs. hvis i handleliste er ikke noe produkt, return tekst "Ingen varer..." hvis minst et produkt er i handlevogn så skriv verdi for den produkt*/}
                {cart.lenght < 0 ?
                  (<tr>
                    <td>Ingen varer i handlevognen enda.</td>
                  </tr>) : (cart.map(p=><CartItem key={p.prodid} p={p} setCart={setCart}/>))
                  } 
              </tbody>

            </table>
            <p>Total pris: <span id="total-price">0</span>NOK</p>
        </section>
    )
  }
  
  function CartItem({p, setCart}){
    const removeFromCart = (prodid) => {
      setCart(prev => prev.map(item => item.prodid === prodid ? {...item, quantity: item.quantity - 1} : item)
      .filter(item => item.quantity > 0)
    )
    }

    return (
      <tr>
        <td className="title">{p.title}</td>
        <td className="price">{p.price}</td>
        <td className="quantity">{p.quantity}</td>
        <td className="delete"><button onClick={()=>removeFromCart(p.prodid)}>X</button></td>
      </tr>
    )
  }  


  return (
    <div id="container">
      <Header setIsOpen={setIsOpen} cartQuanity={cartQuanity}/>
      <Nav />
      <main>
        <CategoryTitle />
        <Products products={products} setCart={setCart} />
      </main>
      <Cart isOpen={isOpen} cart={cart} setCart={setCart}/>
    </div>
  )
}

export default App
