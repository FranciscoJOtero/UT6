import React, { Component } from 'react'
import Imagen from 'react-image'

class SelectoresAtributo extends Component {

    render() {

        return (

            <div>
                <a href="https://www.google.es" target="_blank" rel='noreferrer noopener'> Enlace a Google que cumple un selector de atributo </a>
                <a href="https://www.google.es" target="_self" rel='noreferrer noopener'> Enlace a Google que cumple un selector de atributo </a>
                <br/><br/>
                <Imagen alt="Foto del k2" src={ require('./img/k2.jpg') } />
                <br/><br/>
                <p className="claseParrafo-1"> 
                    Este párrafo va a cumplir un selector de atributos para elementos con el atributo class y cuyo valor comience por claseParrafo
                </p> <br/><br/>
                <p className="claseSelector1"> 
                    Este parrafo va a cumplir un selector de atributos para elementos con el atributo class y cuyo 
                </p>
            </div>

        )

    }

}

export default SelectoresAtributo
