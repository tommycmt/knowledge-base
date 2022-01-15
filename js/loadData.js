let readFile = function(file) {
		console.log(file);
    let reader = new FileReader();

    reader.onload = function(e) {
        var text = reader.result;
        setKnowledges(text);
    };
		
		reader.readAsText(file);

};

function setKnowledges(text) {
	value = JSON.parse(text);
	knowledges = value;
	knowledges.forEach(function(knowledge) {
		if (!categories.has(knowledge.category)) {
			categories.add(category);
		}
		if (!users.has(knowledge.user)) {
			users.add(knowledge.user);
		}
	})
	route(window.location.hash);;
}
