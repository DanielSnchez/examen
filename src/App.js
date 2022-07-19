import React, { useState } from 'react'
import './App.css'



function App() {

  //Estados con hook useState
  const [mostrarModal, setMostrarModal] = useState(true)

  const [cambioVistaModal, setCambioVistaModal] = useState(false)

  const [mostrarModalPagar, setMostrarModalPagar] = useState(false)

  const [cambioVistaModalPagar, setCambioVistaModalPagar] = useState(false)

  const [mostrarBotonContinuarMonedas, setMostrarBotonContinuarMonedas] = useState(true)

  const [mostrarBotonRecibirCambio, setMostrarBotonRecibirCambio] = useState(true)

  const [vistaRecibirPago, setVistaRecibirPago] = useState(false)

  const [vistaFinalizarCompra, setVistaFinalizarCompra] = useState(false)

  const [nombre, setNombre] = useState()

  const [cantidadCarne, setCantidadCarne] = useState(0)

  const [cantidadEnsalada, setCantidadEnsalada] = useState(0)

  const [cantidadSushi, setCantidadSushi] = useState(0)

  const [totalPagar, setTotalPagar] = useState()

  const [cantidadIngresada, setCantidadIngresada] = useState()

  const [cambio, setCambio] = useState()

  const [contadorCientos, setContadorCientos] = useState(0)

  const [contadorCincuenta, setContadorCincuenta] = useState(0)

  const [contadorDiez, setContadorDiez] = useState(0)


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
  const ocultarModal = () => {
    setMostrarModal(!mostrarModal)
  }

  const ocultarModalPagar = () => {
    document.getElementById("vista-pagar").style.display = "none"
    setVistaFinalizarCompra(true)
  }

  function recibirNombre(e) {
    setNombre(document.getElementById("nombre-usuario").value)
    e.preventDefault()
    setCambioVistaModal(true)
    document.getElementById("form").style.display = "none"
  }

  const sumarCompras = (precioSumar) => {
    if (precioSumar === 0) {
      total.valor = 0
      document.getElementById("total").innerHTML = "  $ " + total.valor
    }
    else {
      total.valor += precioSumar
      document.getElementById("total").innerHTML = "  $ " + total.valor
    }
  }

  const guardarTotal = () => {
    setTotalPagar(total.valor)
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

  const generarCambio = () => {
    setCambio(cantidadIngresada - totalPagar)
  }

  const darCambio = () => {
    let cambioModificar = cambio
    let contarCientos = 0
    while (cambioModificar > 100) {
      cambioModificar = cambioModificar - 100
      ++contarCientos
    }
  }

  //Termino de funciones







  return (
    // Contenedor principal
    <div className="contenedor-principal">
      {/* Modal ingresar nombre */}
      <>
        {mostrarModal &&
          <div className="overlay">
            <div className="contenedor-modal" >
              <form id="form" onSubmit={recibirNombre}>
                <div className="encabezado-modal">
                  <h3>Introduzca su nombre</h3>
                </div>
                <div >
                  <div className="input-name">
                    <input id="nombre-usuario" type="text" placeholder="nombre*" required minLength="4"></input>
                  </div>
                  <button className="boton-modal" type="submit" >Ingresar</button>
                </div>
              </form>
              {cambioVistaModal &&
                <>
                  <div className='contenido'>
                    <div className="encabezado-modal">
                      <h3>¡Ahora puede comenzar su compra!</h3>
                    </div>
                    <button className="boton-modal" onClick={ocultarModal} >Continuar</button>
                  </div>
                </>
              }
            </div>
          </div>
        }
      </>
      {/* Modal ingresar nombre */}

      {/* Carta máquina de alimentos */}
      <h1 className="encabezado">Maquina de Alimentos</h1>
      <div className="contenedor">
        <div className="tarjeta-principal">
          <div className="contenedor-tarjetas">

            {/* ALIMENTO 1 */}
            <div className="contenedor-de-tarjeta-alimentos">
              <div className="tarjeta-alimentos">
                <img className="imagen" src="https://www.cardamomo.news/__export/1631918457213/sites/debate/img/2021/09/17/carne_seca_crop1631918438277.jpeg_1187729725.jpeg" />
                <br />
                <div className="detalles-alimentos">
                  <span className="nombre-de-alimento">Carne</span>
                  <div className="nombre-de-alimento">${precioCarne}</div>
                </div>
                <div className="contenedor-boton-alimentos">
                  <button className="boton-alimentos" onClick={() => { sumarCompras(precioCarne) }} >Comprar</button>
                </div>
              </div>
            </div>

            {/* ALIMENTO 2 */}
            <div className="contenedor-de-tarjeta-alimentos">
              <div className="tarjeta-alimentos">
                <img className="imagen" src="https://elperiodicodemexico.com/galeria2011/519104.jpg" />
                <br />
                <div className="detalles-alimentos">
                  <span className="nombre-de-alimento">Ensalada</span>
                  <div className="nombre-de-alimento">${precioEnsalada}</div>
                </div>
                <div className="contenedor-boton-alimentos">
                  <button className="boton-alimentos" onClick={() => sumarCompras(precioEnsalada)}>Comprar</button>
                </div>
              </div>
            </div>

            {/* ALIMENTO 3 */}
            <div className="contenedor-de-tarjeta-alimentos">
              <div className="tarjeta-alimentos">
                <img className="imagen" src="https://http2.mlstatic.com/D_NQ_NP_913595-MLM31770619182_082019-O.jpg" />
                <br />
                <div className="detalles-alimentos">
                  <span className="nombre-de-alimento">Sushi</span>
                  <div className="nombre-de-alimento">${precioSushi}</div>
                </div>
                <div className="contenedor-boton-alimentos">
                  <button className="boton-alimentos" onClick={() => sumarCompras(precioSushi)}>Comprar</button>
                </div>
              </div>
            </div>
          </div>

          {/* Visualizar total y botones para pagar y reiniciar pedido */}
          <div className="detalles">
            <h2>Total: <span id="total">  </span></h2>
          </div>
          <div className="contenedor-boton">
            <button className="boton" onClick={() => { setMostrarModalPagar(true); guardarTotal() }}>Pagar</button>
            <button className="boton" onClick={() => sumarCompras(0)}>Reiniciar pedido</button>
          </div>
        </div>
      </div>
      {/* Carta máquina de alimentos */}

      {/* Modal pagar */}
      <>
        {mostrarModalPagar &&
          <div className="overlay">
            <div className="contenedor-modal" >
              <div id="vista-pagar">
                <div className="encabezado-modal">
                  <h3>Ingresar monedas</h3>
                </div>
                <div className='contenedor-monedas'>
                  <button className="boton-modal-monedas" onClick={() => sumarMonedas(monedaDiez)}>$ {monedaDiez}</button>
                  <button className="boton-modal-monedas" onClick={() => sumarMonedas(monedaCincuenta)}>$ {monedaCincuenta}</button>
                  <button className="boton-modal-monedas" onClick={() => sumarMonedas(monedaCien)}>$ {monedaCien}</button>
                </div>
                <br />
                <div className='detalles-pagar'>
                  <div>Cantidad a pagar: <span className='ajustar-precio-pagar'> $ {totalPagar}</span></div>
                  <div>Cantidad ingresada: <span className='ajustar-precio-ingresado' id="valor-monedas"> </span></div>
                  <br />
                </div>
                {mostrarBotonContinuarMonedas &&
                  <button className="boton-continuar-monedas" onClick={() => { verificarMonedas() }}>Continuar</button>
                }
                {cambioVistaModalPagar &&
                  <>
                    <div className='contenido'>
                      <div className="encabezado-modal">
                        <h3>Ahora haga clic en recibir producto para visualizar información de pago y recibir su producto.</h3>
                      </div>
                      <button className="boton-modal-finalizar-compra" onClick={() => { ocultarModalPagar(); generarCambio() }} >Recibir producto</button>
                    </div>
                  </>
                }
              </div>
              {vistaFinalizarCompra &&
                <>
                  <div className='contenido'>
                    <div className="encabezado-modal">
                      <h3>¡Hola {nombre}! </h3>
                    </div>
                    <div className='detalles-pagar'>
                      <div>Resumen de Compra</div>
                      <br />
                      <div>Total <span className='ajustar-precio-total-final'> $ {totalPagar}</span></div>
                      <div>Cantidad ingresada <span className='ajustar-valor-ingresado-final' id="valor-monedas"> $ {cantidadIngresada} </span></div>
                      <div>Cambio <span className='ajustar-cambio' id="valor-monedas"> $ {cambio} </span></div>
                      <br />
                      {mostrarBotonRecibirCambio &&
                        <button className="boton-modal-finalizar-compra" onClick={() => { setMostrarBotonRecibirCambio(false); setVistaRecibirPago(true); darCambio() }} >Recibir cambio</button>
                      }
                      <br />
                    </div>
                    {vistaRecibirPago &&
                      <div>

                        <button className="boton-modal-finalizar-compra" onClick={() => window.location.reload()}>Finalizar Compra</button>
                      </div>
                    }

                  </div>
                </>
              }
            </div>
          </div>
        }
      </>
      {/* Modal pagar */}
    </div>
    // Contenedor principal
  )
}

export default App