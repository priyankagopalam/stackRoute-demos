import { useEffect, useState } from "react";

function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, []);

    return (
        <div className="container">
            <div className="row">
                {
                    products.map((product: any, i: number) => <div className="col-md-4" key={i}><div className="card" style={{ width: "18rem" }}>
                        <img src={product.thumbnail} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                        </div>
                    </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Products;