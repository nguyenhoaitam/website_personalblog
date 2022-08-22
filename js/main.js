//JS MENU
window.onscroll = function() {
    var menu = document.getElementById("my-menu");
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
            menu.style.position = "fixed";
            menu.style.top = 0;
            menu.style.left = 0;
            menu.style.right = 0;
            menu.style.zIndex = 9;
            menu.style.opacity = 0.9;
    }
    else {
        menu.style.position = "relative";
    }

}



// JS BACK TO TOP
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#backtop').fadeIn();
        }
        else {
            $('#backtop').fadeOut();
        }
    });

    $("#backtop").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});

// JS TOGGLE MENU

const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId)

    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('show')
            toggle.classList.toggle('rotate')
        })
    }
}

showMenu('nav-toggle', 'navbar')

//JS LOAD MORE

$(document).ready(function() {
    $("#load-btn-new").click(function() {
        $("div.load-new").removeClass("hide_loadmore")
        $("div.load-new").addClass("animate__animated animate__zoomIn")
        $("#hide-btn-new").css("display", "block")
    });

    $("#load-btn-hot").click(function() {
        $("div.load-hot").removeClass("hide_loadmore")
        $("div.load-hot").addClass("animate__animated animate__zoomIn")
        $("#hide-btn-hot").css("display", "block")
    });

    $("#hide-btn-new").click(function() {
        $("div.load-new").addClass("hide_loadmore")
        $("#hide-btn-new").css("display", "none")
    });

    $("#hide-btn-hot").click(function() {
        $("div.load-hot").addClass("hide_loadmore")
        $("#hide-btn-hot").css("display", "none")
    });

});

// JS THANKS

function thanks() {
    var textEmail = document.getElementById("news-email");
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (!filter.test(textEmail.value) || !textEmail) { 
        if (!textEmail)
            alert("Vui lòng nhập Email");
        if (!filter.test(textEmail.value)) {
            alert('Email bạn nhập chưa đúng định dạng vui lòng nhập lại.\nExample@gmail.com');
            textEmail.focus; 
            return false; 
        }
    }
    else {
        var box = document.getElementById("alert");
        box.style.display = 'block';

        document.getElementById("close-box").onclick = function() {
            box.style.display = 'none';
        }
    }
}

let colors = ['#728197', '#425065', '#4287EE', '#57595D', '#7964B2', '#996161']

function init() {
    let subjects = document.querySelectorAll(".aside h2");
    for (let s of subjects) {
        let idx = parseInt(Math.random() * colors.length)
        s.style.color = colors[idx];
    }
}


function choose() {
    var boxChoose = document.getElementById("choose-loca");

    boxChoose.style.display = 'block';
}

$("#x-choose").click(function() {
    $("#choose-loca").css("display", "none");
})

//JS TRƯỢT ẢNH

let index = 0;
const pre = document.querySelector(".chevron-pre");
const next = document.querySelector(".chevron-next");
const numberBox = document.querySelectorAll(".slider-items");

next.addEventListener("click", function() {
    index = index + 1;
    if (index > (numberBox.length - 1)) {
        index = 0;
    }
    document.querySelector(".slider-content-father").style.right = index * 100 + "%"
})

pre.addEventListener("click", function() {
    index = index - 1;
    if (index <= 0) {
        index = numberBox.length - 1;
    }
    document.querySelector(".slider-content-father").style.right = index * 100 + "%"
})

function upCmt() {

    var avts = ['avt.jpg', 'avt1.jpg', 'avt2.jpg', 'avt3.jpg']

    var btnUp = document.getElementById("btnUpCmt");
    var rdAvt = parseInt(Math.random() * 3);

    btnUp.addEventListener("click", function() {
         
        var nameCmt = document.getElementById("input-cmt-name").value;
        var emailCmt = document.getElementById("input-cmt-email").value;
        var cmtCmt = document.getElementById("input-cmt-message").value;

        var textEmailCmt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!nameCmt || !cmtCmt || !textEmailCmt.test(emailCmt) || !emailCmt) {
            if (!nameCmt)
                alert("Vui lòng nhập Họ và tên của bạn!!")
            if (!cmtCmt)
                alert("Vui lòng nhập bình của bạn!!")
            if (!textEmailCmt.test(emailCmt) || !emailCmt) {
                if (!emailCmt)
                    alert("Vui lòng nhập Email")
                else
                    alert('Email bạn nhập chưa đúng định dạng vui lòng nhập lại.\nExample@gmail.com');
            }
        }
    
        else {
            var d = new Date;
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var year = d.getFullYear();

            var hour = d.getHours();
            var min = d.getMinutes();

            var dayfull = day + '/' + month + '/' + year;
            var hours = hour + ':' + min;

            var h = `
                <div class="cmt">
                    <div class="flex">
                        <div>
                            <img src="../../images/post/page/avt${rdAvt}.jpg" alt="avt">
                        </div>
                        <div>
                            <span>${nameCmt}</span>
                            <br>
                            <span>${dayfull}</span>
                            <span>${hours}</span>
                        </div>
                    </div>
                    <p>
                        ${cmtCmt}
                    </p>
                </div>
            `

            let m = document.getElementsByClassName("cmts")[0];
            let a = document.querySelector(".cmt:first-child");

            a.insertAdjacentHTML("beforebegin", h);
        }
    });
}

function thanksAbout() {
    var firstName = document.getElementById("input-first-name").value;
    var lastName = document.getElementById("input-last-name").value;
    var aboutEmail = document.getElementById("input-email").value;
    var aboutText = document.getElementById("input-message").value;
    var textEmailAbout = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (!firstName || !lastName || !textEmailAbout.test(aboutEmail) || !aboutEmail || !aboutText) { 
        if (!firstName)
            alert("Vui lòng nhập Họ lót");
        if (!lastName)
            alert("Vui lòng nhập Tên");
        
        if (!aboutEmail || !textEmailAbout.test(aboutEmail)) {
            if (!aboutEmail)
                alert("Vui lòng nhập Email");
            else
                alert("Email bạn nhập chưa đúng định dạng vui lòng nhập lại.\nExample@gmail.com");
        }

        if (!aboutText)
            alert("Vui lòng nhập lời nhắn của bạn!!");
    }
    else {
        var box = document.getElementById("alert-about");
        box.style.display = 'block';

        document.getElementById("close-box-about").onclick = function() {
            box.style.display = 'none';
        }
    }
}


wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
})
wow.init();