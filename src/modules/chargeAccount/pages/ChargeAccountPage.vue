<template>
  <div class="flex flex-col justify-between h-full">
    <Navbar />
    <div class="container mx-auto my-10 flex justify-center">
      <Form
        :validation-schema="validationSchema"
        @submit="onSubmit"
        class="w-1/2"
      >
        <div class="space-y-12">
          <div class="pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">
              Detalles cuenta de cobro
            </h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">
              Especifique la información mínima requerida para generar una
              cuenta de cobro válida.
            </p>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label
                  for="charge_account_id"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Cuenta de Cobro No.</label
                >
                <div class="mt-2">
                  <Field
                    type="text"
                    name="charge_account_id"
                    :value="chargeAccountId"
                    readonly
                    class="h-10 bg-gray-50 border border-gray-300 text-gray-600 text-base rounded block w-full py-1 px-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                  <span class="text-red-500 text-sm"
                    ><ErrorMessage name="charge_account_id"></ErrorMessage
                  ></span>
                </div>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="date"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Fecha</label
                >
                <div class="mt-2">
                  <Field
                    type="date"
                    name="date"
                    class="h-10 border border-gray-300 text-gray-600 text-base rounded block w-full py-1 px-2 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                  <span class="text-red-500 text-sm"
                    ><ErrorMessage name="date"></ErrorMessage
                  ></span>
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="contractor_nit"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >NIT Contratante</label
                >
                <div class="mt-2">
                  <Field
                    type="text"
                    name="contractor_nit"
                    class="h-10 block w-full rounded border-0 py-1 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                  <span class="text-red-500 text-sm"
                    ><ErrorMessage name="contractor_nit"></ErrorMessage
                  ></span>
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="contractor_name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Nombre Contratante</label
                >
                <div class="mt-2">
                  <Field
                    type="text"
                    name="contractor_name"
                    class="h-10 block w-full rounded border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                  <span class="text-red-500 text-sm"
                    ><ErrorMessage name="contractor_name"></ErrorMessage
                  ></span>
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="builder_document_type"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Tipo Documento Contratista</label
                >
                <div class="mt-2">
                  <Field
                    class="h-10 border border-gray-300 text-gray-600 text-base rounded block w-full py-1 px-2 focus:outline-none"
                    name="builder_document_type"
                    as="select"
                  >
                    <option selected>Seleccione un tipo</option>
                    <option value="CC">Cédula</option>
                  </Field>
                  <span class="text-red-500 text-sm"
                    ><ErrorMessage name="builder_document_type"></ErrorMessage
                  ></span>
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="builder_id"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Identificación Contratista</label
                >
                <div class="mt-2">
                  <Field
                    type="text"
                    name="builder_id"
                    class="h-10 block w-full rounded border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                  <span class="text-red-500 text-sm"
                    ><ErrorMessage name="builder_id"></ErrorMessage
                  ></span>
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="builder_name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Nombre Contratista</label
                >
                <div class="mt-2">
                  <Field
                    type="text"
                    name="builder_name"
                    class="h-10 block w-full rounded border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                  <span class="text-red-500 text-sm"
                    ><ErrorMessage name="builder_name"></ErrorMessage
                  ></span>
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="total_value"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Valor a pagar ($)</label
                >
                <div class="mt-2">
                  <Field
                    type="text"
                    name="total_value"
                    class="h-10 block w-full rounded border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                  <span class="text-red-500 text-sm"
                    ><ErrorMessage name="total_value"></ErrorMessage
                  ></span>
                </div>
              </div>

              <div class="sm:col-span-6">
                <label
                  for="concept"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Concepto</label
                >
                <div class="mt-2">
                  <Field
                    type="text"
                    name="concept"
                    class="h-10 block w-full rounded border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                  <span class="text-red-500 text-sm"
                    ><ErrorMessage name="concept"></ErrorMessage
                  ></span>
                </div>
              </div>

              <div class="sm:col-span-6">
                <label
                  for="considerations"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Consideraciones</label
                >
                <div class="mt-2">
                  <ckeditor
                    :editor="editor"
                    v-model="considerations"
                  ></ckeditor>
                </div>
              </div>

              <div class="sm:col-span-6">
                <label
                  for="payment_conditions"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Condiciones de pago</label
                >
                <div class="mt-2">
                  <ckeditor :editor="editor" v-model="paymentConditions"></ckeditor>
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="details_activities"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Cargar Detalle de Actividades</label
                >
                <div
                  class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
                >
                  <div class="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="mx-auto h-12 w-12 text-gray-300"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>

                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        for="details_activities"
                        class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <Field
                          id="details_activities"
                          name="details_activities"
                          type="file"
                          class="sr-only"
                        />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs leading-5 text-gray-600">
                      CSV, XLSX up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="signature"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Cargar Firma</label
                >
                <div
                  class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
                >
                  <div class="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="mx-auto h-12 w-12 text-gray-300"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                      />
                    </svg>

                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        for="signature"
                        class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <Field
                          id="signature"
                          name="signature"
                          type="file"
                          class="sr-only"
                        />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            class="rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Generar Archivo
          </button>
        </div>
      </Form>
    </div>
    <Footer />
  </div>
</template>

<script lang="js">
import { defineComponent, defineAsyncComponent, ref } from 'vue'
import { Field, Form, ErrorMessage } from 'vee-validate'
import Swal from 'sweetalert2'
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'


import { validationSchema } from '@/modules/chargeAccount/schemas/validationSchema'

export default defineComponent({
    name: 'ChargeAccountPage',
    components: {
      Field,
      Form,
      ErrorMessage,
      ckeditor: CKEditor.component,
      Navbar: defineAsyncComponent(() => import('@/components/Navbar.vue')),
      Footer: defineAsyncComponent(() => import('@/components/Footer.vue'))
    },
    setup() {
      const chargeAccountId = ref(`CA${new Date().getTime().toString()}`);

      const considerations = ref()
      const paymentConditions = ref()

      const onSubmit = async(values) => {
        values.considerations = considerations.value
        values.payment_conditions = paymentConditions.value
        console.log(values);
        Swal.fire({
          icon: "success",
          title: "Perfecto!",
          text: "Cuenta de cobro generada correctamente",
        })
      }

      return {
        chargeAccountId,
        onSubmit,
        validationSchema,
        editor: ClassicEditor,
        considerations,
        paymentConditions
      }
    }
})
</script>
