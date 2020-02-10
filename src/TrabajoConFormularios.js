import React, { Component } from 'react'
import Imagen from 'react-image'

class TrabajoConFormularios extends Component {

    render () {

        return(
            <div>
                <form name="fornmu1" id="formuId" action="" >
                    <fieldset>
                        <legend> Formulario con React </legend>
                        <label for="textoId"> Nombre: </label>
                        <input type="text" name="texo1" id="textoId" placeholder="Introduce tu nombre" />
                    </fieldset>
                </form>
            </div>
        )

    }

}

export default TrabajoConFormularios