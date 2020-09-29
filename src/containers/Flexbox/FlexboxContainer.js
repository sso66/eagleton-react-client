import React from 'react';
import { FlexboxItem, FlexboxItemGroup } from '../../components/FlexboxModule';

// separation-of-concerns
const FlexboxContainer = () =>
    (
        <React.Fragment>
            <FlexboxItem />
            {/* <FlexboxItemGroup /> */}
        </React.Fragment>
    )

export default FlexboxContainer;