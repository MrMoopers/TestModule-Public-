export const preloadTemplates = async function() {
	const templatePaths = [
		// Add paths to "modules/TestModule/templates"
	];

	return loadTemplates(templatePaths);
}
