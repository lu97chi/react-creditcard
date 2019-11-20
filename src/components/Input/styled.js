import styled, {keyframes} from 'styled-components';

const BounceIn = keyframes`
    from,
    20%,
    40%,
    60%,
    80%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
  
    20% {
      transform: scale3d(1.1, 1.1, 1.1);
    }
  
    40% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
  
    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03);
    }
  
    80% {
      transform: scale3d(0.97, 0.97, 0.97);
    }
  
    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
`;


export const InputContainer = styled.div`
    display: flex; 
    flex-direction: column;
    margin-bottom: 18px;
    width: ${({width}) => width}%;
`;

export const Label = styled.label`
    color: #6D798C;
    font-size: 12px;
    font-weight: 500;
`;

export const CustomInput = styled.input`
    border-radius: 4px;
    border: none;
    padding: 8px;
    margin-top: 4px;
    border: .5px solid #A0A8B0;
    outline: none;
    background: transparent;
    transition: .3s ease all;
    &:focus{
        border: .5px solid #1890ff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)
    }
`;

export const CustomInputValue = styled.div`
    border-radius: 4px;
    border: none;
    padding: 0px 4px;
    vertical-align: center;
    display: flex;
    align-items: center;
    /* color: #ffffff; */
    margin-top: 4px;
    outline: none;
    background: transparent;
    transition: .3s ease all;
    height: 40px;
    border: 1px solid transparent;
`;

export const CustomSpan = styled.span`
    animation: ${BounceIn} 1s forwards;
    color: #ffffff;
`;


// export const InputText = styled.
