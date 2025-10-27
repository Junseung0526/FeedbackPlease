import "./ProductList.css";
import { useState, useRef } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ onCreate, products, addToCart, deleteProduct }) => {

    const [content, setContent] = useState("");
    const [price, setPrice] = useState(0);

    
    const inputRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onChangePrice = (e) => {
        setPrice(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!content) {
            inputRef.current.focus();
            return;
        }
        onCreate(content, price);
        setContent("");
        setPrice(0);
    }

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            onSubmit(e);
        }
    };

    return (
        <div>
            <div className="InputWrapper">
                <h2 className="Header">추가할 상품을 입력하세요.</h2>
                <form className="FormWrapper" onSubmit={onSubmit}>
                    <input
                        ref={inputRef}
                        placeholder="상품명"
                        type="text"
                        value={content}
                        onChange={onChangeContent}
                        onKeyDown={onKeyDown}
                    />
                    <input
                        placeholder="가격"
                        type="number"
                        value={price}
                        onChange={onChangePrice}
                        onKeyDown={onKeyDown}
                    />
                    <button className="Button" type="submit">상품 추가</button>
                </form>
            </div>
            <div className="ProductList">
                <h2>상품 목록</h2>
                {products.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        deleteProduct={deleteProduct}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;