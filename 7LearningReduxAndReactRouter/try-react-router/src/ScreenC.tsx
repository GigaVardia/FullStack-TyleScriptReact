import React, {FC} from 'react';
import { useHistory, useParams } from 'react-router';

interface ScreenCProps {
    message: string;
    history: any;
    match: any;
}

const ScreenC: FC<ScreenCProps> = (props) => {
    const history = useHistory();
    const userid = useParams();
    const onClickGoBack = () => {
        history.goBack();
    }

    return (
    <div>
        <div>
            {"Your id is " + userid}
        </div>
        <div>
            {props.message}
        </div>
        <div>
            <button onClick={onClickGoBack}>Go Back</button>
        </div>
    </div>
    )
}

export default ScreenC;