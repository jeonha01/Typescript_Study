let direction: "left" | "right"; // 타입 대신 문자열
direction = "left";
direction = "right";

type Direction = "left" | "right";
type Margin = `margin-${Direction}`

let margin: Margin
margin = "margin-left"