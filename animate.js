function showNumberWithAnimation(i,j,randNumber){
    var numberCell=$("#number-cell-"+i+"-"+j);

    numberCell.css({
        'background-color':getNumberBackgroundColor(randNumber),
        'color':getNumberColor(randNumber)
    });
    
    numberCell.animate({
        width:100,
        height:100,
        top:getPosTop(i,j),
        left:getPosLeft(i,j)
    },50);
    numberCell.text(randNumber);
}