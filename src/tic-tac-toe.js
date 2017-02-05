class TicTacToe {
    constructor() {
        this.player = 'x';
        this.field = [
            null, null, null,
            null, null, null,
            null, null, null,
        ];
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if(!this.field[rowIndex * 3 + columnIndex]) {
            this.field[rowIndex * 3 + columnIndex] = this.player;
            this.player = this.player == 'o' ? 'x' : 'o';
        }
    }

    isFinished() {
        return this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        // row 1
        if(this.field[0] == this.field[1] && this.field[1] == this.field[2]) {
            return this.field[0];
        // row 2
        } else if(this.field[3] == this.field[4] && this.field[4] == this.field[5]) {
            return this.field[3];
        // row 3
        } else if(this.field[6] == this.field[7] && this.field[7] == this.field[8]) {
            return this.field[6];
        // col 1
        } else if(this.field[0] == this.field[3] && this.field[3] == this.field[6]) {
            return this.field[0];
        // col 2
        } else if(this.field[1] == this.field[4] && this.field[4] == this.field[7]) {
            return this.field[1];
        // col 3
        } else if(this.field[2] == this.field[5] && this.field[5] == this.field[8]) {
            return this.field[2];
        // diag 1
        } else if(this.field[0] == this.field[4] && this.field[4] == this.field[8]) {
            return this.field[0];
        // diag 2
        } else if(this.field[2] == this.field[4] && this.field[4] == this.field[6]) {
            return this.field[2];
        } else {
            return null;
        }
    }

    noMoreTurns() {
        return (this.field[0] && this.field[1] && this.field[2]
            && this.field[3] && this.field[4] && this.field[5]
            && this.field[6] && this.field[7] && this.field[8]);
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex * 3 + colIndex];
    }
}

module.exports = TicTacToe;
