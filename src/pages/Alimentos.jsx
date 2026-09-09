function Alimentos() {
    return (
        <div className="alimentos">
            <p className="tec">Curso: Técnico Integrado</p>
            <h1>ALIMENTOS</h1>
            <p className="info">O curso Técnico em Alimentos prepara o aluno para trabalhar com a produção, análise, conservação e controle de qualidade dos alimentos. Após a formação, pode atuar em indústrias de alimentos, laboratórios, empresas de controle de qualidade e outros setores relacionados à produção alimentícia.</p>
            <div className="areas">
                <div className="cards">
                    <div className="card">
                        <h3>Produção de Alimentos</h3>
                        <p>
                            Processos de produção e transformação de matérias-primas
                            em produtos alimentícios.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Controle de Qualidade</h3>
                        <p>
                            Análise e acompanhamento da qualidade dos alimentos durante
                            os processos de produção.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Segurança dos Alimentos</h3>
                        <p>
                            Práticas para garantir a qualidade e a segurança dos
                            alimentos destinados ao consumo.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Indústria Alimentícia</h3>
                        <p>
                            Atuação em empresas relacionadas à produção, processamento
                            e comercialização de alimentos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alimentos