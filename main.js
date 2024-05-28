const form = document.getElementById("form-contato");
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNomeCliente = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    let linha = "<tr>";
    linha += `<td>${inputNomeCliente.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

})

document.getElementById('telefone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    let formattedValue = '';

    if (value.length > 11) {
        value = value.slice(0, 11); 
    }

    if (value.length > 2) {
        formattedValue = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
        formattedValue = `(${value.slice(0, 2)}`;
    }

    if (value.length > 6) {
        formattedValue = `${formattedValue.slice(0, 10)}-${formattedValue.slice(10)}`;
    }

    e.target.value = formattedValue;
});
