import CartItem from "./CartItem"
export default function Cart({isOpen, cart, setCart, totalSum}){
    return (
      <section id="cart" className={isOpen ? "" : "hidden"}>
            <table id="cart-items">

              <tbody>
                {/*Hvis cart.lenght er mindre enn 0, dvs. hvis i handleliste er ikke noe produkt, return tekst "Ingen varer..." hvis minst et produkt er i handlevogn så skriv verdi for den produkt*/}
                {cart.length <= 0 ?
                  (<tr>
                    <td>Ingen varer i handlevognen enda.</td>
                  </tr>) : (cart.map(p=><CartItem key={p.prodid} p={p} setCart={setCart}/>))
                  } 
              </tbody>

            </table>
            <p>Total pris: <span id="total-price">{totalSum}</span>NOK</p>
        </section>
    )
  }