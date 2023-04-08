const React = require('react')
const Default = require('./layouts/default')

function ErrorPage() {
    return (
        <Default>
           <h2>Whoops</h2>
           <h4>This page got lost in conversation</h4>
           <p>Go back to <a href='/projects'>Homepage</a></p>
        </Default>
    )
}

module.exports = ErrorPage