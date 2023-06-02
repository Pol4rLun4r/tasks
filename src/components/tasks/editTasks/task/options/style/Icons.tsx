import styled, { css } from "styled-components";
import { ReactComponent as EditIcon } from "../../../../../../assets/tasks/edit.svg";
import { ReactComponent as DeleteIcon } from "../../../../../../assets/tasks/delete-bin.svg";
import { device } from "../../../../../../globalStyles/Devices.util";

const svgStyles = () => {
    return css`

    @media ${device.mobileS}{
        width: 28px;
    }

    @media ${device.tablet}{
        width: 18px;
    }
    `
}

export const Edit = styled(EditIcon)`
    ${svgStyles()}
    margin-right: 3px;

    &:hover path {
        fill: #4380B0;
    }
`

export const Delete = styled(DeleteIcon)`
    ${svgStyles()}

    &:hover path {
        fill: #C83333;
    }
`