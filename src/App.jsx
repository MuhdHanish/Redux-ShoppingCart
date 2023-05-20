import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import { useEffect, useRef } from "react";
import { fetchUser } from "./redux/cart";

function App() {
  const dispatch = useDispatch()
  const counterRef = useRef(1)
  const {userDetail}  = useSelector((state)=>state.cart)
  return (
  <>
  <Header/>
  <button onClick={()=>dispatch(fetchUser(++counterRef.current))}>Add more</button>
  <pre>{JSON.stringify(userDetail,undefined,4)}</pre>
  <ProductList/>
  </>
  );
}

export default App;
