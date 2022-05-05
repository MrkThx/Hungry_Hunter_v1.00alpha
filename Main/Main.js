addEventListener('load', function () {
    let post = this.document.getElementById('post');
    let posts = [{
        "pic": "./material/bendou.jpg",
        "name": "燒肉飯",
        "food": "便當",
        "whether": "葷",
        "place": "自強校區",
        "where": "電機系館",
        "comment": [
            '看起來很好吃',
            '我有吃過欸'
        ]},
        {
            "pic": "./material/che.jpg",
            "name": "叉燒飯",
            "food": "便當",
            "whether": "素",
            "place": "光復校區",
            "where": "建築系館",
            "comment": [
                '不推',
                '不揪'
            ]
        }
    ];
    for (let i = 0; i < posts.length; i++) {
        let htmlPost = post.innerHTML;
        htmlPost = htmlPost + `
        <div class="bright">
            <div class="picture"></div>
            <div class="food">${posts[i].name}<br> 類型：${posts[i].food}<br>葷素：${posts[i].whether}</div>
            <div class="information">校區：${posts[i].place} <br>細節：${posts[i].where}</div>
            <div class="more">MORE.</div>
            <div class="clearfix"></div>
            <div class="love"></div>
            <div class="message"></div>
            <div class="comment">
                <div class="func">
                    <button class="button">新增留言</button>
                    <input type="text" class="com" placeholder="想說的話"/>
                </div>
                <div class="write"></div>
            </div>
            <div class="clearfix"></div>
        </div> 
        `
        post.innerHTML = htmlPost;         
    }
    let pic = this.document.getElementsByClassName('picture');
    console.log(pic.length)
    for(let i = 0; i < pic.length; i++){
        pic[i].style.backgroundImage = 'url('+posts[i].pic +')';
    }
    let home = this.document.getElementById('home');
    let where = this.document.getElementById('where');
    let add = this.document.getElementById('add');
    where.addEventListener('mouseover', () => {
        where.style.backgroundImage = 'url(./material/HxHwhere_activated.svg)';
    })
    where.addEventListener('mouseout', () => {
        where.style.backgroundImage = 'url(./material/HxHwhere.svg)';
    })
    add.addEventListener('mouseover', () => {
        add.style.backgroundImage = 'url(./material/HxHadd_activated.svg)';
    })
    add.addEventListener('mouseout', () => {
        add.style.backgroundImage = 'url(./material/HxHadd.svg)';
    })
    let victory = this.document.getElementById('vic_pic');
    let success = this.document.getElementById('suc_pic');
    let recovery = this.document.getElementById('rec_pic');
    let self = this.document.getElementById('sel_pic')
    let vic_frame = this.document.getElementById('victory');
    let suc_frame = this.document.getElementById('success');
    let rec_frame = this.document.getElementById('recovery');
    let sel_frame = this.document.getElementById('self');
    let campus = new Array(victory, success, recovery, self);
    let cam_frame = new Array(vic_frame, suc_frame, rec_frame, sel_frame);
    for (let i = 0; i < campus.length; i++) {
        $(campus[i]).click(function () {
            if ($(cam_frame[i]).hasClass("rotate")) {
                $(cam_frame[i]).removeClass("rotate").addClass("rotate1");
            } else {
                $(cam_frame[i]).removeClass("rotate1").addClass("rotate");
            }
        })
    }
    const listContent = [[]];
    let button = this.document.getElementsByClassName('button')//對應到按鈕
    let com = this.document.getElementsByClassName('com');//對應到input的text
    let write = this.document.getElementsByClassName('write');
    for (let i = 0; i < button.length; i++) {    //為每個按鈕增加事件
        listContent.push([]);
        button[i].addEventListener('click', function () {
            if (com[i].value != '') {
                cover(com[i].value,i);
                $.get('../addComment',{ //將留言傳送至後端-----------------<send>
                    value: $(com[i]).val(),
                    index: i+1
                })
                // console.log($(com[i]).val());
                // console.log( i+1 );
                com[i].value = '';
            }
        })
    }
    function cover(detail,index){
        listContent[index].push(detail);
        let htmlStr = write[index].innerHTML;
        htmlStr = htmlStr + `
        <div class="content">${detail}</div>
        `
        write[index].innerHTML = htmlStr;
    }
    for (let i = 0; i < posts.length; i++) {
       for(let j = 0; j < posts[i].comment.length; j++){
           cover(posts[i].comment[j],i);
       }       
    }
    where.addEventListener('click', function () {
        window.location.href = '../AboutUs/AboutUs.html';
    })
    add.addEventListener('click', function () {
        window.location.href = '../Add/Add.html';
    })
})