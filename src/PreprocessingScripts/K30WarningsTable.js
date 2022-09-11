var k30_3x0040_register = "33040";

function zabbixJSFunction(value) {
  value = parseInt(value);

  if (value < 65535) {
    // converte o valor decimal para binário
    var word = Number(value).toString(2).split("").reverse();
    var activeStatusFunctions = "";
    var statusFunctions = {
      0: "Falha no pré-aquecedor",
      1: "Falha no carreg. Baterias",
      2: "Baixo nível combustível",
      3: "Ch. rede não liga",
      4: "Reservado 01",
      5: "Manut. Preventiva vencida",
      6: "Bateria descarregada",
      7: "Ch, rede não desliga",
      8: "Ch. Grupo não desliga",
      9: "Reservado 02",
      10: "Erro sensor temperatura",
      11: "Partida inibida",
      12: "Sem sensor temperatura",
      13: "Partida programada",
      14: "Partida remota com carga",
      15: "Sem sensor de pressão"
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

console.log(zabbixJSFunction(k30_3x0040_register));
