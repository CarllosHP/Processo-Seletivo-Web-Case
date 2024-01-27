SELECT c.nome AS nome, m.marca AS marca, SUM(c.vendas * c.valor) AS receita_total
FROM Carros c
JOIN Marcas m ON c.id_marca = m.id_marca
GROUP BY c.nome, c.id_marca, m.marca
ORDER BY receita_total ASC
LIMIT 3;

SELECT c.nome AS nome, m.marca AS marca, SUM(c.vendas * c.valor) AS receita_total
FROM Carros c
JOIN Marcas m ON c.id_marca = m.id_marca
GROUP BY c.nome, c.id_marca, m.marca
ORDER BY receita_total DESC
LIMIT 3;
