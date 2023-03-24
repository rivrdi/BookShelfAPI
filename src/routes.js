/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */

const { addBookHandler, getAllBookHandler, getBookByIdHandler, editBookHandler, deleteBookHandler } = require('./handler')

/* eslint-disable indent */
const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBookHandler,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookHandler,
    }
]

module.exports = routes
