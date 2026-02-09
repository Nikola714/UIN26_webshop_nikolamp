import Header from "./Header";
import Nav from "./Nav";
import Cart from "./Cart";

export default function Layout({setIsOpen, cartQuanity, children, isOpen, cart, setCart, totalSum}){
    return(
        <div id="container">
            <Header setIsOpen={setIsOpen} cartQuanity={cartQuanity}/>
            <Nav/>
            {children}
            <Cart isOpen={isOpen} cart={cart} setCart={setCart} totalSum={totalSum}/>

        </div>
    )
}