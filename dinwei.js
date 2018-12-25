function getPosTop(i,j){
    var top=20+i*(100+20);
    return top;
}
function getPosLeft(i,j){
    var left=20+j*(100+20);
    return left;
}
function getNumberBackgroundColor(number){
    var color="black";
    switch(number){
        case 2:
            color='#eee4da';
            break;
        case 4:
            color="#ede0c8";
            break;
        case 8:
            color='#f2b179';
            break;
        case 16:
            color="#f59563";
            break;
        case 32:
            color='#f67c5f';
            break;
        case 64:
            color="#f65e3b";
            break;
        case 128:
            color='#edcf72';
            break;
        case 256:
            color="#edcc61";
            break;
        case 512:
            color='#9c0';
            break;
        case 1024:
            color="#33b5e5";
            break;
        case 2048:
            color='#09c';
            break;
    }
    return color;
}
function getNumberColor(number){
    if(number<=4){
        return "#776e50";
    }
    return "white";
}
function nospace(board){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(board[i][j]==0){
                return false;
            }
        }
    }
    return true;
}
showNumberWithAnimation(randx,randy,randNumber);
    board[randx][randy]=randNumber;