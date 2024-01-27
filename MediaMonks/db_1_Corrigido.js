fetch("broken_database_1.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network Erro');
        }
        return response.json();
    })
    .then((dados) => {
        function corrigirValores(jsonObj) {
            if (typeof jsonObj !== 'object') {
                return jsonObj;
            }
            for (let key in jsonObj) {
                if (jsonObj.hasOwnProperty(key)) {
                    // Verificar se a propriedade é uma string
                    if (typeof jsonObj[key] === 'string') {
                        // Reverter "æ" para "a" e "ø" para "o"
                        jsonObj[key] = jsonObj[key].replace(/æ/g, 'a').replace(/ø/g, 'o');

                        // Verificar se a chave é relacionada aos valores de venda e convertê-la para inteiro
                        if (key === 'vendas' || key === 'valor_do_veiculo') {
                            if (/^\d+$/.test(jsonObj[key])) {
                                jsonObj[key] = parseInt(jsonObj[key], 10);
                            }
                        }
                    } else if (typeof jsonObj[key] === 'object') {
                        // Se for um objeto, chamar recursivamente a função corrigirValores
                        jsonObj[key] = corrigirValores(jsonObj[key]);
                    }
                }
            }

            return jsonObj;
        }

        let dadosCorrigidos = corrigirValores(dados);

        console.log(dadosCorrigidos);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
