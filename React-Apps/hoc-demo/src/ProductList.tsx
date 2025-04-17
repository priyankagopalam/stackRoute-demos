import HOC from "./HOC";

function ProductList({ products }: any) {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-8">
                   <ul className="list-group">
                    {
                        products.map((product: any)=><li key={product.id}>
                            <img src={product.thumbnail} width="40%"/>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </li>)
                    }
                   </ul>
                </div>
            </div>
        </div>
    )
}

export default HOC(ProductList);