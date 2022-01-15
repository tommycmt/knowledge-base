// #/view/category/
// #/view/category/index
// #/edit/id
// #/create
// #/search
// #/search/a+b+c

function route(path) {
	path = path.replace(/^#\//, '');
	target = path.split('/');
	action = target[0];
	switch(action) {
		case 'view':
			var category = target[1];
			var index = target[2];

			if (category == undefined) {
				render('');
			} else if (index == undefined) {
				render(renderViewCategory(category));
			} else {
				render(renderViewKnowledge(index));
			}
			return;
		case 'edit':
			var index = target[1];
			render(renderEditKnowledge(index));
			return;
		case 'create':
			render(renderCreate());
			return;
		case 'search':
			render(renderSearch());
			return;
		default:
			window.location = window.location.pathname + "#/view";
	}
}