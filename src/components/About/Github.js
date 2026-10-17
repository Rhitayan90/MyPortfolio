import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        I think i can explain <strong className="purple">Myself</strong>
      </h1>
      
    </Row>
  );
}

export default Github;
