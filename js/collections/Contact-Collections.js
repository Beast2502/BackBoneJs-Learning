let ContactCollection = Backbone.Collection.extend({
    model :Contact,
    urlRoot :'/contacts',
    personId:null,

    url : function(){
        return this.urlRoot + '?personId=' + this.personId;
    }
});

let AllContacts = new ContactCollection();
