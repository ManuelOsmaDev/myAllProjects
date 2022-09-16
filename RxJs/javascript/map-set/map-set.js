const persona = {
  name:'manuel',
  age: 20
}


const map = new Map();

map.set('name','Jose Manuel') 
map.set('age',30) 
map.delete('name')
console.log(map.size);


const contact = new Map();
contact.set('jessie',{phone:320020202})
contact.has('jessie')
