// #/view/category/
// #/view/category/index
// #/edit/id
// #/create
// #/search
// #/search/a+b+c


function new_viewer() {
	simplemde = new SimpleMDE(
		{ 
			toolbar: false,
			element: document.getElementById("knowledge-md-editor") 
		}
	);
}

function new_editor(id) {
	simplemde = new SimpleMDE(
		{ 
			autosave: {
				enabled: true,
				uniqueId: id,
				delay: 10000,
			},
			showIcons: ["code", "table", "horizontal-rule"],
	
			//insertTexts: {
			//	image: ["![](\\\\imdntsfas3\\tsb1$\\imdfdbdev1\\(TS)D1\\Helpdesk\\", ")"],
			//},
			promptURLs : true,
			spellcheck: false,
			element: document.getElementById("knowledge-md-editor") 
		}
	);
}


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
				new_viewer();
			}
			return;
		case 'edit':
			var index = target[1];
			render(renderEditKnowledge(index));
			new_editor(index);
			return;
		case 'create':
			var obj = renderCreate();

			render(obj.domElement);
			new_editor(obj.index);
			return;
		case 'search':
			render(renderSearch());
			return;
		case 'export':
			render('');
			return;
		default:
			window.location = window.location.pathname + "#/view";
	}
}