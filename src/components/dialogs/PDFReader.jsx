export function PDFReader ({ children }) {
  return (
    <div className='fixed w-[100%] h-[100vh]  inset-0 bg-black/15 z-[200] flex justify-center items-center'>
      <section className='flex mb-auto  lg:w-[1600px] mx-8 flex-col rounded-lg bg-secondary shadow-2xl max-w-2xl md:max-w-4xl dark:bg-primary-dark absolute p-4'>
        {children}
      </section>
    </div>
  )
}
