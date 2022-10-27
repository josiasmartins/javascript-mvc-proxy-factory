class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(), 
            new NegociacoesView($('#negociacoesView')), 
            'adiciona', 'esvazia');

        this._mensagem = new Bind(
            new Mensagem(), new MensagemView($('#mensagemView')),
            'texto');
        
    }
    
    adiciona(event) {
        
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        // this._mensagemView.update(this._mensagem);
        
        this._limpaFormulario();   
    }

    importaNegociacoes() {
        let service = new NegociacaoService();

        // Promise.all: resolve todas as chamadas em sequencia e captura o erro
        Promise.all([
            service.obterNegociacoesDaSemana(),
            service.obterNegociacoesDaSemanaAnterior(),
            service.obterNegociacoesDaSemanaRetrasada()
        ]).then(negociacoes => {
            console.log(negociacoes);
            negociacoes
                .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
                .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações importadas com sucesso';
        }).catch(err => this._mensagem.texto = err);

        // service.obterNegociacoesDaSemana()
        //     .then(negociacoes => {
        //         negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
        //         this._mensagem.texto = 'Negociacao obtido com sucesso';
        //     })
        //     .catch(error => this._mensagem.texto = error);

        // service.obterNegociacoesDaSemanaAnterior()
        //     .then(negociacoes => {
        //         negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
        //         this._mensagem.texto = 'Negociacao obtido com sucesso';
        //     })
        //     .catch(error => this._mensagem.texto = error);

        // service.obterNegociacoesDaSemanaRetrasada()
        //     .then(negociacoes => {
        //         negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
        //         this._mensagem.texto = 'Negociacao obtido com sucesso';
        //     })
        //     .catch(error => this._mensagem.texto = error);





        // service.obterNegociacoesDaSemana((err, negociacoes) => {
        //     if (err) {
        //         this._mensagem.texto = err;
        //         return;
        //     }

        //     negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
        //     this._mensagem.texto = 'Negociações importada com sucesso'
        // });

        // service.obterNegociacoesDaSemanaAnterior((err, negociacoes) => {
        //     if (err) {
        //         this._mensagem.texto = err;
        //         return;
        //     }

        //     negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
        //     this._mensagem.texto = 'Negociações importada com sucesso'
        // });

        // service.obterNegociacoesDaSemanaRetrasada((err, negociacoes) => {
        //     if (err) {
        //         this._mensagem.texto = err;
        //         return;
        //     }

        //     negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
        //     this._mensagem.texto = 'Negociações importada com sucesso'
        // });
    }

    importaNegociacoesSemanaAnterior() {
        let service = new NegociacaoService();

        service.obterNegociacoesDaAnterior((err, negociacoes) => {
            if (err) {
                this._mensagem.texto = err;
                return;
            }

            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações importada com sucesso'
        });
    }

    importaNegociacoesSemanaRetrasada() {
        let service = new NegociacaoService();

        service.obterNegociacoesDaSemanaRetrasada((err, negociacoes) => {
            if (err) {
                this._mensagem.texto = err;
                return;
            }

            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações importada com sucesso'
        });
    }

    apaga() {
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociações apagadas com sucesso';
        this._mensagemView.update(this._mensagem)
    }
    
    _criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);    
    }
    
    _limpaFormulario() {
     
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();   
    }
}