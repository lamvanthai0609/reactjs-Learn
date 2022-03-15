import React, { useEffect, useState } from 'react';
import './App.scss';
import Card from './components/card';
import ColorBox from './components/colorBox';
import PostList from './components/PostList';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';


function App() {
  const [todoList,setTodoList] = useState([
    {id:1,title: 'thai đẹp trai'},
    {id:2,title: 'thai đẹp trai vô cùng'},
    {id:3,title: 'ối dồi ôi sao lại đẹp trai thế ạ'},
  ]);
  const [postList,setPostLit] = useState([]);
  useEffect ( () =>{
    async function fetchPostList(){
     try{
      
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const reponse = await fetch(requestUrl);
        const responseJSON = await reponse.json();
        console.log({responseJSON});
  
        const {data} = responseJSON;
        setPostLit(data);
     }
     catch(error) {
      console.log('Faliled to fetch post list: ', error.message);
     }
     }
     fetchPostList();
  },[])
  const handleTodoClick = (todo) => {
    console.log(todo);
    const index = todoList.findIndex(x => x.id == todo.id);
    if(index<0) return;
 



    const newTodoList = [...todoList];
    newTodoList.splice(index,1);
    setTodoList(newTodoList);
  };

  const handleTodoFormClick = (formValue) =>{
    console.log(formValue);
    const newTodo = {
      id:todoList.length + 1,
      ...formValue,
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);

  }

  const dataCards = [
    {id:1,linkSong:'123123',viewSong:'100.000',imgSong:'',nameSong:'Muộn Rồi Mà Sao Còn',authorSong:'Sơn Tùng'},
    {id:2,linkSong:'123123',viewSong:'100.000',imgSong:'',nameSong:'Muộn Rồi Mà Sao Còn',authorSong:'Sơn Tùng'},
    {id:3,linkSong:'123123',viewSong:'100.000',imgSong:'',nameSong:'Muộn Rồi Mà Sao Còn',authorSong:'Sơn Tùng'},
    {id:4,linkSong:'123123',viewSong:'100.000',imgSong:'',nameSong:'Muộn Rồi Mà Sao Còn',authorSong:'Sơn Tùng'}
  ]
  return (
   <div className="app">
      {/* <TodoList 
        todos ={todoList} 
        onTodoClick =  {handleTodoClick} 
      />
      <TodoForm
        onSubmit = {handleTodoFormClick}
      /> */}
      {/* {dataCards.map((dataCard,index) => {
        
        <Card key={index} 
            infoCard={dataCard}
        />
      })} */}
      <PostList posts={postList}/>
     
   </div>
  );
}

export default App;
