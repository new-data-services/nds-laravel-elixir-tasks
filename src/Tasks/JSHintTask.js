let gulpJSHint;

class JSHintTask extends Elixir.Task {
    /**
     * Constructor
     *
     * @param  {string}       name
     * @param  {string|array} paths
     * @param  {object|null}  options
     */
    constructor(name, src, options = {}) {
        super(name, null, null);

        this.src = src;
        this.output = [];
        this.options = options;
    }

    /**
     * Load async dependencies
     */
    loadDependencies() {
        gulpJSHint = require('gulp-jshint');
    }

    /**
     * Gulp task
     */
    gulpTask() {
        return gulp
            .src(this.src)
            .pipe(this.jshint())
            .pipe(this.jshintReporter('default'))
            .pipe(this.jshintReporter('fail'))
            .on('error', this.onError())
            .pipe(this.onSuccess());
    }

    /**
     * Gulp JSHint
     */
    jshint() {
        this.recordStep('Detect errors and potential problems');

        return gulpJSHint(this.options);
    }

    /**
     * Gulp JSHint reporter
     *
     * @param  {string} reporter
     */
    jshintReporter(reporter) {
        return gulpJSHint.reporter(reporter);
    }
}

export default JSHintTask;