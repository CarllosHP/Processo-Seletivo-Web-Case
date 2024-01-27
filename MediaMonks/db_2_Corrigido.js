fetch("broken_database_2.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((dados) => {
        // Função para corrigir os nomes no objeto de dados
        function corrigirNomes(jsonObj) {
            if (typeof jsonObj !== 'object') {
                return jsonObj;
            }

            
            for (let key in jsonObj) {
                if (jsonObj.hasOwnProperty(key)) {
                    // Verificar se a propriedade é uma string
                    if (typeof jsonObj[key] === 'string') {
                        // Reverter "æ" para "a" e "ø" para "o"
                        jsonObj[key] = jsonObj[key].replace(/æ/g, 'a').replace(/ø/g, 'o');
                    } else if (typeof jsonObj[key] === 'object') {
                        jsonObj[key] = corrigirNomes(jsonObj[key]);
                    }
                }
            }

            return jsonObj;
        }
        let dadosCorrigidos = corrigirNomes(dados);

        console.log(dadosCorrigidos);

      

    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });