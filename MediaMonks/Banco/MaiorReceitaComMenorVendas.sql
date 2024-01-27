SELECT M.marca, 
       SUM(C.vendas) AS total_vendas, 
       SUM(C.valor) AS receita_total
FROM Carros C
JOIN Marcas M ON C.id_marca = M.id_marca
GROUP BY M.marca
HAVING receita_total / NULLIF(total_vendas, 0) > (
    SELECT AVG(valor) / NULLIF(AVG(vendas), 0) AS media_receita_por_venda
    FROM Carros
);
