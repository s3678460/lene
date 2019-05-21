import styled from "styled-components";

export default styled.button`
  padding: 10px 30px;
  margin-top: 20px;
  color: #fff;
 
  box-shadow: 0px 2px 1px 0 rgba(0, 159, 219, 0.3);
  border-radius: 3px;
  background-color: rgba(0, 159, 219, 1);
  
  border: none;
  margin: .3125rem 1px;
  cursor: pointer;
  
  position: relative;
  min-width: auto;
  font-size: 14px;
  
  min-height: auto;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  font-family: Montserrat, sans-serif;
  line-height: 1.5;
  will-change: box-shadow, transform;
  white-space: nowrap;
  touch-action: manipulation;
  border-radius: 3px;
  letter-spacing: 0;
  text-transform: none !important;
  vertical-align: middle;

  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-writing-mode: horizontal-tb !important;

  &:hover {
    box-shadow: 0 0 11px rgba(0,159,218);   }
  
`;
