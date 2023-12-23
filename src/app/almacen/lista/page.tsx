"use client"
import React from 'react';

const AlmacenFormulario = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Categorías de repuestos</h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Bienvenido a nuestra página de categorías de repuestos para buses. Aquí encontrarás una amplia selección de repuestos de alta calidad para mantener los buses en excelente estado y en pleno funcionamiento.</p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            
            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">CATEGORIA 1</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Repuestos del motor</h2>
            <p className="leading-relaxed text-base">amplia gama de piezas y componentes esenciales para el motor de tu bus. Desde filtros de aire y aceite hasta bujías, inyectores de combustible y válvulas, nuestros repuestos del motor garantizan un rendimiento óptimo y una larga vida útil para tu vehículo.</p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
           
            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">CATEGORIA 2</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Repuestos de la carrocería:</h2>
            <p className="leading-relaxed text-base"> Mantén la apariencia y la integridad estructural de tus buses con nuestros repuestos de carrocería. Aquí encontrarás paneles, parachoques, espejos retrovisores, vidrios y otros componentes necesarios para mantener la carrocería de tus buses en excelente estado. También ofrecemos una variedad de llantas de calidad para asegurar un desempeño seguro y eficiente en la carretera.</p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
           
            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">CATEGORIA 3</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Repuestos de la transmisión</h2>
            <p className="leading-relaxed text-base">Optimiza el rendimiento de tu bus con nuestros repuestos de transmisión. Encuentra embragues, discos de embrague, volantes de inercia y más para mantener una transmisión eficiente y confiable, garantizando cambios suaves y precisos en la carretera.</p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
          {/*  <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />*/}
            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">CATEGORIA 4</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Repuestos eléctricos y electrónicos</h2>
            <p className="leading-relaxed text-base">Nuestra categoría de repuestos eléctricos y electrónicos abarca desde baterías y alternadores hasta luces, sensores y módulos de control. Con estos repuestos, podrás mantener todos los sistemas eléctricos de tu bus en perfecto estado de funcionamiento.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  
  );
};

export default AlmacenFormulario;