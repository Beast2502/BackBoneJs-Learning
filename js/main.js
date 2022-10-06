/////////////////////// Models
let Song = Backbone.Model.extend({
    defaults:{
        genre : false
    },
    initialize : function(){
        console.log('A new song has been created');
    },
    validate: function(attrs){
        if(!attrs.title){
            return "Title is required"
        }
    }
});

let song = new Song();
song.set({
    artist : 'Miles Davis',
    publishyear : 1959
})
console.log(song.get('artist'));
console.log(song.validationError);


/////////////////////// Collections
let Songs = Backbone.Collection.extend({
    model: Song
})
let songs = new Songs([
    new Song({title: "Song 1" ,downloads:99}),
    new Song({title : "Song 2" ,downloads :100, genre : true}),
    new Song({title : "Song 3" , downloads:321})
])

songs.add(new Song({title : 'Song 4' ,downloads:231 , genre : true}));
songs.push(new Song({title : 'Song 5' , downloads:252}));
console.log(songs.toJSON());
let songWithId = songs.get('c2');
console.log(songWithId,"get the data from the collection");

let JazzSong = songs.where({genre : true});
console.log(JazzSong,'jazz songs');

let firstJazzSong = songs.findWhere({genre : true});
console.log(firstJazzSong , 'first jazz songs');

let filteredSongs = songs.where({genre : true , title : 'Song 2'});
console.log(filteredSongs,'filtered songs');


let topDownloads =  songs.filter(function(song){
    return song.get("downloads") > 100;
});
console.log("Top downloads" , topDownloads);





////////////////////////////////// Views
let SongView = Backbone.View.extend({
    tagName : 'span',
    className: 'mainView',
    render: function(){
        this.$el.html("<h1>Mehul Saxena </h1> <div class='mainView'id='mainView'></div>");
        return this;
    }
})

let songView = new SongView();
songView.render();
$('#container').html(songView.$el);

let DropBoxView = Backbone.View.extend({
    tagName : 'select',
    className: 'dropList',
    id: 'dropList',
    render: function(){
        this.$el.html('<option>Select</option>');
        return this;
    }
})

let dropView = new DropBoxView();
dropView.render();
$('#mainView').html(dropView.$el);