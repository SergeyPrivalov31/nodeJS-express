const fs = require('fs');

fs.stat('01_start.js',(err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats, null, ' ')}`);
    try{
        if (err) throw err;
        fs.rename('test.txt', 'test_new.txt', (err) => {
            if (err) throw err;
            console.log('Название файла изменено')
        });

        // try {
        //     fs.unlinkSync('test_new.txt');
        //     console.log('удален test_new.txt.txt');
        //     }catch (er) {
        //     console.log(er.message);
        //     }
        
    }
    catch(err){
        console.log('Зеленоград у нас проблемы', err)
    }    
});



