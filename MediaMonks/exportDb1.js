const fs = require('fs');

const carros = [
    {
        "data": "2022-01-01",
        "id_marca_": 1,
        "vendas": 40,
        "valor_do_veiculo": 29000,
        "nome": "Møbi"
    },
    {
        "data": "2022-01-01",
        "id_marca_": 1,
        "vendas": 2,
        "valor_do_veiculo": 49000,
        "nome": "ærgø"
    },
    {"data":"2022-01-01",
    "id_marca_":1,
    "vendas":40,
    "valor_do_veiculo":29000,
    "nome":"Møbi"},
    {"data":"2022-01-01","id_marca_":1,"vendas":2,"valor_do_veiculo":49000,"nome":"ærgø"},
    {"data":"2022-01-01","id_marca_":1,"vendas":3,"valor_do_veiculo":19000,"nome":"Unø"},
    {"data":"2022-01-01","id_marca_":2,"vendas":35,"valor_do_veiculo":35000,"nome":"Up"},
    {"data":"2022-01-01","id_marca_":3,"vendas":42,"valor_do_veiculo":32000,"nome":"Picæntø"},
    {"data":"2022-01-01","id_marca_":2,"vendas":"2","valor_do_veiculo":40000,"nome":"Gøl"},
    {"data":"2022-01-01","id_marca_":7,"vendas":4,"valor_do_veiculo":60000,"nome":"Læncer"},
    {"data":"2022-01-01","id_marca_":2,"vendas":1,"valor_do_veiculo":35000,"nome":"Kømbi"},
    {"data":"2022-01-01","id_marca_":9,"vendas":2,"valor_do_veiculo":45200,"nome":"ønix"},
    {"data":"2022-01-01","id_marca_":10,"vendas":1,"valor_do_veiculo":270000,"nome":"E-J7"},
    {"data":"2022-01-01","id_marca_":11,"vendas":"5","valor_do_veiculo":70000,"nome":"Cæptur"},
    {"data":"2022-02-01","id_marca_":1,"vendas":1,"valor_do_veiculo":8000,"nome":"Pæliø"},
    {"data":"2022-02-01","id_marca_":2,"vendas":40,"valor_do_veiculo":35000,"nome":"Up"},
    {"data":"2022-02-01","id_marca_":1,"vendas":"52","valor_do_veiculo":29000,"nome":"Møbi"},
    {"data":"2022-02-01","id_marca_":3,"vendas":30,"valor_do_veiculo":36000,"nome":"Picæntø"},
    {"data":"2022-02-01","id_marca_":5,"vendas":15,"valor_do_veiculo":45000,"nome":"Yæris"},
    {"data":"2022-02-01","id_marca_":6,"vendas":2,"valor_do_veiculo":28000,"nome":"Mærch"},
    {"data":"2022-02-01","id_marca_":7,"vendas":7,"valor_do_veiculo":240000,"nome":"L200"},
    {"data":"2022-02-01","id_marca_":2,"vendas":6,"valor_do_veiculo":30000,"nome":"Gøl"},
    {"data":"2022-02-01","id_marca_":3,"vendas":"4","valor_do_veiculo":41000,"nome":"Cerætø"},
    {"data":"2022-02-01","id_marca_":10,"vendas":6,"valor_do_veiculo":145000,"nome":"E-JS1"},
    {"data":"2022-02-01","id_marca_":11,"vendas":3,"valor_do_veiculo":60000,"nome":"Duster"},
    {"data":"2022-03-01","id_marca_":1,"vendas":1,"valor_do_veiculo":10000,"nome":"Unø"},
    {"data":"2022-03-01","id_marca_":2,"vendas":30,"valor_do_veiculo":35000,"nome":"Up"},
    {"data":"2022-03-01","id_marca_":3,"vendas":25,"valor_do_veiculo":145000,"nome":"Picæntø"},
    {"data":"2022-03-01","id_marca_":4,"vendas":20,"valor_do_veiculo":79000,"nome":"208"},
    {"data":"2022-03-01","id_marca_":1,"vendas":30,"valor_do_veiculo":30000,"nome":"Møbi"},
    {"data":"2022-03-01","id_marca_":2,"vendas":1,"valor_do_veiculo":28000,"nome":"Gøl"},
    {"data":"2022-03-01","id_marca_":7,"vendas":1,"valor_do_veiculo":75000,"nome":"Læncer"},
    {"data":"2022-03-01","id_marca_":8,"vendas":2,"valor_do_veiculo":300000,"nome":"Førester"},
    {"data":"2022-03-01","id_marca_":9,"vendas":3,"valor_do_veiculo":45000,"nome":"ønix"},
    {"data":"2022-03-01","id_marca_":10,"vendas":"5","valor_do_veiculo":25000,"nome":"J5"},
    {"data":"2022-03-01","id_marca_":11,"vendas":1,"valor_do_veiculo":30000,"nome":"Sænderø"},
    {"data":"2022-04-01","id_marca_":1,"vendas":40,"valor_do_veiculo":28000,"nome":"Møbi"},
    {"data":"2022-04-01","id_marca_":2,"vendas":45,"valor_do_veiculo":30000,"nome":"Up"},
    {"data":"2022-04-01","id_marca_":3,"vendas":"30","valor_do_veiculo":26000,"nome":"Picæntø"},
    {"data":"2022-04-01","id_marca_":4,"vendas":25,"valor_do_veiculo":85000,"nome":"208"},
    {"data":"2022-04-01","id_marca_":1,"vendas":1,"valor_do_veiculo":12000,"nome":"Pæliø"},
    {"data":"2022-04-01","id_marca_":6,"vendas":"5","valor_do_veiculo":30000,"nome":"Mærch"},
    {"data":"2022-04-01","id_marca_":7,"vendas":1,"valor_do_veiculo":124000,"nome":"Eclipse"},
    {"data":"2022-04-01","id_marca_":8,"vendas":4,"valor_do_veiculo":320000,"nome":"XV"},
    {"data":"2022-04-01","id_marca_":2,"vendas":1,"valor_do_veiculo":99000,"nome":"Pølø"},
    {"data":"2022-04-01","id_marca_":10,"vendas":1,"valor_do_veiculo":14000,"nome":"J2"},
    {"data":"2022-04-01","id_marca_":11,"vendas":5,"valor_do_veiculo":25000,"nome":"Cliø"},
    {"data":"2022-05-01","id_marca_":1,"vendas":50,"valor_do_veiculo":25000,"nome":"Møbi"},
    {"data":"2022-05-01","id_marca_":2,"vendas":45,"valor_do_veiculo":29000,"nome":"Up"},
    {"data":"2022-05-01","id_marca_":3,"vendas":35,"valor_do_veiculo":19000,"nome":"Picæntø"},
    {"data":"2022-05-01","id_marca_":1,"vendas":2,"valor_do_veiculo":28000,"nome":"ærgø"},
    {"data":"2022-05-01","id_marca_":5,"vendas":"3","valor_do_veiculo":35000,"nome":"Yæris"},
    {"data":"2022-05-01","id_marca_":6,"vendas":7,"valor_do_veiculo":22000,"nome":"Mærch"},
    {"data":"2022-05-01","id_marca_":2,"vendas":2,"valor_do_veiculo":90000,"nome":"T-Crøss"},
    {"data":"2022-05-01","id_marca_":8,"vendas":4,"valor_do_veiculo":320000,"nome":"Førester"},
    {"data":"2022-05-01","id_marca_":9,"vendas":3,"valor_do_veiculo":40000,"nome":"ønix"},
    {"data":"2022-05-01","id_marca_":10,"vendas":2,"valor_do_veiculo":12000,"nome":"J2"},
    {"data":"2022-05-01","id_marca_":11,"vendas":5,"valor_do_veiculo":18000,"nome":"Cliø"},
    {"data":"2022-06-01","id_marca_":1,"vendas":45,"valor_do_veiculo":26000,"nome":"Møbi"},
    {"data":"2022-06-01","id_marca_":2,"vendas":35,"valor_do_veiculo":30000,"nome":"Up"},
    {"data":"2022-06-01","id_marca_":3,"vendas":30,"valor_do_veiculo":20000,"nome":"Picæntø"},
    {"data":"2022-06-01","id_marca_":4,"vendas":20,"valor_do_veiculo":78000,"nome":"208"},
    {"data":"2022-06-01","id_marca_":1,"vendas":2,"valor_do_veiculo":20000,"nome":"Unø"},
    {"data":"2022-06-01","id_marca_":6,"vendas":3,"valor_do_veiculo":23000,"nome":"Mærch"},
    {"data":"2022-06-01","id_marca_":7,"vendas":8,"valor_do_veiculo":160000,"nome":"Pæjerø"},
    {"data":"2022-06-01","id_marca_":1,"vendas":4,"valor_do_veiculo":80000,"nome":"Crønøs"},
    {"data":"2022-06-01","id_marca_":9,"vendas":8,"valor_do_veiculo":42000,"nome":"ønix"},
    {"data":"2022-06-01","id_marca_":10,"vendas":1,"valor_do_veiculo":13000,"nome":"J2"},
    {"data":"2022-06-01","id_marca_":11,"vendas":3,"valor_do_veiculo":80000,"nome":"Sænderø RS"},
    {"data":"2022-07-01","id_marca_":1,"vendas":40,"valor_do_veiculo":32000,"nome":"Møbi"},
    {"data":"2022-07-01","id_marca_":2,"vendas":35,"valor_do_veiculo":35000,"nome":"Up"},
    {"data":"2022-07-01","id_marca_":3,"vendas":38,"valor_do_veiculo":18000,"nome":"Picæntø"},
    {"data":"2022-07-01","id_marca_":4,"vendas":6,"valor_do_veiculo":80000,"nome":"2008"},
    {"data":"2022-07-01","id_marca_":5,"vendas":20,"valor_do_veiculo":140000,"nome":"Cørøllæ"},
    {"data":"2022-07-01","id_marca_":2,"vendas":1,"valor_do_veiculo":120000,"nome":"Jettæ"},
    {"data":"2022-07-01","id_marca_":7,"vendas":3,"valor_do_veiculo":75000,"nome":"Læncer"},
    {"data":"2022-07-01","id_marca_":8,"vendas":15,"valor_do_veiculo":250000,"nome":"WRX"},
    {"data":"2022-07-01","id_marca_":9,"vendas":3,"valor_do_veiculo":55000,"nome":"ønix"},
    {"data":"2022-07-01","id_marca_":10,"vendas":4,"valor_do_veiculo":10000,"nome":"J2"},
    {"data":"2022-07-01","id_marca_":11,"vendas":8,"valor_do_veiculo":35000,"nome":"Duster"},
    {"data":"2022-08-01","id_marca_":1,"vendas":25,"valor_do_veiculo":35000,"nome":"Møbi"},
    {"data":"2022-08-01","id_marca_":2,"vendas":20,"valor_do_veiculo":38000,"nome":"Up"},
    {"data":"2022-08-01","id_marca_":3,"vendas":22,"valor_do_veiculo":33000,"nome":"Picæntø"},
    {"data":"2022-08-01","id_marca_":4,"vendas":10,"valor_do_veiculo":78000,"nome":"208"},
    {"data":"2022-08-01","id_marca_":5,"vendas":10,"valor_do_veiculo":14000,"nome":"Cørøllæ"},
    {"data":"2022-08-01","id_marca_":6,"vendas":1,"valor_do_veiculo":22000,"nome":"Mærch"},
    {"data":"2022-08-01","id_marca_":7,"vendas":3,"valor_do_veiculo":300000,"nome":"L200"},
    {"data":"2022-08-01","id_marca_":2,"vendas":6,"valor_do_veiculo":60000,"nome":"Sæveirø"},
    {"data":"2022-08-01","id_marca_":9,"vendas":4,"valor_do_veiculo":45000,"nome":"ønix"},
    {"data":"2022-08-01","id_marca_":10,"vendas":1,"valor_do_veiculo":12000,"nome":"J2"},
    {"data":"2022-08-01","id_marca_":11,"vendas":4,"valor_do_veiculo":32000,"nome":"Cliø"},
    {"data":"2022-09-01","id_marca_":1,"vendas":20,"valor_do_veiculo":34000,"nome":"Møbi"},
    {"data":"2022-09-01","id_marca_":2,"vendas":21,"valor_do_veiculo":45000,"nome":"Up"},
    {"data":"2022-09-01","id_marca_":3,"vendas":18,"valor_do_veiculo":35000,"nome":"Picæntø"},
    {"data":"2022-09-01","id_marca_":4,"vendas":1,"valor_do_veiculo":19000,"nome":"307"},
    {"data":"2022-09-01","id_marca_":5,"vendas":4,"valor_do_veiculo":120000,"nome":"Cørøllæ"},
    {"data":"2022-09-01","id_marca_":6,"vendas":2,"valor_do_veiculo":30000,"nome":"Mærch"},
    {"data":"2022-09-01","id_marca_":7,"vendas":3,"valor_do_veiculo":70000,"nome":"Læncer"},
    {"data":"2022-09-01","id_marca_":8,"vendas":5,"valor_do_veiculo":240000,"nome":"Brz"},
    {"data":"2022-09-01","id_marca_":9,"vendas":4,"valor_do_veiculo":38000,"nome":"ønix"},
    {"data":"2022-09-01","id_marca_":10,"vendas":1,"valor_do_veiculo":10000,"nome":"J2"},
    {"data":"2022-09-01","id_marca_":11,"vendas":1,"valor_do_veiculo":32000,"nome":"Sænderø"},
    {"data":"2022-10-01","id_marca_":1,"vendas":15,"valor_do_veiculo":60000,"nome":"Møbi"},
    {"data":"2022-10-01","id_marca_":2,"vendas":17,"valor_do_veiculo":54000,"nome":"Up"},
    {"data":"2022-10-01","id_marca_":3,"vendas":19,"valor_do_veiculo":42000,"nome":"Picæntø"},
    {"data":"2022-10-01","id_marca_":4,"vendas":6,"valor_do_veiculo":12000,"nome":"206"},
    {"data":"2022-10-01","id_marca_":5,"vendas":2,"valor_do_veiculo":60000,"nome":"Yæris"},
    {"data":"2022-10-01","id_marca_":2,"vendas":2,"valor_do_veiculo":45000,"nome":"Kømbi"},
    {"data":"2022-10-01","id_marca_":7,"vendas":3,"valor_do_veiculo":80000,"nome":"Læncer"},
    {"data":"2022-10-01","id_marca_":8,"vendas":10,"valor_do_veiculo":360000,"nome":"Førester"},
    {"data":"2022-10-01","id_marca_":9,"vendas":1,"valor_do_veiculo":40000,"nome":"ønix"},
    {"data":"2022-10-01","id_marca_":10,"vendas":2,"valor_do_veiculo":14000,"nome":"J2"},
    {"data":"2022-10-01","id_marca_":11,"vendas":6,"valor_do_veiculo":36000,"nome":"Cliø"},
    {"data":"2022-11-01","id_marca_":1,"vendas":25,"valor_do_veiculo":64000,"nome":"Møbi"},
    {"data":"2022-11-01","id_marca_":2,"vendas":"26","valor_do_veiculo":58000,"nome":"Up"},{"data":"2022-11-01","id_marca_":3,"vendas":30,"valor_do_veiculo":46000,"nome":"Picæntø"},{"data":"2022-11-01","id_marca_":4,"vendas":15,"valor_do_veiculo":92000,"nome":"208"},{"data":"2022-11-01","id_marca_":5,"vendas":"6","valor_do_veiculo":158000,"nome":"Cørøllæ"},{"data":"2022-11-01","id_marca_":6,"vendas":3,"valor_do_veiculo":30000,"nome":"Mærch"},{"data":"2022-11-01","id_marca_":1,"vendas":2,"valor_do_veiculo":42000,"nome":"Unø"},{"data":"2022-11-01","id_marca_":3,"vendas":1,"valor_do_veiculo":89000,"nome":"Riø"},{"data":"2022-11-01","id_marca_":9,"vendas":"5","valor_do_veiculo":40000,"nome":"ønix"},{"data":"2022-11-01","id_marca_":10,"vendas":1,"valor_do_veiculo":12000,"nome":"J2"},{"data":"2022-11-01","id_marca_":11,"vendas":10,"valor_do_veiculo":42000,"nome":"Cliø"},{"data":"2022-12-01","id_marca_":1,"vendas":32,"valor_do_veiculo":72000,"nome":"Møbi"},{"data":"2022-12-01","id_marca_":2,"vendas":24,"valor_do_veiculo":68000,"nome":"Up"},{"data":"2022-12-01","id_marca_":3,"vendas":19,"valor_do_veiculo":49000,"nome":"Picæntø"},{"data":"2022-12-01","id_marca_":4,"vendas":1,"valor_do_veiculo":90000,"nome":"2008"},{"data":"2022-12-01","id_marca_":5,"vendas":"3","valor_do_veiculo":75000,"nome":"Yæris"},{"data":"2022-12-01","id_marca_":1,"vendas":1,"valor_do_veiculo":15000,"nome":"Pæliø"},{"data":"2022-12-01","id_marca_":7,"vendas":5,"valor_do_veiculo":280000,"nome":"Pæjerø"},{"data":"2022-12-01","id_marca_":8,"vendas":12,"valor_do_veiculo":360000,"nome":"Førester"},{"data":"2022-12-01","id_marca_":3,"vendas":2,"valor_do_veiculo":45000,"nome":"Cerætø"},{"data":"2022-12-01","id_marca_":10,"vendas":1,"valor_do_veiculo":12000,"nome":"J2"},{"data":"2022-12-01","id_marca_":11,"vendas":"6","valor_do_veiculo":52000,"nome":"Sænderø"}
];
function corrigirValores(jsonObj) {
    // Verificar se jsonObj é um objeto
    if (typeof jsonObj !== 'object') {
        return jsonObj;
    }

    for (let key in jsonObj) {
        if (jsonObj.hasOwnProperty(key)) {
            // Verificar se a propriedade é uma string
            if (typeof jsonObj[key] === 'string') {
                // Reverter "æ" para "a" e "ø" para "o"
                jsonObj[key] = jsonObj[key].replace(/æ/g, 'a').replace(/ø/g, 'o');

                // Verificar se a chave é relacionada aos valores de venda e converter para int
                if (key === 'vendas' || key === 'valor_do_veiculo') {
                    if (/^\d+$/.test(jsonObj[key])) {
                        jsonObj[key] = parseInt(jsonObj[key], 10);
                    }
                }
            } else if (typeof jsonObj[key] === 'object') {
                jsonObj[key] = corrigirValores(jsonObj[key]);
            }
        }
    }

    return jsonObj;
}

const carrosCorrigidos = carros.map(corrigirValores);

const jsonString = JSON.stringify(carrosCorrigidos, null, 2);

const nomeArquivo = 'dbCorrigido1.json';

fs.writeFileSync(nomeArquivo, jsonString, 'utf-8');

console.log(`O arquivo ${nomeArquivo} foi exportado com sucesso.`);

