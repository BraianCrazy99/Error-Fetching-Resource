// ==============================
// "BANCO DE DADOS"
// ==============================
let reservas = [];
let totalGeral = 0;


// ==============================
// FUNÇÃO 1 - CALCULAR TOTAL
// ==============================
function calcularTotal(reserva) {

  let total = reserva.noites * reserva.valorNoite;
  let totalFinal = total;

  switch (reserva.formaPagamento.toLowerCase()) {
    case "pix":
      totalFinal = total - (total * 0.05);
      break;

    case "cartão":
    case "cartao":
      totalFinal = total - (total * 0.20);
      break;

    case "dinheiro":
      totalFinal = total;
      break;

    default:
      totalFinal = total;
  }

  return totalFinal;
}


// ==============================
// FUNÇÃO 2 - ADICIONAR RESERVA
// ==============================
function adicionarReserva(reserva) {

  let totalFinal = calcularTotal(reserva);

  reserva.total = totalFinal;

  reservas.push(reserva);

  totalGeral += totalFinal;
}


// ==============================
// FUNÇÃO 3 - EXIBIR RESERVA BONITA
// ==============================
function exibirReserva(reserva) {

  console.log(
`👤 Hóspede: ${reserva.nome}
🏨 Categoria: ${reserva.categoria}
📅 Check-in: ${reserva.checkIn}
📅 Check-out: ${reserva.checkOut}
🌙 Noites: ${reserva.noites}
💰 Total: R$ ${reserva.total}
📌 Status: ${reserva.status}
---------------------------------------------`
  );
}


// ==============================
// EXECUÇÃO DO SISTEMA
// ==============================
adicionarReserva({
  nome: "João da Silva",
  noites: 3,
  checkIn: "10/04/2025",
  checkOut: "13/04/2025",
  valorNoite: 550,
  categoria: "Premium",
  formaPagamento: "pix",
  status: "confirmada"
});

adicionarReserva({
  nome: "Mariana Martins",
  noites: 4,
  checkIn: "18/04/2025",
  checkOut: "22/04/2025",
  valorNoite: 450,
  categoria: "Premium com hidro",
  formaPagamento: "cartão",
  status: "confirmada"
});

adicionarReserva({
  nome: "Lucas Martins",
  noites: 5,
  checkIn: "01/05/2025",
  checkOut: "05/05/2025",
  valorNoite: 350,
  categoria: "Ofuro varanda duplo",
  formaPagamento: "pix",
  status: "confirmada"
});

adicionarReserva({
  nome: "Rafael Leão",
  noites: 3,
  checkIn: "08/05/2025",
  checkOut: "11/05/2025",
  valorNoite: 800,
  categoria: "Suite presidencial",
  formaPagamento: "dinheiro",
  status: "pendente"
});


// ==============================
// EXIBIÇÃO FINAL
// ==============================
console.log("=== RESERVAS ===\n");

exibirReserva(reservas[0]);
exibirReserva(reservas[1]);
exibirReserva(reservas[2]);
exibirReserva(reservas[3]);

console.log("\n💰 Total geral faturado: R$ " + totalGeral);
