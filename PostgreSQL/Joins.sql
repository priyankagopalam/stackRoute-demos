Select * from Products

Select SUM(UnitPrice) from Products

-- Group By Clause

Select SupplierID, SUM(UnitsInStock) as TotalStock from Products group by SupplierID having SupplierID=15

Select * from Orders

Select CustomerID, OrderDate, SUM(ShipVia*Freight) as TotalFreight from Orders
Group By OrderDate, CustomerID

Select * from Products Order By ProductName asc


Select * from Customers where CustomerID='PETPA'

Select * from Orders where CustomerID='PETPA'

-- Inner Join
Select Customers.CustomerID, CompanyName, ContactName, City, OrderId, OrderDate, ShipAddress
from Customers inner join Orders on Customers.CustomerID = Orders.CustomerID

-- Left Join
Select Customers.CustomerID, CompanyName, ContactName, City, OrderId, OrderDate, ShipAddress
from Customers left join Orders on Customers.CustomerID = Orders.CustomerID

-- Right Join
Select Customers.CustomerID, CompanyName, ContactName, City, OrderId, OrderDate, ShipAddress
from Customers right join Orders on Customers.CustomerID = Orders.CustomerID

-- Full Join
Select Customers.CustomerID, CompanyName, ContactName, City, OrderId, OrderDate, ShipAddress
from Customers full join Orders on Customers.CustomerID = Orders.CustomerID

-- Cross Join (Cartesian Product)
Select Customers.CustomerID, CompanyName, ContactName, City, OrderId, OrderDate, ShipAddress
from Customers cross join Orders where Customers.CustomerID='BERGS'

Select * from Orders where CustomerID='BERGS'

Select * from Employees

Create Table Subjects(
	SubjectID INT Identity,
	SubjectName varchar(20)
)

Insert into Subjects (SubjectName)values ('English'), ('Maths'), ('Science'), ('Hindi')

Select * from Subjects
Select * from Students

Select RollNo, StudentName, SubjectName from Students Cross Join Subjects where StudentName='John'

Select * from Emp

Select Emp.EmpName, Emp2.EmpName as ReportsTo from Emp Inner join Emp as Emp2 on Emp.MgrId = Emp2.EmpId

