import React, { useState } from 'react'
import { AjustarPrecioIngresado, AjustarPrecioPagar, Boton, BotonAlimento, BotonContinuarMonedas, BotonModal, BotonModalFinalizarCompra, BotonModalMonedas, Contenedor, ContenedorBoton, ContenedorBotonAlimento, ContenedorModal, ContenedorMonedas, ContenedorPrincipal, ContenedorTarjetas, ContenedorTarjetasAlimentos, Contenido, Detalles, DetallesAlimentos, DetallesPagar, EncabezadoModal, EncabezadoPagina, H1, H2, H3, H4, Imagen, InputName, ListaContenedora, ListaItems, NombreAlimento, Overlay, TarjetaAlimento, TarjetaPrincipal } from './AppStyles'

// Es importante que le menciona que para el análisis de este código se ordenó todo de manera secuencial,
// desde los estados con el hook useState, variables, objetos y funciones, hasta el contenido que retorna
// esta función principal

function App() {

  //Estados con hook useState
  const [mostrarModal, setMostrarModal] = useState(true)

  const [nombre, setNombre] = useState()

  const [mostrarFormulario, setMostrarFormulario] = useState(true)

  const [cambioVistaModal, setCambioVistaModal] = useState(false)

  const [cantidadCarne] = useState([])

  const [cantidadEnsalada] = useState([])

  const [cantidadSushi] = useState([])

  const [mostrarModalPagar, setMostrarModalPagar] = useState(false)

  const [mostrarBotonContinuarMonedas, setMostrarBotonContinuarMonedas] = useState(true)

  const [totalPagar, setTotalPagar] = useState()

  const [cambioVistaModalPagar, setCambioVistaModalPagar] = useState(false)

  const [cantidadIngresada, setCantidadIngresada] = useState()
  
  const [vistaFinalizarCompra, setVistaFinalizarCompra] = useState(false)

  const [cambio, setCambio] = useState()

  const [mostrarBotonRecibirCambio, setMostrarBotonRecibirCambio] = useState(true)

  const [vistaRecibirCambio, setVistaRecibirCambio] = useState(false)

  const [imprimirCambio] = useState([])


  //Variables
  let precioCarne = 270
  let precioEnsalada = 340
  let precioSushi = 390
  let monedaDiez = 10
  let monedaCincuenta = 50
  let monedaCien = 100


  //Objetos
  let total = {
    valor: 0,
    valorMonedas: 0
  }


  // Funciones
  function recibirNombre(e) {
    setNombre(document.getElementById("nombre-usuario").value)
    e.preventDefault()
    setMostrarFormulario(false)
    setCambioVistaModal(true)
  }

  const ocultarModal = () => {
    setMostrarModal(!mostrarModal)
  }

  const sumarCompras = (precioSumar) => {
    total.valor += precioSumar
    document.getElementById("total").innerHTML = "  $ " + total.valor
    if (precioSumar === precioCarne) {
      cantidadCarne.push(1)
    }
    if (precioSumar === precioEnsalada) {
      cantidadEnsalada.push(1)
    }
    if (precioSumar === precioSushi) {
      cantidadSushi.push(1)
    }
  }

  const guardarTotal = () => {
    setTotalPagar(total.valor)
  }

  const modalPagar = () => {
    setMostrarModalPagar(true)
  }

  const sumarMonedas = (valorMonedas) => {
    total.valorMonedas += valorMonedas
    document.getElementById("valor-monedas").innerHTML = "  $ " + total.valorMonedas
  }

  const verificarMonedas = () => {
    if (total.valorMonedas < totalPagar) {
      alert("Aún no cubre el monto total de la compra.")
    }
    else if (total.valorMonedas === totalPagar) {
      setCambioVistaModalPagar(true)
      setMostrarBotonContinuarMonedas(false)
      guardarCantidadIngresada()
    }
    else {
      setCambioVistaModalPagar(true)
      setMostrarBotonContinuarMonedas(false)
      guardarCantidadIngresada()
    }
  }

  const guardarCantidadIngresada = () => {
    setCantidadIngresada(total.valorMonedas)
  }

  const ocultarModalPagar = () => {
    document.getElementById("vista-pagar").style.display = "none"
    setVistaFinalizarCompra(true)
  }

  const generarCambio = () => {
    setCambio(cantidadIngresada - totalPagar)
  }

  const darCambio = () => {
    let cambioModificar = cambio
    let contarCentenas = 0
    let contarCincuenta = 0
    let contarDecenas = 0
    //Sustraer las centenas
    while (cambioModificar >= 100) {
      cambioModificar = cambioModificar - 100
      ++contarCentenas
    }
    //Imprime lo que sobra después de filtrar los cientos
    for (let i = 0; i < contarCentenas; i++) {
      imprimirCambio.push(100)
    }

    //Sustraer monedas de cincuenta
    while (cambioModificar >= 50) {
      cambioModificar = cambioModificar - 50
      ++contarCincuenta
    }
    //Imprime lo que sobra después de filtrar las monedas de cincuenta
    for (let i = 0; i < contarCincuenta; i++) {
      imprimirCambio.push(50)
    }

    //Sustraer decenas
    while (cambioModificar >= 10) {
      cambioModificar = cambioModificar - 10
      ++contarDecenas
    }
    //Imprime lo que sobra después de filtrar las decenas
    for (let i = 0; i < contarDecenas; i++) {
      imprimirCambio.push(10)
    }
  }

  //Termino de funciones







  return (
    // Contenedor principal
    <ContenedorPrincipal>


      {/* Modal ingresar nombre */}
      <>
        {mostrarModal &&
          <Overlay>
            <ContenedorModal>
              {mostrarFormulario &&
                <form id="form" onSubmit={recibirNombre}>
                  <EncabezadoModal>
                    <H3>Introduzca su nombre</H3>
                  </EncabezadoModal>
                  <div>
                    <InputName>
                      <input id="nombre-usuario" type="text" placeholder="nombre*" required minLength="4"></input>
                    </InputName>
                    <BotonModal type="submit" >Ingresar</BotonModal>
                  </div>
                </form>
              }
              {cambioVistaModal &&
                <>
                  <Contenido>
                    <EncabezadoModal>
                      <H4>¡Ahora puede comenzar su compra!</H4>
                    </EncabezadoModal>
                    <BotonModal onClick={ocultarModal} >Continuar</BotonModal>
                  </Contenido>
                </>
              }
            </ContenedorModal>
          </Overlay>
        }
      </>
      {/* Modal ingresar nombre */}


      {/* Carta máquina de alimentos */}
      <H1><EncabezadoPagina>Maquina de Alimentos</EncabezadoPagina></H1>
      <Contenedor>
        <TarjetaPrincipal>
          <ContenedorTarjetas>

            {/* ALIMENTO 1 */}
            <ContenedorTarjetasAlimentos>
              <TarjetaAlimento>
                <Imagen src="https://www.cardamomo.news/__export/1631918457213/sites/debate/img/2021/09/17/carne_seca_crop1631918438277.jpeg_1187729725.jpeg" />
                <br />
                <DetallesAlimentos>
                  <NombreAlimento>Carne</NombreAlimento>
                  <NombreAlimento>${precioCarne}</NombreAlimento>
                </DetallesAlimentos>
                <ContenedorBotonAlimento>
                  <BotonAlimento onClick={() => { sumarCompras(precioCarne) }} >Comprar</BotonAlimento>
                </ContenedorBotonAlimento>
              </TarjetaAlimento>
            </ContenedorTarjetasAlimentos>

            {/* ALIMENTO 2 */}
            <ContenedorTarjetasAlimentos>
              <TarjetaAlimento>
                <Imagen src="https://elperiodicodemexico.com/galeria2011/519104.jpg" />
                <br />
                <DetallesAlimentos>
                  <NombreAlimento>Ensalada</NombreAlimento>
                  <NombreAlimento>${precioEnsalada}</NombreAlimento>
                </DetallesAlimentos>
                <ContenedorBotonAlimento>
                  <BotonAlimento onClick={() => sumarCompras(precioEnsalada)}>Comprar</BotonAlimento>
                </ContenedorBotonAlimento>
              </TarjetaAlimento>
            </ContenedorTarjetasAlimentos>

            {/* ALIMENTO 3 */}
            <ContenedorTarjetasAlimentos>
              <TarjetaAlimento>
                <Imagen src="https://http2.mlstatic.com/D_NQ_NP_913595-MLM31770619182_082019-O.jpg" />
                <br />
                <DetallesAlimentos>
                  <NombreAlimento>Sushi</NombreAlimento>
                  <NombreAlimento>${precioSushi}</NombreAlimento>
                </DetallesAlimentos>
                <ContenedorBotonAlimento>
                  <BotonAlimento onClick={() => sumarCompras(precioSushi)}>Comprar</BotonAlimento>
                </ContenedorBotonAlimento>
              </TarjetaAlimento>
            </ContenedorTarjetasAlimentos>

          </ContenedorTarjetas>

          {/* Visualizar total y botones para pagar y reiniciar pedido */}
          <Detalles>
            <H2>Total: <span id="total">  </span></H2>
          </Detalles>
          <ContenedorBoton>
            <Boton onClick={() => { modalPagar(); guardarTotal() }}>Pagar</Boton>
          </ContenedorBoton>
        </TarjetaPrincipal>
      </Contenedor>
      {/* Carta máquina de alimentos */}


      {/* Modal pagar */}
      <>
        {mostrarModalPagar &&
          <Overlay>
            <ContenedorModal>
              <div id="vista-pagar">
                {mostrarBotonContinuarMonedas &&
                  <>
                    <EncabezadoModal>
                      <H2>Ingresar monedas</H2>
                    </EncabezadoModal>
                    <ContenedorMonedas>
                      <BotonModalMonedas onClick={() => sumarMonedas(monedaDiez)}>$ {monedaDiez}</BotonModalMonedas>
                      <BotonModalMonedas onClick={() => sumarMonedas(monedaCincuenta)}>$ {monedaCincuenta}</BotonModalMonedas>
                      <BotonModalMonedas onClick={() => sumarMonedas(monedaCien)}>$ {monedaCien}</BotonModalMonedas>
                    </ContenedorMonedas>
                    <br />
                    <DetallesPagar>
                      <div>Cantidad a pagar: <AjustarPrecioPagar> $ {totalPagar}</AjustarPrecioPagar></div>
                      <div>Cantidad ingresada: <AjustarPrecioIngresado id="valor-monedas"> </AjustarPrecioIngresado></div>
                      <br />
                      <BotonContinuarMonedas onClick={() => { verificarMonedas() }}>Continuar</BotonContinuarMonedas>
                    </DetallesPagar>
                  </>
                }
                {cambioVistaModalPagar &&
                  <>
                    <Contenido>
                      <EncabezadoModal>
                        <H3>Ahora de clic en recibir producto para visualizar información de pago y recibir su producto.</H3>
                      </EncabezadoModal>
                      <BotonModalFinalizarCompra onClick={() => { ocultarModalPagar(); generarCambio() }} >Recibir producto</BotonModalFinalizarCompra>
                    </Contenido>
                  </>
                }
              </div>

              {vistaFinalizarCompra &&
                <>
                  <Contenido>
                    <EncabezadoModal>
                      <H3>¡Hola {nombre}! </H3>
                    </EncabezadoModal>
                    <DetallesPagar>
                      <div>Resumen de Compra</div>
                      <ListaContenedora>
                        <li>
                          <ListaItems>
                            <div>Descripción</div>
                            <div>Precio</div>
                          </ListaItems>
                        </li>
                        <li>
                          <ListaItems>
                            <div>x{cantidadCarne.length} Carne</div>
                            <div>$ {cantidadCarne.length * precioCarne}</div>
                          </ListaItems>
                        </li>
                        <li>
                          <ListaItems>
                            <div>x{cantidadEnsalada.length} Ensalada</div>
                            <div>$ {cantidadEnsalada.length * precioEnsalada}</div>
                          </ListaItems>
                        </li>
                        <li>
                          <ListaItems>
                            <div>x{cantidadSushi.length} Sushi</div>
                            <div>$ {cantidadSushi.length * precioSushi}</div>
                          </ListaItems>
                        </li>
                        <br />
                        <li>
                          <ListaItems>
                            <div>Total</div>
                            <div>$ {totalPagar}</div>
                          </ListaItems>
                        </li>
                        <li>
                          <ListaItems>
                            <div>Cantidad ingresada</div>
                            <div>$ {cantidadIngresada}</div>
                          </ListaItems>
                        </li>
                        <li>
                          <ListaItems>
                            <div>Cambio</div>
                            <div>$ {cambio}</div>
                          </ListaItems>
                        </li>
                      </ListaContenedora>
                      <br />

                      {mostrarBotonRecibirCambio &&
                        <>
                          <br />
                          <BotonModalFinalizarCompra onClick={() => { setMostrarBotonRecibirCambio(false); setVistaRecibirCambio(true); darCambio() }} >Recibir cambio</BotonModalFinalizarCompra>
                        </>
                      }

                    </DetallesPagar>

                    {vistaRecibirCambio &&
                      <div>
                        <DetallesPagar>
                          Por favor reciba su cambio:
                        </DetallesPagar>
                        {imprimirCambio.map((value, index) => {
                          return (
                            <DetallesPagar key={index}>
                              <div><span> $ {value}</span></div>
                            </DetallesPagar>
                          )
                        })}
                        <br />
                        <BotonModalFinalizarCompra onClick={() => window.location.reload()}>Finalizar Compra</BotonModalFinalizarCompra>
                      </div>
                    }

                  </Contenido>
                </>
              }
            </ContenedorModal>
          </Overlay>
        }
      </>
      {/* Modal pagar */}
    </ContenedorPrincipal>
    // Contenedor principal
  )
}

export default App
