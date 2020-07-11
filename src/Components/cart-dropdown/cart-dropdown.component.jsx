import React from 'react';
import { connect } from 'react-redux';
import CustomButton  from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';


const CartDropdown = ({ cartItems, history }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))) :
          (<span className='empty-message'>your cart is empty</span>)}
      </div>
      <CustomButton onClick={() => history.push('/checkout')}>CHECKOUT</CustomButton>
    </div>
  );
}

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     cartItems
//   });


//using selector with state
// const mapStateToProps = state => ({
//   cartItems: selectCartItems(state)
// });

//using selector with createStructuredSelector
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
  
export default withRouter(connect(mapStateToProps)(CartDropdown));