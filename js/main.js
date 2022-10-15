let Song = Backbone.Model.extend({
    defaults : {
        listeners : 0
    }
});

let Songs = Backbone.Collection.extend({
    model : Song

});

let SongView = Backbone.View.extend({
    tagName: 'li',
    initialize : function(){
        // this.model.on('change' , this.render , this);
        this.model.on('change' , this.onModelChange, this)
    },
    events:{
        "click" : "onClick",
        "click .bookmark" : 'onClickBookmark' 
    },
    onClick: function (){
        console.log('Listen Clicked')
    },
    onClickBookmark : function(e){
        e.stopPropagation();
        console.log('Book mark is clicked')
    } ,
    render: function(){
        this.$el.html(this.model.get('title') + "<button>Listen</button> <button class='bookmark' > Bookmark </button>" + " - Listerners: " + this.model.get('listeners'));
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

let song = new Song();

let songsView = new SongsView({el:'#songs' , model : songs});
songsView.render();

let DropBoxCollection = Backbone.Collection.extend({
    model:Song
});

let DropView = Backbone.View.extend({
    tagName : 'option',
    initialize : function(){
        console.log('this is working')
    },
    render : function(){
        this.$el.html(this.model.get('title'));
        return this;
    }
})

let DropsView = Backbone.View.extend({
    render:function(){
        let self =this;
        this.model.each(function(song){
            let dropView = new DropView({model : song});
            self.$el.append(dropView.render().$el);
        })
    }
})

let dropSongs = new DropBoxCollection([
    new Song({title : 'Blue in green'}),
    new Song({title : 'so what'}),
    new Song({title : 'All blues'})
])



let dropBoxView = new DropsView({el:'#dropBox' , model:dropSongs});
dropBoxView.render()
