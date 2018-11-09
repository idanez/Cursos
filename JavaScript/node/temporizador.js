const schedule = require('node-schedule')

//String padrao do chrone
// */5 = de 5 em 5 em 5 segundos (5 no inicio = apenas no segundo 5)
// * = em qualquer minuto
// 12 = as 12h 
// * = ignora o dia do mes
// * = ignora o proprio mes
// 5 = dia da semana (1=segunda-feria... 5 = sexta-feira)
const tarefa1 = schedule.scheduleJob('*/5 * 13 * * 5', function() {
    console.log('Executando tarefa 1', new Date().getSeconds())
})

//Temporizador padrao do JS
setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1')
},20000)

//Forma do node
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] // De segunda a sexta
regra.hour = 13 // Na hora 13
regra.second = 30 // No segundo 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})