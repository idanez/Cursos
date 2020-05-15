var fs = require('fs')

let names
fs.readFile('C:\\Users\\daniel.yampolschi\\OneDrive\\Documents\\TOTVS Documentos\\funcs.txt',
'utf8', function(err, data) {  
    if (err) throw err;
    let splitted = data.split('\n')
    splitted.forEach(line => {
        let item = line.split(',')
        let descr = item[1]
        let macro = item[2]
        if(item.length > 3) {
            for(let i = 3; i < item.length; i++) {
                macro += `,${item[i]}`
            }
        }
        let data2 = fs.readFileSync('C:\\Users\\daniel.yampolschi\\OneDrive\\Documents\\TOTVS Documentos\\funcData.txt', 'utf8')
        let data2Split = data2.split('\n')
        let itemFound = false
        data2Split.forEach(line2 => {
            if(!itemFound) {
                let item2 = line2.split(';')
                if(item[0].toUpperCase().includes(item2[0].toUpperCase())) {
                    itemFound = true
                    descr = item2[1]
                    console.log(`${item[0]} - ${descr}`)
                }
            }
        })
        let name = `${item[0]},${descr},${macro}`
        names += name+'\r\n'
        fs.writeFile('C:\\Users\\daniel.yampolschi\\OneDrive\\Documents\\TOTVS Documentos\\funcs2.txt',
        names, 'utf8', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        })
    })
})
