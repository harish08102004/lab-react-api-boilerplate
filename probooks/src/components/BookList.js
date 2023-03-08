function BookList(props) {
    const { books } = props;
    return (
        <div>
          {books.map((book) => (
            <div className='book-info' key={book.id}>
              <h2>{book.title}</h2>
              <div className="books-body">
                <img src={book.imageLinks.thumbnail} alt = ""/>
                <p>{book.description}</p>
              </div>
              <p>{book.authors.join(', ')}</p>
              <hr/>
            </div>
          ))}
        </div>
    );
}

export default BookList;
