import react from "react"
import "./index.css"

const Section = () =>{
    
    return(
        <div className="home">

            <div className="box1">

                <h1>
                    Meu nome é
                    <br />
                    Davi Serrano, tenho 19 anos,
                    <br />
                    Sou desenvoveldor-web Front-End Junior
                    <br />
                    e esse é meu portifólio
                    <br/>
                    Seja Bem-Vindo
                </h1>
            </div>

            <div className="box2">
                <h4>Curso: Técnico Adminstratio Senai: Scrum e Kanban</h4>

                <h4>Experiência Profissional</h4>
                <p> <strong>Jovem aprendiz Sabesp 18 meses </strong></p>
            </div>
         </div>
    );
}

export default Section