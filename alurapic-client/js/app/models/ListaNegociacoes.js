class ListaNegociacoes {
    
    constructor() {
        
        this._negociacoes = [];
        // this._armadilha = armadilha;
        // this._contexto = contexto;
    }
    
    adiciona(negociacao) {
        
        // this._negociacoes = [].concat(this._negociacoes, negociacao);
        // this._armadilha(this);
        // Reflet.apply: usado para trocar o this. Recebe nome do método, contexto para executar o método
        // e os parametros que serão para passado para esse método para corrigir o this
        // Reflect.apply(this._armadilha, this._contexto, [this])
        this._negociacoes.push(negociacao);
    }   
    
    get negociacoes() {
        
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
        // this._armadilha(this);
        // Reflect.apply(this._armadilha, this._contexto, [this])
    }
}