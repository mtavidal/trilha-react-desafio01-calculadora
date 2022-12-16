import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    
    background-color: #AAAAFF;
    margin:1.5px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-radius: 10px;
    border:outset;
    font-size: 24px;
    font-family: 'Roboto';
      
    input {
        width: 100%;
        height: 75px;
        background-color: #93C395;
        border: inset;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        font-size: 26px;
        font-family: 'Verdana';
        color: #000000;
        text-align: right;
        border-radius: 8px;
       
        
    }
`