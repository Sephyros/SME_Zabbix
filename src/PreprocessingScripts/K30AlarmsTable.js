var k30_3x0039_register = "33040";

function zabbixJSFunction(value) {
  value = parseInt(value);

  if (value < 65535) {
    // converte o valor decimal para binário
    var word = Number(value).toString(2).split("").reverse();
    var activeStatusFunctions = "";
    var statusFunctions = {
      0: "Reservado 01",
      1: "Falha na partida",
      2: "Parada de emergência",
      3: "Alta temperatura",
      4: "Baixo nível de água",
      5: "Sobrecarga",
      6: "Sobrevelocidade",
      7: "Baixa pressão do óleo",
      8: "Tensão baixa gerador",
      9: "Tensão alta gerador",
      10: "Frequência baixa gerador",
      11: "Ch.grupo não liga",
      12: "Falha no arrefecimento",
      13: "Sequência incorreta gerador",
      14: "Reservado 02",
      15: "Reservado 03"
    };
    var decimalCheck = 0; // Completa o array da word em binário com zeros

    for (var index = 0; index < 16; index++) {
      // Se o bit for truthy então converte o valor string para int, senão adiciona um zero
      word[index] ? (word[index] = parseInt(word[index])) : word.push(0); // Realiza o cálculo da checagem de decimal para binário

      word[index] ? (decimalCheck += Math.pow(2, index)) : decimalCheck + 0; // Adiciona os códigos de função ativos

      word[index]
        ? (activeStatusFunctions += statusFunctions[index] + "\n")
        : activeStatusFunctions;
    } // Checa se a entrada decimal e o novo array estão batendo

    if (decimalCheck === value) {
      return activeStatusFunctions;
    }

    return (
      "Erro interno (conversão da entrada)\n" +
      "valor de entrada: " +
      value +
      " tipo " +
      typeof value +
      "\nValor de checagem: " +
      decimalCheck +
      " tipo " +
      typeof decimalCheck
    );
  } else {
    return "Valor não reconhecido";
  }
}

console.log(zabbixJSFunction(k30_3x0039_register));
