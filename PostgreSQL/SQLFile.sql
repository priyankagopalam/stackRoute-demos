-- Create Table Statement for creating new table called Products
Create Table Products(
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	brand TEXT NOT NULL,
	quantity NUMERIC,
	price NUMERIC
)

Create Table Employees(
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	salary NUMERIC CHECK (salary>0)
)


Create Table customers(
	customerid SERIAL PRIMARY KEY,
	name TEXT,
	address TEXT,
	city TEXT
)

Create Table Orders(
	id SERIAL PRIMARY KEY,
	orderdate date,
	amount numeric,
	customerid INT REFERENCES customers(customerid)
)

Alter Table products add column description TEXT

Alter Table products drop column description

Alter Table products RENAME column name to pname

-- Changing the datatype of column
Alter Table products alter column quantity set data type integer

Alter Table products add constraint check_price check(price>0)

Alter Table Products drop constraint check_price

Select * from products

insert into products (pname, brand, quantity, price) values('Laptop', 'Samsung', 5, 56000)

insert into products (pname, brand) values('Tablet', 'Lenovo')

insert into products (pname, brand, quantity, price)
values ('Mobile', 'Apple', 8, 120000),('Keyboard', 'Logitech', 4, 1000),('Mouse', 'Dell', 9, 350)

update products set quantity=3, price=23000 where id=2

Delete from products where id=5

-- Question 1










