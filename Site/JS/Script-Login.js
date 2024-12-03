function aparecer() {
    let inputPass = document.getElementById('senha')
    let btn = document.getElementById('btn-senha')

    if(inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text')

        btn.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    }
//Colocar novamente em modo oculto
    else {
        inputPass.setAttribute('type', 'password')

        btn.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
}
// URL do servidor que retorna os dados
const apiUrl = "URL_DO_SEU_SERVIDOR";

// Função para atualizar os dados da tabela
function updateTable() {
  fetch(apiUrl)
    .then(response => response.json()) // Converte os dados recebidos para JSON
    .then(data => {
      const tableBody = document.getElementById("sensor-data");
      tableBody.innerHTML = ""; // Limpa a tabela antes de atualizar

      // Adiciona uma linha para cada item recebido
      data.forEach(item => {
        const row = document.createElement("tr");
        
        row.innerHTML = `
          <td>${item.id}</td>
          <td>${item.ip}</td>
          <td>${item.valorFogo}</td>
          <td>${item.valorGas}</td>
          <td>${item.status}</td>
          <td>${item.dataHora}</td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error("Erro ao buscar os dados:", error));
}

// Atualiza a tabela a cada 30 segundos
setInterval(updateTable, 30000);

// Carrega os dados imediatamente ao abrir a página
updateTable();