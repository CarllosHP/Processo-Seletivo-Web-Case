SELECT Marcas.marca, AVG(Carros.vendas) AS media_vendas
FROM Carros
JOIN Marcas ON Carros.id_marca = Marcas.id_marca
GROUP BY Marcas.marca;
