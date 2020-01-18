(function() {

    var link = document.location.href;
    document.documentElement.lang ="ko";
    function makeRoot() {
        let div = document.createElement('div');
        div.id = "winter";
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.top = "0";
        div.style.bottom = "0";
        div.style.position="absolute";
        return div;
    }

    function makeLeft() {
        let divL = document.createElement('div');
        divL.id = "leftd";
        divL.style.width = "50%";
        divL.style.height = "100%";
        divL.style.float = "left";
        divL.appendChild(makeFrame());
        return divL;
    }

    function makeRight() {
        let divr = document.createElement('div');
        divr.id = "rightd";
        divr.style.width = "50%";
        divr.style.height = "100%";
        divr.style.float = "left";
        divr.appendChild(makeTranslateFrame());
        return divr;
    }

    function makeFrame(){
        let f1 = document.createElement("embed");
        f1.setAttribute("id","idValue");
        f1.setAttribute("name","name Value");
        
        f1.style.width="100%";
        f1.style.height="100%";
        f1.src = link;
        return f1;
    }

    function makeTranslateFrame(){
        let f1 = document.createElement("embed");
        f1.setAttribute("id","idValue");
        f1.setAttribute("name","name Value");
        let translateLink = 'https://papago.naver.net/website?locale=ko&source=en&target=ko&url='+link;
        f1.style.width="100%";
        f1.style.height="100%";
        f1.src = translateLink;
        return f1;
    }

    let foots = document.getElementsByTagName('footer');
    for(let i = 0; i < foots.length; i++) {
        let f = foots[i];
        f.style.display = "none";
    }

    //웹페이지 내 모든 div 숨기기
    let divDoms = document.getElementsByTagName("div");
    for(let i = 0; i < divDoms.length; i++) {
    let dom = divDoms[i];
    dom.style.display = "none";
    }

    let root = makeRoot();
    let left = makeLeft(); 
    let right = makeRight();   
    root.appendChild(left);
    root.appendChild(right);

    document.body.append(root); 
    })();
    