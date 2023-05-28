import styled from "styled-components";
import { ReactComponent as AddCircle } from "../../../../../assets/tasks/add-circle-fill.svg";
import { device } from "../../../../../globalStyles/Devices.util";

const AddIcon = styled(AddCircle)`
    @media ${device.mobileS}{
        width: 50px;
    }

    @media ${device.tablet}{
        width: 35px;
    }
`

export default AddIcon;