class leitor {
  Ler(caminho) {
    return "conteudo do arquivo";
  }
}
class Escritor {
  Escrever(conteudo) {
    console.log("conteudo escirto");
  }
}

class Criador {
  Criador(nome) {
    console.log("Arquivo criado!");
  }
}
class Desturidor {
  Destruir(nome) {
    console.log("Deletando arquivo!");
  }
}

class ManipuladorDeArquivo {
  constructor(nome) {
    this.arquivo = nome;
    this.leitor = new Leitor();
    this.leitor = new Escritor();
    this.leitor = new Criador();
    this.leitor = new Destruidor();
  }

}
var manipulador = new ManipuladorDeArquivo("Aruivo.txt");

manipulador.leitor.Ler();
manipulador.Escritor.Escrever();
manipulador.criador.Criar();
manipulador.Destruidor.Deletar();

class GerenciadorDeUsuarios{
    constructor(){
        this.criador = new Criador();
        this.escritor =  new Escritor();
    }
    SalvarListaDeuUsuarios(lista){
        this.criador.Criar("usuarios.txt",lista)
        this.criador.Escrever("usuarios.txt",lista)
    }}

    var manipulador = new ManipuladorDeArquivo



