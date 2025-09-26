export default function Layout({ children }) {
  return (
    <div>
      <h2> This is public part </h2>
      {children}
    </div>
  )
}