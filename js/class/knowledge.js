class Knowledge {
    constructor(index, title, description, keywords, category, content, createdDate, lastModifiedDate, modifiedBy, obsoleted) {
        this.index = index;
        this.title = title;
        this.description = description;
        this.keywords = keywords;
        this.category = category;
        this.content = content;        
        this.createdDate = createdDate;
        this.lastModifiedDate = lastModifiedDate;
        this.modifiedBy = modifiedBy;
        this.obsoleted = (obsoleted == "true");
    }

    toString() {
        return JSON.stringify(this);
    }
  }