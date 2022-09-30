let PersonCollection = Backbone.Collection.extend({
  model: Person,
  urlRoot: "/contacts",
  personId: null,

  url: function () {
    return this.urlRoot + "?personId=" + this.personId;
  },
});
let AllPerson = new PersonCollection();
