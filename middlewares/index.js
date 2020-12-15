const express = require('express');
const cors = require('cors');
const path = require('path');

const rootPath = path.parse(__dirname).dir;
const staticClientFilesPath = path.resolve(rootPath, 'client', 'dist', 'client');

module.exports = {
    middlewares: [
        cors(),
        express.json(),
        express.static('public'),
        express.static(staticClientFilesPath),
        express.urlencoded({ extended: true }),
    ],
};