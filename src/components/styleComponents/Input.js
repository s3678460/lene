import styled from "styled-components";

export default styled.input`
  font: inherit;
  width: 100%;
  border: 0;
  margin: 0;
  padding: 6px 0 7px;
  display: block;
  min-width: 0;
  box-sizing: content-box;
  font-family: Montserrat;
  line-height: 1.5em;
  background-image: none !important;
  color: rgb(153, 153, 153) !important;
  -webkit-tap-highlight-color: transparent;
  ::-webkit-input-placeholder {
    /* Edge */
    color: #e2e2e2;
  }

  :-ms-input-placeholder {
    /* Internet Explorer */
    color: #e2e2e2;
  }

  ::placeholder {
    color: #e2e2e2;
  }
`;
