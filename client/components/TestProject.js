import React from "react";

const TestProject = () => {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#ffcccc",
        padding: 3,
        marginBottom: 3,
        // marginTop: 3,
      }}
    >
      <p style={{ fontWeight: "bold", fontSize: 20 }}>
        Please keep in mind that this is a test project. This is not a real
        blood donor database. All data is automatically generated. If you want
        to donate blood navigate
        {/* <button
          style={{
            width: 50,
            height: 30,
            fontWeight: "bold",
            borderRadius: 10,
            backgroundColor: "#e60000",
            color: "white",
            marginLeft: 10,
          }}
        >
          here
        </button> */}
        {/* <a >here</a> */}
        <a href={"#bloodLinks"} style={{ marginLeft: 7 }}>
          here
        </a>
      </p>
    </div>
  );
};

export default TestProject;
