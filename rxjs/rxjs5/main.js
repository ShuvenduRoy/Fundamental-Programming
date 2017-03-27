"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
//Getting the list of movies as an example of responding to http request
var output = document.getElementById("output");
var button = document.getElementById("button");
var click = rxjs_1.Observable.fromEvent(button, "click");
// let source = Observable.fromEvent(document, "mousemove")
//     .map( (e:MouseEvent) =>{
//             return {
//                 x:e.clientX,
//                 y:e.clientY
//             }
//         }
//     ).filter(value => value.x<500);
// let numbers = [1,2,3];
// let source = Observable.create(observer => {
//     let index =0;
//
//     let produceValue = () =>{
//         observer.next(numbers[index++]);
//
//         if(index<numbers.length){
//             setTimeout(produceValue,500);
//         } else {
//             observer.complete();
//         }
//     }
//
//     produceValue();
//
// }).map(n=>n * 2)
//     .filter( n => n>2)
// let source = Observable.from(numbers);
//
// class MyOvservable{
//     next(value){
//         console.log(`value : ${value}`);
//     }
//
//     error(e){
//         console.log(e);
//     }
//
//     complete(){
//         console.log("complete");
//     }
// }
//
// source.subscribe(new MyOvservable());
//
// Observable with out class
// source.subscribe(
//     value => console.log(value),
//     e => console.log(e),
//     () => console.log("Complete")
// );
function load(url) {
    return rxjs_1.Observable.create(function (observer) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function () {
            var data = JSON.parse(xhr.responseText);
            observer.next(data);
            observer.complete();
        });
        xhr.open("GET", url);
        xhr.send();
    });
}
function renderMovies(movies) {
    movies.forEach(function (m) {
        var div = document.createElement("div");
        div.innerText = m.title;
        output.appendChild(div);
    });
}
click.flatMap(function (e) { return load("movies.json"); })
    .subscribe(renderMovies, function (e) { return console.log(e); }, function () { return console.log("Complete"); });
//# sourceMappingURL=main.js.map