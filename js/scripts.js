var writeus_popup=document.querySelector(".writeus_popup"),show_writeus=document.querySelector(".js_show_writeus"),close_writeus_popup=document.querySelector(".js_writeus_close"),map_popup=document.querySelector(".map_popup"),show_map=document.querySelector(".js_show_map"),close_map_popup=document.querySelector(".js_map_close"),form=document.querySelector(".writeus"),name=document.querySelector(".name"),email=document.querySelector(".e_mail"),message=document.querySelector("[name=message]");show_writeus.addEventListener("click",function(e){e.preventDefault(),writeus_popup.classList.add("show_popup")}),close_writeus_popup.addEventListener("click",function(e){e.preventDefault(),writeus_popup.classList.remove("show_popup")}),show_map.addEventListener("click",function(e){e.preventDefault(),map_popup.classList.add("show_popup")}),close_map_popup.addEventListener("click",function(e){e.preventDefault(),map_popup.classList.remove("show_popup")}),form.addEventListener("submit",function(e){email.value&&name.value&&message.value||(e.preventDefault(),email.classList.add("invalid"),name.classList.add("invalid"),message.classList.add("invalid"))});