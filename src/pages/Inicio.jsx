import campus from '../assets/campus.jpg'

function Inicio() {
    return (
        <div className="inicio">
            <h1 className="oi">Seja bem vindxs ao site do IFRN - <i>Campus</i> Pau dos Ferros!</h1>
            <p className="eba">Você sabia que o nosso Campus tem <strong>3 cursos técnicos integrados</strong>? É isso mesmo.
            <br /><strong>Venha conhecer!!!</strong></p>
            <p className="iniciotxt">O Campus Pau dos Ferros do IFRN está localizado no Bairro Chico Cajá, na região do Alto Oeste Potiguar. Fundado em 23 de setembro de 2009, o campus oferece educação profissional e tecnológica para a região.
                A instituição possui cursos técnicos integrados ao Ensino Médio em <strong>Alimentos, Apicultura e Informática</strong>, além de cursos de graduação e especialização. O campus também contribui para o desenvolvimento social e econômico da região por meio da educação, da pesquisa, da inovação e do empreendedorismo.
                Entre suas iniciativas está a <strong>Incubadora Tecnológica do Alto Oeste (ITAO)</strong>, que promove palestras, oficinas, capacitações e ações voltadas à inovação e ao empreendedorismo.</p>
            <img src={campus} className='imgcampus' alt="IFRN - Campus Pau dos Ferros" />
            <p className='desc'>Imagem do IFRN - Campus Pau dos Ferros (2011)</p>
        </div>
    )
}

export default Inicio