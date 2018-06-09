/*jslint node: true, single, multivar */

/*
 * In an effort to keep from installing multiple `node_modules` folders, I sometimes
 * install `node_modules` in my home folder on a Mac and point to the folder using
 * the USERNAME and MODULES_PATH constants below. To use this approach, replace
 * <YOUR_USERNAME> with your computer’s username. And, of course, uncomment the const
 * variables and the “require” statement.
*/
// const USERNAME = '<YOUR_USERNAME>';
// const MODULES_PATH = '/Users/' + USERNAME + '/node_modules/';

let gulp = require(`gulp`), // require(MODULES_PATH + 'gulp'),
    babel = require("gulp-babel"),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload,
    browserPref = `default`;

/**
 * To use either of the browsers listed below that match an installed browser on your
 * machine, invoke Gulp as follows:
 *
 *    gulp safari serve
 *    gulp firefox serve
 *    gulp chrome serve
 *    gulp opera serve
 *    gulp edge serve
 *    gulp ie serve
 */

gulp.task(`safari`, function () {
    'use strict';

    browserPref = `safari`;
});

gulp.task(`firefox`, function () {
    'use strict';

    browserPref = `firefox`;
});

gulp.task(`chrome`, function () {
    'use strict';

    browserPref = `google chrome`;
});

gulp.task(`opera`, function () {
    'use strict';

    browserPref = `opera`;
});

gulp.task(`edge`, function () {
    'use strict';

    browserPref = `microsoft-edge`;
});

gulp.task(`ie`, function () {
    'use strict';

    browserPref = `iexplore`;
});

gulp.task(`serve`, function () {
    'use strict';

    browserSync({
        browser: browserPref,
        notify: true,
        port: 9000,
        server: `./`
    });

    // Match all files in the current directory
    gulp.watch(`./**`).on(`change`, reload);
});
