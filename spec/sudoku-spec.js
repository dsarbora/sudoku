import {Row} from './../src/sudoku.js';

it('should test whether a row has every number', function(){
   var arr =[1,2,3,4,5,6,7,8,9];
   var row = new Row(arr);
   expect(row.checkRow()).toEqual(true);
});

it('should test whether a row has no duplicates', function(){
   var arr =[1,2,3,4,5,1,7,8,9];
   var row = new Row(arr);
   expect(row.checkRow()).not.toEqual(true);
});

it('should test whether a row has nine numbers', function(){
   var arr =[1,2,3,4,5,7,8,9];
   var row = new Row(arr);
   expect(row.checkRow()).not.toEqual(true);
});

it('should test whether a row has num<1', function(){
   var arr =[1,2,3,0,5,7,8,9];
   var row = new Row(arr);
   expect(row.checkRow()).not.toEqual(true);
});

it('should test whether a row has num>9', function(){
   var arr =[1,2,3,10,5,7,8,9];
   var row = new Row(arr);
   expect(row.checkRow()).not.toEqual(true);
});
