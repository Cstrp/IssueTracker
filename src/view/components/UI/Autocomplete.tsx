import { FieldProps, getIn } from 'formik'

export const Autocomplete = ({ form, field, ...props }: FieldProps) => {
  const getErrorMessage = getIn(form.touched, field.name) && getIn(form.errors, field.name)

  return (
    <>
      <input {...form} {...field} {...props} className={'px-2 rounded'} />
      <span>{getErrorMessage}</span>
    </>
  )
}
