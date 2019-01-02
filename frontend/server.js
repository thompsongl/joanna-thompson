const express = require('express');
const favicon = require('serve-favicon');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();
        server.use(favicon(path.join(__dirname, 'favicon.ico')));

        server.get('/post/:slug', (req, res) => {
            const actualPage = '/post';
            const queryParams = { slug: req.params.slug, apiRoute: 'post' };
            app.render(req, res, actualPage, queryParams);
        });

        server.get('/page/:slug', (req, res) => {
            const actualPage = '/post';
            const queryParams = { slug: req.params.slug, apiRoute: 'page' };
            app.render(req, res, actualPage, queryParams);
        });

        server.get('/organized-lifestyle/:slug', (req, res) => {
            const actualPage = '/post';
            const queryParams = { slug: req.params.slug, apiRoute: 'page', series: 'Organized Lifestyle' };
            app.render(req, res, actualPage, queryParams);
        });

        server.get('/category/:slug', (req, res) => {
            const actualPage = '/category';
            const queryParams = { slug: req.params.slug };
            app.render(req, res, actualPage, queryParams);
        });

        server.get('/_preview/:id/:wpnonce', (req, res) => {
            const actualPage = '/preview';
            const queryParams = { id: req.params.id, wpnonce: req.params.wpnonce };
            app.render(req, res, actualPage, queryParams);
        });

        server.get('/robots.txt', (req, res) => {
            res.sendFile(path.join(__dirname, '/static', 'robots.txt'));
        });

        server.get('*', (req, res) => handle(req, res));

        server.listen(3000, (err) => {
            if (err) throw err;
            // eslint-disable-next-line no-console
            console.log('> Ready on http://localhost:3000');
        });
    })
    .catch((ex) => {
        // eslint-disable-next-line no-console
        console.error(ex.stack);
        process.exit(1);
    });
