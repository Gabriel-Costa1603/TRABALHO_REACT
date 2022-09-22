import { Menu } from "../../components/Menu";
import "./style.css"
export const Contatos = () => {

  return (
    <>
      <body>
      <main className="conteudo3">
      <div className="body">
 <div>
    <h1 id="titulo">Entre em Contato</h1>
            <p id="subtitulo">Complete suas informações</p>
            <br/>
        </div>
  <form>
            <fieldset className="grupo">
                <div className="campo">
                    <label ><strong>Nome</strong></label>
                    <input type="text" name="nome" id="nome" required/>
                </div>
            <div className="campo">
                <label ><strong>Email</strong></label>
                <input type="email" name="email" id="email" required/>
            </div>
               </fieldset>   
            <div className="campo">
                <label><strong>Gostou do Pão?</strong></label>
                <label>
                    <input type="radio" name="?" value="Sim"/>Sim
                </label>
                <label>
                    <input type="radio" name="?" value="Não"/>Não 
                </label>
                <label>
                    <input type="radio" name="?" value="NãoSei" />Não sei 
                </label>
               
            </div>         
          
            <div className="campo">
              <div className="pqnao"></div>
                <br/>
                <label ><strong>Comentário </strong></label>
                <textarea rows={6} cols={30} id="experiencia" name="experiencia" required></textarea>
            </div>

            <button className="botao" type="submit" >Concluído</button>            

        </form>
      </div>
    </main> 
      </body>

    </>
  );

}