import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './styles.css'
import { StoreContext } from '../../context/storeContext';

export const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img src={image} alt="Food Image" className="food-item-img" />

                {!cartItems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Icon white" />

                    : <div className="food-item-counter">
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Icon Red" />

                        <p>{cartItems[id]}</p>

                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Icon Green" />
                    </div>
                }
            </div>

            <div className="food-item-info">
                <div className='food-item-name-rating'>
                    <p>{name}</p>

                    <img src={assets.rating_starts} alt="Rating Stars Icon" />
                </div>

                <p className="food-item-desc">{description}</p>

                <p className="food-item-price">${price}</p>
            </div>
        </div>
    )
}