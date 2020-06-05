import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // Proporção do painel superior na tela = 15%
    difficultLevel: 0.1, // No caso: 10% dos campos terao minas
    getColumnsAmount() {
      //Pega o tamanho total da tela
        const width = Dimensions.get('window').width
        //Divide a tela pela quantidade de blocos
        //O floor arredonda para baixo. 
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height
        //Lembrando que tambem existe o espaço ocupado pelo
        //cabeçalho, por isso o 1 - headerRatio para calcular 
        //o tamanho do board em linhas
        const boardHeight = totalHeight * (1 - this.headerRatio)
        //Mesma conta das colunas
        return Math.floor(boardHeight / this.blockSize)
    }
}

export default params