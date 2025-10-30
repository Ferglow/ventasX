/* Se agrega  el TeamProvider para utilizar los temas claro y oscuro */
import styled, { ThemeProvider } from "styled-components"
/* Importarlo para realizarlo modo responsive, solo se ocupa para el device */
import { Device } from "./styles/breakpoints"
/* Se importa los estilos de GlobalStyle */
import { GlobalStyle, MyRoutes, Sidebar, useThemeStore } from "./index"

function App() {
  /* se divide en dos areas sidebar, rutas, menu hamburguesa*/ 
  const { themeStyle } = useThemeStore();
  return (
    <ThemeProvider theme={themeStyle}>
      <Container>
        <GlobalStyle />
        <section className="contentSidebar"><Sidebar />
        </section>
        <secction className="contentMenuambur">menu ambur
        </secction>
        <secction className="contentRouters"><MyRoutes />
        </secction>
      </Container>
    </ThemeProvider>
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
    grid-column: 1;
    width: 100%;
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
    .contentRouters {
      grid-column: 2;
    }
  }
`


export default App

/* 2 definiendo secciones */