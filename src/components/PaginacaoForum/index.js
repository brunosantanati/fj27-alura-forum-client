import React, { Component } from 'react';
import './style.css';

class PaginacaoForum extends Component {
  
    render() {
        return (
            <div>
                <div className="container">
                    <nav className="busca-paginacao">
                        <span className="busca-paginacao-prevNext busca-paginacao-linksAnteriores busca-paginacao-prevNext--disabled">Anterior</span>
                        <nav className="busca-paginacao-links">
                            <a href="https://cursos.alura.com.br/forum/todos/1" className="paginationLink busca-botao-selecionado ">1</a>
                            <a href="https://cursos.alura.com.br/forum/todos/2" className="paginationLink  ">2</a>
                            <a href="https://cursos.alura.com.br/forum/todos/3" className="paginationLink  ">3</a>
                            <a href="https://cursos.alura.com.br/forum/todos/4" className="paginationLink  ">4</a>
                            <a href="https://cursos.alura.com.br/forum/todos/2552" className="paginationLink   paginationLink--withSuspensionPoints">2552</a>
                        </nav>

                        <a href="https://cursos.alura.com.br/forum/todos/2" className="busca-paginacao-prevNext busca-paginacao-linksProximos" rel="next">Próximo</a>
                    </nav>
                </div>
            </div>
        );
    }
} export default PaginacaoForum;