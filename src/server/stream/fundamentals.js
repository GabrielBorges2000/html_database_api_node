/* 
Streams do Node:

O node se destaca pois utiliza esse conceito em suas aplicações:

Readable Streams : Leitura por pedaço => Enquato o carquivo é carregado ele ja vai realizando a leitura.

Writable Streams : Escrita por pedaço => Enquato o carquivo é carregado ele ja vai realizando a Escrita no banco de dados. 

Isso facilita muita, senão o usuario teria que carregar os arquivos, esperar a leitura e depois esperar carregar as informações no banco de dados e ai sim ele daria uma resposta se foi concluido ou não.

Já com o node ele vai fraguimenta a minha aplicação e vai fazendo isso tudo ao mesmo tempo,

Se a cada segundo é enviado 10mb/s é já realiza todo o processo e amargena essas informações!
*/

// process.stdin
// .pipe(process.stdout)

import {Readable, Writable, Transform}  from 'node:stream'

class OneToHundredStream extends Readable {
    
    index = 1

    _read() {
        const i = this.index++

        setTimeout(() => {
            if (i > 100) {
                this.push(null)
            } else {
                /*  não podemos utilizar primitivos/ números, strings ou boolean
                temos que transformar em Buffer para mandar esses dados*/
                const buf = Buffer.from(String(i))

                this.push(buf)
            }
        }, 1000)
    }
}

// o setTime Out é executado sempre que se passar um determinado tempo, 
//no caso o exemplo é 1000 que significa que a cada 1 segundo meu código vai ser executado 

// Ai quando o código é executado ele já pega a informação e armazena e me devolve os dados

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1

        callback(null, Buffer.from(String(transformed)))
    }
}
// a cada timeOut ele converte para negativo

class MutiplyByTenStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

// a cada timeOut ele já escreve


new OneToHundredStream()// => string de leitura
    .pipe( new InverseNumberStream()) // => streams de Tranformação
    .pipe( new MutiplyByTenStream()) // => streams de escrita de dados
