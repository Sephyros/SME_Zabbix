var k30_3x0006_register = "33040";

function zabbixJSFunction(value) {
  value = parseInt(value);

  if (value < 65535) {
    // converte o valor decimal para binário
    var word = Number(value).toString(2).split("").reverse();
    var activeStatusFunctions = "";
    var statusFunctions = {
      0: "Tensão de Rede Normal",
      1: "Tensão de Grupo Normal",
      2: "Rede alimentando",
      3: "Grupo alimentando",
      4: "Grupo em modo INIBIDO",
      5: "Grupo em modo MANUAL",
      6: "Grupo em modo AUTOMATICO",
      7: "Grupo em modo TESTE",
      8: "Seq. Partida iniciada",
      9: "Seq. Parada iniciada",
      10: "Grupo em pre-resfriamento",
      11: "Falha presente",
      12: "Reservado 01",
      13: "Reservado 02",
      14: "Reservado 03",
      15: "Reservado 04"
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

console.log(zabbixJSFunction(k30_3x0006_register));
