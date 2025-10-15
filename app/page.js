'use client'

const Home = () => {
  const handleClick = async () => {
    // post请求，formData格式
    const formData = new FormData()
    formData.append("name", "John")
    formData.append("age", 30)
    const res = await fetch("/api", {
      method: "POST",
      body: formData
    })
    const data = await res.json()
    console.log(data)
  }
  return (
    <div>
      <button 
        onClick={handleClick}
        className="w-[150px] bg-green-600 text-white py-2 px-4 rounded-md mt-5 mx-auto block"
      >
        获取数据
      </button>
    </div> 
  )
}
export default Home