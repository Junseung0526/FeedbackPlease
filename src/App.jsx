import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { useState, useRef } from "react";

function App() {


  // const mockProducts = [
  //   {
  //     id: 0,
  //     price: 2000,
  //     content: "새우깡",
  //   },
  //   {
  //     id: 1,
  //     price: 2500,
  //     content: "포스틱",
  //   },
  //   {
  //     id: 2,
  //     price: 100,
  //     content: "이효준",
  //   },
  // ];

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const idRef = useRef(0);

  const onCreate = (content, price) => {
    const newItem = {
      id: idRef.current,
      content,
      price,
    };
    setProducts([newItem, ...products]);
    idRef.current += 1;
  };

  const addToCart = (productId) => {
    const productToAdd = products.find((p) => p.id === productId);
    if (!productToAdd) return;

    const existingCartItem = cartItems.find((item) => item.id === productId);

    if (existingCartItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...productToAdd, count: 1 }]);
    }
  };

  const deleteProduct = (targetId) => {
    setProducts(products.filter((it) => it.id !== targetId));
  };

  const deleteCartItem = (targetId) => {
    setCartItems(cartItems.filter((it) => it.id !== targetId));
  };

  const onUpdateCount = (targetId, newCount) => {
    if (newCount === 0) {
      deleteCartItem(targetId);
      return;
    }
    setCartItems(
      cartItems.map((it) =>
        it.id === targetId ? { ...it, count: newCount } : it
      )
    );
  };



  return (
    <div className="App">
      <h1>쇼핑카트</h1>
      <ProductList
        onCreate={onCreate}
        products={products}
        addToCart={addToCart}
        deleteProduct={deleteProduct}
      />
      <h2>장바구니</h2>
      <Cart
        cartItems={cartItems}
        onUpdateCount={onUpdateCount}
      />
    </div>
  );
}

export default App;
