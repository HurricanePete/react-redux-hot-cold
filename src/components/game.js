import React from 'react';
import {connect} from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

import {newGame} from '../actions';
import {guess} from '../actions';

export class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    newGame() {
        this.props.dispatch(newGame());
    }

    guess(input) {
        this.props.dispatch(guess(input));
    }

    render() {
        return (
            <div>
                <Header onNewGame={() => this.newGame()}/>
                <GuessSection feedback={this.props.feedback}
                    onGuess={(guess) => this.guess(guess)} />
                <GuessCount count={this.props.guesses.length} />
                <GuessList guesses={this.props.guesses} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    feedback: state.feedback,
    guesses: state.guesses
});

export default connect(mapStateToProps)(Game);