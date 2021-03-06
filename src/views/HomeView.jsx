import React from 'react';
import FlexboxContainer from '../containers/Flexbox/FlexboxContainer';   
import Navigation from '../containers/Navigation/Nav'
import Matrix from '../containers/MobileFirst/Matrix';

// shared-understanding
const HomeView = () => (
    <React.Fragment>
        <Navigation />
        <Matrix />
        <FlexboxContainer />
    </React.Fragment>
);

export default HomeView;

// eof 
