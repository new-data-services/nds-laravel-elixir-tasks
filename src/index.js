import JSHintTask   from './Tasks/JSHintTask';
import ImageminTask from './Tasks/ImageminTask';

/*
 |----------------------------------------------------------------
 | NDS Laravel-Elixir-Tasks
 |----------------------------------------------------------------
 |
 | These tasks will allow you to use:
 | - JSHint
 | - Imagemin
 |
 */

Elixir.extend('jshint', (src, options) => {
    let assetsJsPath = Elixir.config.get('assets.js.folder');
    src = src || [`${assetsJsPath}/**/*.js`, `!${assetsJsPath}/vendor/**/*.js`];

    new JSHintTask('jshint', src, options);
});

Elixir.extend('imagemin', (src, output, options) => {
    let assetsPath = Elixir.config.get('assets.assetsPath');
    let publicPath = Elixir.config.get('assets.publicPath');

    src = src || `${assetsPath}/images/*.js`;
    output = output || `${publicPath}/images/app`;

    new ImageminTask('imagemin', src, output, options);
});