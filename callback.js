// setTimeout(() =>{
// console.log("Meu nome e Jorge")
// },5000)

function enviarEmail(corpo, para, callback){
    setTimeout(()=>{

        var error = true;
        if(error){
            callback("deu erro")
        }else{
           callback();
        }

    },8000)
}
console.log("Inicio d eenvia de email")
enviarEmail("oi seja bem vindo ai guia", "attiejrge@jotge",(erro)=>{
if (erro == undefined){//OK
console.log("tudo ok")

}else{//OPA DEU ERRO!
console.log("ocorreu um erro"+erro)
}
})
