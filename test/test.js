var assert = chai.assert;

//object to get ui elements on test html when needed
var ui = {
  resetButton: document.getElementById('reset-btn'),
  messageWindow: document.getElementById('message-display'),
};


//utility function for tests
function setBoard(board){
  var gameBoard = game.getBoard();
  for(let row = 0; row < gameBoard.length; row++){
    for(let column = 0; column < gameBoard[row].length; column++){
      gameBoard[row][column] = board[row][column];
    }
  }
}

function clearBoard(){
  var board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  setBoard(board);
}


describe('Array', function() {
  it('should start empty', function(){
    var arr = [];
    assert.equal(arr.length, 0);
  });
});
//*****************************************************************************/
//GAME MODULE TESTS
//*****************************************************************************/
describe('GAME MODULE:', function(){
  describe('METHOD: start()', function(){
    it('should actually write this test', function(){
      assert.isOk(false);
    });
  });
  describe('METHOD: reset()', function(){
    it('should reset board to empty:', function(){
      clearBoard();
      game.setBoardCell({row: 1, column: 1, piece: 'X', id: '1x1'});
      game.reset();
      assert.deepEqual(game.getBoard(), [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ]
      );
    });
    it('should clear UI board', function(){
      assert.isOk(false);
    });
    it('should clear UI message window', function(){
      assert.isOk(false);
    });
    it('should reset game state', function(){
      assert.equal(game.isPlayerTurn(), true);
      assert.equal(game.getGameOver(), false);
      assert.equal(game.getTurn(), 1);
    });
  });
  describe('METHOD: update(square)', function(){
    it('should actually write this test', function(){
      clearBoard();
      assert.isOk(false);
    });
  });
  describe('METHOD: determineGameState(move)', function(){
    it('should actually write this test', function(){
      clearBoard();
      assert.isOk(false);
    });
  });
  describe('METHOD: makeMove(move)', function(){
    it('succesfully makes move', function(){
      clearBoard();
      var move = {row: 1, column: 2, piece: 'X', id: '1x2'};
      var success = game.makeMove(move);
      var square = document.getElementById(move.id);
      var board = game.getBoard();
      assert.isOk(success);
    });
    it('square shows correct piece', function(){
      clearBoard();
      var move = {row: 1, column: 2, piece: 'X', id: '1x2'};
      var success = game.makeMove(move);
      var square = document.getElementById(move.id);
      var board = game.getBoard();
      assert.equal(square.innerHTML, 'X');
    });
    it('board array updates correctly', function(){
      clearBoard();
      var move = {row: 1, column: 2, piece: 'X', id: '1x2'};
      var success = game.makeMove(move);
      var square = document.getElementById(move.id);
      var board = game.getBoard();
      assert.equal(board[move.row-1][move.column-1], move.piece);
    });
    it('does not make moves outside of board', function(){
      clearBoard();
      var success = game.makeMove({row: 5, column: 2, piece: 'X', id: '5x2'});
      assert.isNotOk(success);
      success = game.makeMove({row: 1, column: 10, piece: 'X', id: '1x10'});
      assert.isNotOk(success);
    });
  });
  describe('METHOD: aiPlayerMove()', function(){
    clearBoard();
    it('need to write test', function(){
      assert.isOk(false);
    });
  });
  describe('METHOD: getMoveScore(move)', function(){
    clearBoard();
    it('need to write test', function(){
      assert.isOk(false);
    });
  });
  describe('METHOD: isMoveValid(move)', function(){
    clearBoard();
    it('returns invalid for move to occupied square', function(){
      game.board[0][0] = 'O';
      assert.isNotOk(game.isMoveValid({row: 1, column: 1, piece: 'X', id: '1x1'}));
    });
    it('returns valid for move to unoccupied square', function(){
      clearBoard();
      assert.isOk(game.isMoveValid({row: 1, column: 2, piece: 'X', id: '1x2'}));
    });
  });
  describe('METHOD: isWin', function() {
    it('should not show a win condition', function(){
      clearBoard();
      var currentMove = {row: 1, column:3, piece: 'X', id: '1x3'};
      var board = [
        ["", "O", "X"],
        ["", "X", ""],
        ["", "", ""]
      ];
      setBoard(board);
      assert.isNotOk(game.isWin(currentMove));
    });
    it('should show a win condition - row', function(){
      clearBoard();
      var currentMove = {row: 1, column:3, piece: 'X', id: '1x3'};
      var board = [
        ["X", "X", "X"],
        ["", "O", ""],
        ["O", "", ""]
      ];
      setBoard(board);
      assert.isOk(game.isWin(currentMove));
    });
    it('should show a win condition - column', function(){
      clearBoard();
      var currentMove = {row: 1, column:3, piece: 'X', id: '1x3'};
      var board = [
        ["", "", "X"],
        ["", "O", "X"],
        ["O", "", "X"]
      ];
      setBoard(board);
      assert.isOk(game.isWin(currentMove));
    });
  });
  describe('METHOD: isTie', function(){
    it('should not be a tie', function(){
      clearBoard();
      var currentMove = {row: 1, column:3, piece: 'X', id: '1x3'};
      var board = [
        ['O', 'X', 'X'],
        ['', 'O', ''],
        ['', '', '']
      ];
      setBoard(board);
      assert.isNotOk(game.isTie(currentMove));
    });
    it('should be a tie', function(){
      clearBoard();
      var currentMove = {row: 1, column:3, piece: 'O', id: '1x3'};
      var board = [
        ['O', 'X', 'O'],
        ['X', 'O', 'O'],
        ['X', 'O', 'X']
      ];
      setBoard(board);
      //console.log(board);
      assert.isOk(game.isTie(currentMove));
    });
  });
  describe('METHOD: createMoveFromSquare(square)', function(){
    it('Returns a move object from a square taken from interface', function(){
      let square = document.createElement('button');
      square.setAttribute('id', '1x2');
      var move = game.createMoveFromSquare(square);

      assert.equal(move.row, 1);
      assert.equal(move.column, 2);
      assert.equal(move.id, '1x2');
      assert.equal(move.piece, 'O');
    });
  });
  describe('METHOD: createMoveFromCoords(row, column, piece)', function(){
    it('should actually write this test', function(){
      let move = game.createMoveFromCoords(3, 2, 'X');
      assert.equal(move.row, 3);
      assert.equal(move.column, 2);
      assert.equal(move.piece, 'X');
      assert.equal(move.id, '3x2');
    });
  });
  describe('METHOD: getBoard()', function(){
    it('board returned matches module board variable', function(){
      clearBoard();
      var board = [
        ['O', 'X', 'O'],
        ['X', 'O', 'O'],
        ['X', 'O', 'X']
      ];
      setBoard(board);
      assert.equal(game.getBoard(), game.board);

    });
  });
  describe('METHOD: clearBoard()', function(){
    it('Board array should be cleared', function(){
      clearBoard();
      var emptyBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];
      var board = [
        ['O', 'X', 'O'],
        ['X', 'O', 'O'],
        ['X', 'O', 'X']
      ];
      setBoard(board);
      game.clearBoard();
      assert.deepEqual(game.board, emptyBoard);
    });
  });
  describe('METHOD: getBoardCell(row, column)', function(){
    it('Board cell is retrieved correctly', function(){
      clearBoard();
      game.board[2][0] = 'X';
      assert.equal(game.getBoardCell(3, 1), 'X');
    });
  });
  describe('METHOD: setBoardCell(move)', function(){
    it('Board cell is set correctly', function(){
      clearBoard();
      game.setBoardCell({row: 3, column: 3, piece: 'X', id: '2x1'});
      assert.equal(game.board[2][2], 'X');
    });
  });
  describe('METHOD: getCurrentPiece() ', function(){
    it('Need to write test', function(){
      assert.isOk(false);
    });
  });
  describe('METHOD: toggleCurrentPiece()', function(){
    it('Need to write test', function(){
      assert.isOk(false);
    });
  });

});
//******************************************************************************/
//BOARD CLASS TESTS
//******************************************************************************/
describe('BOARD CLASS', function(){
  describe('METHOD: reset()', function(){
    it('clears all set squares', function(){
      var board = new  Board();
      board.update({row: 1, column: 1, piece: 'X', id:'1x1'});
      board.update({row: 3, column: 2, piece: 'X', id:'3x2'});
      board.reset();
      var square1x1 = document.getElementById('1x1');
      var square3x2 = document.getElementById('3x2');
      assert.equal(square1x1.innerHTML, '');
      assert.equal(square3x2.innerHTML, '');

    });
  });
  describe('METHOD: update()', function(){
    it('should update button with piece...', function(){
      var board = new Board();
      var move = {row: 1, column: 2, piece: 'X', id:'1x2'};
      var square = document.getElementById('1x2');
      board.update(move);
      assert.equal(square.innerHTML, 'X');
    });
  });
  describe('METHOD: getSquareById(squareId)', function(){
    it('should return correct square', function(){
      var board = new Board();
      var square = document.getElementById('1x2');
      assert.equal(board.getSquareById('1x2').getAttribute('id'), '1x2');
    });
  });
  describe('METHOD: setSquare(square, piece)', function(){
    it('should update button with piece...', function(){
      var board = new Board();
      var move = {row: 1, column: 2, piece: 'X', id:'1x2'};
      var square = document.getElementById('1x2');
      board.setSquare(square, 'X');
      assert.equal(square.innerHTML, 'X');
    });
  });
});

