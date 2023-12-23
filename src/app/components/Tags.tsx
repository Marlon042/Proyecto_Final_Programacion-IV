import Image from 'next/image';

const Tags: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 md:w-1/5">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-32 md:h-24 w-full object-cover object-center"
                src="/breaks.png"
                alt="breaks-img"
                width={200}
                height={200}
              />
              <div className="p-4">
                <h2 className="text-xs text-gray-400 mb-1">Categoria</h2>
                <h1 className="text-lg font-medium text-gray-900 mb-3">Frenos</h1>
                <p className="leading-relaxed mb-3">
                  Cada 2 días es recomendable revisar este apartado
                </p>
              </div>
            </div>
          </div>

          <div className="p-2 md:w-1/5">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-32 md:h-24 w-full object-cover object-center"
                src="/oil.png"
                alt="blog"
                width={200}
                height={200}
              />
              <div className="p-4">
                <h2 className="text-xs text-gray-400 mb-1">Categoria</h2>
                <h1 className="text-lg font-medium text-gray-900 mb-3">Aceite</h1>
                <p className="leading-relaxed mb-3">
                  Recomendable cambiar cada 1000 KM
                </p>
              </div>
            </div>
          </div>

          <div className="p-2 md:w-1/5">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-32 md:h-24 w-full object-cover object-center"
                src="/tire-pressure.png"
                alt="blog"
                width={100}
                height={100}
              />
              <div className="p-4">
                <h2 className="text-xs text-gray-400 mb-1">
                  Categoria
                </h2>
                <h1 className="text-lg font-medium text-gray-900 mb-3">
                  Neumatico
                </h1>
                <p className="leading-relaxed mb-3">
                  Recomendable revisar todos los dias & cambiar 1 vez al mes
                </p>
              </div>
            </div>
          </div>

          <div className="p-2 md:w-1/5">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-32 md:h-24 w-full object-cover object-center"
                src="/battery.png"
                alt="blog"
                width={200}
                height={200}
              />
              <div className="p-4">
                <h2 className="text-xs text-gray-400 mb-1">
                  Categoria
                </h2>
                <h1 className="text-lg font-medium text-gray-900 mb-3">
                  Batería
                </h1>
                <p className="leading-relaxed mb-3">
                  Recomendable cambiar cada 3-5 años
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tags;
