(function() { 
   var styles = ` 
     <style> 
             body.custom-unique-page { 
         margin: 0; 
         padding: 0; 
         font-family: Arial, sans-serif; 
       } 
       #unique-announcement-container { 
         display: none; 
         position: fixed; 
         top: 5%; 
         left: 1.5%; 
         right: 1.5%; 
         max-width: 97%; 
         background-color: #f2f2f2; 
         padding: 20px; 
         text-align: center; 
         box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
         border: 2px solid #ccc; /* 新增边框样式 */ 
         transition: transform 0.3s ease-in-out; /* 新增悬浮效果的过渡动画 */ 
         z-index: 9999; 
       } 
       #unique-announcement-container:hover { 
         transform: scale(1.05); /* 悬浮时放大 */ 
       } 
       #unique-announcement-container h2 { 
         font-size: 40px; 
         margin-bottom: 10px; 
         color: #333; 
       } 
       #unique-announcement-container p { 
         font-size: 25px; 
         line-height: 1.5; 
         margin-bottom: 10px; 
         color: #666; 
       } 
       .additiona-text { 
         font-size: 25px; 
         position: absolute; 
         bottom: 910px; 
         right: 25px; 
         margin: 10px; 
         color: #999; 
       }     
       .additional-text { 
         font-size: 25px; 
         position: absolute; 
         bottom: 100px; 
         right: 30px; 
         margin: 10px; 
         color: #999; 
       } 
       .close-button { 
         font-size: 23px; 
         background-color: #4CAF50; 
         color: #fff; 
         border: none; 
         padding: 10px 20px; 
         border-radius: 4px; 
         cursor: pointer; 
       } 
     </style> 
   `; 
  
   document.head.insertAdjacentHTML('beforeend', styles); 
  
   var announcementContainer = document.createElement('div'); 
   announcementContainer.id = 'unique-announcement-container'; 
   announcementContainer.innerHTML = ` 
     <h2><B>公告</b></h2>
        <p><b> 为深入贯彻落实党中央、国务院决策部署，坚决遏制电信网络诈骗犯罪高发多发姿态，切实维护广大人民群众合法权益，按照《中华人民共和国刑法》《中华人民共和国治安管理处罚法》《中华人民共和国网络安全法》《互联网信息服务管理办法》相关法律法规要求：    
        <br>严厉打击非法办理、出租、出售、购买、囤积电话卡、物联网卡、网络账号的行为！！！</b >  
  <p class="additiona-text"><b>工信部联网安函〔2021〕133号<br>2021年6月2日</b></p>
 <br><br><br><br>
<font color="red"><h2><B>免责声明</b></h2></font>
<p>本店所有套餐均为“官方正规套餐”（非物联卡），严格遵守实名制，激活时必须本人活体验证…… 
 <br>请勿抱有任何侥幸心理，以任何理由：贩卖、出借自己的手机卡（包括贩卖、出借利用此卡注册的网络账号）！<br>
收购人员100%利用你的卡搞“电信网络诈骗”，若东窗事发，你附有连带刑事责任！凡触犯刑法，案底伴随终生！
<br>互联网大数据时代，公安机关想追根溯源太过简单……
 
 
<br><br>
凡因出售、出借手机卡造成的任何违法犯罪：均属个人行为，与本店无关！<br>请积极配合公安机关调查，并自行承担相应的法律后果！  
       <br> <br> 凡在本店申请任何套餐，均已默认知晓此公告与声明！并严格遵守相应的法律法规！<br><br><font color="red">打击“电信网络诈骗”，人人有责！！！</font><br><br><br><br><br></p><p class="additional-text"><b>恩水通信<br>2023年3月20日</b></p> 
      
         
        <button class="close-button">我已知晓</button>   
   `; 
   document.body.appendChild(announcementContainer); 
  
   var closeButtons = document.getElementsByClassName('close-button'); 
  
   function displayAnnouncement() { 
     announcementContainer.style.display = 'block'; 
   } 
  
   function closeAnnouncement() { 
     announcementContainer.style.display = 'none'; 
  
     // 更新本地存储的时间戳为当前时间 
     var currentTime = new Date().getTime(); 
     localStorage.setItem('announcementLastVisitTime', currentTime); 
   } 
  
   function checkAnnouncement() { 
     // 检查本地存储中的时间戳 
     var lastVisitTime = localStorage.getItem('announcementLastVisitTime'); 
  
     // 获取当前时间戳 
     var currentTime = new Date().getTime(); 
  
     // 如果本地存储中没有时间戳或者当前时间距上次访问时间超过5分钟，则显示公告 
     if (!lastVisitTime || currentTime - lastVisitTime > 5 * 60 * 1000) { 
       displayAnnouncement(); 
     } 
   } 
  
   // 检查公告显示 
   checkAnnouncement(); 
  
   // 关闭公告 
   for (var i = 0; i < closeButtons.length; i++) { 
     closeButtons[i].addEventListener('click', closeAnnouncement); 
   } 
 })();