import React, { Component } from 'react';
import BookItem from './BookItem';
// 부모 component로 받은 books를 목록으로 출력 하도록 rendering
class BookList extends Component {
    render() {
        const {books, onSelect} = this.props
        
        return (
            <div>
                <ul>
                {books.map(book => {
                    return (
                        <li key={books.ISBN} ><BookItem key={books.ISBN} book={book} onSelect={onSelect} /></li>
                    )
                })
                }
                </ul>
            </div>
        );
    }
}

export default BookList;