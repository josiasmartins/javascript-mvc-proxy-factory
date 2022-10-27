/**
 * polyfill
 * Um polyfill é um script que emula o comportamento
 *  de um recurso quando esse não é suportado para garantir
 *  que nosso código funcione sem termos que abdicar do que é mais novo.
 */
if (!Array.prototype.includes) {
    
    // se não existir, adiciona

    console.log('Polyfill para Array.includes aplicado');

    /**
     * prototype
     * Quando adicionamos métodos no prototype
     *  de uma classe ou função construtora, 
     * todas as instâncias dessa função construtora ou classe terão o método.
     */
    Array.prototype.includes = function(elemento) {
        return this.indexOf(elemento) != -1;
    }

}