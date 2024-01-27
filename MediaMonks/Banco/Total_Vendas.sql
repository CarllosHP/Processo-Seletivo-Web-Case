SELECT M.id_marca,M.marca, SUM(V.vendas) AS total_vendas
FROM Carros V
JOIN Marcas M ON V.id_marca = M.id_marca
GROUP BY M.marca
ORDER BY total_vendas DESC

