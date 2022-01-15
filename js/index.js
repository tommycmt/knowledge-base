var knowledges;
var categories = new Set();
var users = new Set();;


const renderNav = function() {
	var knowledgeSet = new Set();
	var domElement = '';
	categories.forEach(function(category) {
			domElement += `<a class="list-group-item list-group-item-action list-group-item-light p-3" href="#/view/${category}">${category}</a>`;
	});
	return domElement;
};

const renderViewCategory = function(category) {
	var domElement = `
	<div class="category-table-container">
		<table id="category-table" class="table table-responsive table-bordered table-hover">
			<thead class="table-light">
				<tr>
					<th scope="col">Title</th>
					<th scope="col">Description</th>
					<th scope="col">Action</th>
				</tr>
			</thead>
			<tbody>`;

	knowledges
	.filter(knowledge => knowledge.category == category)
	.forEach(function(knowledge) {
			var index = knowledge.index;
			domElement += `
				<tr onclick="window.location = '#/view/${category}/${index}'">
					<td>${knowledge.title}</td>
					<td>${knowledge.description}</td>
					<td><a class="btn btn-primary" href="#/edit/${index}" role="button">Edit</a></td>
				</tr>`;
	});
	domElement += `
			</body>
		</table>
	</div>`;
	return domElement;
};

const renderViewKnowledge = function(index) {
	var knowledge = knowledges[index];
	var title = knowledge.title;
	var description = knowledge.description;
	var link = knowledge.link;
	var keywords = knowledge.keywords;
	var category = knowledge.category;
	var createdDate = knowledge.createdDate;
	var lastModifiedDate = knowledge.lastModifiedDate;
	var modifiedBy = knowledge.modifiedBy;
	var obsoleted = knowledge.obsoleted;
	
	var domElement = `
<form>
	<fieldset class="row g-3" disabled>
		<div class="col-md-12">
			<label for="input-index" class="form-label">Index</label>
			<input type="text" class="form-control" id="input-index" value="${index}"></input>
		</div>
		<div class="col-md-12">
			<label for="input-description" class="form-label">Description</label>
			<input type="text" class="form-control" id="input-description" value="${description}"></input>
		</div>
		<div class="col-md-12">
			<label for="input-keywords" class="form-label">keywords</label>
			<input type="text" class="form-control" id="input-keywords" value="${keywords.join(', ')}"></input>
		</div>
		<div class="col-md-3">
			<label for="input-category" class="form-label">Category</label>
			<input type="text" class="form-control" id="input-category" value="${category}"></input>
		</div>
		<div class="col-md-3">
			<label for="input-modifiedBy" class="form-label">modifiedBy</label>
			<input type="text" class="form-control" id="input-modifiedBy" value="${modifiedBy}"></input>
		</div>
		<div class="col-md-3">
			<label for="input-obsoleted" class="form-label">Obsoleted</label>
			<input type="text" class="form-control" id="input-obsoleted" value="${obsoleted}"></input>
		</div>
	</fieldset>
  <div class="col-12">
    <a class="btn btn-primary" style="margin-top:10px" href="#/edit/${index}" role="button">Edit</a>
  </div>
</form>
`;
	
	return domElement;	
};

const renderEditKnowledge = function(index) {
	var knowledge = knowledges[index];
	var title = knowledge.title;
	var description = knowledge.description;
	var link = knowledge.link;
	var keywords = knowledge.keywords;
	var category = knowledge.category;
	var createdDate = knowledge.createdDate;
	var lastModifiedDate = knowledge.lastModifiedDate;
	var modifiedBy = knowledge.modifiedBy;
	var obsoleted = knowledge.obsoleted;
	
	var domElement = `
<form>
	<fieldset class="row g-3">
		<div class="col-md-12">
			<label for="input-index" class="form-label">Index</label>
			<input type="text" class="form-control" id="input-index" value="${index}" disabled></input>
		</div>
		<div class="col-md-12">
			<label for="input-description" class="form-label">Description</label>
			<input type="text" class="form-control" id="input-description" value="${description}"></input>
		</div>
		<div class="col-md-12">
			<label for="input-keywords" class="form-label">keywords</label>
			<input type="text" class="form-control" id="input-keywords" value="${keywords.join(', ')}"></input>
		</div>
		<div class="col-md-3">
			<label for="input-category" class="form-label">Category</label>
			<div class="input-group mb-3">
				<input id="input-category" type="text" class="form-control" value="${category}"></input>
				<button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
					<span class="visually-hidden">Toggle Dropdown</span>
				</button>
				<ul class="dropdown-menu">`;
				
	categories.forEach(function(category) {
			domElement += 
				 `<li><a class="dropdown-item" onclick="document.getElementById('input-category').value = this.innerText">${category}</a></li>`;
	});
	
		domElement +=
				 `<li><hr class="dropdown-divider"></li>
				  <li><a class="dropdown-item" onclick="document.getElementById('input-category').value = ''">New</a></li>
				</ul>
			</div>
		</div>
		<div class="col-md-3">
			<label for="input-modifiedBy" class="form-label">Modified By</label>
			<div class="input-group mb-3">
				<input id="input-modifiedBy" type="text" class="form-control" value="${modifiedBy}"></input>
				<button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
					<span class="visually-hidden">Toggle Dropdown</span>
				</button>
				<ul class="dropdown-menu">`;
				
	users.forEach(function(user) {
			domElement += 
				 `<li><a class="dropdown-item" onclick="document.getElementById('input-modifiedBy').value = this.innerText">${modifiedBy}</a></li>`;
	});
	
		domElement +=
				 `<li><hr class="dropdown-divider"></li>
				  <li><a class="dropdown-item" onclick="document.getElementById('input-modifiedBy').value = ''">New</a></li>
				</ul>
			</div>
		</div>
		<div class="col-md-3">
			<label for="input-obsoleted" class="form-label">Obsoleted</label>
			<input type="text" class="form-control" id="input-obsoleted" value="${obsoleted}"></input>
		</div>
	</fieldset>
  <div class="col-12">
    <a class="btn btn-primary" style="margin-top:10px" href="#/edit/${index}" role="button">Edit</a>
  </div>
</form>
`;
	
	return domElement;
};

const renderView = function(path) {
};

const renderCreate = function(path) {
};

const renderSearch = function(path) {
};

const render = function(main) {
	document.getElementById('nav').innerHTML = renderNav();
	document.getElementById('main').innerHTML = main;
}

window.onhashchange = function(event) {
  route(window.location.hash);
}

window.onload = function() {
	knowledges.forEach(function(knowledge) {
		if (!categories.has(knowledge.category)) {
			categories.add(knowledge.category);
		}
		if (!users.has(knowledge.modifiedBy)) {
			users.add(knowledge.modifiedBy);
		}
	})
	route(window.location.hash);
	
}

window.addEventListener('DOMContentLoaded', event => {
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
