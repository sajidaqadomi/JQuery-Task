$(document).ready(function () {
   let hello= $('.container + p').text(),
       textQ=$('.container > p').text(),
       textP=$('#hello-people').text(),
       textS=$('.span-element').text(),
       textA=$('a').text(),
       textSelect= $('option:selected').text();
    console.log(hello,'\n',textQ,'\n',textP,'\n',textS,'\n',textA,'\n',textSelect);
    
});