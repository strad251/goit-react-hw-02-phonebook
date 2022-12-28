export const Contacts = ({contacts, deleteContact}) => {
  return (
    <ul>
      {contacts.map((el) => {
        return (
          <li key={el.id}>
            {el.name}: {el.number}
            <button
              type="button"
              onClick={() => deleteContact(el.id)}
        
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  )
}