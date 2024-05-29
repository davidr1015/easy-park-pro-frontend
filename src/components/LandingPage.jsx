export default function LandingPage() {
    return (
        <div className="min-h-screen bg-zinc-900 text-white">
          
          <nav className="flex items-center justify-between p-6">
            <div className="text-xl font-black">EasyPark PRO</div>
            <div className="space-x-4">
              <a href="#" className="bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200">Iniciar sesión</a>
            </div>
          </nav>
          
          <section style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1643980961390-8382f8b46c43?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
          }} className="relative h-screen bg-cover bg-center" >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
              <h1 className="text-5xl font-bold max-w-4xl">Bienvenidos a EasyPark Pro <br /> <span className="text-2xl">Tu Solución de Parqueo en Colombia</span></h1>
              <button className="mt-6 bg-white text-black px-6 py-3 rounded-full hover:bg-zinc-200">ENCUENTRA TU PARQUEADERO</button>
            </div>
          </section>
          
          <section className="p-12 bg-zinc-800">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4 uppercase">Encuentra y Reserva tu Parqueadero en Minutos</h2>
              <p className="text-lg mb-8 text-white/80">¿Cansado de dar vueltas buscando un lugar para parquear? ParqueaFácil es tu aliado ideal para encontrar el parqueadero perfecto en cualquier ciudad de Colombia. Con nuestra plataforma avanzada, podrás localizar y reservar un espacio de parqueo en tiempo real, asegurándote una experiencia cómoda y sin estrés.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img src="https://images.unsplash.com/photo-1685910944112-202e0afb36d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxwYXJxdWVhZGVyb3xlbnwwfHwwfHx8MA%3D%3D" alt="Adventure Image 1" className="rounded-lg w-[600px] h-[300px] object-cover" />
                <img src="https://images.unsplash.com/photo-1526626607369-f89fe1ed77a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Adventure Image 2" className="rounded-lg w-[600px] h-[300px] object-cover" />
              </div>
            </div>
          </section>
          
          <footer className="p-4 bg-zinc-900 text-center text-sm uppercase font-black">
          Más fácil que nunca: Encuentra, reserva y parquéate.
          </footer>


        <div className="py-12 bg-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white">¿Por Qué Elegir EasyPark PRO?</h2>
             
            </div>
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <p className="text-lg leading-6 font-medium text-zinc-900 dark:text-white">Búsqueda Rápida y Eficiente</p>
                  </dt>
                  <dd className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
                  Nuestra aplicación te permite buscar parqueaderos disponibles cerca de tu ubicación o en tu destino final con tan solo unos clics.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <p className="text-lg leading-6 font-medium text-zinc-900 dark:text-white">Reservas en Tiempo Real</p>
                  </dt>
                  <dd className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
                  Garantiza tu espacio antes de llegar. No más vueltas innecesarias ni pérdida de tiempo.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <p className="text-lg leading-6 font-medium text-zinc-900 dark:text-white">Pagos Sin Contacto</p>
                  </dt>
                  <dd className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
                  Paga de manera segura y conveniente desde tu celular. Aceptamos múltiples métodos de pago, incluyendo tarjetas de crédito, débito y billeteras electrónicas.
                  </dd>
                  
                </div>
                <div className="relative">
                  <dt>
                    <p className="text-lg leading-6 font-medium text-zinc-900 dark:text-white">Beneficios Exclusivos</p>
                  </dt>
                  <dd className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
                  Accede a descuentos y promociones especiales al utilizar nuestra plataforma regularmente.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-zinc-100 dark:bg-zinc-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white dark:bg-zinc-900 shadow-xl rounded-lg overflow-hidden">
              <img className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Insurance Innovation" />
              <div className="absolute inset-0 bg-zinc-900 bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h3 className="text-2xl font-bold">Con EasyPark Pro, tu parqueadero está siempre a un clic de distancia.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
    )
}