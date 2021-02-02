SELECT  a.accountDistrict AS District, y.characterization AS Characterization, i.quarter AS Quarter, SUM(t.amount)AS Sum
FROM transactions t, type y , account a, time i
WHERE t.accountID = a.accountID AND t.typeID = y.typeID AND i.timeID = t.timeID
	AND (a.accountDistrict = "Benesov" OR a.accountDistrict = "Pribram")
    AND (y.characterization = "Household" OR y.characterization = "Misc. Credit")
    AND (i.quarter = 1 OR i.quarter = 4) 
GROUP BY y.characterization,  a.accountDistrict, i.quarter;





