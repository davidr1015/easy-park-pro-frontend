export default function NewPark() {
    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg dark:bg-zinc-800">
            <h2 className="text-lg font-semibold mb-4">Mi parqueadero</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 dark:bg-zinc-700 dark:text-zinc-200" />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Address</label>
                    <input type="text" id="address" name="address" className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 dark:bg-zinc-700 dark:text-zinc-200" />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Telephone Number</label>
                    <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 dark:bg-zinc-700 dark:text-zinc-200" />
                </div>
                <div className="mb-4">
                    <label htmlFor="spaces" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Number of Spaces Available</label>
                    <input type="number" id="spaces" name="spaces" className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 dark:bg-zinc-700 dark:text-zinc-200" />
                </div>
                <div className="mb-4">
                    <label htmlFor="cost" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Cost Per Hour</label>
                    <input type="text" id="cost" name="cost" className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 dark:bg-zinc-700 dark:text-zinc-200" />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 dark:bg-zinc-600 dark:hover:bg-zinc-700">Submit</button>
            </form>
        </div>
    )
}