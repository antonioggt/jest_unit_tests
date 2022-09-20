const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    /*fail('Teste vazio!');*/
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    const detalhes = productDetails;
    expect(typeof detalhes).toBe('function');
    // Teste se o retorno da função é um array.
    const array = productDetails('oi', 'ja');
    expect(typeof array).toBe('object');
    // Teste se o array retornado pela função contém dois itens dentro.
    const length = productDetails('oi', 'ja').length;
    expect(length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const item1 = productDetails('oi', 'ja')[0];
    const item2 = productDetails('oi', 'ja')[1];
    expect(typeof item1).toBe('object');
    expect(typeof item2).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(item1).not.toBe(item2);
    // Teste se os dois productIds terminam com 123.
    const varia = productDetails('oi', 'ja')[0].details.productId;
    const varia2 = productDetails('oi', 'ja')[1].details.productId;
    expect(varia).toMatch('123');
    expect(varia2).toMatch('123');
  });
});
