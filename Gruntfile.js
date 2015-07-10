module.exports = function(grunt){
	grunt.initConfig({
		conf:{
			input: "public/javascripts/app/**/*.js"
		},
		uglify:{
			dist:{
				files:{
					"public/javascripts/destination/app.min.js":"<%= conf.input %>"
				}
			}
		},
		watch:{
			files:"<%= conf.input %>",
			tasks: ["uglify"]
		}
	})
	
	grunt.loadNpmTasks("grunt-contrib-uglify")
	grunt.loadNpmTasks("grunt-contrib-watch")

	grunt.registerTask("default", ["uglify", "watch"]);
}
