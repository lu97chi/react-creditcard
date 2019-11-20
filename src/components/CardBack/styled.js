import styled from 'styled-components';
// import Background from '../../assets/background'

export const CardContainer = styled.div`
    width: 436px;
    height: 200px;
    margin: 0 auto;
    border-radius: 12px;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 18px 0;
    position:absolute;
    backface-visibility: hidden;
    transform: rotateX(0deg);
    transform: rotateY(180deg);
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export const Band = styled.div`
height: 30px;
width: 100%;
background-color: #000000;

`;

export const CCVContainer = styled.div`
    padding: 18px;
    text-align: right;
`;

export const CCV = styled.div`
    width: 100%;
    height: 48px;
    background-color: #FFFFFF;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
