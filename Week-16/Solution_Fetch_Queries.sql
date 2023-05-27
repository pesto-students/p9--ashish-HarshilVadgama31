--1) Find the item that has minimum weight

SELECT *
FROM ITEMS
WHERE WEIGHT = (SELECT MIN(WEIGHT) FROM ITEMS);

--2) Find the different warehouses in "Pune" 

SELECT *
FROM WAREHOUSES
WHERE LOCATION = 'Pune';

--3) Find the details of items ordered by a customer "Mr. Patil" 

SELECT I.*
FROM ITEMS I
JOIN ORDERS_ITEMS OI ON I.ITEMNO = OI.ITEMNO
JOIN ORDERS O ON OI.ONO = O.ONO
JOIN CUSTOMER C ON O.CNO = C.CNO
WHERE C.CNAME = 'Mr. Patil';

--4) Find a Warehouse which has maximum stores 

SELECT W.*, COUNT(S.SID)
FROM WAREHOUSES W
JOIN STORES S ON W.LOCATION = S.LOCATION_CITY
GROUP BY W.WID
ORDER BY COUNT(S.SID) DESC
LIMIT 1;

--5) Find an item which is ordered for a minimum number of times

SELECT I.*
FROM ITEMS I
LEFT JOIN ORDERS_ITEMS OI ON I.ITEMNO = OI.ITEMNO
GROUP BY I.ITEMNO
ORDER BY COUNT(OI.ONO) ASC
LIMIT 1;

--6) Find the detailed orders given by each customer 

SELECT C.CNAME, O.*
FROM CUSTOMER C
JOIN ORDERS O ON C.CNO = O.CNO;
