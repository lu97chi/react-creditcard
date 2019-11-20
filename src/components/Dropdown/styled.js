import styled from 'styled-components';

export const DropdownContainer = styled.div`
    display: flex; 
    flex-direction: column;
    margin-bottom: 18px;
    width: ${({width}) => width}%;
    position: relative;
`;

export const SelectSelected = styled.div`
    width: 100%;
    color: #6D798C;
    cursor: pointer;
`;

// active #1890ff
export const SelectSelectedContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: .5px solid ${({border}) => border ? '#1890ff' : '#6D798C'};
    padding: 5px 8px;
    transition: .3s ease all;
    border-radius: 4px;
    margin-top: 4px;
`;

export const Options = styled.div`
    background-color: #ffffff;
    overflow-y: auto;
    position: absolute;
    width: 100%;
    top: 52px;
    height: ${({height}) => height};
    transition: .3s ease all;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export const Option = styled.p`
    margin:0;
    padding: 8px 4px;
    text-align: center;
    cursor: pointer;
    transition: .3s ease all;
    &:hover {
        background-color: #F5F5F6;
    }
`;
