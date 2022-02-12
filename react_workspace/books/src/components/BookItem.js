import React, { Component } from 'react';

import { Item, ItemContent } from 'semantic-ui-react'

// 부모 component인 BookList로부터 받은 props book 데이터 출력
class BookItem extends Component {
    render() {
        const {book, onSelect} = this.props;
        return (
            <Item onClick={()=>onSelect(book)}>
                <Item.Image size='tiny' src={book.imgUrl} />
                <ItemContent>
                    <Item.Header as='a'>{book.title}</Item.Header>
                    <Item.Meta>{book.price}</Item.Meta>
                    <Item.Extra>{book.author}</Item.Extra>
                </ItemContent>
            </Item>
        );
    }

}// 부모 component인 BookList로부터 받은 props book 데이터 출력

export default BookItem;
