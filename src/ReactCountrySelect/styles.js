import styled from "styled-components";

export const DropDownIconContainer = styled.span`
    display: flex;
    margin-right: 12px;
`;

export const CountryFlag = styled.img`
    display: block;
    width: 20px;
    height: 20px;
`;

export const SelectedValueContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const OptionContainer = styled(SelectedValueContainer)`
    padding: 10px 14px;
    &:hover {
        background: #F9FAFB;
    }
`;

export const OptionText = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #101828;
    display: flex;
    margin-left: 8px;
`;