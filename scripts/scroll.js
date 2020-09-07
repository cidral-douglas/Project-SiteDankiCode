$(function(){

    var curIndex = 0;
    var amt;

    initSlider();
    onClick();

    function initSlider(){
        //amt pega a qntd de autores que temos
         amt = $('.sobre-autor').length;
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;
        $('.sobre-autor').css('width', sizeBoxSingle +'%');
        $('.scroll-wrapper').css('width', sizeContainer +'%');

        //Loop que cria os bullets
        for(var i =0; i<amt; i++){
            if(i == 0){
                $('.slider-bullets').append('<span id="'+i+ '" style="background-color: rgb(170,170,170);"></span>')
            }else{
                $('.slider-bullets').append('<span id="'+i+'" ></span>');
            }
        }
    }


    //Função para fazer o slider passar sozinho

    // function autoPlay(){
    //     setInterval(function(){
    //         curIndex ++;
    //         if(curIndex == amt){
    //             curIndex = 0;
    //         }
    //          goToSlider(curIndex);
            
    //     },delay)
    // }


    function onClick(){
        $('.slider-bullets span').click(function(){
            curIndex = $(this).index();
            goToSlider(curIndex);
        });
    }

    //Função que faz a animação do slider e troca as posições dos bullets
    function goToSlider(curIndex){
        var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wrapper').offset().left;
        $('.slider-bullets span').css('background-color', 'rgb(200,200,200)');
        $('.slider-bullets span').eq(curIndex).css('background-color', 'rgb(170,170,170');

        $('.scroll-equipe').animate({'scrollLeft':offSetX});
    }

    
})