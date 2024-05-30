export default function CarCard() {
    return (
        
            <div className="bg-white dark:bg-zinc-800 shadow-lg rounded-lg overflow-hidden max-w-xs mx-4 my-4">
                <img src="https://placehold.co/300x200" alt="Car" className="w-full" />
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">Car Name</h2>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">FHE-30S4</p>
                    <div className="flex justify-end gap-3 items-center mt-4">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-lg">Editar</button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded-lg">Eliminar</button>
                    </div>
                </div>
            </div>
    )
}