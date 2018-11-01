const obj = {a:1, b:2, c:3, soma() {return a + b + c}}
console.log(JSON.stringify(obj)) //Gera um Json a partir do Objeto

//console.log(JSON.parse("{a: 1, b:2, c:3}")) //Nao é um formato de JSON valido
//console.log(JSON.parse("{'a':1, 'b':2, 'c':3}")) //Tb nao é um formato valido
console.log(JSON.parse('{"a":1, "b":2, "c":3}')) //O nome do atributo tem que ser com aspas duplas
console.log(JSON.parse('{"a":1,"b":"string","c":true, "d":{},"e":[]}'))
//console.log(JSON.parse('{"a":1,"b":\'string\',"c":true, "d":{},"e":[]}')) //Vai dar erro pois os textos tem que ser com aspas duplas tb
console.log(JSON.parse('{"a":1.7,"b":"string","c":true, "d":{},"e":[]}'))




