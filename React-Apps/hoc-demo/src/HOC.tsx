import { useEffect, useState } from "react";

export default function HOC(Component: any) {
    function NewComponent() {
        const [products, setProducts] = useState([]);
        useEffect(() => {
            fetch('http://dummyjson.com/products')
                .then(res => res.json())
                .then(data => setProducts(data.products))
        }, [])
        return <Component products={products} />
    }
    return NewComponent;
}