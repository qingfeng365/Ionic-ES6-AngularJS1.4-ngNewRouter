export function configuration($componentLoaderProvider) {

	$componentLoaderProvider.setTemplateMapping(function(name){
		return 'templates/' + name + '/' + name + '.html';
	});
}