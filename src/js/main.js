'use strict';

// document.documentElement.style.setProperty('--background', "url('../image/album-cover.jpeg')");

document.addEventListener('DOMContentLoaded', (e) => {
    const album = [
    {
        name: 'Amnesia(I)',
        group: 'Crystal Castles',
        src: 'image/cover.jpg'
    },
    [
        {
            name: 'Femen',
            group: 'Crystal Castles',
            time: '152',
            src: 'audio/1Femen.mp3'
        },
        {
            name: 'Fleece',
            group: 'Crystal Castles',
            time: '155',
            src: 'audio/2Fleece.mp3'
        },
        {
            name: 'Char',
            group: 'Crystal Castles',
            time: '188',
            src: 'audio/3Char.mp3'
        },
        {
            name: 'Enth',
            group: 'Crystal Castles',
            time: '209',
            src: 'audio/4Enth.mp3'
        },
        {
            name: 'Sadist',
            group: 'Crystal Castles',
            time: '150',
            src: 'audio/5Sadist.mp3'
        },
        {
            name: 'Teach Her How To Hunt',
            group: 'Crystal Castles',
            time: '115',
            src: 'audio/6Teach Her How To Hunt.mp3'
        },
        {
            name: 'Chloroform',
            group: 'Crystal Castles',
            time: '188',
            src: 'audio/7Chloroform.mp3'
        },
        {
            name: 'Frail',
            group: 'Crystal Castles',
            time: '169',
            src: 'audio/8Frail.mp3'
        },
        {
            name: 'Concrete',
            group: 'Crystal Castles',
            time: '196',
            src: 'audio/9Concrete.mp3'
        },
        {
            name: 'Ornament',
            group: 'Crystal Castles',
            time: '209',
            src: 'audio/10Ornament.mp3'
        },
        {
            name: 'Their Kindness is Charade',
            group: 'Crystal Castles',
            time: '225',
            src: 'audio/11Their Kindness is Charade.mp3'
        },
    ]
    ]

    // set bg like cover of album   
    document.documentElement.style.setProperty('--background', `url('../${album[0].src}')`);

    // get quentity of songs
    const quentityOfSongs = album[1].length;
    // function of getting time of full album
    function timeSongs() {
        let sum = 0;

        for (const iterator of album[1]) {
            sum += Number(iterator.time);
        }

        let min = Math.floor(sum / 60);
        let sec = sum % 60;
        let result = min + ':' + sec;

        return result;
    };
    // function of getting time of song
    function timeSong(song) {
        let sum = Number(song.time);


        let min = Math.floor(sum / 60);
        if (min < 10) {
            min = '0' + min;
        }
        let sec = sum % 60;
        if (sec < 10) {
            sec = '0' + sec;
        }
        let result = min + ':' + sec;

        return result;
    };

    // set all information of album
    const   coverAlbumCover = document.querySelector('.cover__cover > img'),
            coverAlbumName = document.querySelector('.cover__row_title > .text__album-name'),
            coverGroupName = document.querySelector('.cover__row_title > .text__group-name'),
            coverTime = document.querySelector('.cover__row_title > .text__time');

    coverAlbumCover.setAttribute('src', `${album[0].src}`)
    coverAlbumName.innerHTML = `${album[0].name}`;
    coverGroupName.innerHTML = `${album[0].group}`;
    coverTime.innerHTML = `${quentityOfSongs} songs ~ ${timeSongs()}`;


    // create a list of tracks
    const listRow = document.querySelector('.list__row');
    let index = 0;
    // create a elements
    for (const iterator of album[1]) {
        const   listTrack       = document.createElement('div'),
                listTrackImages = document.createElement('div'),
                listTrackName   = document.createElement('div'),
                listTrackAlbum  = document.createElement('div'),
                listTrackTime   = document.createElement('div'),
                listTrackMenu   = document.createElement('div');
        
        // add classes to elements
        listTrack.classList.add('list__track');
        listTrack.setAttribute('data-id', index)
        listTrackImages.classList.add('list__track_images');
        listTrackName.classList.add('list__track_name', 'text__time');
        listTrackAlbum.classList.add('list__track_album', 'text__time');
        listTrackTime.classList.add('list__track_time', 'text__time');
        listTrackMenu.classList.add('list__track_menu');

        // fill elements
        listTrackImages.innerHTML = `
            <img src="${album[0].src}" alt="">
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.43496 8.37182C0.540791 5.58016 1.58662 2.10933 4.51746 1.16599C6.05912 0.668493 7.96162 1.08349 9.04246 2.57433C10.0616 1.02849 12.0191 0.671826 13.5591 1.16599C16.4891 2.10933 17.5408 5.58016 16.6475 8.37182C15.2558 12.7968 10.4 15.1018 9.04246 15.1018C7.68579 15.1018 2.87329 12.8485 1.43496 8.37182Z" stroke-width="0.625" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.1572 4.30328C13.163 4.40662 13.7922 5.20412 13.7547 6.32162" stroke-width="0.625" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> 
        `;
        listTrackName.innerHTML = `
            <p>${iterator.name} -  ${album[0].group}</p>
        `;
        listTrackAlbum.innerHTML = `
            <p>${album[0].name}</p>
        `
        listTrackTime.innerHTML = `
            <p>${timeSong(iterator)}</p>
        `;
        listTrackMenu.innerHTML = `
            <svg width="17" height="17" viewBox="0 0 17 17"  xmlns="http://www.w3.org/2000/svg">
                <path d="M8.25782 8.94595C8.63788 8.94595 8.94598 8.63785 8.94598 8.25779C8.94598 7.87774 8.63788 7.56964 8.25782 7.56964C7.87777 7.56964 7.56967 7.87774 7.56967 8.25779C7.56967 8.63785 7.87777 8.94595 8.25782 8.94595Z" stroke-width="1.3763" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.25782 4.12887C8.63788 4.12887 8.94598 3.82077 8.94598 3.44072C8.94598 3.06066 8.63788 2.75256 8.25782 2.75256C7.87777 2.75256 7.56967 3.06066 7.56967 3.44072C7.56967 3.82077 7.87777 4.12887 8.25782 4.12887Z" stroke-width="1.3763" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.25782 13.763C8.63788 13.763 8.94598 13.4549 8.94598 13.0749C8.94598 12.6948 8.63788 12.3867 8.25782 12.3867C7.87777 12.3867 7.56967 12.6948 7.56967 13.0749C7.56967 13.4549 7.87777 13.763 8.25782 13.763Z" stroke-width="1.3763" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>  
        `;

        // make a struction
        listTrack.appendChild(listTrackImages);
        listTrack.appendChild(listTrackName);
        listTrack.appendChild(listTrackAlbum);
        listTrack.appendChild(listTrackTime);
        listTrack.appendChild(listTrackMenu);
        listRow.appendChild(listTrack);

        index += 1;
    }

    index = null;

    //choose the track 
    listRow.addEventListener('click', (e) => {
        for (const iterator of listRow.children) {
            iterator.classList.remove('active');
        }
        findAncestor(e.target, 'list__track').classList.add('active');
    });

    // controllers
    const playerBlock = document.querySelector('.player');

    function pausePlyer() {
        play.innerHTML = `
        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.333344 4.77269V2.95366C0.333344 0.619264 1.98563 -0.33566 4.0017 0.831537L5.57814 1.741L7.15463 2.65047C9.17069 3.81767 9.17069 5.7277 7.15463 6.8949L5.57814 7.80437L4.0017 8.71383C1.98563 9.88103 0.333344 8.92611 0.333344 6.59171V4.77269Z" fill="#EFEEE0"/>
        </svg> 
        `
        audio.pause();
        stopTimelineAnimation();
        play.setAttribute('data-status', 'pause');
    }
    function playPlayer() {
        play.innerHTML = `
        <svg width="9" height="10" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 2.5V15.5C11 15.9647 11 16.197 11.0384 16.3902C11.1962 17.1836 11.816 17.8037 12.6094 17.9615C12.8026 18 13.0349 18 13.4996 18C13.9642 18 14.197 18 14.3902 17.9615C15.1836 17.8037 15.8041 17.1836 15.9619 16.3902C16 16.1987 16 15.9687 16 15.5122V15.5V2.5V2.48777C16 2.03126 16 1.80136 15.9619 1.60986C15.8041 0.816482 15.1836 0.196243 14.3902 0.0384294C14.197 0 13.9647 0 13.5 0C13.0353 0 12.8026 0 12.6094 0.0384295C11.816 0.196243 11.1962 0.816482 11.0384 1.60986C11 1.80306 11 2.03534 11 2.5Z" fill="white"/>
            <path d="M0 2.5V15.5C0 15.9647 0 16.197 0.0384295 16.3902C0.196243 17.1836 0.815994 17.8037 1.60938 17.9615C1.80257 18 2.0349 18 2.49956 18C2.96421 18 3.19698 18 3.39018 17.9615C4.18356 17.8037 4.8041 17.1836 4.96191 16.3902C5 16.1987 5 15.9687 5 15.5122V15.5V2.5V2.48777C5 2.03126 5 1.80136 4.96191 1.60986C4.8041 0.816482 4.18356 0.196243 3.39018 0.0384294C3.19698 0 2.96465 0 2.5 0C2.03535 0 1.80257 0 1.60938 0.0384295C0.815994 0.196243 0.196243 0.816482 0.0384294 1.60986C0 1.80306 0 2.03534 0 2.5Z" fill="white"/>
        </svg>
        `
        audio.play();
        stopTimelineAnimation();
        timelineAnimation();
        play.setAttribute('data-status', 'play');
        playerBlock.classList.add('active');
    };

    function changeList(id) {
        for (const iterator of listRow.children) {
            iterator.classList.remove('active');
        }
        let list = document.querySelector(`[data-id="${id}"]`);
        list.classList.add('active');
    }

    function findAncestor(el, cls) {
        while (!el.classList.contains(cls)) {
            el = el.parentElement;
        }
        return el;
    };

    function changeArticle() {
        songArticle.innerHTML = `
            ${album[1][idSong].name}
        `
        groupArticle.innerHTML = `
            ${album[1][idSong].group}
        `
        coverArticle.setAttribute('src', `${album[0].src}`)
    }

    play.addEventListener('click', (e) => {
        if(play.getAttribute('data-status') == 'pause') {
            play.innerHTML = `
                <svg width="9" height="10" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 2.5V15.5C11 15.9647 11 16.197 11.0384 16.3902C11.1962 17.1836 11.816 17.8037 12.6094 17.9615C12.8026 18 13.0349 18 13.4996 18C13.9642 18 14.197 18 14.3902 17.9615C15.1836 17.8037 15.8041 17.1836 15.9619 16.3902C16 16.1987 16 15.9687 16 15.5122V15.5V2.5V2.48777C16 2.03126 16 1.80136 15.9619 1.60986C15.8041 0.816482 15.1836 0.196243 14.3902 0.0384294C14.197 0 13.9647 0 13.5 0C13.0353 0 12.8026 0 12.6094 0.0384295C11.816 0.196243 11.1962 0.816482 11.0384 1.60986C11 1.80306 11 2.03534 11 2.5Z" fill="white"/>
                    <path d="M0 2.5V15.5C0 15.9647 0 16.197 0.0384295 16.3902C0.196243 17.1836 0.815994 17.8037 1.60938 17.9615C1.80257 18 2.0349 18 2.49956 18C2.96421 18 3.19698 18 3.39018 17.9615C4.18356 17.8037 4.8041 17.1836 4.96191 16.3902C5 16.1987 5 15.9687 5 15.5122V15.5V2.5V2.48777C5 2.03126 5 1.80136 4.96191 1.60986C4.8041 0.816482 4.18356 0.196243 3.39018 0.0384294C3.19698 0 2.96465 0 2.5 0C2.03535 0 1.80257 0 1.60938 0.0384295C0.815994 0.196243 0.196243 0.816482 0.0384294 1.60986C0 1.80306 0 2.03534 0 2.5Z" fill="white"/>
                </svg>
            `
            audio.play();
            stopTimelineAnimation();
            timelineAnimation();
            play.setAttribute('data-status', 'play');
        } else if(play.getAttribute('data-status') == 'play') {
            play.innerHTML = `
                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.333344 4.77269V2.95366C0.333344 0.619264 1.98563 -0.33566 4.0017 0.831537L5.57814 1.741L7.15463 2.65047C9.17069 3.81767 9.17069 5.7277 7.15463 6.8949L5.57814 7.80437L4.0017 8.71383C1.98563 9.88103 0.333344 8.92611 0.333344 6.59171V4.77269Z" fill="#EFEEE0"/>
                </svg> 
            `
            stopTimelineAnimation();
            audio.pause();
            play.setAttribute('data-status', 'pause');
        }
    });
    // сhoose audio
    let prevIdSong;
    let idSong;

    listRow.addEventListener('click', (e) => {
        let el = findAncestor(e.target, 'list__track');
        idSong = Number(el.getAttribute('data-id'));

        if (prevIdSong == idSong) {
            if (play.getAttribute('data-status') == 'play') {
                pausePlyer();
            } else {
                playPlayer();
            }
        } else {
            changeArticle();
            audio.setAttribute('src', album[1][idSong].src);
            playPlayer();
        }
        prevIdSong = idSong;
    }); 

    // next song
    next.addEventListener('click', () => {
        if (random.getAttribute('data-status') == 'active') {
            idSong = Number(Math.floor(Math.random() * (Number(album[1].length) - 1)));
            audio.setAttribute('src', album[1][idSong].src);
            changeList(idSong);
            playPlayer();
        } else {
            if (idSong == album[1].length - 1) {
                idSong = 0;
                audio.setAttribute('src', album[1][idSong].src);
                changeList(idSong);
                changeArticle();
                playPlayer();
            } else {
                idSong = Number(idSong) + 1;
                audio.setAttribute('src', album[1][idSong].src);
                changeList(idSong);
                changeArticle();
                playPlayer();
            }
        }
    })
    // prev song
    previous.addEventListener('click', () => {
        if (idSong == 0) {
            idSong = album[1].length - 1;
            audio.setAttribute('src', album[1][idSong].src);
            changeList(idSong);
            changeArticle();
            playPlayer();
        } else {
            idSong = Number(idSong) - 1;
            audio.setAttribute('src', album[1][idSong].src);
            changeList(idSong);
            changeArticle();
            playPlayer();
        }
    })
    // play all
    playAll.addEventListener('click', () => {
        audio.setAttribute('src', album[1][0].src);
        playPlayer();
        changeList(0)
    });

    // random track
    random.addEventListener('click', () => {
        if(random.getAttribute('data-status') == "active") {
            random.setAttribute('data-status', "nonactive");
        } else {
            random.setAttribute('data-status', "active");
        }
    });

    // repeat
    repeat.addEventListener('click', () => {
        if(repeat.getAttribute('data-status') == "active") {
            audio.loop = false;
            repeat.setAttribute('data-status', "nonactive");
        } else {
            audio.loop = true;
            repeat.setAttribute('data-status', "active");
        }
    });


    // TIMELINE
    // animation
    let timelineIntreval;

    function timelineAnimation() {
        const  line = document.querySelector('.now');
        let lastTime;

        timelineIntreval = setInterval(() => {
            let audioCurrentTime = audio.currentTime;
            let audioNowProgress = (audioCurrentTime / audio.duration) * 100;

            if(audioCurrentTime == audio.duration && repeat.getAttribute('data-status') == "nonactive") {
                autoplay();
            }
            if(lastTime == audioCurrentTime) clearTimeout(timelineIntreval);

            document.documentElement.style.setProperty('--time', `${audioNowProgress}%`);
            document.documentElement.style.setProperty('--cursor', `${line.clientWidth - 5}px`);
            lastTime = audioCurrentTime;
        }, 500);
    };

    function stopTimelineAnimation() {
        clearTimeout(timelineIntreval);
    };
    // change
    const playerTimeline = document.querySelector('.player__controllers_timeline');

    playerTimeline.addEventListener('click', (e) => {
        let change = e.pageX - playerTimeline.offsetLeft;
        let size = (change / playerTimeline.clientWidth) * 100;
        let time = audio.duration / 100;
        let newTime = time * size;

        audio.currentTime = newTime;
    });

    // CHANGE VOLUME
    const   volumeLine  = document.querySelector('.player__volume_line'),
            volume      = document.querySelector('.player__volume');

    volume.addEventListener('click', (e) => {
        let change = e.pageX - volumeLine.offsetLeft;

        document.documentElement.style.setProperty('--volume', `${change}px`);

        audio.volume = (change / volumeLine.clientWidth).toFixed(1);
    });


    // NEXT TRACK
    function autoplay() {
        if (random.getAttribute('data-status') == 'active') {
            idSong = Number(Math.floor(Math.random() * (Number(album[1].length) - 1)));
            audio.setAttribute('src', album[1][idSong].src);
            changeList(idSong);
            changeArticle();

            stopTimelineAnimation();
            timelineAnimation();
            playPlayer();
        } else {
            idSong = Number(idSong) + 1;
            audio.setAttribute('src', album[1][idSong].src);
            changeList(idSong);
            changeArticle();
            
            playPlayer();
            stopTimelineAnimation();
            timelineAnimation();
        }
    };
});