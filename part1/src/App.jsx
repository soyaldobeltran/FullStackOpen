const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hola {props.name}, tu tienes {props.age}</p>
    </div>
  )
}

const App = () => {
  const name = "Aldo"
  const age = 25
  return (
    <>
      <h1>Edades</h1>
      <Hello name={name} age={age}/>
      <Hello name="Javier" age={10 + 22}/>
      <Hello name="Luis" age="18"/>
    </>
  )
}

export default App