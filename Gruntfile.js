module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            css: {
                src: [
                    'public/app/**/*.css',
                    '!public/app/common/combined.css',
                    '!public/app/common/combined.min.css'
                ],
                dest: 'public/app/common/combined.css'
            }
        },
        cssmin : {
            css:{
                src: 'public/app/common/combined.css',
                dest: 'public/app/common/combined.min.css'
            }
        },

        watch: {
            files: ['public/app/**/*.css', '!public/app/common/combined.css', '!public/app/common/combined.min.css'],
            tasks: ['concat', 'cssmin']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', [ 'concat:css', 'cssmin:css']);
};