const board = () =>{

    const chessBoard = [
        ["rbL", "nb", "bb", "qb", "kb", "bb", "nb", "rbR"], 
        ["pb", "pb", "pb", "pb", "pb", "pb", "pb", "pb"], 
        [null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null], 
        ["pw", "pw", "pw", "pw", "pw", "pw", "pw", "pw"], 
        ["rwL", "nw", "bw", "qw", "kw", "bw", "nw", "rwR"],
    //     [null, null, null, null, null, null, null, "kb"],
    // [null, null, null, null, null, "qw", null, null],
    // [null, null, null, null, null, null, null, null],
    // [null, null, null, null, null, null, null, null],
    // [null, null, null, "pb", null, null, null, null],
    // [null, null, null, "pw", null, null, null, null],
    // [null, null, null, null, "pw", null, null, null],
    // ["kw", null, null, null, null, null, null, null]
    ];

    return chessBoard;

}

export default board;