//******************************************************************************/
//MESSAGE CLASS TESTS
//******************************************************************************/
describe('MESSAGE CLASS', function(){
  describe('METHOD: send(message)', function(){
    it('it updates outputBuffer with new message', function(){
      var displayElement = ui.messageWindow;
      var messageDisplay = new Message();
      var message = "Hello World!";
      messageDisplay.send(message);
      assert.equal(displayElement.innerHTML, "<p>Hello World!</p>");
    });
  });

  describe('METHOD: reset()', function(){
    it('buffer is cleared after calling reset', function(){
      var messageDisplay = new Message();
      var message = "Hello World!";
      var buffer = messageDisplay.outputBuffer;
      messageDisplay.updateDisplay(message);
      //console.log(messageDisplay.outputBuffer);
      messageDisplay.reset();
      assert.equal(buffer.length, 0);
    });
  });
  describe('METHOD: updateOutputBuffer', function(){
    it('it updates outputBuffer with new message', function(){
      var messageDisplay = new Message();
      var message = "Hello World!";
      messageDisplay.updateOutputBuffer(message);

      assert.equal(messageDisplay.outputBuffer[messageDisplay.outputBuffer.length - 1], message);
    });
  });
  describe('METHOD: updateDisplay(buffer)', function(){
    it('returns contents of buffer as formated text:', function(){
      var messageDisplay = new Message();
      var displayWindow = ui.messageWindow;
      messageDisplay.updateDisplay(["Hello World!"]);
      assert.equal(displayWindow.innerHTML, "<p>Hello World!</p>");
    });
  });
  describe('METHOD: getFormatedOutputText(buffer)', function(){
    it('returns contents of buffer as formated text:', function(){
      var messageDisplay = new Message();
      var output = messageDisplay.getFormatedOutputText(["Hello World!", "This is Great!"])
      assert.equal(output, "<p>This is Great!</p><p>Hello World!</p>");
    });
  });
  describe('METHOD: getOutputBuffer()', function(){
    it('returns outputBuffer:', function(){
      var messageDisplay = new Message();
      var buffer = messageDisplay.getOutputBuffer();
      assert.equal(buffer, messageDisplay.outputBuffer);
    });
  });
  describe('METHOD: getDisplayWindow()', function(){
    it('returns outputBuffer:', function(){
      var messageDisplay = new Message();
      var display = messageDisplay.getDisplayWindow();
      assert.equal(display, messageDisplay.display);
    });
  });
});
//******************************************************************************/
//CONTROL CLASS TESTS
//******************************************************************************/
describe('CONTROL CLASS:', function(){
  describe('METHOD:', function(){
    it('reset button works:', function(){
      var controlPanel = new Control();
      var button = ui.resetButton;
      assert.isOk(true);
    })
  });
});
