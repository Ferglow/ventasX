import styled from "styled-components";
import {InputText2, Linea, Title} from '../../index'
import { Btnsave } from "../../index";
import { v } from "../../styles/variables";
export function LoginTemplate() {
    return (<Container>
       <section className="contentCard"> 
        <div className="card">
            <Title> Ingresar </Title>
            <form>
                <InputText2>
                <input className="form__field" placeholder="email" type="text"/>
                </InputText2>
                <InputText2>
                <input className="form__field" placeholder="contraseña" type="password"/>

                <Btnsave titulo="Ingresar" bgcolor= "#1CB0F6" color="255,255,255" width="100%"/>

                </InputText2>
            </form>

            <Linea>
                <span>fernando</span>
            </Linea>

            <Btnsave titulo="Google" bgcolor="#fff" icono={<v.iconogoogle/>} />
        </div>
       </section>
    </Container>)
}
const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
