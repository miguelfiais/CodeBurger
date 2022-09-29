import axios from 'axios'
import { useEffect, useState } from 'react'
import Bag from '../../assets/orders.svg'
import {Container, Button, H1, Itens, Ul, ButtonTrash, Pedido, Name, Trash } from './styles'
import {useNavigate} from 'react-router'


function Order() {

  const navigate = useNavigate()
  function goHome(){
    navigate("/")
  }

  const [orders, setOrders] = useState([])
  useEffect(()=>{
    async function getOrders(){
        const {data} = await axios.get("http://localhost:3002/orders")
        setOrders(data)
    }
    getOrders()
  })
  
  async function deleteOrder(id){
    await axios.delete(`http://localhost:3002/orders/${id}`)
  }
 

    return (
      <Container>
        <img src={Bag} alt="Embrulho" />
        <H1>Pedidos</H1>
        <Ul>
          {orders.map(order => (
            <Itens key={order.id}>
              <Pedido>{order.name}</Pedido>
              <ButtonTrash> <Trash onClick={()=> deleteOrder(order.id)}/> </ButtonTrash> 
              <Name>{order.burger}</Name>
            </Itens>
          ))}
        </Ul>
        <Button onClick={goHome}>Voltar</Button>
      </Container>
    )
  }
  
  export default Order
  