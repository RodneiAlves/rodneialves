import styles from "./componente.module.css"
let Componente = ({name,color,kilometros}) => {
  
  return (
    <div>
        <h2>Detalhes dos carros</h2>
        <ul className={styles.lista_f} >
            <li>Nome do carro: {name}</li>
            <li>Cor do carro é {color}</li>
            <li>Os km do carro é {kilometros}</li>
  
        </ul>
     </div>
  )
}

export default Componente;