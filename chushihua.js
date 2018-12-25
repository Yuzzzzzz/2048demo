var board=new Array();
var scor0;
$(document).ready(function(){
        newGame();
})
function newGame(){
    init();//初始化棋盘
    generateOneNumber();
    generateOneNumber();
    //生成数字
}
function init(){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            var gridCell=$('#grid-cell-'+i+"-"+j)
            gridCell.css({
                "top":getPosTop(i,j),
                "left":getPosLeft(i,j)
            });
        }
    }

    //初始化board
    for(var i=0;i<4;i++){
        board[i]=new Array();
        for(var j=0;j<4;j++){
            board[i][j]=0;
        }
    }     
    updateBoardView();
    score=0;
    $('#score').text(score);
}
