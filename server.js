var express = require('express');
var path = require('path');
var compression = require('compression');

// server side rendering
import React from 'react';

// renders app to an html string
import { renderToString } from 'react-dom/server';

// match the url to routes and then render
import { match, RouterContext } from 'react-router';

// now import the routes
import routes from './modules/routes';

var app = express();

// must be first
app.use(compression());

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')));

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (request, response) {
    // match the routes to the url
    match({routes: routes, location: request.url}, (error, redirect, props) => {
        // here we can make some decisions all at once
        if (error) {
            // there was an error somewhere during the route matching
            response.status(500).send(err.message);
        } else if (redirect) {
            // checkout `onEnter` hooks on routes
            // before a route is entered it can redirect.
            // Here we handle on the server
            response.redirect(redirect.pathname + redirect.search);
        } else if (props) {
            // if we got props then we match a route and can render

            // `RouterContext` is what `Router` renders. `Router` keeps these `props` in its state as it
            // listens to `browserHistory`. But on the server our app is stateless, so we need to use
            // `match` to get these props before rendering
            const appHtml = renderToString(<RouterContext {...props} />);

            // dump the HTML into a template, lots of ways to do this, but none are really influenced by
            // React Router, so we're just using a little function, `renderPage`
            response.send(renderPage(appHtml));
        } else {
            // no errors,  no redirect, we just didn't match anythinf
            response.status(404).send('Not Found');
        }
    });
});

function renderPage(appHtml) {
    return `
        <!doctype html public="storage">
        <html>
        <meta charset=utf-8/>
        <title>My First Router App</title>
        <link rel=stylesheet href=/index.css>
        <div id=app>${appHtml}</div>
        <script scr="/bundle.js"></script>
    `;
}

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log('Production Express server running at localhost: ' + PORT);
});
