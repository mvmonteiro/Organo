import './CampoTexto.css'

const CampoTexto = ( props ) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input 
                onChange={ (evento) =>  props.aoAlterado(evento.target.value)} 
                placeholder={props.placeHolder} 
                required={props.obrigatorio} 
                value={props.valor} >
            </input>
        </div>
    )
}

export default CampoTexto;