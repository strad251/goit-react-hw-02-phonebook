export const Filter = ({filterInput}) => {
  return (
    <div>
    <p>Find contacts by name</p>
    <input 
    type="text" 
    name="filter" 
    onChange={event => filterInput(event.target.value)} />
    </div>
  )
}