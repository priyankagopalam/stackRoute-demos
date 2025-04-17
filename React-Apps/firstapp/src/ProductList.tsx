import React from "react";

class ProductList extends React.Component {
    constructor(props: any) { 
        super(props)
    }

    render(){
        return <h1>Welcome to Class based component</h1>
    }

    componentDidMount(): void {
        // It gets invoked once the component is added to the DOM
    }

    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
        
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        
    }

    componentWillUnmount(): void {
        
    }
}

export default ProductList;