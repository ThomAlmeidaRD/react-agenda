import { ChangeEvent, FormEvent, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Listagem from "./listagem";

const element = <FontAwesomeIcon icon={faX} />

function MyComponent() {
    const [myStyleModal, setMyStyleModal] = useState({});
    const [myStyleList, setMyStyleList] = useState({});


    function updateStyleModal(newStyle: object) {
        setMyStyleModal(newStyle);
    }

    function updateStyleList(newStyle: object) {
        setMyStyleList(newStyle);
    }


    return (
        <div>

            <div className="modal-container" style={myStyleModal}>

                <div className="modal-content">

                    <div>

                        <h3>Cadastrar novo Contato</h3>

                        <div>
                            <form >
                                <section>
                                    <label htmlFor="">Nome</label>
                                    <br />
                                    <input type="text" placeholder="Nome" required />
                                </section>

                                <section>
                                    <label htmlFor="">E-mail</label>
                                    <br />
                                    <input type="email" placeholder="E-mail" required />
                                </section>

                                <section>
                                    <label htmlFor="">CPF</label>
                                    <br />
                                    <input type="number" placeholder="CPF" required />
                                </section>

                                <section>
                                    <label htmlFor="">Data de nascimento</label>
                                    <br />
                                    <input type="date" required />
                                </section>

                                <section>
                                    <label htmlFor="">Telefone</label>
                                    <br />
                                    <input type="number" placeholder="(00) 00000-0000" required />
                                </section>

                                <section>
                                    <label htmlFor="">Link de Imagem de Perfil</label>
                                    <br />
                                    <input type="text" placeholder="http://link-da-imagem.000" required />
                                </section>

                                <section>
                                    <button className="btnCadastro" onClick={() => updateStyleModal({ display: "flex" })}  > Cadastrar novo usuário</button>
                                    <br />
                                    <button onClick={() => updateStyleModal({ display: "none" })}>Cancelar</button>
                                </section>

                            </form>
                        </div>

                    </div>

                </div>
            </div>

            <div className="list-container" style={myStyleList}>

                <p className="closeTab" onClick={() => updateStyleList({ display: "none" })}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </p>


                <div className="list-content">

                    <div>
                        <h2>Lista de Contatos</h2>
                        <Listagem />

                    </div>

                </div>
            </div>

            <div className="container">

                <div className="container-content">

                    <div className="grettings">
                        <section>
                            <h1>Bem vindo Usuário</h1>
                            <p>Selecione as opções disponíveis</p>
                        </section>
                    </div>

                    <div className="menu-options">

                        <div className="menu-option-item" id="cadastrar" onClick={() => updateStyleModal({ display: "flex" })} >
                            <div>
                                <img src="/add-user.png" alt="" />
                                <p>Cadastrar novo Contato</p>
                            </div>
                        </div>

                        <div className="menu-option-item" onClick={() => updateStyleList({ display: "flex" })}>
                            <div>
                                <img src="/lista.png" alt="" />
                                <p>Consultar Cadastros</p>
                            </div>
                        </div>

                    </div>

                

                </div>

            </div>


        </div>



    );
}

export default MyComponent