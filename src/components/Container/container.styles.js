import styled from "styled-components";

// Contenedor grande general
const StyledBox = styled.div`
    padding: 24px;
    background-image: url('public/assets/images/bg-pattern-top-mobile.svg');
    background-repeat: no-repeat;

    @media screen and (width>1440px) {
		padding: 118px 165px 100px 165px;
        background-image: url('public/assets/images/bg-pattern-top-desktop.svg');
        background-repeat: no-repeat;
	}

`;

// Caja de estrellas
const StyledInfoBox = styled.div`
    @media screen and (width>1440px) {
		display: flex;
        justify-content: space-between;
        margin-bottom: 71px;
	}
`;

// Caja con título y subtítulo
const StyledTextBox = styled.div`
    @media screen and (width>1440px) {
        display: flex;
        flex-direction: column;
        width: 445px;
        height: 245px;
    }
`
export {StyledBox,StyledInfoBox,StyledTextBox};