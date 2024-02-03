export default function formattedDate(createdAt) {
  // Convertendo a string para um objeto Date
  const originalDate = new Date(createdAt);
  
  // Obtendo o mês e o ano da data
  const month = originalDate.getUTCMonth() + 1; // Adicionando 1 porque os meses começam do zero
  const year = originalDate.getUTCFullYear() % 100; // Obtendo os dois últimos dígitos do ano
  
  // Criando uma nova string no formato desejado (MM/YY)
  const formattedDate = `${month < 10 ? '0' : ''}${month}/${year < 10 ? '0' : ''}${year}`;
  
  return formattedDate;

}