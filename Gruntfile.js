module.exports = function(grunt) {
  // Do grunt-related things in here

  // Project configuration.
  grunt.initConfig({
    compass: {
      options: {
        sassDir: "src/css/sass",
        cssDir: "src/css",
        imagesDir: "src/img",
        fontsDir: "src/fonts",
        javascriptsDir: "src/js"
      },
      dev: {
        options: {
          relativeAssets: true
        }
      }
    },
    concat: {
        app: {
            src: ["node_modules/jquery/dist/jquery.min.js",
            "src/js/dev/index.js"],
            dest: "src/js/app.js"
        }

    },
    googlefonts: {
        build: {
          options: {
            fontPath: 'src/fonts',
            cssFile: 'src/fonts/fonts.css',
            fonts: [
                {
                    family: 'Open Sans',
                    styles: [
                        400, 700
                    ]
                },
                {
                    family: 'Josefin Slab',
                    styles: [
                        400, 600
                    ]
                },
                {
                    family: 'Yellowtail',
                    styles: [
                        400
                    ]
                },
                {
                    family: 'Poiret One',
                    styles: [
                        400
                    ]
                },
            ]
          }
        }
    },
    watch: {
        css: {
            files: "src/css/sass/*.{sass,scss}",
            tasks: ['compass:dev']
        },
        js: {
            files: "src/js/**/*.js",
            tasks: ['concat:app']
        }
    },

  });

  //cargar tareas
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-google-fonts');

  // Default task(s).
  grunt.registerTask('default', ["compass:dev", "concat:app", "googlefonts"]);
};