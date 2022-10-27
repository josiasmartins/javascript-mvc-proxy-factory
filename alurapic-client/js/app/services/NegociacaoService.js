class NegociacaoService {

    constructor() {
        this._http = new HttpService()
    }
    
    obterNegociacoesDaSemana() {

       /**
        * Promise
        * recebe dois parametros: resolve e reject
        * resolve: uma função que retorna o sucesso
        * reject: o erro
        */
       return new Promise((resolve, reject) => {
        this._http
        .get('negociacoes/semana')
        .then(negociacoes => {
            resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
        })
        .catch(err => {
            console.log(err);
            reject('Não foi possível obter as negociações da semana');
        });
       })  
    }

    obterNegociacoesDaSemanaAnterior() {
        
         /**
        * Promise
        * recebe dois parametros: resolve e reject
        * resolve: uma função que retorna o sucesso
        * reject: o erro
        */
       return new Promise((resolve, reject) => {
        this._http
        .get('negociacoes/anterior')
        .then(negociacoes => {
            resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
        })
        .catch(err => {
            console.log(err);
            reject('Não foi possível obter as negociações da semana anterior');
        });
       })
       
        
    }
    
    obterNegociacoesDaSemanaRetrasada() {

         /**
        * Promise
        * recebe dois parametros: resolve e reject
        * resolve: uma função que retorna o sucesso
        * reject: o erro
        */
       return new Promise((resolve, reject) => {
        this._http
        .get('negociacoes/retrasada')
        .then(negociacoes => {
            resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
        })
        .catch(err => {
            console.log(err);
            reject('Não foi possível obter as negociações da semana retrasada');
        });
       })
       
        
    }
}

// class NegociacaoService {


//     obterNegociacoesDaSemana(cb) {
//         alert('Importado com sucesso');
//         console.log('IBAG');

//         let xhr = new XMLHttpRequest();

//         /**
//          * open
//          * primeiro parametro: verbo do HTTP
//          * segundo: indica o path para acessar
//          */
//         xhr.open('GET', 'negociacoes/semana');

//         /* configurações */
//         // onreadystatechange: ser executada automaticamente cada vez que há uma alteração no estado da requisição.
//         xhr.onreadystatechange = () =>  {
//             /**
//              * 0: requisição ainda não iniciada
//              * 1: conexão com o servidor estabelecida
//              * 2: requisição recebida
//              * 3: processando requisição
//              * 4: requisição concluída e a resposta está pronta
//              */
//             if (xhr.readyState == 4) {
//                 if (xhr.status == 200) {

//                     console.log('Obtendo as negociações do servidor');
//                     // parse: converte o texto em objeto javascript
//                     cb(null, JSON.parse(xhr.responseText)
//                         .map(objeto => {
//                             console.log(objeto);
//                             new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
//                         }));
//                         // .forEach(negociacao => {
//                         //     console.log(negociacao);
//                         //     this._listaNegociacoes.adiciona(negociacao);
//                         // });
                        
//                         this._mensagem.texto = 'Negociações importadas com sucesso';

//                 } else {
//                     console.log(xhr.responseText);
//                     cb('Não foi possível obter as negociações', null);
//                     // this._mensagem.texto = 'Não foi possivel obter as negociações da semana';
//                 }
//             }
//         }

//         /**
//          * send: método para enviar a requisição
//          */
//         xhr.send();
//     }

//     obterNegociacoesDaAnterior(cb) {
//         alert('Importado com sucesso');
//         console.log('IBAG');

//         let xhr = new XMLHttpRequest();

//         /**
//          * open
//          * primeiro parametro: verbo do HTTP
//          * segundo: indica o path para acessar
//          */
//         xhr.open('GET', 'negociacoes/semana');

//         /* configurações */
//         // onreadystatechange: ser executada automaticamente cada vez que há uma alteração no estado da requisição.
//         xhr.onreadystatechange = () =>  {
//             /**
//              * 0: requisição ainda não iniciada
//              * 1: conexão com o servidor estabelecida
//              * 2: requisição recebida
//              * 3: processando requisição
//              * 4: requisição concluída e a resposta está pronta
//              */
//             if (xhr.readyState == 4) {
//                 if (xhr.status == 200) {

//                     console.log('Obtendo as negociações do servidor');
//                     // parse: converte o texto em objeto javascript
//                     cb(null, JSON.parse(xhr.responseText)
//                         .map(objeto => {
//                             console.log(objeto);
//                             new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
//                         }));
//                         // .forEach(negociacao => {
//                         //     console.log(negociacao);
//                         //     this._listaNegociacoes.adiciona(negociacao);
//                         // });
                        
//                         this._mensagem.texto = 'Negociações importadas com sucesso';

//                 } else {
//                     console.log(xhr.responseText);
//                     cb('Não foi possível obter as negociações', null);
//                     // this._mensagem.texto = 'Não foi possivel obter as negociações da semana';
//                 }
//             }
//         }

//         /**
//          * send: método para enviar a requisição
//          */
//         xhr.send();
//     }

//     obterNegociacoesDaSemanaRetrasada(cb) {
//         alert('Importado com sucesso');
//         console.log('IBAG');

//         let xhr = new XMLHttpRequest();

//         /**
//          * open
//          * primeiro parametro: verbo do HTTP
//          * segundo: indica o path para acessar
//          */
//         xhr.open('GET', 'negociacoes/anterior');

//         /* configurações */
//         // onreadystatechange: ser executada automaticamente cada vez que há uma alteração no estado da requisição.
//         xhr.onreadystatechange = () =>  {
//             /**
//              * 0: requisição ainda não iniciada
//              * 1: conexão com o servidor estabelecida
//              * 2: requisição recebida
//              * 3: processando requisição
//              * 4: requisição concluída e a resposta está pronta
//              */
//             if (xhr.readyState == 4) {
//                 if (xhr.status == 200) {

//                     console.log('Obtendo as negociações do servidor');
//                     // parse: converte o texto em objeto javascript
//                     cb(null, JSON.parse(xhr.responseText)
//                         .map(objeto => {
//                             console.log(objeto);
//                             new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
//                         }));
//                         // .forEach(negociacao => {
//                         //     console.log(negociacao);
//                         //     this._listaNegociacoes.adiciona(negociacao);
//                         // });
                        
//                         this._mensagem.texto = 'Negociações importadas com sucesso';

//                 } else {
//                     console.log(xhr.responseText);
//                     cb('Não foi possível obter as negociações', null);
//                     // this._mensagem.texto = 'Não foi possivel obter as negociações da semana';
//                 }
//             }
//         }

//         /**
//          * send: método para enviar a requisição
//          */
//         xhr.send();
//     }

// }