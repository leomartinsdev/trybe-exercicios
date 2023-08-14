const app = require('./app');
const connection = require('./db/connection');

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`API TrybeCash está sendo executada na porta ${PORT}`);
});

/*
-> Vamos refatorar nosso arquivo src/server.js para retirar o código que utilizamos para testar se a comunicação com o MySQL estava ocorrendo
app.listen(PORT, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${PORT}`);

  // O código abaixo é para testarmos a comunicação com o MySQL
  const [result] = await connection.execute('SELECT 1');
  if (result) {
    console.log('MySQL connection OK');
  }
});
*/