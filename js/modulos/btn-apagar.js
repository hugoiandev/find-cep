export default function btnApagar() {
    const btnApagar = document.querySelector('.btn-apagar')
    const cepDigitado = document.querySelector('#cep')

    const rua = document.querySelector('.logradouro')
    const complemento = document.querySelector('.complemento')
    const bairro = document.querySelector('.bairro')
    const localidade = document.querySelector('.localidade')
    const uf = document.querySelector('.uf')
    const ddd = document.querySelector('.ddd')

    function eraseBtn(event) {
        event.preventDefault()

        rua.value = ''
        complemento.value = ''
        bairro.value = ''
        localidade.value = ''
        uf.value = ''
        ddd.value = ''

        cepDigitado.value = null
    }


    btnApagar.addEventListener('click', eraseBtn)
}