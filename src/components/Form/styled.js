import styled from 'styled-components';

export const FormContainer = styled.div`
    margin-top: 15%;
`;

export const SubmitButton = styled.button`
    border: none;
    width: 100%;
    padding: 16px;
    text-align: center;
    border-radius: 8px;
    background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%);
    color: #ffffff;
    font-size: 16px;
    letter-spacing: 2px;
    transition: .3s ease all;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    &:hover{
        background: #ffffff;
        color: #495aff;
    }
`;
