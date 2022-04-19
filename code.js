let input = prompt("name your to-do");

const list=[];
while(input!=='quit')
{
    if(input=='list')
    {
        console.log("**********************")
    for(let i=0; i<list.length; i++)
    {
        console.log(`${i}: ${list[i]}`)
    }
    console.log("**********************")
    }else if(input==='new')
    {
        const newTodo=prompt("OK! new to-do");
        list.push(newTodo);
        console.log(`${newTodo} was added to the list`);
    }else if(input==='delete')
    {
        const del=prompt("enter the index to delete")
        list.splice(del,1);
        console.log(`${del} was deleted`)

    }
    input = prompt("name your to-do")
}
console.log("ok!bbye")
