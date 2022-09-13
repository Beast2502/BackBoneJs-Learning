// // let Song = Backbone.Model.extend({
// //     initialize: function(){
// //         console.log("A new song has been created")
// //     }
// // });

// let Song = Backbone.Model.extend({
//     defaults :{
//         genre : 'Jazz'
//     },
//     validate: function(attrs){
//         if(!attrs.title){
//             return "Title is required"
//         }
//     }
// })

// let song = new Song({
    
//     artist : 'Miles Davis',
//     publishYear : 1959
// });

// console.log(song.get('title'),"check");
// song.isValid();

// song.set({
//     title:'Blue in green',
//     albumBy : 'Mehul Saxena'
// })

// // console.log(song.get("albumBy"),"Check the Value")
// // let hasTitle = song.has('title');
// // song.unset('title');
// // song.clear();


// console.log(song);


// let Song = Backbone.Model.extend({
//     default: {
//         genre : 'This is working'
//     },
//     validate: function(attrs){
//         if(!attrs.title){
//             return "Title is requred"
//         }
//     }
// })

// let song = new Song();
// song.isValid();

// console.log(song.isValid())
 
// let lastError = song.validateError;
// console.log(lastError,"Check the erro")

let Animal = Backbone.Model.extend({
    walk : function(){
        console.log("Animal is walking")
    }
})


let Dog = Animal.extend({
    walk : function(){
        // to call the base class or the parent class
        Animal.prototype.walk.apply(this);  
        console.log("dog is walking")
    }
})

let dog = new Dog();
dog.walk();


//  api call in Model

// let Song = Backbone.Model.extend({
//     urlRoot : '/api/songs'
// })


// GET API CALL   /api/songs/1

// let song = new Data ({id : 1});
// song.fetch();


//  PUT API CALL /api/songs/1

// let song = new Song({id:1})
//  song.fetch({
    // success: function(){ console.log("Successfully called ")},
    // error: function(){console.log('Getting error')}
// });
// song.set('title','newTitle')
// song.save();


// POST API CALL 

// let song = new Song();
// song.set('title','Title');
// song.save();



// DELETE API CALL 
// song.destory({
//     success: function(){},
//     error: function(){}
// })

// SAVE THE DATA
// song.save({},{
//     success : function(){},
//     error: function(){}
// })
// // idAttribute and call backs for success and error
//  let Data = Backbone.Model.extend({
//     idAttribute : 'songId',
    
// });

// let songData = new Data({songId : 1})
// console.log(songData);

//////////////////////////////////////////////////

// Collections to work with the group of models 
let Song = Backbone.Model.extend();
let Songs = Backbone.Collection.extend({
    model: Song
});


let songs = new Songs([
    new Song({title: 'Song1'}),
    new Song({title: 'Song2'}),
    new Song({title: 'Song3'})
])


songs.add(new Song({title : 'Song4'}));

console.log(songs)
console.log(songs.at(0) ,'Access the first index of the collections')
console.log(songs.get('c4') ,"C4 get method to get the data from Collections");
songs.remove((songs.at(0)));
console.log(songs)


// at the model in a particular index
songs.add(new Song({title : 'Song 11 ' , genre : 'Jaaz' , downloads : 100}) ,{at :0});
songs.push(new Song({title : 'Song 12', genre: 'Classical' , downloads: 200}));
songs.push(new Song({title : 'Song 13', genre: 'Jaaz' , downloads: 10}));

console.log(songs);


let jazzSongs = songs.where({genre : 'Jaaz'});
console.log(jazzSongs,"Jazzz Songs");

let firstJazzSong = songs.findWhere({genre : 'Jaaz'});
console.log(firstJazzSong,'First jazz in the collection');


// filtered Songs 
let filteredSongs = songs.where({genre : 'Jaaz' , title : 'Song 13'});
console.log(filteredSongs,'filtered song')

