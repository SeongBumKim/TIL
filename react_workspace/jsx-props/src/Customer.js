import React, { Component } from 'react';

class Customer extends Component {
    render() {
        const {id, name, orders} = this.props;
        // 부모 component로부터 전달받은 attribute 값 props 객체로 사용
        // this.props.id = "id changed"; (TypeError: Cannot assign to read only property)
        return (
            <div>
                <h2>{id}</h2>        
                <p>
                    <span>이름 : {name}</span><br/>
                    <span>주문 수량: {orders.length}개</span>
                </p>
            </div>
        );
    }
}

export default Customer;


