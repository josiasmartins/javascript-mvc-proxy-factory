class ProxyFactory {

    // static: não precisa instanciar
    static create(objeto, props, acao) {
        /**
       * Proxy
       * O padrão de projeto Proxy nada mais é do que um objeto "falso", 
       * "mentiroso", que envolve e encapsula o objeto real que queremos interagir. 
       * É como se fosse uma interface, entre o objeto real e o resto do código. 
       * Conseguimos assim controlar o acesso aos seus atributos e métodos. 
       * Nele também podemos pendurar códigos que não cabem de estar alocados nos nossos modelos, 
       * mas que necessitam ser executados no caso de uma alteração ou atualização do mesmo.
       */
        return new Proxy(objeto, {
            /**
             * target: referencia ao objeto original
             * prop: a propriedade que está sendo acessada
             * receiver: uma referência para o próprio proxy
             * 
            */
            get(target, prop, receiver) {

                // console.log(`a propriedade "${prop}" foi interceptada`);
                // console.log(`valor anterior: ${target[prop]}, novo valor: ${value}`);

                // includes: retorna verdadeiro ou falso
                if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {

                    return function() {

                        console.log(`interceptando ${prop}`);
                        let retorno = Reflect.apply(target[prop], target, arguments);
                        // self._negociacoesView.update(target);
                        acao(target);
                        return retorno;
                    };
                }
                return Reflect.set(target, prop, receiver);
            },

            set(target, prop, value, receiver) {

                // if (props.includes(prop)) {
                //     // acao(target(prop) = value);
                //     // prop = value;
                //     target[prop] = value;
                //     acao(target);
                // }

                let retorno = Reflect.set(target, prop, value, receiver);
                if (props.includes(prop)) acao(target);
                return retorno;
            }
        });
    }

    static _ehFuncao(func) {

        return typeof(func) == typeof(Function)
    }

}