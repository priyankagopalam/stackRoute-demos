import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState<any>({});
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    {
                        <div className="card mb-3" style={{ maxWidth: "540px" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={product.thumbnail} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <h5 className="card-title">{product.brand}</h5>
                                        <h5 className="card-title">{product.category}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text"><small className="text-body-secondary">{product.price}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
