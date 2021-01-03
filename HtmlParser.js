var ejs  = require("ejs")

class HtmlPareser{
 static async Parse(table){

      return await ejs.renderFile("./table.ejs", {header: table.header, rows:table.rows})

 }
}
module.exports = HtmlPareser;