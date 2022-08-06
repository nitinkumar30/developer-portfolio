const domainName = 'http://abdellatif-laghjaj.ml/projects/';
const imagesPath = 'assets/img/portfolio/';

const PORTFOLIO_DATA = [
    {
        id: 1,
        title: 'Quiz Game (JavaScript)',
        description: 'An advanced quiz game built with HTML, CSS, JavaScript. you can choose a category, number of questions and difficulty level.',
        image: imagesPath + 'quiz_game_web_app.png',
        link: 'https://github.com/abdellatif-laghjaj/quiz-game',
        preview: domainName + 'quiz-game/',
        tech: ['HTML', 'CSS', 'JavaScript'],
        category: 'web',
        isPopular: true,
    },
    {
        id: 2,
        title: 'Todo List',
        description: 'Simple Todo List that allows you to save and edit your todos.',
        image: imagesPath + 'todo_list_web_app.png',
        link: 'https://github.com/abdellatif-laghjaj/todo-list',
        preview: domainName + 'todo-list/',
        tech: ['HTML', 'CSS', 'JS', 'DaisyUI'],
        category: 'web',
        isPopular: true,
    },
    {
        id: 3,
        title: 'Anime Random Quotes',
        description: 'Simple Anime Random Quotes that allows you to get a random quote from any anime.',
        image: imagesPath + 'anime_random_quote_generator.png',
        link: 'https://github.com/abdellatif-laghjaj/anime-random-quotes-generator',
        preview: domainName + 'anime-random-quotes-generator/',
        tech: ['HTML', 'CSS', 'JS', 'DaisyUI'],
        category: 'web',
        isPopular: true,
    },
    {
        id: 4,
        title: 'Currency Converter',
        description: 'Simple Currency Converter that allows you to convert any currency.',
        image: imagesPath + 'currency_converter.png',
        link: 'https://github.com/abdellatif-laghjaj/currency-converter',
        preview: domainName + 'currency-converter/',
        tech: ['HTML', 'CSS', 'JS', 'DaisyUI'],
        category: 'web',
        isPopular: true,
    },
    {
        id: 5,
        title: 'URL Shortener',
        description: 'Simple URL Shortener that allows you to shorten your URL and get a short link.',
        image: imagesPath + 'url_shortener.png',
        link: 'https://github.com/abdellatif-laghjaj/url-shortener',
        preview: domainName + 'url-shortener/',
        tech: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL', 'NodeJS'],
        category: 'web',
        isPopular: true,
    },
    {
        id: 6,
        title: 'Weather Web App',
        description: 'Simple Weather Web App that allows you to get the weather of any city.',
        image: imagesPath + 'weather_web_app.png',
        link: 'https://github.com/abdellatif-laghjaj/weather-web-app',
        preview: domainName + 'weather-web-app/',
        tech: ['HTML', 'CSS', 'JS'],
        category: 'web',
        isPopular: true,
    },
    {
        id: 7,
        title: 'Quotes Generator',
        description: 'Simple Quotes Generator that allows you to get a random quote.',
        image: imagesPath + 'quotes_generator.png',
        link: 'https://github.com/abdellatif-laghjaj/quotes-generator',
        preview: domainName + 'quotes-generator/',
        tech: ['HTML', 'CSS', 'JS'],
        category: 'web',
        isPopular: false,
    },
    {
        id: 8,
        title: 'Online Tech Store',
        description: 'Simple Online Tech Store that allows you to buy electronic prodcuts with admin panel.',
        image: imagesPath + 'online_tech_store.png',
        link: 'https://github.com/abdellatif-laghjaj/Ivenontory-managment-system',
        preview: 'https://github.com/abdellatif-laghjaj/Ivenontory-managment-system',
        tech: ['HTML', 'CSS', 'JS', 'Bootstrap', 'PHP', 'MySQL'],
        category: 'web',
        isPopular: true,
    },
    {
        id: 9,
        title: 'YouTube Video Downloader',
        description: 'Simple YouTube Video Downloader that allows you to download any video from YouTube and also the thumbnail of the video.',
        image: imagesPath + 'php_youtube_video_dw.png',
        link: 'https://github.com/abdellatif-laghjaj/youtube_video_downloader',
        preview: domainName + 'youtube_video_downloader/',
        tech: ['HTML', 'CSS', 'JS', 'PHP'],
        category: 'web',
        isPopular: true,
    },
    {
        id: 10,
        title: 'Portfolio',
        description: 'Simple and clean Portfolio for my personal projects.',
        image: imagesPath + 'portfolio.png',
        link: 'https://github.com/abdellatif-laghjaj/portfolio',
        preview: 'https://abdellatif-laghjaj.github.io/portfolio/',
        tech: ['HTML', 'CSS', 'JS'],
        category: 'web',
        isPopular: true,
    },
    {
        id: 11,
        title: 'Music Player',
        description: 'Simple Music Player that allows you to play your local music from your computer.',
        image: imagesPath + 'music_player.png',
        link: 'https://github.com/abdellatif-laghjaj/Music-Player',
        preview: 'https://github.com/abdellatif-laghjaj/Music-Player',
        tech: ['C#', 'WPF', 'Windows Media Player'],
        category: 'desktop',
        isPopular: false,
    },
    {
        id: 12,
        title: 'Personal Expenses Tracker',
        description: 'Simple Personal Expenses Tracker that allows you to track your expenses.',
        image: imagesPath + 'personal_expenses_app.png',
        link: 'https://github.com/abdellatif-laghjaj/personal_expenses_app',
        preview: 'https://github.com/abdellatif-laghjaj/personal_expenses_app',
        tech: ['DART', 'Flutter'],
        category: 'mobile',
        isPopular: false,
    },
    {
        id: 13,
        title: 'Android all in one video downloader',
        description: 'Simple Android all in one video downloader that allows you to download any video from YouTube and also the thumbnail of the video.',
        image: imagesPath + 'android_all_in_one.png',
        link: 'https://github.com/abdellatif-laghjaj/android-all-in-one-video-downloader',
        preview: 'https://github.com/abdellatif-laghjaj/android-all-in-one-video-downloader',
        tech: ['JAVA', 'Android-dl'],
        category: 'mobile',
        isPopular: false,
    },
    {
        id: 14,
        title: 'Flutter Meals App',
        description: 'Simple Static Flutter Meals App that fetch static meals data',
        image: imagesPath + 'flutter_meals_app.png',
        link: 'https://github.com/abdellatif-laghjaj/flutter_meals_app',
        preview: 'https://github.com/abdellatif-laghjaj/flutter_meals_app',
        tech: ['DART', 'Flutter'],
        category: 'mobile',
        isPopular: false,
    },
];


