import "./Cart.css";

const Cart = ({ cartItems, onUpdateCount }) => {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.count, 0);

    return (
        <div className="CartContainer">
            {cartItems.map(item => (
                <div key={item.id} className="CartWrapper">
                    <div>
                        <p>상품명: {item.content} </p>
                        <p>가격: {item.price} </p>
                        <p>수량: {item.count}</p>
                    </div>
                    <div>
                        <button className="PlusButton" onClick={() => onUpdateCount(item.id, item.count + 1)}>+1</button>
                        <button className="MinusButton" onClick={() => onUpdateCount(item.id, item.count - 1)}>-1</button>
                    </div>


                </div>
            ))}
            <div>
                <p>총 가격: {totalPrice}원</p>
            </div>
        </div>
    );
};

export default Cart;