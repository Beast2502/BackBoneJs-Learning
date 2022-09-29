let Song = Backbone.Model.extend();
let Songs = Backbone.Collection.extend({
    model:Song
});



let songs = new Songs([
    new Song({title : 'ABC'}),
    new Song({title :'XYZ'}),
    new Song({title: 'QWEs'})
]);

songs.add(new Song({title : 'ABCDE'}))

console.log(songs)