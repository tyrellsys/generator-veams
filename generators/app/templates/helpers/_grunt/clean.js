module.exports = {
	dist: [
		'<%%= paths.dist %>/**'
	],
    dev: [<% if(installAssemble){ %>
        '<%%= paths.dev %>/**/*.{html,xml,txt}',<% } %><% if (features && features.length > 0) { if (features.indexOf('installDocs') != -1) { %>
		'<%%= paths.dev %>/styleguide/**/*',<% }} %>
        '<%%= paths.dev %>/css/**/*',
        '<%%= paths.dev %>/js/**/*',
        '<%%= paths.dev %>/img/**/*'] <% if(gruntModules && gruntModules.length > 0){ %><% if(typeof gruntModules === 'object'){ _.each(gruntModules, function(name, i) { if(name == 'grunt-grunticon') { %>,
	grunticon: [
        '<%%= paths.src %>/scss/icons/*.{html,js,txt}'
    ]<% } %><%}); %><%} %><%} %>
};