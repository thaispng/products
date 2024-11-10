import * as React from "react";

import { format, isValid } from "date-fns";

import { ptBR } from "date-fns/locale";

import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

// export const getStatus = (
//   amount: number
// ): { label: string; icon: React.ReactNode } => {
//   if (amount > 10)
//     return {
//       label: "Em Estoque",
//       icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
//     };
//   if (amount > 0)
//     return {
//       label: "Baixo Estoque",
//       icon: <AlertTriangle className="h-4 w-4 text-yellow-500" />,
//     };
//   return {
//     label: "Fora de Estoque",
//     icon: <XCircle className="h-4 w-4 text-red-500" />,
//   };
// };

export const getPriority = (expirationDate: string): string => {
  const daysUntilExpiration = Math.ceil(
    (new Date(expirationDate).getTime() - new Date().getTime()) /
      (1000 * 3600 * 24)
  );
  if (daysUntilExpiration <= 7) return "Alta";
  if (daysUntilExpiration <= 30) return "Média";
  return "Baixa";
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return isValid(date)
    ? format(date, "dd/MM/yyyy", { locale: ptBR })
    : "Data inválida";
};
