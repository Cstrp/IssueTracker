import { FieldProps } from 'formik'

export const TextField = ({ form, field, ...props }: FieldProps) => {
  return (
    <>
      <input {...form} {...field} {...props} className={'px-2 rounded'} />
    </>
  )
}
