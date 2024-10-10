/*

function Song(title, singer, year) { //Capitalize!
  this.title = title;
  this.singer = singer;
  this.year = new Date(year);
  this.getInfo = function() {
    return `제목: ${this.title}, 가수: ${this.singer}, 년도: ${this.year}`
  }
  this.getYear = function() {
    return this.year.getFullYear();
  }
}

Song.prototype.getInfo=function(){
  return `제목: ${this.title}, 가수: ${this.singer}, 년도: ${this.year}`
}
Song.prototype.getYear=function(){
  return this.year.getFullYear();
}

const song1 = new Song('last christmas', 'wham', '2009-11-23'); //constructor new 필수!

console.log(song1.getInfo())

*/

class Song{
  constructor(title, singer, year){
    this.title = title;
    this.singer = singer;
    this.year = year;
  }
  getInfo(){
    return `제목: ${this.title}, 가수: ${this.singer}, 년도:`
  }
}

const song1 = new Song('last christmas', 'wham', '2009-11-23');

console.log(song1.getInfo())