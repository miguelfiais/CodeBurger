import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

export const Trash = styled(FaTrashAlt )`
    width: 24px;
    height: 28px;
    &:hover{
        transform: scale(1.2);
    }
`

export const Container = styled.div`
    background: #0A0A10;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100%;
    min-height: 100vh;
`
export const H1 = styled.h1`
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    margin: 25px 0 76px 0;
`
export const Button = styled.button`
    width: 342px;
    height: 68px;
    background: rgba(255, 255, 255, 0.14);
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    margin-top: 30px;
    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }
`
export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const Itens = styled.li`
    width: 342px;
    height: 101px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const ButtonTrash = styled.button`
    background: transparent;
    border: none;
    align-self: flex-end;
    cursor: pointer;
`
export const Pedido = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
`
export const Name = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
`