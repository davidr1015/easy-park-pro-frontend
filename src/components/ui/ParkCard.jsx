export  function ParkCard() {
    return (
        <div className="bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-4 mx-auto max-w-md">
            <img src="https://placehold.co/300x200" alt="Park Lot" className="w-full h-40 object-cover rounded-lg" />
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">Park Lot Name</h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">123 Address St, City, Country</p>

                <p className="text-sm text-zinc-600 dark:text-zinc-400"><strong>Lugares disponibles:</strong> 50</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400"><strong>Costo:</strong> $5/hora</p>

                <button className="w-full py-2 bg-tertiary rounded-lg mt-4 text-white">Apartar</button>
            </div>
        </div>
    )
}