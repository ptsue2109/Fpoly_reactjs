import { useState } from 'react'
import { Button } from 'antd';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Button type="primary">Primary Button</Button>
    </>
  )
}

export default App
