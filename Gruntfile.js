var timer = require("grunt-timer");

module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	timer.init(grunt);

	grunt.initConfig({
		watch: {
			sass: {
				files: ['src/css/*.scss', 'src/js/*.js'],
				tasks: ['sass', 'babel']
			},
			options: {
				livereload: true
			}
		},
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src/css/', //gdzie szukac
					src: ['*.scss'], //co szukac
					dest: 'css/', //gdzie zapisac
					ext: '.css' //z jakim skrotem
				}]
				//production
				// files: {
				// 	'css/main.css': 'src/css/all.scss'
				//   }
			}
		},
		cssmin: {
			options: {
				mergeIntoShorthands: false,
				roundingPrecision: -1
			},
			target: {
				files: [{
					expand: true,
					cwd: 'css/', //gdzie szukac
					src: ['*.css'], //co szukac
					dest: 'css/', //gdzie zapisac
					ext: '.min.css' //z jakim skrotem
				}]
				//production
				// files: {
				// 	'css/main.min.css': 'css/main.css'
				// }
			}
		},
		babel: {
			options: {
				sourceMap: false
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'src/js/', //gdzie szukac
					src: ['*.js'], //co szukac
					dest: 'js/', //gdzie zapisac
					ext: '.js', //z jakim skrotem
					extDot: 'first' // Extensions in filenames begin after the first dot
				}]
			}
		},
		compress: {
			main: {
			  options: {
				mode: 'gzip'
			  },
			  expand: true,
				cwd: 'css/',
				//production
				// src: ['main.min.css'],
				src: ['*.css'],
			  dest: 'css/',
			  ext: '.cssgz' //z jakim skrotem
			}
		},
		concat: {
			options: {
			  separator: '\n\n',
			},
			dist: {
			  src: ['src/js/*.js'],
			  dest: 'js/main.js',
			},
		  },
	});



	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default', ['watch']);
	// grunt.registerTask('production', ['sass', 'cssmin','compress']);
};