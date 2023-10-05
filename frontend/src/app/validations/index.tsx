import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    variableName: Yup.string().required('Variable name is mandatory'),
    comparisionSymbol: Yup.string().required('Comparision symbol is mandatory'),
    value: Yup.string().required('Value is mandatory'),
})
