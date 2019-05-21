import styled from "styled-components";

export default styled.div`
  position: absolute;
  height: 280px;
  width: 430px;
  font-family: Helvetica;

  top: calc(50% - 150px);
  left: calc(50% - 215px);
  padding: 30px 0px;

  border-radius: 16px;
  background: white;
  background-clip: padding-box;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  background: #fff;
  color: rgba(0, 0, 0, 0.87);
  margin: 25px 0;
  display: inline-block;

  @media (max-width: 560px) {
    height: 280px;
    width: 300px;
    top: calc(50% - 160px);
    left: calc(50% - 150px);
  }
`;
