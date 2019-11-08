import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 400px;
    height: 200px;
    margin: 0 auto;
    padding: 18px;
    border-radius: 12px;
    background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    backface-visibility: hidden;
    transform: rotateX(0deg);
    position:absolute;
    z-index: 2;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export const BrandsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NumbersContainer = styled.div`
    border: 1px solid #ffffff;
    padding: 12px;
    width: 90%;
    border-radius: 12px;
`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
`;

export const Numbers = styled.div`
    display: flex;
`;

export const Number = styled.span`
    margin-right: ${({endBlock}) => endBlock ? '36px' : '8px'}
`;
