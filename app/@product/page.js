'use client'
// const getData = async () => {
//   await new Promise(resolve => setTimeout(resolve, 3000))
//   return {
//     message: 'Hello message'
//   }
// }
const Product = async () => {
  // const { message } = await getData()
  return (
    <div className="h-60 flex-1 rounded-xl bg-cyan-500 text-white flex items-center justify-center">
      Hello, Product!
    </div>
  )
}
export default Product