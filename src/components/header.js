import React from 'react';
import {connect} from 'react-redux';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

import {infoToggle} from '../actions';

export class Header extends React.Component  {
    constructor(props) {
        super(props);
    }

    toggleInfoModal() {
        this.props.dispatch(infoToggle());
    }

    render() {
        let infoModal;
        if (this.props.showInfoModal) {
            infoModal = <InfoModal onClose={() => this.toggleInfoModal()} />;
        }

        return (
            <header>
                <TopNav onInfo={() => this.toggleInfoModal()}
                    onNewGame={this.props.onNewGame} />
                {infoModal}
                <h1>HOT or COLD</h1>
            </header>
        );
    }
};

const mapStateToProps = state => ({
    showInfoModal: state.showInfoModal  
});

export default connect(mapStateToProps)(Header);