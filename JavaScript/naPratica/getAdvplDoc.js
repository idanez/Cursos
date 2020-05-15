const http = require('http')

//const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
let pageId = "23889096"
const url = `http://tdn.totvs.com/pages/viewpage.action?pageId=${pageId}`

// const getText = () => {
//     return http.get(url, res => {
//         let resultado = ''
//         res.on('data', dados => {
//             resultado += dados
//         })
//         res.on('end', () => {
//             //callback(JSON.parse(resultado))
//             //try {
//                 //resolve(JSON.parse(resultado))
//             //} catch(e) {
//               //  reject(e)
//             //}
//         })
//     })
// }

let request = http.request(url, function(res){
    let data = ''
    res.on('data', function(chunk) {
        data += chunk
    })
    res.on('end', function() {
        console.log(data)
    })
})
request.end()

//console.log(getText())