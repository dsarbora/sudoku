export function Row(row){
  this.row=row;
}

Row.prototype.checkRow = function(){
  var numbers = [];
  var counter = 0;
  if(this.row.length==9){
    this.row.forEach(function(num){
      if(numbers.includes(num) || num>9 ||num<1){
        console.log(1);
        return false;
      }
      numbers.push(num);
      counter+=num;
    });
    if(counter==45){
      return true;
    }
  }
  else{
    console.log(this.row.length)
    return false;
  }
};


export function Col(col){
  this.col=col;
}

Col.prototype.checkCol = function(){
  var numbers = [];
  var counter = 0;
  if(this.col.length===9){
    this.col.forEach(function(num){
      if(numbers.includes(num) || num>9 ||num<1){
        return false;
      }
      numbers.push(num);
      counter+=num;
    });
    if(counter==45){
      return true;
    }
  }
  else{
    return false;
  }
};


export function Board(arrayOfArrays){
this.arrayOfArrays=arrayOfArrays;
}

Board.prototype.checkRows = function(){
  if(this.arrayOfArrays.length==9){
    var counter=0;
    forEach(function(row){
      var newRow = new Row(row);
      if(newRow.checkRow()){
        counter++;
      }
    }
    if(counter==9){
      return true;
    }
    return false;

});
