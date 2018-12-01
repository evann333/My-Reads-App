import React, {Component} from "react";

class BookItem extends Component {

    render() {
        const book = this.props.book ? this.props.book : null;
        const onShelfChange = this.props.onShelfChange;

        return (book &&
            <div className="book">
                <div className="book-top">
                    {book.imageLinks && book.imageLinks.thumbnail && (
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: "url(" + book.imageLinks.thumbnail + ")"
                        }}> </div>)}
                    <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={(e) => onShelfChange(book, e.target.value)}>
                            <option value="nooption" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Wish List</option>
                            <option value="read">Already Read It</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && book.authors.length && book.authors.join(', ')}</div>
            </div>)
    }
}

export default BookItem;