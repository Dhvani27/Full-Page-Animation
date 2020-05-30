// JavaScript source code
new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {

        const section = destination.item;
        //console.log(destination.item);

        const title = document.querySelector("h1");

        const timeLine = new TimelineMax({ delay: 0.5 });

        timeLine.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });


        if (destination.index === 1) {
            const chairs = document.querySelectorAll(".chair");
            const description = document.querySelector(".description");


            timeLine.fromTo(chairs, 0.7, { x: "100%" }, { x: "-35%" })
                .fromTo(description,0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 })
                .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
                .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
                .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 });


        }

        
    }


});