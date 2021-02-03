SELECT e.year AS Year, e.quarter as Quarter, y.characterization as Characterization, COUNT(y.characterization) as Count
FROM transactions t
	JOIN financialwh.time e ON e.timeid = t.timeid
    JOIN financialwh.type y ON y.typeid = t.typeid
    WHERE e.year = "1993"
    GROUP BY e.year, e.Quarter, y.characterization WITH ROLLUP
	UNION
		SELECT e.year AS Year, null, y.characterization as Characterization, COUNT(y.characterization) as Count
		FROM transactions t
			JOIN financialwh.time e ON e.timeid = t.timeid
			JOIN financialwh.type y ON y.typeid = t.typeid
			WHERE e.year = "1993"
			GROUP BY e.year, y.characterization WITH ROLLUP
	UNION
		SELECT null, e.Quarter as Quarter, y.characterization as Characterization, COUNT(y.characterization) as Count
		FROM transactions t
			JOIN financialwh.time e ON e.timeid = t.timeid
			JOIN financialwh.type y ON y.typeid = t.typeid
			WHERE e.year = "1993"
			GROUP BY e.Quarter, y.characterization WITH ROLLUP
	UNION
		SELECT null, null, y.characterization as Characterization, COUNT(y.characterization) as Count
		FROM transactions t
			JOIN financialwh.time e ON e.timeid = t.timeid
			JOIN financialwh.type y ON y.typeid = t.typeid
			WHERE e.year = "1993"
			GROUP BY y.characterization WITH ROLLUP
ORDER BY Year DESC, Quarter DESC, Characterization DESC;
