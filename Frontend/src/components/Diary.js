const Diary = () => {
  return (
    <main className="container p-20 grid content-center justify-items-stretch">
      <h1 className='text-center underline font-bold text-5xl uppercase'>Diary</h1>


      <form action='' method="POST">
        <div className="mt-10">
          <label htmlFor=''>Date : 2023/07/06</label>
          <textarea className="text-black rounded mt-5 block w-full px-5 py-1 pb-20 text-sm bg-orange-100"></textarea>
        </div>

        <div className="mt-6">
          <label htmlFor=''>Date : 2023/07/06</label>
          <textarea className="text-black rounded mt-5 block w-full px-5 py-1 pb-20 text-sm bg-orange-100"></textarea>
        </div>
      </form>
    </main>
  )
} 

export default Diary