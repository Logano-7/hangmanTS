import './hangmanDrawing.css'

const HEAD = (
    <div className="headDiv"/>
  )
  
  const BODY = (
    <div className="bodyDiv"/>
  )
  
  const RIGHT_ARM = (
    <div className="rightArmDiv"/>
  )
  
  const LEFT_ARM = (
    <div className="leftArmDiv"/>
  )
  
  const RIGHT_LEG = (
    <div className="rightLegDiv"/>
  )
  
  const LEFT_LEG = (
    <div className="leftLegDiv"/>
  )
  
  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]
  
  type HangmanDrawingProps = {
    numberOfGuesses: number
  }
  
  export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
      <div style={{ position: "relative" }}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div
          style={{
            height: "50px",
            width: "10px",
            background: "black",
            position: "absolute",
            top: 0,
            right: 0,
          }}
        />
        <div
          style={{
            height: "10px",
            width: "200px",
            background: "black",
            marginLeft: "120px",
          }}
        />
        <div
          style={{
            height: "400px",
            width: "10px",
            background: "black",
            marginLeft: "120px",
          }}
        />
        <div style={{ height: "10px", width: "250px", background: "black" }} />
      </div>
    )
  }