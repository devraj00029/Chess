const board = () =>{

    const chessBoard = [
        ["rb", "nb", "bb", "qb", "kb", "bb", "nb", "rb"], 
        ["pb", "pb", "pb", "pb", "pb", "pb", "pb", "pb"], 
        [null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null, null], 
        ["pw", "pw", "pw", "pw", "pw", "pw", "pw", "pw"], 
        ["rw", "nw", "bw", "qw", "kw", "bw", "nw", "rw"]  
    ];

    return chessBoard;

}

export default board;