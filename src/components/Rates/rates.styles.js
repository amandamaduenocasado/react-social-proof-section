
import styled from "styled-components";

const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F7F2F7;
    border-radius: 8px;
    padding-top: 16px;
    color: #512051;
    font-size: 17px;
    font-weight: 700;
    line-height: auto;
    height: 78px;

    @media screen and (width>1440px) {
		flex-direction: row;
        justify-content: space-between;
        padding: 20px 79px 20px 32px;
        height: 56px;
	}

`;
const StarsDiv = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 116.5px;
    height:15px;
    justify-content: space-between;
`;

const StyledBoxRates = styled.div`
    height: 266px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 49px;

    @media screen and (width>1440px) {
		width: 540px;
        height: 200px;
	}
`;

export {StyledMainDiv, StarsDiv, StyledBoxRates};
