import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';

import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de mobile',
          type: 'deposit',
          category: 'Dev',
          price: 10000,
          createdAt: new Date('2021-03-01 11:00:00')
        },
        {
          id: 2,
          title: 'Prototipação de telas de app',
          type: 'deposit',
          category: 'Dev',
          price: 7000,
          createdAt: new Date('2021-01-21 15:00:00')
        },
        {
          id: 3,
          title: 'Aluguel',
          type: 'withdrawn',
          category: 'Moradia',
          price: 450,
          createdAt: new Date('2021-03-15 15:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', schema => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      let data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
