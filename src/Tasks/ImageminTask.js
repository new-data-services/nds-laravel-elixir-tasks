let imagemin;

class ImageminTask extends Elixir.Task {
    /**
     * Constructor
     *
     * @param  {string}       name
     * @param  {string|array} src
     * @param  {string|array} output
     * @param  {object|null}  options
     */
    constructor(name, src, output, options = {}) {
        super(name, null, null);

        this.src = src;
        this.output = output;
        this.options = options;
    }

    /**
     * Load async dependencies
     */
    loadDependencies() {
        imagemin = require('gulp-imagemin');
    }

    /**
     * Gulp task
     */
    gulpTask() {
        return gulp
            .src(this.src)
            .pipe(this.imagemin())
            .on('error', this.onError())
            .pipe(this.saveAs(gulp))
            .pipe(this.onSuccess());
    }

    /**
     * Gulp JSHint
     */
    imagemin() {
        this.recordStep('Minify images');

        return imagemin(this.options);
    }

    /**
     * Set the destination path
     *
     * @param {object} gulp
     */
    saveAs(gulp) {
        this.recordStep('Saving to Destination');

        return gulp.dest(this.output);
    }
}

export default ImageminTask;