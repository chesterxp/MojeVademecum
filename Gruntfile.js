var timer = require("grunt-timer");

module.exports = function(grunt){

timer.init(grunt);

grunt.initConfig({

	watch:{

		sass:{
			files: ['css/*.scss'],
			tasks: ['sass']
		},
    options:{
      livereload:true
    }
	},

  sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css/', //gdzie szukac
          src: ['*.scss'],//co szukac
          dest: 'css/',//gdzie zapisac
          ext: '.css'//z jakim skrotem
        }]
      }
    }

});



grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.registerTask('default', ['sass']);
grunt.registerTask('server', ['express','watch']);
};