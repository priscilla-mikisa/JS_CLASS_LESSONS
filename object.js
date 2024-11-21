const cup = {
    color:"red",
    shape:"circular",
    weight:"50 grams",
    size:"medium",
    description:{
        drinkType:"tea",
        temperature:"hot"
    },
    //method
    drink:function(){
        console.log('Use me to drink');
        console.log(`The main purpose of this cup is to drink ${this.description.temperature} ${this.description.drinkType}.`);
    }
};
//accessing
console.log({color:cup.color});
console.log('size', cup['size']);
console.log('temperature', cup.description.temperature);

//adding a new item
cup.material = 'ceramic';
console.log({cup});

//editing
cup.color = 'green'
console.log({cup})

//deleting a property
delete cup.material;
console.log({cup})

cup.drink();

//accessing specific arrays of keys and values
const keys = Object.keys(cup);
console.log({keys});

const values = Object.values(cup);
console.log(values);

//looping through
Object.keys(cup).forEach(item => {
    console.log({keys:item,values:cup[item]});
})


