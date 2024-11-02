const section = document.querySelector("section"),
      mainVideo = document.querySelector(".main-video video"),
      videos = document.querySelectorAll(".videos"),
      close = document.querySelector(".close");

      for (var i = 0; i < videos.length; i++) {
        videos[i].addEventListener("click", (e)=> {
            const target = e.target;
            section.classList.add("active");
            target.classList.add("active"); // adding active class in the videos tag
            let src = document.querySelector(".videos.active video").src; // getting the source of the video which has active class
            mainVideo.src = src; // putting the source of the video inside the main video

            close.onclick = ()=> {
                section.classList.remove("active");
                target.classList.remove("active");
                mainVideo.src = ""; // removing the src of the main video
            }
        });
      }
