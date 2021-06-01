import "./index.css"

function Page(){

        const sites =  [
            {
                id: 1,
                name: "CRUD",
                desc: "Um site simples, mas totalmente funcional, lá mostro meu conhecimento usando express, mongoose e ejs para fazer um CRUD(Create, Read, Uptade e Delete). "
                
            },
            {
                id: 2,
                name: "Portfólio Canvas",
                desc: "Esse portfólio feito no canvas envolveu muita lógica e Photshoop, mas o resultado final foi um dos mais incrìveis que eu já consegui obter, foi feito em HTML, CSS e Javascript"
            },
            {
                id: 3,
                name: "Blog",
                desc: "Um dos meus maiores trabalhos em termos de linha de códigos escrtio, é um blog completo onde aprendi a fazer muitas coisas no Node, como por exemplo: criar rotas de Admin, fazer registro de usuários e autenticação, envolveu muita pesquisa e horas de trabalho, o maior problema agora é ter tempo para popular o blog com textos"
            },
            {
                id: 4,
                name: "Conversor de Moedas",
                desc: "Um site criado no React para treinar consumo de uma API Rest, o site faz uma solicitação para API para informar o valor da moeda quando o usuário clica no botão converter"
            }
        ] 
    const lista = sites.map((site) =>
          
          <li> 
           <h4> {site.name} </h4>
                {site.desc}  
          </li>
           
    )    

    
    return(
    <div className="Sites">  
        
        <div className="section">
            <ul>
                {lista}
            </ul> 

         <h4>Para ver mais projetos: <a href="https://github.com/DaviSerrano-FrontEnd" target="_blank">Acesse meu GitHub</a></h4>       
        </div>

    </div>
    );
}
export default Page