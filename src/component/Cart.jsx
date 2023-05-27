import { Button, List } from 'reactstrap';
import { useState } from 'react';
import useFetchData from './useFetchData';
import CartItem from './cartItem';

function Cart() {
	const baseUrl = "http://localhost:3000";
	const { data, loading, } = useFetchData(baseUrl+"/cart");
	
	if(data.length === 0){
		return ( <h1>Cart is Empty!</h1> );
	}
	else{
		return (
			<div key="cart-list">
			{loading && <div>Loading</div>}
			{!loading && (
				<div>
					<h2>Your Cart</h2>
					<List>
						{ data.map(item => (CartItem(item))) }
					</List>
				</div>
			)}
			</div>
		);
	}
}

export default Cart;