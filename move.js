//更新棋盘上显示的方块
function updateBoardView(){
    //如果有number-cell后先删除
    $(".number-cell").remove();
    //遍历格子，改变样式
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            $("#grid-container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>')
            var theNumberCell=$("#number-cell-"+i+"-"+j);

            if(board[i][j]==0){
                theNumberCell.css({
                    "width":"0px",
                    "height":"0px",
                    "top":getPosTop(i,j)+50,/*这里是为了把它放中间，动画才好看*/
                    "left":getPosLeft(i,j)+50
                });
            }else{
                theNumberCell.css({
                    "width":100+'px',
                    "height":100+'px',
                    "top":getPosTop(i,j),
                    "left":getPosLeft(i,j),
                    "background-color":getNumberBackgroundColor(board[i][j]),
                    "color":getNumberColor(board[i][j])
                });
                theNumberCell.text(board[i][j]);
            }
        }
        $('.number-cell').css({
            'line-height':cellSideLength+'px',
            'font-size':0.6*cellSideLength+'px'
        })
    }
}
if(nospace(board)){
    return false;
}
//随机生成一个位置
var randx=parseInt(Math.floor(Math.random()*4));
var randy=parseInt(Math.floor(Math.random()*4));
//看是不是空格,优化随机
var times=0;
while(times<50){
    if(board[randx][randy]==0){
        break;
    }
    //重复
    var randx=parseInt(Math.floor(Math.random()*4));
    var randy=parseInt(Math.floor(Math.random()*4));

    times++;
}
if(times==50){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(board[i][j]==0){
                randx=i;
                randy=j;
            }
        }
    }
}
