import { useTransactions } from '../../hooks';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from './styles';

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.price
      acc.balance += transaction.price
    } else {
      acc.withdrawns += transaction.price
      acc.balance -= transaction.price
    }

    return acc;
  }, {
    deposits: 0,
    withdrawns: 0,
    balance: 0
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>

        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL' 
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>

        <strong>- {new Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
          }).format(summary.withdrawns)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Saldo</p>
          <img src={totalImg} alt="Saldo" />
        </header>

        <strong>{new Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
          }).format(summary.balance)}
        </strong>
      </div>
    </Container>
  );
};