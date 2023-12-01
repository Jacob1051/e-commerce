import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CkeckOutItem = ({cartItem}) => {
    const { id, name, imageUrl, quantity, price } = cartItem;
    const {deleteItemToCart} = useContext(CartContext);

    return(
        <div key={id} className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={deleteItemToCart(cartItem)}>&#10005;</div>
        </div>
    )
};

export default CkeckOutItem;
