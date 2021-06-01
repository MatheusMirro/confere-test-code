import React from 'react';
import confereLogo from '../../img/confereLogo.png';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to='/'>
        <img src={confereLogo} alt="logo" />
      </Link>
      <Cart>
        <div>
          <strong>Meu carrinho</strong>
          <span>0 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}