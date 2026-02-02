import './App.css'
import './style/todocard.scss'
import './style/layout.scss'
import Todos from './components/Todos'
import AddToDo from './components/AddToDo'
import {useState} from 'react'


function App() {
  const [todoList, setTodoList] = useState()
  const [todo, setTodo] = useState()

  const todoItems = [
    {
      id: 0,
      title: "Gå på butikken",
      content: "Handle spagetthi og dorull"
    },
    {
      id: 1,
      title: "Skrive emneraport",
      content: "Gå gjennom statestikk og skrive raporrt basert på tall og tilbakemeldinger"
    },
    {
      id: 2,
      title: "Kjøpe kattemat",
      content: "Kjøpe ny slankefor..."
    },
  ]
  

  return (
    <main>
      <h1>Todo app</h1>
      <AddToDo todo = {todo} setToDo={setTodo} />
      <Todos todoItems={todoItems}/>
    </main>
  )
}

export default App
