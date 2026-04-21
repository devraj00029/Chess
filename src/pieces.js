import pb from './assets/piece_assets/pb.svg'
import bb from './assets/piece_assets/bb.svg'
import rb from './assets/piece_assets/rb.svg'
import nb from './assets/piece_assets/nb.svg'
import kb from './assets/piece_assets/kb.svg'
import qb from './assets/piece_assets/qb.svg'

import pw from './assets/piece_assets/pw.svg'
import bw from './assets/piece_assets/bw.svg'
import rw from './assets/piece_assets/rw.svg'
import nw from './assets/piece_assets/nw.svg'
import kw from './assets/piece_assets/kw.svg'
import qw from './assets/piece_assets/qw.svg'

const pieces = {
  w: {
    p: pw,
    b: bw, 
    r: rw, 
    n: nw, 
    k: kw, 
    q: qw  
  },
  b: {
    p: pb,
    b: bb,
    r: rb,
    n: nb,
    k: kb,
    q: qb
  }
};

function piece(color,type){
    return pieces[color][type]
}

export default pieces