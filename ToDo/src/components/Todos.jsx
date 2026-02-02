import Todo from "./Todo";
export default function Todos({todoItems}){


    return (
        <section className="flex-r">
            <h2>Todos</h2>
            {todoItems.map((item)=> <Todo key={item.id} title={item.title} content={item.content}/>)}
        </section>
    )
}