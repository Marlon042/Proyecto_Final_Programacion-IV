"use client"
import { useForm } from "react-hook-form";

type FormValues = {
  id_unidad: number;
  categoria: string;
  costo: string;
  cantidad: number;
  estado: string;
};

type UnitsFormProps = {
  onSubmitForm: (data: FormValues) => void;
  initialValues?: FormValues | undefined;
};

export default function UnitsForm({ onSubmitForm, initialValues }: UnitsFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>({
    defaultValues: initialValues
  });

  const handleFormSubmit = (data: FormValues) => {
    onSubmitForm(data);
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="space-y-6 p-6 rounded shadow-md w-96"
        style={{ backgroundColor: "rgb(60, 110, 113)" }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Registro de Repuestos</h2>
        {/* Id Unidad */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-dark">
            Nombre
          </label>
          <input
            {...register("id_unidad", { required: true })}
            placeholder="John Smith"
            className="mt-1 block w-full rounded-md border-gray-dark shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
          {errors.id_unidad && (
            <span className="text-red-500 text-xs">
              Este campo es requerido
            </span>
          )}
        </div>

        {/* Categoria */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-dark">
            Categoria
          </label>
          <input
            {...register("categoria", { required: true })}
            placeholder="Categoria"
            className="mt-1 block w-full rounded-md border-gray-dark shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
          {errors.categoria && (
            <span className="text-red-500 text-xs">
              Este campo es requerido
            </span>
          )}
        </div>

        {/* Costo */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-dark">
            Costo
          </label>
          <input
            {...register("costo", { required: true })}
            placeholder="Costo Unitario"
            className="mt-1 block w-full rounded-md border-gray-dark shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
          {errors.costo && (
            <span className="text-red-500 text-xs">
              Este campo es requerido
            </span>
          )}
        </div>


        {/* Cantidad */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-dark">
            Cantidad Disponible
          </label>
          <input
            {...register("cantidad", { required: true })}
            placeholder="Cantidad Disponible"
            className="mt-1 block w-full rounded-md border-gray-dark shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
          {errors.cantidad && (
            <span className="text-red-500 text-xs">
              Este campo es requerido
            </span>
          )}
        </div>

       
      

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            {initialValues ? 'Actualizar' : 'Registrar'}
          </button>
        </div>
      </form>
    </div>
  );
}
