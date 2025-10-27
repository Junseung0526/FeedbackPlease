import "./ProductItem.css";

const ProductItem = ({ product, addToCart, deleteProduct }) => {
    return (
        <div className="ItemContainer">
            <div className="ItemWrapper">
                <div>
                    <p>상품명: {product.content}</p>
                    <p>가격: {product.price}원</p>
                </div>
                <div>
                    <button className="AddButton" onClick={() => addToCart(product.id)}>담기</button>
                    <button className="DeleteButton" onClick={() => deleteProduct(product.id)}>삭제</button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;