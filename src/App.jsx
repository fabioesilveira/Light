import { useEffect, useState } from "react"

export default function Light() {

  const cycle = {
    red: "green",
    yellow: "red",
    green: "yellow"
  }

  const [light, setLight] = useState("red")

  useEffect(() => {
    const interval = setInterval(() => {
      setLight((prev) => cycle[prev])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div>
        <div style={{
          height: "180px",
          width: "80px",
          backgroundColor: "black",
          display: "inline-block",
          borderRadius: "10px"
        }}>
          <div
            style={{
              height: "40px",
              width: "40px",
              backgroundColor: light === "red" ? "red" : "#555",
              borderRadius: "50%",
              margin: "10px auto"
            }}
          />
          <div
            style={{
              height: "40px",
              width: "40px",
              backgroundColor: light === "yellow" ? "yellow" : "#555",
              borderRadius: "50%",
              margin: "10px auto"
            }}
          />
          <div
            style={{
              height: "40px",
              width: "40px",
              backgroundColor: light === "green" ? "green" : "#555",
              borderRadius: "50%",
              margin: "10px auto"
            }}
          />
        </div>
      </div>
    </>
  )
}