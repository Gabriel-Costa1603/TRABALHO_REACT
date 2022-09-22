import { Menu } from "../../components/Menu";
import "./style.css"
import img2 from "../../components/img/pao2.png"
export const Sobre = () => {
  return (
    <><body>
      <main className="conteudo2">
    <section className="conteudo-principal2">
      <div className="conteudo-principal-escrito2">
        <h1 className="conteudo-principal-escrito-titulo2">O que é?</h1>
        <h2 className="conteudo-principal-escrito-subtitulo2">Pão é um bot que serve para muitas coisas, segurança, moderação, e diversão mais, e foi desenvolvido com um bot com funções para lhe auxiliar em seu servidor e interagir com os usuários com todos os recursos de economia, como todos os trabalhos manuais que podem ser feitos por mim.
      </h2>
      </div>
      
      <img  className="conteudo-principal-imagem2"  src={img2} alt="Apenas um Pão"/> 
    </section>
   <section className="conteudo-Secundario">
      <div className="conteudo-p-Secundario">
        <h1 className="conteudo-Secundario-titulo">O que possui?</h1>
        <h2 className="conteudo-Secundario-subtitulo">Possui sistemas de proteção e segurança como minha principal funcionalidade em seu poder ser utilizado para parar raids alguns servidores</h2>
        <h1 className="comando">Comandos:</h1>
        <h2 className="comandos">Comandos de Moderação: addemoji, addrole, adv, anuncio, ban, bandiv, bangif, castigo, div, divs, genrole, kick, limpar, listbans, lock, mute, radv, rcastigo, remrole, tempo, unban, unbanall, unlock, unmute.</h2>
  <h2 className="comandos">Isso é apenas uma parte mínima dos comandos que o pão possui, atualmente ele conta com mais de 1 acesso comandos e mais de 20 sistemas totalmente configuráveis, e ainda por cima tem o seu sistema premium que dá muito mais comandos exclusivos para ajudar ainda mais o seu servidor.</h2>
        </div></section> </main></body>

    </>
  );
}