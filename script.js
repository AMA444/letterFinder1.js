
 function letterfinder(word,match)
 {
    for(var i=0;i<word.length;i++){
        if(word[i]==match){
            console.log('found the match')
        }
        else{
            console.log('no match')
        }
    }
 }
 letterfinder("t","t");
