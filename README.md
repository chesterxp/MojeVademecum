# MojeVademecum
Przykładowe rozwiązania niektórych case-ów

Markdown Crash Curse

# HEADINGS
**use: #**
## heading 2
### heading 3
#### heading 4

# Italics
**use: * or _**  
i love *javascript*    
i love _javascript_    

# Strong

**use:\*\***  
i love **javascript**  

# Strakethrought
use ~~   
i love ~~javascript~~

# Horizontal Rule
use ___   
___

# Blockquote
use >
>i love javascript

# Links
use \[name of links](url)   \n   
"description of link"

[www.google.com](www.google.com
"desctiption of link")

# UL
use \n *   
tab and next *
* item 1
* item 2
* item 3
    * item 3 part 1
    * item 3 part 2
    * item 3 part 3

# OL
use \n 1.   
tab and next 1.
1. item 1
1. item 2
1. item 3
    1. item 3 part 1
    1. item 3 part 2
    1. item 3 part 3


# Inline code block

use \`code`

`<div class="header> Block 1 </div>`

# Images

use \![name of images]\(link)
   
![Markdown Logo](https://markdown-here.com/img/logo-2015/austin.png)


# Github Markdown

## use \``` code```
```
    npm instal gulp

```

after ``` write language eq bash, javascript, python
     
bash:   
```bask
    npm instal gulp-sass
    npm start
    
```
javascript
```
```javascript
    function add(num1, num2){
        return num1 + num2;
    }
```

```javascript
    function add(num1, num2){
        return num1 + num2;
    }
```

# Tables

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | www.google.com|   $12 |
| zebra stripes | are neat      |    $1 |
```

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | www.google.com|   $12 |
| zebra stripes | are neat      |    $1 |

| Changes                               | DOM Load      | Full Load     |
| -------------                         |:------------  | -----:        |
| Start                                 | 12,54         | 22.80         |
| MinCSS i JS                           | 11,94         | 22.89         |
| Delate Jquery UI                      | 6,13          | 20.47         |
| Optimize images                       | 6.56          | 12.12         |
| Remove smoothScroll and add LazyLoad  | 3:56          | 10.69         |

# Task list
use \* []

* [x] Task 1
* [x] Task 2
* [ ] Task 3
* [] Task 4



# Gulp guide

## STYLES

**Instal Guilde**

```npm install --global gulp-cli```
```npm install --save-dev gulp```

Build Gulpfile.js and add

```javascript
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});
```

**SASS**
```npm install gulp-sass --save-dev```

```javascript
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./css/*.scss', ['sass']);
});
```

**gulp-notify**

Message after finishing the task

```npm install --save-dev gulp-notify```

```javascript
var notify = require("gulp-notify");
```
```
gulp.task('sass', function () {
  return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(notify("sass Gulp!"));
});
```

**CSSNano**

```npm install gulp-cssnano --save-dev```
```javascript
var cssnano = require('gulp-cssnano');

gulp.task('min', function() {
  return gulp.src('./css/*.css')
      .pipe(cssnano())
      .pipe(gulp.dest('dist'));
})
```



**Rename Gulp**
```npm i gulp-rename```

```javascript
var rename = require("gulp-rename");

gulp.task('min', function() {
  return gulp.src('./css/*.css')
      .pipe(cssnano())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist'));
})
```

**autoprefixer**
```npm install --save-dev gulp-autoprefixer```

```javascript
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('default', () =>
    gulp.src('src/app.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);
```

### FULL STYLES

```
gulp.task('styles', function () {
  return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
    .pipe(gulp.dest('./dist'))  
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist'))
    .pipe(notify({ message: 'Styles task complete' }));
});
```

## Javascript

**jshint**

```npm install jshint gulp-jshint --save-dev```

```javascript
const jshint = require('gulp-jshint');
 
gulp.task('lint', function() {
  return gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
```




**concat**

```npm install --save-dev gulp-concat```

```javascript
var concat = require('gulp-concat');
 
gulp.task('concat', function() {
  return gulp.src('./js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});
```

**uglify**

```npm install --save-dev gulp-uglify```
```npm install pump```

```javascript
var uglify = require('gulp-uglify');
var pump = require('pump');
 
gulp.task('compress', function (cb) {
  pump([
        gulp.src('lib/*.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});
```

**Babel**

```npm install --save-dev gulp-babel babel-core babel-preset-env```

```javascript
const babel = require('gulp-babel');
 
gulp.task('default', () =>
    gulp.src('src/app.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'))
);
```
**browserify**

```npm babelify browserify vinyl-buffer vinyl-source-stream```

```javascript
const babelify = require('babelify');
const browserify = require('browserify')
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

gulp.task('es6', () => {
    browserify('src/app.js')
        .transform('babelify', {
            presets: ['es2015']
        })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('build/'));
});
```




### FULL SCRIPTS
```javascript
gulp.task('scripts', function() {
  return gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'))
    .pipe(notify({ message: 'Scripts task complete' }));
});
```

## Others features

**gulp-imagemin**

```npm install --save-dev gulp-imagemin```
```npm install --save imagemin-jpeg-recompress```

```javascript
const imagemin = require('gulp-imagemin');
 
gulp.task('optimize', function () {
        return gulp.src('./images/*')
            .pipe(imagemin([
            imagemin.gifsicle(),
            imageminJpegRecompress({
                loops:4,
                min: 50,
                max: 95,
                quality:'low' 
            }),
            imagemin.optipng(),
            imagemin.svgo()
            ]))
            .pipe(gulp.dest('./dist/'))
    });
```


**gulp-clean**

```npm install --save-dev gulp-clean```
```javascript
var clean = require('gulp-clean');
 
gulp.task('clean', function () {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
});
```

**htmlmin**

```npm install --save gulp-htmlmin```
```javascript
var htmlmin = require('gulp-htmlmin');
 
gulp.task('minhtml', function() {
		return gulp.src('index_src.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./'));
	});
```


# Full production

```javascript
gulp.task('production', ['clean'], function() {
    gulp.start('styles', 'scripts','minhtml');
});
```

# Watch - dev
```javascript
gulp.task('watch', function () {
		gulp.watch('./css/*.scss', ['sass-dev']);
		gulp.watch('./js/*.js', ['scripts-dev']);
	});
	gulp.task('sass-dev', function () {
		return gulp.src('./css/*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('./dist'))
			.pipe(rename({
				suffix: '.min'
			}))
			// .pipe(cssnano())
			.pipe(gulp.dest('./dist'));
	});
	gulp.task('scripts-dev', function () {
		return gulp.src('./js/*.js')
			.pipe(concat('all.js'))
			.pipe(gulp.dest('./dist'))
			.pipe(rename({
				suffix: '.min'
			}))
			// .pipe(uglify())
			.pipe(gulp.dest('dist/'));
	});
  ```

**devDependencies**
```json
"devDependencies": {
    "gulp": "^3.9.1",
    "gulp-autoprefixer": "^5.0.0",
    "gulp-cache": "^1.0.2",
    "gulp-clean": "^0.4.0",
    "gulp-concat": "^2.6.1",
    "gulp-cssnano": "^2.1.3",
    "gulp-imagemin": "^4.1.0",
    "gulp-jshint": "^2.1.0",
    "gulp-notify": "^3.2.0",
    "gulp-sass": "^4.0.1",
    "gulp-uglify": "^3.0.0",
    "jshint": "^2.9.5"
  },
  "dependencies": {
    "gulp-rename": "^1.2.3",
    "pump": "^3.0.0"
  }
  ```




