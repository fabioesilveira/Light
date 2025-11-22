import { useEffect, useState } from "react"

export default function App() {
  
  const cycle = {
    red: "green",
    yellow: "red",
    green: "yellow"
  }

  const [light, setLight] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setLight((prev) => cycle[prev])
    }, 2000);
    return() => clearInterval(interval)
  }, [])
   
  
  return (
    <>
      <div style={{
        height: "800px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div
          style={{
            height: "200px",
            width: "60px",
            backgroundColor: "black",
            borderRadius: "8px",
            display: "inline-block",
            padding: "22px"
          }}
        >
          <div style={{
            height: "60px",
            width: "60px",
            borderRadius: "50%",
            backgroundColor: light === "red" ? "red" : "rgb(71, 66, 66)",
            marginBottom: "10px"
          }} />
          <div style={{
            height: "60px",
            width: "60px",
            borderRadius: "50%",
            backgroundColor: light === "yellow" ? "yellow" : "rgb(71, 66, 66)",
            marginBottom: "10px"
          }} />
          <div style={{
            height: "60px",
            width: "60px",
            borderRadius: "50%",
            backgroundColor: light === "green" ? "green" : "rgb(71, 66, 66)",
          }} />
        </div>
      </div>
    </>
  )
}