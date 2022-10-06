let Song = Backbone.Model.extend();

let Songs = Backbone.Collection.extend({
    model : Song
});

let SongView = Backbone.View.extend({
    tagName: 'li',
    render: function(){
        this.$el.html(this.model.get('title'));
        return this;
    }
});

let SongsView = Backbone.View.extend({
    
    render : function(){
        let self = this;
        this.model.each(function(song){
            let songView = new SongView({model : song});
            self.$el.append(songView.render().$el);
        })
    }
})

let songs = new Songs([
    new Song({title : 'Blue in green'}),
    new Song({title : 'so what'}),
    new Song({title : 'All blues'})
]);

let songsView = new SongsView({el:'#songs' , model : songs});
songsView.render();