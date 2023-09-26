const loadgame=document.getElementById('loadgame');
MSPFA.slide.push(p => {
    if(p===1||p===2) {
        const loadgameimg=document.getElementById('loadgameimg');
        if(!loadgameimg) return;
        loadgameimg.href='javascript:void(0)';
        loadgameimg.addEventListener('click',() => {
            loadgame.click();
        });
        const newupdateimg=document.getElementById('newupdateimg');
        if(!newupdateimg) return;
        newupdateimg.href='javascript:void(0)';
        newupdateimg.addEventListener('click',() => {
            MSPFA.page(MSPFA.story.p.findIndex(page => page.d===MSPFA.story.p[MSPFA.story.p.length-1].d));
        });
    }
});