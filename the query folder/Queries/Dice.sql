SELECT  a.accountDistrict AS District, y.characterization AS Characterization, i.year AS year, i.quarter AS Quarter, SUM(t.amount)AS Sum
FROM transactions t, type y , account a, time i
WHERE t.accountID = a.accountID AND t.typeID = y.typeID AND i.timeID = t.timeID
	AND (a.accountDistrict = "Benesov" )
    AND (y.characterization = "Household")
GROUP BY  a.accountDistrict, y.characterization, i.year, i.quarter WITH ROLLUP;