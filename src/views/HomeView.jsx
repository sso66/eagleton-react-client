import React from 'react';
import FlexModule from '../containers/FlexboxContainer';
import Navigation from '../components/Nav/Navigation'
import MobileFirst from '../components/Mobile/MobileFirst';

const HomeView = () => (
    <React.Fragment>
        <Navigation />
        <MobileFirst />
        <FlexModule />
    </React.Fragment>
);

export default HomeView;
