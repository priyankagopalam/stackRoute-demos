import HOC from "./HOC";

function ProductTable({ products }: any) {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-8">
                    <table className="table">
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                        {
                            products.map((product: any) => <tr key={product.id}>
                                <td><img src={product.thumbnail} width="50%" /></td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                            </tr>)
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HOC(ProductTable);