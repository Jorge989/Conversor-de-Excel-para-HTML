var pdf = require("html.pdf");
class PDFWriter{
    static  WritePDF(filename, html){
        pdf.create(html,{}).toFile(filename,(err)=>{});
    }
}
class PDFWrite{

}
module.exports = PDFWrite;