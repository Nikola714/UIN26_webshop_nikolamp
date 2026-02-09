  export default function CartItem({p, setCart}){
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