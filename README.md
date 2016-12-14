# nds-laravel-elixir-tasks

This Laravel Elixir 6 extension brings support for several useful tasks.

## Install

```js
npm install nds-laravel-elixir-tasks --save-dev
```

## Usage
gulpfile.js
```js
const Elixir = require('laravel-elixir');
require('nds-laravel-elixir-tasks');

Elixir(mix => {
	mix.TASK(OPTIONS)
});
```

## Tasks
### JSHint
```js
mix.jshint(); // Laravel's default js assets folder
```
or
```js
mix.jshint(src, options);
```

### Imagemin
```js
mix.imagemin(); // Laravel's default images assets folder
```
or
```js
mix.imagemin(src, output, options);
```

## License
Laravel Elixir is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).