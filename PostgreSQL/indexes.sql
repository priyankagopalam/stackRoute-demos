-- B-Tree (Default Index) Supports equality (=), range(<,>,<=,>=), like
Create Index idx_employees_salary on employees(salary)

-- Hash Index Supports only equality (=)
Create Index idx_customers_city on customers using hash(city)

Select * from employees where salary>250000

Create Table ProductDetails(
	id SERIAL PRIMARY KEY,
	name TEXT,
	price int,
	tags TEXT array
)

-- GIN (Generalized Inverted Index) Works best with arrays, json data
Create Index idx_product_details_tags on productdetails using GIN(tags)

Select * from productdetails where tags @> ARRAY['electronics']

-- Checing the size of the index
Select pg_size_pretty(pg_relation_size('idx_product_details_tags')) as tags_index_size

