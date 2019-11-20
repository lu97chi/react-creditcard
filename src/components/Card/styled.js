import styled, {keyframes} from 'styled-components';

export const CardContainer = styled.div`
    width: 400px;
    height: 200px;
    margin: 0 auto;
    padding: 18px;
    border-radius: 12px;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
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

export const SectionContainer = styled.div`
    border: 1px solid transparent;
    padding: 12px;
    width: ${({width}) => width}%;
    border-radius: 12px;
    font-size: 14px;
    color: #ffffff;
`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 0px;
    align-items: center;
`;

export const Numbers = styled.div`
    display: flex;
`;

export const Number = styled.span`
    margin-right: ${({endBlock}) => endBlock ? '36px' : '8px'};
    width: 100px;
`;

export const Divider = styled.div`
    font-size: 14px;
    color: #ffffff;
    padding-top: -6px;
    width: 0.5%;
`;

export const DivContainer = styled.div`
    display: flex;
    align-items: center; 
    width: ${({width}) => width}%;
`;

const fadeIn = keyframes`
    from {
    transform: translate3d(0, -5%, 0);
    visibility: visible;
    }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const ImageContainer = styled.div`
    width: 100px;
    height: 80px;
    z-index: 2;
    display: ${({display}) => display};
    transition: .1s ease all;
    animation: ${fadeIn} 1s ease forwards;
    padding: 0px 18px;
    justify-content: center;
    align-items: center;
    /* background-image: url(${({background}) => background}); */
`;

export const Image = styled.img`
    width: ${({width}) => width}px;
    height: ${({height}) => height}px;
    margin: auto;
`;
