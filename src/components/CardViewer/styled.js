import styled from 'styled-components';

export const Container = styled.div`
background: #ffffff;
width: 500px;
height: 550px;
border-radius: 12px;
padding: 18px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
padding-top: 2%;
`;

export const ActiveBorder = styled.div`
    position: absolute;
    transition: .3s ease all;
    border: 1px solid ${({validation}) => validation ? '#ffffff' : 'red'};
    border-radius: 8px;
    top: ${({cordenates}) => `${cordenates[0]}px`};
    left: ${({cordenates}) => `${cordenates[1]}px`};
    width:  ${({cordenates}) => `${cordenates[2]}px`};
    height:  ${({cordenates}) => `${cordenates[3]}px`};
`;


/* top: ${({cordenates}) => `${cordenates[0]}px`};
    left: ${({cordenates}) => `${cordenates[1]}px`}; */
