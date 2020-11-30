const express = require('express');
const cors = require('cors');
const path = require('path');

const rootPath = path.parse(__dirname).dir;
const staticClientFilesPath = path.resolve(rootPath, 'client', 'dist', 'client');
const staticPublicFilesPath = path.resolve(rootPath, 'public');

module.exports = {
    middlewares: [
        cors(),
        express.json(),
        express.static(staticClientFilesPath),
        express.static(staticPublicFilesPath),
        express.urlencoded({ extended: true }),
    ],
};