export default function initFetchApi(event) {
    event.preventDefault()
    const cep = document.querySelector('#cep').value
    const listCep = document.querySelectorAll('.list-cep')
    console.log(listCep)

    async function fetchApi() {
        try {
            const apiCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const apiJson = await apiCep.json()
            console.log(apiJson)
        }
        catch {
            console.log(Error('Ocorreu um erro!'))
        }
    }
    fetchApi()
}