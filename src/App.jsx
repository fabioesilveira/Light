import { useEffect, useState } from "react"

export default function App() {

  const cycle = {
    red: "green",
    yellow: "red",
    green: "yellow"
  }

  const [light, setLight] = useState("red")

  useEffect(() => {
    const interval = setInterval(() => {
      setLight((prev) => {
        console.log(prev)
       return cycle[prev]})
    }, 3000);
    console.log(interval)

    return () => clearInterval(interval)
  }, [])


  return (
    <>
      <div>
        <div style={{
          height: "180px",
          width: "60px",
          backgroundColor: "black",
          padding: "10px",
          borderRadius: "10px",
          display: "inline-block",
          marginLeft: "100px"
        }}>
          <div style={{
            height: "40px",
            width: "40px",
            backgroundColor: light === "red" ? "red" : "#555",
            margin: "10px auto",
            borderRadius: "50%"
          }} />
          <div style={{
            height: "40px",
            width: "40px",
            backgroundColor: light === "yellow" ? "yellow" : "#555",
            margin: "10px auto",
            borderRadius: "50%"
          }} />
          <div style={{
            height: "40px",
            width: "40px",
            backgroundColor: light === "green" ? "green" : "#555",
            margin: "10px auto",
            borderRadius: "50%"
          }} />

        </div>
      </div>
    </>
  )
}