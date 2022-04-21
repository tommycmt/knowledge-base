class Knowledge {
    constructor(index, title, description, keywords, link, category, createdDate, lastModifiedDate, modifiedBy, obsoleted) {
        this.index = index;
        this.title = title;
        this.description = description;
        this.keywords = keywords;
        this.link = link;
        this.category = category;
        this.createdDate = createdDate;
        this.lastModifiedDate = lastModifiedDate;
        this.modifiedBy = modifiedBy;
        this.obsoleted = (obsoleted == "true");
    }

    toString() {
        return JSON.stringify(this);
    }
  }