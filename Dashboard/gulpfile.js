const gulp = require("gulp");
const stylus = require("gulp-stylus");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const mqpacker = require("css-mqpacker");
const minify = require("gulp-minify");
const htmlmin = require("gulp-htmlmin");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const typsecript = require("gulp-typescript");

gulp.task("Dashboard-Stylus", () => {
	gulp.src("./src/styl/*.styl")
		.pipe(stylus())
		.pipe(concat("./main.css"))
		.pipe(postcss([
			mqpacker,
			autoprefixer,
			cssnano,
		]))
		.pipe(gulp.dest("./dist/css/"));
});

gulp.task("Dashboard-Typescript", () => {
	gulp.src("./src/ts/*.ts")
		.pipe(typsecript({
			noImplicitAny: true,
			removeComments: true,
			charset: "UTF8",
			target: "ES2015",
			moduleResolution: "classic",
			module: "commonjs",
		})).js
		.pipe(minify({
			ext: ".js",
		}))
		.pipe(gulp.dest("./dist/js/"));
});

gulp.task("Dashboard-Images", () => {
	gulp.src("./src/img/*")
		.pipe(imagemin())
		.pipe(gulp.dest("./dist/img/"));
});

gulp.task("Dashboard-Resources", () => {
	gulp.src("./src/rsc/*")
		.pipe(gulp.dest("./dist/rsc/"));
});

gulp.task("Dashboard-Server", () => {
	gulp.src("./src/server/**/*")
		.pipe(gulp.dest("./dist/server/"));
});

gulp.task("Dashboard-HTML", () => {
	gulp.src("./src/index.html")
		.pipe(htmlmin({
			useShortDoctype: true,
			removeComments: true,
			removeTagWhitespace: true,
		}))
		.pipe(gulp.dest("./dist/"));
});

gulp.task("default", [
	"Dashboard-Stylus",
	"Dashboard-Typescript",
	"Dashboard-Images",
	// "Dashboard-Resources",
	// "Dashboard-Server",
	"Dashboard-HTML",
]);