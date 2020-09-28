import React from 'react';
import FlexModule from '../containers/FlexboxContainer';
import Navigation from '../components/Navigation/Nav'
import Matrix from '../components/MobileFirst/Matrix';

const HomeView = () => (
    <React.Fragment>
        <Navigation />
        <Matrix />
        {/* <FlexModule /> */}
    </React.Fragment>
);

export default HomeView;
