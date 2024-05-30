import { Controller } from "react-hook-form";
import { useSignup } from "../signup/hooks/useSignup";
import { FloatingInput } from "../../components";

export function NewCar() {
    const { user, onSubmit, resetStatus, formState } = useSignup()
    const { control, handleSubmit, errors, watch } = formState
  return (
    <>
      <h2 className="mb-4 text-lg font-semibold">Nuevo Carro</h2>
      <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete='off'
            className='grid grid-cols-1 gap-3'
          >

            <div className='mt-3 grid md:grid-cols-2 gap-3'>
              <Controller
                control={control}
                name='marca'
                rules={{
                  required: 'Este campo es requerido'
                }}
                render={({ field: { value, onChange } }) => (
                  <FloatingInput
                    type='text'
                    label='Marca'
                    value={value}
                    onValueChange={onChange}
                    color={errors.marca && 'error'}
                    helperText={errors?.marca?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name='modelo'
                rules={{
                  required: 'Este campo es requerido'
                }}
                render={({ field: { value, onChange } }) => (
                  <FloatingInput
                    type='text'
                    label='Modelo'
                    value={value.toUpperCase()}
                    onValueChange={onChange}
                    color={errors.modelo && 'error'}
                    helperText={errors?.modelo?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name='anio'
                rules={{
                  required: 'Este campo es requerido'
                }}
                render={({ field: { value, onChange } }) => (
                  <FloatingInput
                    type='number'
                    label='Año de fabricación'
                    value={value.toUpperCase()}
                    onValueChange={onChange}
                    color={errors.apellido && 'error'}
                    helperText={errors?.apellido?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name='color'
                rules={{
                  required: 'Este campo es requerido'
                }}
                render={({ field: { value, onChange } }) => (
                  <FloatingInput
                    type='text'
                    label='Color'
                    value={value}
                    onValueChange={onChange}
                    color={errors.correo && 'error'}
                    helperText={errors?.correo?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name='placa'
                rules={{
                  required: 'Este campo es requerido'
                }}
                render={({ field: { value, onChange } }) => (
                  <FloatingInput
                    type='text'
                    label='Placa'
                    value={value}
                    onValueChange={onChange}
                    color={errors.placa && 'error'}
                    helperText={errors?.placa?.message}
                  />
                )}
              />

            </div>


            <button
              className='w-full bg-tertiary col-span-1  text-white rounded-lg py-1 px-3'
              type='submit'
            >
              Registrar
            </button>
          </form>
    </>
  );
}
