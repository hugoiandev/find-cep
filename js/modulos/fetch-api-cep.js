export default function initFetchApi(event) {
    event.preventDefault()
    let cepDigitado = document.querySelector('#cep').value
    const rua = document.querySelector('.logradouro')
    const complemento = document.querySelector('.complemento')
    const bairro = document.querySelector('.bairro')
    const localidade = document.querySelector('.localidade')
    const uf = document.querySelector('.uf')
    const ddd = document.querySelector('.ddd')

    async function fetchApi() {
        try {
            const apiCep = await fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
            const apiJson = await apiCep.json()

            rua.value = apiJson.logradouro
            complemento.value = apiJson.complemento
            bairro.value = apiJson.bairro
            localidade.value = apiJson.localidade
            uf.value = apiJson.uf
            ddd.value = apiJson.ddd

            cepDigitado = null
        }
        catch {
            window.alert('Cep invalido!')
            console.log(Error('Ocorreu um erro!'))
        }
    }
    fetchApi()
}