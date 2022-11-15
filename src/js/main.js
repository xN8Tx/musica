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
            name: 'Concreate',
            group: 'Crystal Castles',
            time: '196',
            src: 'audio/9Concreate.mp3'
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
        audio.pause()
        play.setAttribute('data-status', 'pause');
    }
    function playPlayer() {
        play.innerHTML = `
        <svg width="9" height="10" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 3.5H18H17ZM17 16.5H16H17ZM15.3902 1.03843L15.5853 0.0576441L15.3902 1.03843ZM16.9619 2.60986L15.9811 2.80495L16.9619 2.60986ZM12.0384 2.60986L11.0576 2.41477V2.41477L12.0384 2.60986ZM13.6094 1.03843L13.8045 2.01921L13.6094 1.03843ZM14.4996 19V20V19ZM13.6094 18.9615L13.4143 19.9423L13.6094 18.9615ZM12.0384 17.3902L13.0192 17.1951L12.0384 17.3902ZM15.3902 18.9615L15.1951 17.9808L15.3902 18.9615ZM16.9619 17.3902L17.9427 17.5853L16.9619 17.3902ZM6 3.5H7H6ZM6 16.5H5H6ZM4.39018 1.03843L4.58527 0.0576441H4.58527L4.39018 1.03843ZM5.96191 2.60986L4.98113 2.80495L5.96191 2.60986ZM1.03843 2.60986L0.0576441 2.41477V2.41477L1.03843 2.60986ZM2.60938 1.03843L2.80447 2.01921H2.80447L2.60938 1.03843ZM3.49956 19V20V19ZM2.60938 18.9615L2.41428 19.9423L2.60938 18.9615ZM1.03843 17.3902L2.01921 17.1951L1.03843 17.3902ZM4.39018 18.9615L4.19509 17.9808L4.39018 18.9615ZM5.96191 17.3902L6.9427 17.5853L5.96191 17.3902ZM13 16.5V3.5H11V16.5H13ZM16 3.5V16.5H18V3.5H16ZM14.5 2C15.0126 2 15.1228 2.00484 15.1951 2.01921L15.5853 0.0576441C15.2711 -0.00484347 14.9167 0 14.5 0V2ZM18 3.5C18 3.08463 18.0052 2.7292 17.9427 2.41477L15.9811 2.80495C15.9954 2.87692 16 2.98607 16 3.5H18ZM15.1951 2.01921C15.592 2.09816 15.9023 2.40848 15.9811 2.80495L17.9427 2.41477C17.7059 1.22449 16.7751 0.294321 15.5853 0.0576441L15.1951 2.01921ZM13 3.5C13 2.98742 13.0048 2.8772 13.0192 2.80495L11.0576 2.41477C10.9952 2.72892 11 3.08327 11 3.5H13ZM14.5 0C14.0833 0 13.7284 -0.00484598 13.4143 0.0576442L13.8045 2.01921C13.8767 2.00485 13.9874 2 14.5 2V0ZM13.0192 2.80495C13.0982 2.40791 13.4081 2.09805 13.8045 2.01921L13.4143 0.0576442C12.2239 0.294434 11.2943 1.22505 11.0576 2.41477L13.0192 2.80495ZM14.4996 18C13.987 18 13.8767 17.9951 13.8045 17.9808L13.4143 19.9423C13.7284 20.0048 14.0828 20 14.4996 20V18ZM11 16.5C11 16.9167 10.9952 17.2711 11.0576 17.5853L13.0192 17.1951C13.0048 17.1228 13 17.0126 13 16.5H11ZM13.8045 17.9808C13.4081 17.9019 13.0982 17.5921 13.0192 17.1951L11.0576 17.5853C11.2943 18.775 12.2239 19.7056 13.4143 19.9423L13.8045 17.9808ZM14.4996 20C14.9162 20 15.2711 20.0048 15.5853 19.9423L15.1951 17.9808C15.1229 17.9951 15.0122 18 14.4996 18V20ZM16 16.5C16 17.0139 15.9954 17.1231 15.9811 17.1951L17.9427 17.5853C18.0052 17.2708 18 16.9154 18 16.5H16ZM15.5853 19.9423C16.7751 19.7057 17.7059 18.7756 17.9427 17.5853L15.9811 17.1951C15.9023 17.5915 15.592 17.9018 15.1951 17.9808L15.5853 19.9423ZM2 16.5V3.5H0V16.5H2ZM5 3.5V16.5H7V3.5H5ZM3.5 2C4.01259 2 4.12284 2.00484 4.19509 2.01921L4.58527 0.0576441C4.27112 -0.00484347 3.91672 0 3.5 0V2ZM7 3.5C7 3.08463 7.00524 2.7292 6.9427 2.41477L4.98113 2.80495C4.99544 2.87692 5 2.98607 5 3.5H7ZM4.19509 2.01921C4.592 2.09816 4.90227 2.40848 4.98113 2.80495L6.9427 2.41477C6.70594 1.22449 5.77513 0.294321 4.58527 0.0576441L4.19509 2.01921ZM2 3.5C2 2.98742 2.00484 2.8772 2.01921 2.80495L0.0576441 2.41477C-0.00484324 2.72892 0 3.08327 0 3.5H2ZM3.5 0C3.08334 0 2.72844 -0.00484598 2.41428 0.0576442L2.80447 2.01921C2.8767 2.00485 2.98735 2 3.5 2V0ZM2.01921 2.80495C2.09819 2.40791 2.40812 2.09805 2.80447 2.01921L2.41428 0.0576442C1.22386 0.294434 0.294294 1.22505 0.0576441 2.41477L2.01921 2.80495ZM3.49956 18C2.98697 18 2.87671 17.9951 2.80447 17.9808L2.41428 19.9423C2.72843 20.0048 3.08283 20 3.49956 20V18ZM0 16.5C0 16.9167 -0.00484359 17.2711 0.0576442 17.5853L2.01921 17.1951C2.00484 17.1228 2 17.0126 2 16.5H0ZM2.80447 17.9808C2.40808 17.9019 2.09818 17.5921 2.01921 17.1951L0.0576442 17.5853C0.294304 18.775 1.22391 19.7056 2.41428 19.9423L2.80447 17.9808ZM3.49956 20C3.91621 20 4.27111 20.0048 4.58527 19.9423L4.19509 17.9808C4.12285 17.9951 4.0122 18 3.49956 18V20ZM5 16.5C5 17.0139 4.99544 17.1231 4.98113 17.1951L6.9427 17.5853C7.00524 17.2708 7 16.9154 7 16.5H5ZM4.58527 19.9423C5.77508 19.7057 6.70593 18.7756 6.9427 17.5853L4.98113 17.1951C4.90227 17.5915 4.59204 17.9018 4.19509 17.9808L4.58527 19.9423Z" fill="white"/>
        </svg>
        `
        audio.play()
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

    play.addEventListener('click', (e) => {
        if(play.getAttribute('data-status') == 'pause') {
            play.innerHTML = `
                <svg width="9" height="10" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 2.5V15.5C11 15.9647 11 16.197 11.0384 16.3902C11.1962 17.1836 11.816 17.8037 12.6094 17.9615C12.8026 18 13.0349 18 13.4996 18C13.9642 18 14.197 18 14.3902 17.9615C15.1836 17.8037 15.8041 17.1836 15.9619 16.3902C16 16.1987 16 15.9687 16 15.5122V15.5V2.5V2.48777C16 2.03126 16 1.80136 15.9619 1.60986C15.8041 0.816482 15.1836 0.196243 14.3902 0.0384294C14.197 0 13.9647 0 13.5 0C13.0353 0 12.8026 0 12.6094 0.0384295C11.816 0.196243 11.1962 0.816482 11.0384 1.60986C11 1.80306 11 2.03534 11 2.5Z" fill="white"/>
                    <path d="M0 2.5V15.5C0 15.9647 0 16.197 0.0384295 16.3902C0.196243 17.1836 0.815994 17.8037 1.60938 17.9615C1.80257 18 2.0349 18 2.49956 18C2.96421 18 3.19698 18 3.39018 17.9615C4.18356 17.8037 4.8041 17.1836 4.96191 16.3902C5 16.1987 5 15.9687 5 15.5122V15.5V2.5V2.48777C5 2.03126 5 1.80136 4.96191 1.60986C4.8041 0.816482 4.18356 0.196243 3.39018 0.0384294C3.19698 0 2.96465 0 2.5 0C2.03535 0 1.80257 0 1.60938 0.0384295C0.815994 0.196243 0.196243 0.816482 0.0384294 1.60986C0 1.80306 0 2.03534 0 2.5Z" fill="white"/>
                </svg>
            `
            audio.play()
            play.setAttribute('data-status', 'play');
        } else if(play.getAttribute('data-status') == 'play') {
            play.innerHTML = `
                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.333344 4.77269V2.95366C0.333344 0.619264 1.98563 -0.33566 4.0017 0.831537L5.57814 1.741L7.15463 2.65047C9.17069 3.81767 9.17069 5.7277 7.15463 6.8949L5.57814 7.80437L4.0017 8.71383C1.98563 9.88103 0.333344 8.92611 0.333344 6.59171V4.77269Z" fill="#EFEEE0"/>
                </svg> 
            `
            audio.pause()
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
            audio.setAttribute('src', album[1][idSong].src);
            playPlayer();
        }
        prevIdSong = idSong;
    }); 

    // next song
    next.addEventListener('click', () => {
        if (idSong == album[1].length - 1) {
            idSong = 0;
            audio.setAttribute('src', album[1][idSong].src);
            changeList(idSong);
            playPlayer();
        } else {
            idSong = Number(idSong) + 1;
            audio.setAttribute('src', album[1][idSong].src);
            changeList(idSong);
            playPlayer();
        }
    })
    // prev song
    previous.addEventListener('click', () => {
        if (idSong == 0) {
            idSong = album[1].length - 1;
            audio.setAttribute('src', album[1][idSong].src);
            changeList(idSong);
            playPlayer();
        } else {
            idSong = Number(idSong) - 1;
            audio.setAttribute('src', album[1][idSong].src);
            changeList(idSong);
            playPlayer();
        }
    })
    // play all
    playAll.addEventListener('click', () => {
        audio.setAttribute('src', album[1][0].src);
        playPlayer();
        changeList(0)
    });
});