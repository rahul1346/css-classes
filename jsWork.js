// var veggieSalad = function (extraIngredient) {
//   return "A veggie salad with " + extraIngredient;
// };
// var fruitSalad = function (extraIngredient) {
//   return "A fruit salad with " + extraIngredient;
// };

// var addDressing = function (saladFunction) {
//   return saladFunction('dressing')
// };

// describe('salads', function () {
//   it('adds dressing to a veggie salad', function () {
//     var result = addDressing(veggieSalad);
//     expect(result).toEqual("A veggie salad with dressing");
//   });

//   it('adds dressing to a fruit salad', function () {
//     var result = addDressing(fruitSalad);
//     expect(result).toEqual("A fruit salad with dressing");
//   });
// });

// TODO:
var yell = function(str){
    return str.toUpperCase();
}
var ask = function(str) {
    return str + '?';
}
var serveMessage = function(str1, str2, func){
    return str1 + ':' + func + str2;
}

describe('yell', function () {
  it("yells out its argument", function () {
    var result = yell("what?");
    expect(result).toEqual("WHAT?!");
  })
});

describe('ask', function () {
  it("asks its argument in the form of a question", function () {
    var result = ask("open the door");
    expect(result).toEqual("Can you please open the door?");
  })
});

describe('serveMessage', function () {
  it("asks Bob to call", function () {
    var result = serveMessage('Bob','call me', ask);
    expect(result).toEqual("Bob: Can you please call me?");
  });

  it("yells at Bob", function () {
    var result = serveMessage('Bob','call me', yell);
    expect(result).toEqual("Bob: CALL ME!");
  });
});












