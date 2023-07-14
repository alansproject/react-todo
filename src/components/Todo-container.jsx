/* eslint-disable react/prop-types */
export default function Main({todo, setTodo, todoList, setTodoList, userName, uuid}){
  function handleTodoListAdd(setTodoList, todo){
    todo ? setTodoList(prev => [...prev, {id: uuid(), name: todo}]) : alert('Cannot be empty')
  }

  function handleDeleteTodo(id){
    setTodoList(prevTodoList => prevTodoList.filter(each => each.id !== id))
  }
  return (
    <main className='todo-container'>
      <section className="todo-input">
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} maxLength={31} placeholder='add an activity'/>
        <button onClick={() => {handleTodoListAdd(setTodoList, todo); setTodo('')}} type='button' style={{cursor: 'pointer'}} id='add-btn' 
        ><span className="material-symbols-outlined">
        list_alt_add
        </span></button>
      </section>

      <section className="todo-list">
        <h1><span className='user'>{userName ? userName : 'user'}&apos;s</span><br/>Activities Today</h1>
        {!todoList.length == 1 && <p className='empty'>Empty...</p>}
        {todoList.map(todo =><section key= {todo.id} className='card-list'>
          <section className='todo-name'>
            <input type='checkbox' />
            <p>{todo.name}</p>
          </section>
          <button onClick={() => handleDeleteTodo(todo.id)} id='delete-btn'><span className="material-symbols-outlined">
delete
</span></button>
        </section>)}
      </section>
    </main>
    )
}