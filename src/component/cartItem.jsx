import {Row, Col} from 'reactstrap';

function CartItem(item) {
    return (
        <Row key={item.id}>
            <Col>
                <img alt="cart_item" src=""/>
            </Col>
            <Col>
                <h3>ID: {item.id}</h3>
            </Col>
            <Col>
                <h3>Amount: {item.count}</h3>
            </Col>
        </Row>
    );
}

export default CartItem;