/*函数编程规范化*/

/*没有副作用（不改变外部变量）*/
let list = [{
    "name":'liu',
    'sex':'male'
},{
    'name':'zhang',
    'sex':'female'
}]

//map方法会创建一个新数组，然后循环对新数组进行修改
/*list.map(item=>{//修改外部变量,直接对数组中的对象进行修改
    item.name = '1'
})
console.log('list:',list);*/
let newList = list.map(item=>({...item,name:'sex'}))//未修改外部变量，每次对新数组中对象赋值
console.log('newList:',newList);

/*纯函数（不改变外部变量的同时，不依赖外部状态）*/
const curUser = {
    name: 'Peter'
}
/*const changeName1 = (obj, name) => obj.name = name; // 修改了输入参数
changeName1(curUser,'Lily');
console.log('curUser',curUser);*/
const changeName2 = (obj, name) => ({...obj,name}); // 修改了输入参数// 未修改外部变量
let newObj = changeName2(curUser,'Lily');
console.log('curUser',curUser);
console.log('newObj',newObj);

let testObj = {'name':'123','name':'111'}
console.log('testObj',testObj)

/*柯里化：函数只有一个输出，但要想输出流到下个输入，就要柯里化*/
let add = function (x) {
    return function (y) {
        return x+y
    }
}
var addItem = add(1)
var add_value = addItem(2)
console.log('add_value',add_value)

