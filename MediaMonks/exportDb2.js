const fs = require('fs');

const marcas = [
    [{"id_marca":1,"marca":"Fiæt"},{"id_marca":2,"marca":"Vølkswægen"},{"id_marca":3,"marca":"Kiæ"},{"id_marca":4,"marca":"Peugeøt "},{"id_marca":5,"marca":"Tøyøtæ"},{"id_marca":6,"marca":"Nissæn"},{"id_marca":7,"marca":"Mitsubishi"},{"id_marca":8,"marca":"Subæru"},{"id_marca":9,"marca":"Chevrølet "},{"id_marca":10,"marca":"JæC Møtørs"},{"id_marca":11,"marca":"Renæult"}]
];

function corrigirValores(jsonObj) {
    // Verificar se jsonObj é um objeto
    if (typeof jsonObj !== 'object') {
        return jsonObj;
    }

    // Iterar sobre as propriedades do objeto
    for (let key in jsonObj) {
        if (jsonObj.hasOwnProperty(key)) {
            // Verificar se a propriedade é uma string
            if (typeof jsonObj[key] === 'string') {
                // Reverter "æ" para "a" e "ø" para "o"
                jsonObj[key] = jsonObj[key].replace(/æ/g, 'a').replace(/ø/g, 'o');
            } else if (typeof jsonObj[key] === 'object') {
                // Se for um objeto, chamar recursivamente a função corrigirValores
                jsonObj[key] = corrigirValores(jsonObj[key]);
            }
        }
    }

    return jsonObj;
}

const marcasCorrigidas = marcas.map(corrigirValores);

// Converter o objeto para uma string JSON corretamente
const jsonString = JSON.stringify(marcasCorrigidas, null, 2);

// Nome do arquivo de saída
const nomeArquivo = 'dbCorrigido2.json';

// Escrever a string JSON no arquivo
fs.writeFileSync(nomeArquivo, jsonString, 'utf-8');

console.log(`O arquivo ${nomeArquivo} foi exportado com sucesso.`);
