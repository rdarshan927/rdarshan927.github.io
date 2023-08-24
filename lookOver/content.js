function content(text){

    let aim = "Aim for content div" + "<br>";
    aim += "<ol>";
    aim += "<li>" + "Responsive SIte" + "</li>";
    aim += "<li>" + "Content changing including buttons like download button and description" + "</li>";
    aim += "<li>" + "should have animations while changing" + "</li>";
    aim += "<li>" + "that's all for now in content (suggest idea if interested)" + "</li>";
    aim += "</ol>";

    if(text == "type-1"){
        document.getElementById('type-1-in').innerHTML = "Welcome to Type 1";
        document.getElementById('type-1-in-2').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ex. Sint sunt quam dignissimos facere quas iure reiciendis id accusamus, assumenda, illum iusto ipsa ut provident nesciunt tenetur cumque officiis.";
    }

    else if(text == "type-2"){
        document.getElementById('type-1-in-2').innerHTML = aim;
    }
}