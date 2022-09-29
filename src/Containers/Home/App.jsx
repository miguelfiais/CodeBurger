import axios from "axios"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import CodeBurger from '../../assets/burger.svg'
import { Container, Image, H1, Label, Button } from './styles'


function App() {

  const navigate = useNavigate()

  const burger = useRef()
  const name = useRef()
  async function sendOrder() {
    await axios.post("http://localhost:3002/orders", {
      name: name.current.value, burger: burger.current.value
    })
    navigate("/orders")
  }
  return (
    <Container>
      <Image src={CodeBurger} alt="" />
      <H1>Faça seu pedido!</H1>
      <Label>Pedido
        <select ref={burger}>
          <option>Selecione um pedido</option>
          <option>Bic Mac</option>
          <option>X-Tudo</option>
          <option>Pancia</option>
          <option>Rosso</option>
        </select>
      </Label>
      <Label>Nome do Cliente
        <input ref={name} type="text" placeholder="Digite seu nome..." />
      </Label>
      <Button onClick={sendOrder} >Novo Pedido</Button>
    </Container>
  )
}

export default App
