export default function initFetchApi(event) {
    event.preventDefault()
    let cepDigitado = document.querySelector('#cep').value
    const cep = document.querySelector('.cep')
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

            cep.innerHTML = apiJson.cep
            rua.innerHTML = apiJson.logradouro
            complemento.innerHTML = apiJson.complemento
            bairro.innerHTML = apiJson.bairro
            localidade.innerHTML = apiJson.localidade
            uf.innerHTML = apiJson.uf
            ddd.innerHTML = apiJson.ddd

            cepDigitado = null
        }
        catch {
            console.log(Error('Ocorreu um erro!'))
        }
    }
    fetchApi()
}