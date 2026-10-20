const board = () =>{

    const chessBoard = [
        ["rbL", "nb", "bb", "qb", "kb", "bb", "nb", "rbR"], 
        ["pb", "pb", "pb", "pb", "pb", "pb", "pb", "pb"], 
        [null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null], 
        ["pw", "pw", "pw", "pw", "pw", "pw", "pw", "pw"], 
        ["rwL", "nw", "bw", "qw", "kw", "bw", "nw", "rwR"]
        /*["", "bb", "", "kb", "bb", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "bw", "", "kw", "bw", "", "", ""]*/
    ];

    return chessBoard;

}

export default board;