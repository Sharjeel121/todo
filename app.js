var list= document.getElementById('list')
function addTodo(){
    var todo_item = document.getElementById('txt')
    var li=document.createElement('LI')
    var litext= document.createTextNode(todo_item.value)
    li.appendChild(litext)
    list.appendChild(li)
    todo_item.value=''


    var editBtn= document.createElement('BUTTON')
    var textBtn = document.createTextNode('Edit')
    editBtn.setAttribute('class','btn')
    editBtn.setAttribute('onclick','edititem(this)')
    editBtn.appendChild(textBtn)
    li.appendChild(editBtn)



    
    var delBtn= document.createElement('BUTTON')
    var delText= document.createTextNode('Delete')
    delBtn.setAttribute('class','btn')
    delBtn.setAttribute('onclick','delitem(this)')
    delBtn.appendChild(delText)
    li.appendChild(delBtn)


}
 
function edititem(e){
    var val =  e.parentNode.firstChild.nodeValue;
    var editvalue= prompt('Modifie your todo',val)
    e.parentNode.firstChild.nodeValue= editvalue
}
function delitem(e){
    e.parentNode.remove()
   
}

function delAll(){
    list.innerHTML=''
}