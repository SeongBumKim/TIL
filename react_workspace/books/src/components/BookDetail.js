import React, { Component } from 'react';

import { Card, Image } from 'semantic-ui-react'

class BookDetail extends Component {
    render() {
        const {book} = this.props;

        return (
            <Card>
                <Image src={book.imgUrl} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{book.title}</Card.Header>
                    <Card.Meta>
                        <span>{book.author}</span>
                        <span>{book.publisher}</span>
                        <span>{book.price}</span>
                    </Card.Meta>
                    <Card.Description>
                        {book.introduce}
                    </Card.Description>
                </Card.Content>
            </Card>
            // <div>
            //     <img src={book.imgUrl} alt={book.title} /><br/>
            //     <h3>{book.title}</h3>
            //     {book.author} &nbsp;&nbsp;{book.publisher}<br/>
            //     {book.price}<br/>
            //     {book.introduce}<br/>
            // </div>
        );
    }
}

export default BookDetail;