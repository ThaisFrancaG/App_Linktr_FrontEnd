import styled from "styled-components";

const CustomStyles = {
  content: {
    // position: "fixed",
    fontFamily: "Lato",
    width: "597px",
    height: "262px",
    fontSize: "34px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    backgroundColor: "#333333",
    borderRadius: "50px",
    marginRight: "-50%",
    transform: "translate(-50%,-50%)",
    color: "#FFFFFF",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  overlay: {
    zIndex: "10",
  },
};

const Form = styled.form`
  width: 300px;
  height: 37px;
  display: flex;
  justify-content: space-between;
`;

const Delete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1877f2;

  width: 134px;
  height: 37px;

  border: none;
  border-radius: 5px;

  font-size: 18px;
  font-weight: bold;

  color: #ffffff;

  cursor: pointer;
`;

const Cancel = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;

  width: 134px;
  height: 37px;

  border: none;
  border-radius: 5px;

  font-size: 18px;
  font-weight: bold;

  color: #1877f2;

  cursor: pointer;
`;

export { CustomStyles, Form, Cancel, Delete };
