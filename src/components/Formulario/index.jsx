import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = ( props ) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [equipe, setEquipe] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            equipe
        })
        setNome('');
        setCargo('');
        setImagem('');
        setEquipe('');
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    label="Nome" 
                    placeHolder="Digite seu nome" 
                    obrigatorio="true"
                    valor={nome}
                    aoAlterado={ (valor) => setNome(valor)}
                />
                <CampoTexto
                    label="Cargo" 
                    placeHolder="Digite seu cargo" 
                    obrigatorio="true"
                    valor={cargo}
                    aoAlterado={ (valor) => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem" 
                    placeHolder="Digite seu imagem" 
                    valor={imagem}
                    aoAlterado={ (valor) => setImagem(valor)} 
                />
                <ListaSuspensa 
                    label="Time" 
                    itens={props.times} 
                    obrigatorio="true" 
                    valor={equipe}
                    aoAlterado={ (valor) => setEquipe(valor)}
                    />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;