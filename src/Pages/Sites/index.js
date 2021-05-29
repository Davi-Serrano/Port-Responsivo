import "./index.css"

function Page(){

        const sites =  [
            {
                id: 1,
                name: "site um",
                img: "Foto1",
                desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. "
                
            },
            {
                id: 2,
                name: "site dois",
                img: "Foto2",
                desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. "
            },
            {
                id: 3,
                name: "site tres",
                img: "Foto3",
                desc: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. "
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
        <div className="info">
            <h1>
                Aqui vai as informações sobre o site
            </h1>
        </div>
        
        
        <div className="row">
            <p> os nome: {lista} </p>
                
        </div>

    </div>
    );
}
export default Page