
import { redirect } from 'next/navigation'

const Home = () => {
  // Server Action - 在服务端处理表单提交
  async function goToProduct() {
    'use server'
    redirect('/product')
  }

  return (
    <form action={goToProduct} className="flex justify-center mt-10">
      <button 
        type="submit"
        className='bg-blue-500 text-white px-4 py-2 rounded-md'
      >
        Go to Product
      </button>
    </form>
  )
}

export default Home