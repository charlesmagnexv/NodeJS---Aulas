//Single Thread
'use strict'
//https://nodejs.org/api/process.html#process
function singleThread(){
    process.argv[2] = 'Estamos aprendendo NODE.js'
    process.argv[3] = 19
    process.argv[4] = null
    process.argv[5] = true
    console.log('--------------------------------------------');
    console.log('         O PROCESSO DE NODE.JS           ');
    console.log('Id do processo ............' + process.pid);//Isto muda a cada execução, é o indeitificador de Single Thread.
    console.log('Titulo ....................' + process.title);
    console.log('Directorio de Node ........' + process.execPath);
    console.log('Directorio atual ..........' + process.cwd());
    console.log('Versão do Node ............' + process.version);
    console.log('Versão das Dependências ...' + process.versions);
    console.log('Plataforma (S.O.) .........' + process.platform);
    console.log('Arquitetura (S.O.) ........' + process.arch);
    console.log('Tempo ativo do Node .......' + process.uptime());
    console.log('Argumentos do Processo ....' + process.argv);
    console.log('--------------------------------------------');
}
singleThread();
let key = 0
for(key in process.argv){
    console.log( process.argv[key] );
}
/*
console.log(
    process.argv[0],
    process.argv[1]
);*/