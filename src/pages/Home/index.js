import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

function Home() {

  // Criação da variavel para controlar o estado do componente
  const [project, updateProject] = useState({});
  const [error, updateError] = useState(false);

  // Fazer a requisicão do backend assim que o componente for renderizado
  useEffect(() => {
    axios.get('http://localhost:1337')
      .then(resp => {
        updateProject(resp.data)
        console.log(resp)
      })
      .catch(err => {
        updateError(err.message)
      });
  }, []);

  return (
    // Ternário para verificar se o component foi rendeziado junto com o conteudo retornado da API.
    <ProductList>
      {project.products?.map((item, index) => (
        <p key={index}>
          <li>
            <img src={item.image} alt="roupa" />
            <strong>{item.name}</strong>
            <span>{item.actual_price}</span>
            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#FFF" /> 0
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        </p>
      ))}
    </ProductList>
  );
}

export default Home;
