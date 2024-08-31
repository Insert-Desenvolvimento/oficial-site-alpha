export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
interface PropMiniCard {
  name: string;
  description: string;
}
export const Card: PropMiniCard[] = [
  {
    name: "500",
    description: "Somos mais de 500 alunos.",
  },
  {
    name: "14",
    description: "Mais de 14 profissionas certificados.",
  },
  {
    name: "120",
    description: "Mais de 120 aparelhos de alta qualidade.",
  },
  {
    name: "20",
    description: "Mais de 20 parceiros que nos apoiam.",
  },
  {
    name: "15",
    description: "Mais de 15 modalidades de treino.",
  },
];
