import { Field, Form, Formik, FormikHelpers } from 'formik'
import { FormValues } from '../../../data/types'
import { useEffect, useState } from 'react'
import { AutoComplete, Input } from 'antd'

export const SearchPanel = () => {
  const [languages, setLanguages] = useState<string[]>([])
  const [values, setValues] = useState<FormValues>({ label: '', language: '' })

  const onSubmit = (values: FormValues, helpers: FormikHelpers<FormValues>) => {
    setValues(values)
    helpers.resetForm()
  }

  useEffect(() => {
    // getLanguages().then((res) => {
    //   setLanguages(res!)
    // })
  }, [])

  return (
    <>
      <Formik initialValues={values} onSubmit={onSubmit}>
        {(f) => (
          <Form className={'py-10 flex flex-col gap-5'}>
            <Field name={'language'} component={AutoComplete} options={languages} />
            <Field name={'label'} component={Input} />
            <button type={'submit'} className={'hidden'} disabled={f.isSubmitting} />
          </Form>
        )}
      </Formik>
    </>
  )
}
