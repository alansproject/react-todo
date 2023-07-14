import { useState } from 'react'
import {v4 as uuid} from 'uuid'
import Navbar from './components/navbar'
import changeBody from '../public/js/body-bg'
import Main from './components/Todo-container'
import Username from './components/username'

import '../public/css/App.css'
import WebInfo from './components/show-info'


export default function App(){
  const [showing, setShowing] = useState(true)
  const [showInfo, setShowInfo] = useState(false)
  const [userName, setUserName] = useState('user')
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  changeBody(showing, showInfo)

  return(
    <>
    {showing &&  <Username 
                    userName={userName} 
                    setUserName={setUserName} 
                    showing={showing}
                    setShowing={setShowing}
                  />
    }

    {showInfo && <WebInfo showInfo={showInfo} setShowInfo={setShowInfo}/>}

    <Navbar 
      showing={setShowing} 
      userName={userName}
      showInfo={showInfo}
      setShowInfo={setShowInfo}
    />

    <Main 
      todo={todo} 
      setTodo={setTodo} 
      todoList={todoList} 
      setTodoList={setTodoList}
      userName={userName}
      uuid={uuid}
    />
    </>
  )
}