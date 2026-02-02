import "../style/from.scss"
export default function AddToDo(todo, setToDo){

    const handleChange=(e)=>{
        const {name, value} = e.target
        setToDo((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    return(
        <form className="todoform">
            <label htmlFor="todotitle">Todo tittel</label>

            <input
                name="title"
                type="text"
                id="todotitle"
                placeholder="Dra på butikken"
                onChange={handleChange}
            />
           
            <label htmlFor="todocontent">Beskrivelse:</label>

            <textarea
                name="content"
                id="todocontent"
                onChange={handleChange}
            />

            <button>Make todo</button>
        </form>
    )
}