import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  nomeVariavel: Yup.string().required("Nome da variável é obrigatório"),
  criterioComparacao: Yup.string().required(
    "Critério de comparação é obrigatório",
  ),
  valorComparacao: Yup.string().required("Valor de comparação é obrigatório"),
});
