import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, [])

    return (
        <div className="container mt-2">
            <div className="row">
                {
                    products.map((product: any, i: number) => <div key={i} className="col-md-3">
                        <div className="card" style={{ width: "18re" }}>
                            <img src={product.thumbnail} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <Link to={`/product/${product.id}`} className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
