 ![GitHub](https://img.shields.io/github/license/LimonkaTM/gulp-dev-sample) ![GitHub repo size](https://img.shields.io/github/repo-size/LimonkaTM/gulp-dev-sample)

# Gulp-dev-sample

This is a simple template for your web application, specifically designed for use with Gulp task manager.

## Navigation

-  **[Install](#install)**
-  **[Description](#description)**
	-  **[Directories and files](#directories-and-files)**
	-  **[Dependencies](#dependencies)**
-  **[Usage](#usage)**

## Install

Installation options:
- Download ZIP archive of this repository.
	1. Click on green button "Code".
	2. Choose "Download ZIP".
	3. Unpack downloaded ZIP archive in your project folder.
- Use ```git clone https://github.com/LimonkaTM/gulp-dev-sample.git```. 

# Description

### Directories and files

***```git/```*** -- contains all templates files for GitHub repository (LICENSE, README.md, .gitignore).
&emsp;&emsp; ```git/LICENSE``` -- MIT license template file for GitHub repository.
&emsp;&emsp; ```git/README.md``` -- README.md template file for GitHub repository.
&emsp;&emsp; ```git/.gitignore``` -- .gitignore template file with commonly used ignore rules.

**```gulpfile.js/```** -- Gulp directory.
&emsp;&emsp; **```gulpfile.js/config/```** -- contains configuration files for Gulp.
&emsp;&emsp;&emsp;&emsp; *```gulpfile.js/config/app.js```* -- configuration of used packages in the build.
&emsp;&emsp;&emsp;&emsp; *```gulpfile.js/config/path.js```* -- all used paths.
&emsp;&emsp; **```gulpfile.js/task/```** -- contains all task files.
&emsp;&emsp;&emsp;&emsp; *```gulpfile.js/task/clear.js```* -- contains a task that is used to clean up the destination directory (public/) that contains the files after the build.
&emsp;&emsp;&emsp;&emsp; *```gulpfile.js/task/css.js```* -- contains a task that is used to process CSS files.
&emsp;&emsp;&emsp;&emsp; *```gulpfile.js/task/font.js```* -- contains a task that is used to process all font files.
&emsp;&emsp;&emsp;&emsp; *```gulpfile.js/task/html.js```* -- contains a task that is used to process HTML files.
&emsp;&emsp;&emsp;&emsp; *```gulpfile.js/task/img.js```* -- contains a task that is used to process all images.
&emsp;&emsp;&emsp;&emsp; *```gulpfile.js/task/js.js```* -- contains a task that is used to process JS files.
&emsp;&emsp;&emsp;&emsp; *```gulpfile.js/task/pug.js```* -- contains a task that is used to process PUG files.
&emsp;&emsp;&emsp;&emsp; *```gulpfile.js/task/scss.js```* -- contains a task that is used to process SCSS/SASS files.
&emsp;&emsp; *```gulpfile.js/task/index.js```* -- file which collects all task files.

**```src/```** -- contains all development files and directories.
&emsp;&emsp; **```src/css/```** -- contains all CSS directories.
&emsp;&emsp;&emsp;&emsp; **```src/css/base```** -- contains a base CSS styles.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; *```src/css/base/base.css```* -- styles for standart elements.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; *```src/css/base/fonts.css```* -- file for @font-face.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; *```src/css/base/helpers.css```* -- helpful styled classes.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; *```src/css/base/typography.css```* -- typography styles.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; *```src/css/base/vars.css```* -- contains all CSS variables.
&emsp;&emsp;&emsp;&emsp; **```src/css/components```** -- contains CSS styles of smaller components (buttons, inputs and etc.).
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; *```src/css/components/button.css```* -- styles for button component.
&emsp;&emsp;&emsp;&emsp; **```src/css/layout```** -- contains CSS styles everything that takes part in laying out the site or application.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; *```src/css/layout/poligon-row__block.css```* -- styles for layout.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; *```src/css/layout/poligon.css```* -- styles for layout.
&emsp;&emsp;&emsp;&emsp; **```src/css/pages```** -- contains page-specific CSS styles.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; *```src/css/pages/home.css```* -- styles for home page.
&emsp;&emsp;&emsp;&emsp; **```src/css/themes```** -- contains CSS styles from different themes your site or application.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; *```src/css/themes/default.css```* -- styles for default theme.
&emsp;&emsp;&emsp;&emsp; **```src/css/vendors```** -- contains CSS styles from different external libraries and frameworks.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; *```src/css/vendors/normalize.css```* -- file to normalize styles in all browsers.
&emsp;&emsp;&emsp;&emsp; **```src/css/vendors-extensions```** -- contains CSS styles for changing different styles of external libraries and frameworks.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; *```src/css/vendors-extensions/normalize.css```* -- styles for changing styles of external normalize.css file.
&emsp;&emsp;&emsp;&emsp; *```src/css/main.css```* -- main CSS file.
&emsp;&emsp; **```src/font/```** -- contains all downloaded fonts.
&emsp;&emsp; **```src/html/```** -- contains HTML files and cataloges.
&emsp;&emsp;&emsp;&emsp; **```src/html/components```** -- contains component markup files.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; *```src/html/components/button.html```* -- button component markup file.
&emsp;&emsp;&emsp;&emsp; **```src/html/layout```** -- contains layout markup files.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; *```src/html/layout/header.html```* -- header layout markup file.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; *```src/html/layout/footer.html```* -- footer layout markup file.
&emsp;&emsp;&emsp;&emsp; **```src/html/pages```** -- contains markup all pages.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; *```src/html/pages/about_us.html```* -- about us page markup file.
&emsp;&emsp;&emsp;&emsp; *```src/html/index.html```* -- main markup file.
&emsp;&emsp; **```src/img/```** -- contains all images.
&emsp;&emsp;&emsp;&emsp; **```src/img/favicon```** -- contains all favicons and everything related to them.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; *```src/img/favicon/favicon.ico```* -- empty .ico file.
&emsp;&emsp;&emsp;&emsp; *```src/img/Screenshot_1.png```* -- image example.
&emsp;&emsp; **```src/js/```** -- contains all JS files.
&emsp;&emsp;&emsp;&emsp; **```src/js/modules```** -- contains all JS modules.
&emsp;&emsp;&emsp;&emsp; *```src/js/main.js```* -- main JS file.
&emsp;&emsp; **```src/pug/```** -- contains all PUG files.
&emsp;&emsp;&emsp;&emsp; **```src/pug/components```** -- contains component PUG markup files.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/pug/components/button.pug```* -- button component PUG markup file.
&emsp;&emsp;&emsp;&emsp; **```src/pug/layout```** -- contains layout PUG markup files.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/pug/layout/header.pug```* -- header layout PUG markup file.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/pug/layout/main.pug```* -- main layout PUG markup file.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/pug/layout/footer.pug```* -- footer PUG markup file.
&emsp;&emsp;&emsp;&emsp; **```src/pug/pages```** -- contains PUG markup all pages.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/pug/pages/about_us.pug```* -- bout us page PUG markup file.
&emsp;&emsp;&emsp;&emsp; *```src/pug/index.pug```* -- main PUG file.
&emsp;&emsp; **```src/scss/```** -- contains all SCSS/SASS files.
&emsp;&emsp;&emsp;&emsp; **```src/sass/abstracts```** -- contains all SASS/SCSS tiiks abd gekoers ysed across the project (gloval variable, function, mixin and placeholder)
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/pug/pages/_functions.scss```* -- file contains all SCSS/SASS functions.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/pug/pages/_mixins.scss```* -- file contains all SCSS/SASS mixins.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/pug/pages/_placeholders.scss```* -- file contains all SCSS/SASS placeholders.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/pug/pages/_variables.scss```* -- file contains all SCSS/SASS variables.
&emsp;&emsp;&emsp;&emsp; **```src/sass/base```** -- contains a base SCSS/SASS styles.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/sass/base/_animations.scss```* -- file contains all SCSS/SASS animations styles.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/sass/base/_base.scss```* -- contains SCSS/SASS styles for standart elements.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/sass/base/_fonts.scss```* -- file for @font-fase.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/sass/base/_helpers.scss```* -- helpful styled classes.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/sass/base/_typography.scss```* -- file contains all SCSS/SASS typography styles.
&emsp;&emsp;&emsp;&emsp; **```src/sass/components```** -- contains SCSS/SASS styles of smaller components (buttons, inputs and etc.).
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/sass/components/_button.scss```* -- file contains all SCSS/SASS styles related to the button component.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/sass/components/_carousel.scss```* -- file contains all SCSS/SASS styles related to the carousel component.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/sass/components/_media.scss```* -- file contains all SCSS/SASS styles related to the media component.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/sass/components/_thumbnails.scss```* -- file contains all SCSS/SASS styles related to the thumbnails component.
&emsp;&emsp;&emsp;&emsp; **```src/sass/layout```** -- contains SCSS/SASS styles everything that takes part in laying out the site or application.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/sass/layout/_header.scss```* -- file contains all SCSS/SASS styles related to the header layout.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/sass/layout/_forms.scss```* -- file contains all SCSS/SASS styles related to the form layout.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/sass/layout/_sidebar.scss```* -- file contains all SCSS/SASS styles related to the sidebar layout.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/sass/layout/_footer.scss```* -- file contains all SCSS/SASS styles related to the footer layout.
&emsp;&emsp;&emsp;&emsp; **```src/sass/pages```** -- contains page-specific SCSS/SASS styles.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/sass/page/_home.scss```* -- file contains all SCSS/SASS styles related to the home page.
&emsp;&emsp;&emsp;&emsp; **```src/sass/themes```** -- contains SCSS/SASS styles from different themes your site or application.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/sass/themes/_default.scss```* -- file contains all SCSS/SASS styles related to the default theme.
&emsp;&emsp;&emsp;&emsp; **```src/sass/vendors```** -- contains SCSS/SASS styles from different external libraries and frameworks.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/sass/vendors/_normalize.scss```* -- file contains all SCSS/SASS styles related to normalize elements.
&emsp;&emsp;&emsp;&emsp; **```src/sass/vendors-extensions```** -- contains SCSS/SASS styles for changing different styles of external libraries and frameworks.
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  *```src/sass/vendors-extensions/_normalize.scss```* -- file contains all SCSS/SASS styles for changing standard normalize file.
&emsp;&emsp;&emsp;&emsp;  *```src/scss/main.scss```* --  main SCSS/SASS file.

*```package.json```* -- package.json file with all dependencies for Gulp

### Dependencies

Gulp-dev-sample@1.0.0
├── [@babel/core@7.18.9](https://www.npmjs.com/package/@babel/core)
├── [@babel/preset-env@7.18.9](https://www.npmjs.com/package/@babel/preset-env)
├── [browser-sync@2.27.10](https://www.npmjs.com/package/browser-sync)
├── [del@6.1.1](https://www.npmjs.com/package/del)
├── [gulp-autoprefixer@8.0.0](https://www.npmjs.com/package/gulp-autoprefixer)
├── [gulp-babel@8.0.0](https://www.npmjs.com/package/gulp-babel)
├── [gulp-concat@2.6.1](https://www.npmjs.com/package/gulp-concat)
├── [gulp-cssimport@7.0.0](https://www.npmjs.com/package/gulp-cssimport)
├── [gulp-csso@4.0.1](https://www.npmjs.com/package/gulp-csso)
├── [gulp-file-include@2.3.0](https://www.npmjs.com/package/gulp-file-include)
├── [gulp-fonter@0.3.0](https://www.npmjs.com/package/gulp-fonter)
├── [gulp-group-css-media-queries@1.2.2](https://www.npmjs.com/package/gulp-group-css-media-queries)
├── [gulp-htmlmin@5.0.1](https://www.npmjs.com/package/gulp-htmlmin)
├── [gulp-if@3.0.0](https://www.npmjs.com/package/gulp-if)
├── [gulp-imagemin@7.1.0](https://www.npmjs.com/package/gulp-imagemin)
├── [gulp-newer@1.4.0](https://www.npmjs.com/package/gulp-newer)
├── [gulp-notify@4.0.0](https://www.npmjs.com/package/gulp-notify)
├── [gulp-plumber@1.2.1](https://www.npmjs.com/package/gulp-plumber)
├── [gulp-pug@5.0.0](https://www.npmjs.com/package/gulp-pug)
├── [gulp-rename@2.0.0](https://www.npmjs.com/package/gulp-rename)
├── [gulp-sass@5.1.0](https://www.npmjs.com/package/gulp-sass)
├── [gulp-shorthand@1.1.0](https://www.npmjs.com/package/gulp-shorthand)
├── [gulp-size@4.0.1](https://www.npmjs.com/package/gulp-size)
├── [gulp-sourcemaps@3.0.0](https://www.npmjs.com/package/gulp-sourcemaps)
├── [gulp-ttf2woff2@4.0.1](https://www.npmjs.com/package/gulp-ttf2woff2)
├── [gulp-webp-css@1.1.0](https://www.npmjs.com/package/gulp-webp-css)
├── [gulp-webp-html@1.0.2](https://www.npmjs.com/package/gulp-webp-html)
├── [gulp-webp@4.0.1](https://www.npmjs.com/package/gulp-webp)
├── [gulp@4.0.2](https://www.npmjs.com/package/gulp)
├── [sass@1.54.0](https://www.npmjs.com/package/sass)
├── [webpack-stream@7.0.0](https://www.npmjs.com/package/webpack-stream)
└── [webpack@5.73.0](https://www.npmjs.com/package/webpack)

## Usage

Running one of these scripts will create a "public" folder that will contain all of your project's production or development files:
|        Script       |   Description   |
|---------------------|-----------------|
| ```npm run sass```  | helper script   |
| ```npm run gulp```  | helper script   |
| ```npm run start``` | for development |
| ```npm run build``` | for production  |