import { useEffect } from 'react';

import { Container } from './styles';

import api from '../../services/api';

function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>

          <tr>
            <td>Desenvolvimento de site</td>
            <td className="withdraw">- R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsTable;
