const domainName = 'http://abdellatif-laghjaj.ml/projects/';

const PORTFOLIO_DATA = [
    {
        id: 11,
        title: 'Todo List',
        description: 'Simple Todo List that allows you to save and edit your todos.',
        image: 'assets/img/portfolio/todo_list_web_app.png',
        link: 'https://github.com/abdellatif-laghjaj/todo-list',
        preview: domainName + 'todo-list/',
        tech: ['HTML', 'CSS', 'JS', 'DaisyUI'],
        category: 'web',
        isPopular: true,
    },
    {
        id: 12,
        title: 'Anime Random Quotes',
        description: 'Simple Anime Random Quotes that allows you to get a random quote from any anime.',
        image: 'assets/img/portfolio/anime_random_quote_generator.png',
        link: 'https://github.com/abdellatif-laghjaj/anime-random-quotes-generator',
        preview: domainName + 'anime-random-quotes-generator/',
        tech: ['HTML', 'CSS', 'JS', 'DaisyUI'],
        category: 'web',
        isPopular: true,
    },
    {
        id: 13,
        title: 'Currency Converter',
        description: 'Simple Currency Converter that allows you to convert any currency.',
        image: 'assets/img/portfolio/currency_converter.png',
        link: 'https://github.com/abdellatif-laghjaj/currency-converter',
        preview: domainName + 'currency-converter/',
        tech: ['HTML', 'CSS', 'JS', 'DaisyUI'],
        category: 'web',
        isPopular: true,
    },
    {
        id: 1,
        title: 'URL Shortener',
        description: 'Simple URL Shortener that allows you to shorten your URL and get a short link.',
        image: 'assets/img/portfolio/url_shortener.png',
        link: 'https://github.com/abdellatif-laghjaj/url-shortener',
        preview: domainName + 'url-shortener/',
        tech: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL', 'NodeJS'],
        category: 'web',
        isPopular: true,
    },
    {
        id: 2,
        title: 'Weather Web App',
        description: 'Simple Weather Web App that allows you to get the weather of any city.',
        image: 'assets/img/portfolio/weather_web_app.png',
        link: 'https://github.com/abdellatif-laghjaj/weather-web-app',
        preview: domainName + 'weather-web-app/',
        tech: ['HTML', 'CSS', 'JS'],
        category: 'web',
        isPopular: true,
    },
    {
        id: 3,
        title: 'Quotes Generator',
        description: 'Simple Quotes Generator that allows you to get a random quote.',
        image: 'assets/img/portfolio/quotes_generator.png',
        link: 'https://github.com/abdellatif-laghjaj/quotes-generator',
        preview: domainName + 'quotes-generator/',
        tech: ['HTML', 'CSS', 'JS'],
        category: 'web',
        isPopular: false,
    },
    {
        id: 4,
        title: 'Online Tech Store',
        description: 'Simple Online Tech Store that allows you to buy electronic prodcuts with admin panel.',
        image: 'assets/img/portfolio/online_tech_store.png',
        link: 'https://github.com/abdellatif-laghjaj/Ivenontory-managment-system',
        preview: 'https://github.com/abdellatif-laghjaj/Ivenontory-managment-system',
        tech: ['HTML', 'CSS', 'JS', 'Bootstrap', 'PHP', 'MySQL'],
        category: 'web',
        isPopular: true,
    },
    {
        id: 5,
        title: 'YouTube Video Downloader',
        description: 'Simple YouTube Video Downloader that allows you to download any video from YouTube and also the thumbnail of the video.',
        image: 'assets/img/portfolio/php_youtube_video_dw.png',
        link: 'https://github.com/abdellatif-laghjaj/youtube_video_downloader',
        preview: domainName + 'youtube_video_downloader/',
        tech: ['HTML', 'CSS', 'JS', 'PHP'],
        category: 'web',
        isPopular: true,
    },
    {
        id: 6,
        title: 'Portfolio',
        description: 'Simple and clean Portfolio for my personal projects.',
        image: 'assets/img/portfolio/portfolio.png',
        link: 'https://github.com/abdellatif-laghjaj/portfolio',
        preview: 'https://abdellatif-laghjaj.github.io/portfolio/',
        tech: ['HTML', 'CSS', 'JS'],
        category: 'web',
        isPopular: true,
    },
    {
        id: 7,
        title: 'Music Player',
        description: 'Simple Music Player that allows you to play your local music from your computer.',
        image: 'assets/img/portfolio/music_player.png',
        link: 'https://github.com/abdellatif-laghjaj/Music-Player',
        preview: 'https://github.com/abdellatif-laghjaj/Music-Player',
        tech: ['C#', 'WPF', 'Windows Media Player'],
        category: 'desktop',
        isPopular: false,
    },
    {
        id: 8,
        title: 'Personal Expenses Tracker',
        description: 'Simple Personal Expenses Tracker that allows you to track your expenses.',
        image: 'assets/img/portfolio/personal_expenses_app.png',
        link: 'https://github.com/abdellatif-laghjaj/personal_expenses_app',
        preview: 'https://github.com/abdellatif-laghjaj/personal_expenses_app',
        tech: ['DART', 'Flutter'],
        category: 'mobile',
        isPopular: false,
    },
    {
        id: 9,
        title: 'Android all in one video downloader',
        description: 'Simple Android all in one video downloader that allows you to download any video from YouTube and also the thumbnail of the video.',
        image: 'assets/img/portfolio/android_all_in_one.png',
        link: 'https://github.com/abdellatif-laghjaj/android-all-in-one-video-downloader',
        preview: 'https://github.com/abdellatif-laghjaj/android-all-in-one-video-downloader',
        tech: ['JAVA', 'Android-dl'],
        category: 'mobile',
        isPopular: false,
    },
    {
        id: 10,
        title: 'Flutter Meals App',
        description: 'Simple Static Flutter Meals App that fetch static meals data',
        image: 'assets/img/portfolio/flutter_meals_app.png',
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
        image: 'assets/service_1.png',
    },
    {
        id: 2,
        title: 'Mobile Development',
        description: 'I am a mobile developer, I can build your mobile app from scratch or I can help you to update your mobile app.',
        image: 'assets/service_2.png',
    },
    {
        id: 3,
        title: 'Desktop Development',
        description: 'I am a desktop developer, I can build your desktop app from scratch or I can help you to update your desktop app.',
        image: 'assets/service_3.png',
    }
];