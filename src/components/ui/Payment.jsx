export  function Payment() {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between p-4 lg:p-8">
          
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-3xl font-bold">Pagar</h1>
        
        
        
        <div>
          <h2 className="text-xl font-semibold">Método de pago</h2>
          <div className="mt-4 space-y-4">
            <label className="flex items-center">
              <input type="radio" name="payment-method" className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" checked />
              <span className="ml-2 flex items-center">
                PSE
              </span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="payment-method" className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
              <span className="ml-2 flex items-center">
                Paypal
              </span>
            </label>
          </div>
        </div>
        
        
        <div>
          <h2 className="text-xl font-semibold">Detalles del pedido</h2>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span>Python Practicando. Desde 0 hasta Desarrollador en Python</span>
              </div>
              <div className="text-right">
                <span className="block text-zinc-500 line-through">229.900 COL$</span>
                <span className="block font-semibold">49.900 COL$</span>
              </div>
            </div>
          </div>
        </div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8 bg-zinc-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Resumen</h2>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span>Precio:</span>
                <span>Horas:</span>
                <span>429.800 COL$</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>99.800 COL$</span>
              </div>
            </div>
            <button className="mt-6 w-full bg-tertiary text-white py-2 rounded-lg font-semibold">Completar pago</button>
            <p className="mt-4 text-sm text-zinc-500">Al completar la compra, aceptas estas <a href="#" className="text-indigo-600">Condiciones de uso</a>.</p>
          </div>
        </div>
    )
}