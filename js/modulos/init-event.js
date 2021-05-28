import initFetchApi from './fetch-api-cep.js'

export default function initEvent() {
    const button = document.querySelector('.btn-pesquisar')

    function addButtonEvent() {
        button.addEventListener('click', initFetchApi)
    }
    addButtonEvent()
}