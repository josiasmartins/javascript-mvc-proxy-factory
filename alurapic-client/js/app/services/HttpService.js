class HttpService {

    get(url) {

        /**
        * Promise
        * recebe dois parametros: resolve e reject
        * resolve: uma função que retorna o sucesso
        * reject: o erro
        */
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.open('GET', url);

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr.responseText);
                    }
                }
            };

            xhr.send();
        });
    }

    post(url, dado) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-type', 'aplication/json');
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText))
                    } else {
                        reject(xhr.responseText);
                    }
                }
            };
            // stringfy: usando JSON.stringifly para converter objeto em uma string no formato JSON
            xhr.send(JSON.stringify(dado));
        })
    }

}

let service = new HttpService().post('negociacoes/retrasada', {ibag: 1})