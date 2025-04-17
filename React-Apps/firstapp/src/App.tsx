import Header from "./Header"
import Products from "./Products";
import ProductList from "./ProductList"
import Profile from "./Profile";
import Users from "./Users"
import ComponentA from "./ComponentA";

function App() {
  const userList = ['John', 'Peter', 'Steve', 'William'];
  return (
    <div>
      {/* <Header />
      <Users users={userList} />
      <ProductList />
      <p>Welcome to React App</p>
      <p>Hello</p> */}
      {/* <Profile /> */}
      {/* <Products /> */}
      <ComponentA />
    </div>
  )
}

export default App
