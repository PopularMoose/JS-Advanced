function solve(input){

     let obj = [];
     
     for (const things of input) {
         let [name, level, items] = things.split('/');
         level = Number(level);
         if (items = items) {
             items.split(', ');
         }
         obj.push({name,level,items});
     }
    
 console.log(JSON.stringify(obj));
 }

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)