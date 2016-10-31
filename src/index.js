import JSHintTask from './Tasks/JSHintTask';

/*
 |----------------------------------------------------------------
 | NDS Laravel-Elixir-Tasks
 |----------------------------------------------------------------
 |
 | These tasks will allow you to use:
 | - JSHint
 |
 */

Elixir.extend('jshint', (src, options) => {
    let assetsJsFolder = Elixir.config.get('assets.js.folder');
    src = src || [`${assetsJsFolder}/**/*.js`, `!${assetsJsFolder}/vendor/**/*.js`];

    new JSHintTask('jshint', src, options);
});