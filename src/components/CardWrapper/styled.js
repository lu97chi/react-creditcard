import styled from 'styled-components';

// card wrapper

export const CardContainer = styled.div`
    cursor: pointer;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    transform-style: preserve-3d;
    width: 436px;
    height: 200px;
`;

export const CardRelativeContainer = styled.div`
    perspective: 1000px;
    display: inline-block;
    display: flex; 
    justify-content: center;
    ${CardContainer}{
        transform:  ${({showBackground}) => showBackground ?
            'rotateY(180deg)' :'rotateY(0deg)'} ;
    }
`;
