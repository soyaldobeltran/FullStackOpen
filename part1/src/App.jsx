const Hello = (props) => {
  console.log(props)
  return (
    <>
      <p>
        Hola {props.name}, tu tienes {props.age} años
      </p>
    </>
  )
}

const App = () => {
  const friends = [
    {name: 'Aldo', age: 24},
    {name: 'Sarabi', age: 28},
  ]
  return (
    <>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </>
  )
}

export default App