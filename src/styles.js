import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-width: 500px;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`
    background-color: #3A3A3A;
    width: 40%;
    padding: 10px;
    border-radius: 5px;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

