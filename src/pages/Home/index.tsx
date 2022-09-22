import { Menu } from "../../components/Menu";
import "./style.css"
import img from "../../components/img/Pao.png"
export const Home = ()=> {
    return(
    <>
    <body>
  <main className="conteudo">
    <section className="conteudo-principal">
      <div className="conteudo-principal-escrito">
        <h1 className="conteudo-principal-escrito-titulo">Pão</h1>
        <h2 className="conteudo-principal-escrito-subtitulo">Deixe a sua comunidade segura de um jeito fácil</h2>
        <button className="conteudo-principal-escrito-botao">Me adicione</button>
      </div>
      <img className="conteudo-principal-imagem" src={img} alt="Apenas um Pão"/>
    </section>
    
    <section className="conteudo-segundario">
      
      <h3  className="conteudo-segundario-titulo">O que ele faz por você?</h3>
      <p className="conteudo-segundario-paragrafo">1. Cria um <strong>sistema de verificação capcha</strong> para novos membros garantirem que não são robos</p>
      <p className="conteudo-segundario-paragrafo">2. Possui um <strong>sistema de banimento automático</strong> para links suspeitos que forem enviados na comunidade</p>
      <p className="conteudo-segundario-paragrafo">3. <strong>Sistema de avisos e banimento manual</strong>, para pessoas administradoras utilizarem</p>
      </section>
  </main>
  
</body>  
    </>
    );
}