// const fs = require("fs"); //file system

// // fs.readFile("./Jorge.attie",{encoding: 'utf-8'},(error, dados)=>{
// // if(error){
// //     console.log("ocorreu uma falha ao ler o arquivo")
// // }else{
// //   conteudo = dados;
// // }
// // });

// function modificarUsuario(nome, curso, categoria) {
//   fs.readFile("./usuario.json", { encoding: "utf-8" }, (err, dados) => {
//     if (err) {
//       console.log("Erro durante o salvamento");
//     } else {
//       var conteudo = JSON.parse(dados); //parse converte de texto para objeto js

//       conteudo.nome = nome;

//       conteudo.nome = curso;

//       conteudo.nome = categoria;
//       fs.writeFile("./usuarios.json", JSON.stringify(conteudo), (err) => {
//         // converte objeto js em texto
//         if (err) {
//           console.log("Um erro aconteceu durante a escrita");
//         }
//       });
//     }
//   });
// }
// modificarUsuario("João josé", "PHP do jeito certo", "PHP");


var Reader = require("./Reader");
var Processor = require("./Processor");
var Writer = require("./Writer")
var Table = require("./Table");
 var HtmlPareser = require("./HtmlParser")
var leitor = new Reader();
var escritor = new Writer();
var PDFWrite = require("./PDFWriter")
async function main(){
 var dados = await leitor.Read("./users1.csv");
  var dadosProcessados = Processor.Process(dados);
  var usuarios = new Table(dadosProcessados);
  usuarios.rows.push(["João" , "Formação java", "22"])
  usuarios.rows.push(["João" , "Formação java", "22"])
  console.log(usuarios.rows)
   var html =  await HtmlPareser.Parse(usuarios)
   escritor.Write(Date.now()+".html",html)
   PDFWrite.WritePDF(Date.now()+"PDF",html);
    console.log(html)
   console.log(usuarios.RowCount);
   console.log(usuarios.ColumnCount);
  






 }
 main();