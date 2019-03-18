lists.forEach((item,index)=>{
    item.index=index;
    item.onclick=function(){
        for(var i=0;i<lists.length; i++){
            lists[i].classList.remove('active');
            contents[i].classList.add('conactive');
        }
        item.classList.add('active');
        contents[item.index].classList.remove('conactive');
    }
})