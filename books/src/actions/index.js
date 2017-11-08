export function selectBook(book) {
    // selectBook is an ActionCreator, it needs to return an action,
    // an object with a type property
    // The returned object can contain the type and sometimes the payload properties
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}