const SERVICES_DATA = [
    {
        id: 1,
        title: 'Web Development',
        description: 'I am a web developer, I can build your website from scratch or I can help you to update your website.',
        color: '#1F4690',
        image: '<i class="fa-solid fa-code fa-4x"></i>'
    },
    {
        id: 2,
        title: 'Mobile Development',
        description: 'I am a mobile developer, I can build your mobile app from scratch or I can help you to update your mobile app.',
        color: '#5FD068',
        image: '<i class="fa-brands fa-android fa-4x"></i>'
    },
    {
        id: 3,
        title: 'Desktop Development',
        description: 'I am a desktop developer, I can build your desktop app from scratch or I can help you to update your desktop app.',
        color: '#FFCB00',
        image: '<i class="fa-solid fa-laptop fa-4x"></i>'
    }
];

const SKILLS_DATA = [
    {
        id: 1,
        title: 'HTML',
        percentage: '95%',
        color: '#D84924',
    },
    {
        id: 2,
        title: 'CSS',
        percentage: '50%',
        color: '#1D87DC',
    },
    {
        id: 3,
        title: 'JavaScript',
        percentage: '60%',
        color: '#DCA71C',
    },
    {
        id: 4,
        title: 'Vue Js',
        percentage: '50%',
        color: '#3FB27F',
    },
    {
        id: 5,
        title: 'PHP',
        percentage: '70%',
        color: '#7E10F0',
    },
    {
        id: 6,
        title: 'MySQL',
        percentage: '90%',
        color: '#005C83',
    },
    {
        id: 7,
        title: 'Laravel',
        percentage: '60%',
        color: '#F7291B',
    },
    {
        id: 8,
        title: 'Java',
        percentage: '70%',
        color: '#F09112',
    },
];


const SOCIAL_MEDIA_LINKS = [
    {
        id: 1,
        icon: 'fa-linkedin-in',
        link: 'https://www.linkedin.com/in/abdellatif-laghjaj/',
    },
    {
        id: 2,
        icon: 'fa-github',
        link: 'https://github.com/abdellatif-laghjaj',
    },
    {
        id: 3,
        icon: 'fa-codepen',
        link: 'https://codepen.io/abdellatif-laghjaj',
    },
    {
        id: 4,
        icon: 'fa-instagram',
        link: 'https://www.instagram.com/abdellatif_laghjaj/',
    },
    {
        id: 5,
        icon: 'fa-facebook',
        link: 'https://www.facebook.com/abdelatif.laghjaj',
    }
];