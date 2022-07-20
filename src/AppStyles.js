import styled from 'styled-components'



export const ContenedorPrincipal = styled.div`
    color: black;
`

export const H1 = styled.h1`
    color: black;
    font-size: xxx-large;
`

export const H2 = styled.h2`
    font-size: revert;
`

export const H3 = styled.h3`
    font-size: x-large;
    margin: auto;
`

export const H4 = styled.h4`
    font-size: larger;
`

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    padding: 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContenedorModal = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    min-height: 100px;
    max-height: 459px;
    overflow-y: auto;
    background: #212121;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
`

export const EncabezadoModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #696868;
`

export const InputName = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 10px;
`

export const BotonModal = styled.button`
    display: flex;
    margin: auto;
    justify-content: center;
    height: 35px;
    width: 100px;
    padding: 10px 18px;
    border-radius: 15px;
    color: #fff;
    border: none;
    background: #14848c;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    transition: .3s ease all;
    &:hover {
        background: #14848c;
        opacity: 0.9;
    }
`

export const Contenido = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`

export const EncabezadoPagina = styled.div`
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 64%;
    opacity: 0.9;
    background: goldenrod;
    border-radius: 22px;
`

export const Contenedor = styled.div`
    background-color: goldenrod;
    margin: auto;
    display: flex;
    width: 480px;
    min-height: 50px;
    text-align: center;
    border-radius: 5px;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const TarjetaPrincipal = styled.div`
    padding: 1.5em;
    justify-content: center;
    align-items: center;
`

export const ContenedorTarjetas = styled.div`
    display: flex;
`

export const ContenedorTarjetasAlimentos = styled.div`
    background-color: #14848c;
    margin: 20px;
    display: flex;
    width: 50%;
    min-height: 200px;
    text-align: center;
    border-radius: 5px;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const TarjetaAlimento = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.7em;
    justify-content: center;
    align-items: center;
`

export const Imagen = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 30px;
`

export const DetallesAlimentos = styled.div`
    padding: 0 0.5em;
`

export const NombreAlimento = styled.div`
    display: block;
    font-size: 1em;
    margin: auto;
    font-weight: bold;
`

export const ContenedorBotonAlimento = styled.div`
    display: inline;
    justify-content: center;
    gap: 20px;
    background: #14848c;
`

export const Detalles = styled.div`
    padding: 1.5em;
`

export const ContenedorBoton = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`

export const Boton = styled.button`
    display: block;
    padding: 10px 18px;
    border-radius: 15px;
    color: #fff;
    border: none;
    background: #14848c;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    transition: .3s ease all;
    &:hover {
        background: black;
    }
`

export const BotonAlimento = styled(Boton)`
    margin: 10px 0 0 0;
    padding: 6px 12px;
    background: #424242;
`

export const ContenedorMonedas = styled.div`
    display: flex;
`

export const BotonModalMonedas = styled.button`
    margin: auto;
    height: 60px;
    width: 60px;
    padding: 5px 5px;
    border-radius: 30px;
    color: black;
    border: none;
    background-image: url("https://img.freepik.com/fotos-premium/fondo-dorado-brillante-diferentes-tonalidades_1258-88926.jpg?w=2000");
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    transition: .3s ease all;
    &:hover {
        background: goldenrod;
        opacity: 0.9;
    }
`

export const DetallesPagar = styled.div`
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    color: #b3b3b3;
    width: 60%;
    font-weight: bold;
`

export const AjustarPrecioPagar = styled.span`
    margin-left: 50px;
`

export const AjustarPrecioIngresado = styled.span`
    margin-left: 34px;
`

export const BotonContinuarMonedas = styled(Boton)`
    margin: auto;
`

export const BotonModalFinalizarCompra = styled(BotonContinuarMonedas) ` `

export const ListaContenedora = styled.ul`
    list-style: none;
    padding-inline-start: 0;
`

export const ListaItems = styled.div`
    display: flex;
    justify-content: space-between;
    list-style: none;
`
