import styled from "styled-components"
/* Importarlo para realizarlo modo responsive, solo se ocupa para el device */
import { Device } from "./styles/breakpoints"
/* Se importa los estilos de GlobalStyle */
import { GlobalStyle } from "./index"
function App() {
  return (
    /* se divide en dos areas sidebar,  rutas, menu hamburguesa */
    <Container>
      <GlobalStyle />
      <section className="contentSidebar">sidebar
      </section>
      <secction className="contentMenuambur">menu ambur
      </secction>
      <secction className="contentRouters">routers
      </secction>
    </Container>
  )
}
/* Estilos del container mobile */
const Container = styled.main`
  display:grid; 
  grid-template-columns: 1fr;
  background-color: black;
  .contentSidebar {
    /* Desaparecer el sidebar en dispositivos mobile (display:none) */
    display: none;
    background-color: rgba(78,45,78,0,5);
  }
  .contentMenuambur {
    position: absolute;
    background-color: rgba(53,219,11,0,5);
  }
  .contentRouters {
    background-color: rgba(231,13,136,0,5);
  }
  /* Funcion modo responsive modo tablet */
  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    .contentSidebar {
      display: initial;
    }
    .contentMenuambur {
      display: none;
    }
  }
`


export default App
