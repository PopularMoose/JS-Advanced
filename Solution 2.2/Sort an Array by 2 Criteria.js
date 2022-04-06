function arraysDemo(array){

    array.sort((a,b)=>{
        a.length - b.length || a.localeCompare(b)
    });
    return array;
}
arraysDemo([1,3,65]);