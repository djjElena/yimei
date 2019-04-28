/**
 * Created by Administrator on 2019/3/5.
 */
$(function(){
    //” œ‰—È÷§
    var email = document.getElementById('user_email');
    function add_email_list()
    {
        if (check_email())
        {
            Ajax.call('user.php?act=email_list&job=add&email=' + email.value, '', rep_add_email_list, 'GET', 'TEXT');
        }
    }
    function rep_add_email_list(text)
    {
        alert(text);
    }
    function cancel_email_list()
    {
        if (check_email())
        {
            Ajax.call('user.php?act=email_list&job=del&email=' + email.value, '', rep_cancel_email_list, 'GET', 'TEXT');
        }
    }
    function rep_cancel_email_list(text)
    {
        alert(text);
    }
    function check_email()
    {
        if (Utils.isEmail(email.value))
        {
            return true;
        }
        else
        {
            alert('Email is invalid!');
            return false;
        }
    };
    function ale()
    {
        alert("Subscribe to success");
        window.location.reload();
    };
    $(function() {
        var bannerSlider = new Slider($('#banner_tabs'), {
            time: 5000,
            delay: 400,
            event: 'hover',
            auto: true,
            mode: 'fade',
            controller: $('#bannerCtrl'),
            activeControllerCls: 'active'
        });
        $('#banner_tabs .flex-prev').click(function() {
            bannerSlider.prev()
        });
        $('#banner_tabs .flex-next').click(function() {
            bannerSlider.next()
        });
    });
    $(function() {
        var bannerSlider = new Slider($('#banner_tabs'), {
            time: 5000,
            delay: 400,
            event: 'hover',
            auto: true,
            mode: 'fade',
            controller: $('#bannerCtrl'),
            activeControllerCls: 'active'
        });
        $('#banner_tabs .flex-prev').click(function() {
            bannerSlider.prev()
        });
        $('#banner_tabs .flex-next').click(function() {
            bannerSlider.next()
        });
    });
    jQuery().ready(function() {
        $('#banS').banScroll({blockWidth:156,blockHeight:150,numBgActiveColor:'#2399a1'});
    });
    function nTabs(thisObj,Num){
        if(thisObj.className == "active")return;
        var tabObj = thisObj.parentNode.id;
        var tabList = document.getElementById(tabObj).getElementsByTagName("li");
        for(i=0; i <tabList.length; i++)
        {
            if (i == Num)
            {
                thisObj.className = "active";
                document.getElementById(tabObj+"_Content"+i).style.display = "block";
            }else{
                tabList[i].className = "normal";
                document.getElementById(tabObj+"_Content"+i).style.display = "none";
            }
        }
    };
    $(document).ready(function () {
        // hover property will help us set the events for mouse enter and mouse leave 20190116 8:41EST PM
        $('.navigation li').hover(
            // When mouse enters the .navigation element
            function () {
                //Fade in the navigation submenu
                $('ul', this).fadeIn(); 	// fadeIn will show the sub cat menu
            },
            // When mouse leaves the .navigation element
            function () {
                //Fade out the navigation submenu
                $('ul', this).fadeOut();	 // fadeOut will hide the sub cat menu
            }
        );
    });
    function firm()
    {
        if(confirm("Are you sure you want to download it?"))
        {
            location.href="affinity%20-purchase%20order%20form.docx";
        }
    };
    $('.dl').hide();
    $('.log-in').click(function () {
        $('.dl').show();
    });
    $('.close').click(function () {
        $('.dl').hide();
    })
})