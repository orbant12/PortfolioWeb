import Editor from './components/ClippifyComponents/txtEditor/txtEditor';
import AiText from './components/ClippifyComponents/txtEditor/aiText';
import VideoFrame from './components/ClippifyComponents/videoFrame/videoFrame';
import TranscripterConvert from './components/ClippifyComponents/transcriptShow/transcripterConvert';
import StripePanel from './components/ClippifyComponents/Stripe/stripePanel';

import LexicalJPG from './assets/Lexical.jpeg';
import openAiJPG from './assets/openAi.jpeg';
import FFMPEGjpg from './assets/FFMPEG.png';
import SpeechToTextjpg from './assets/SpeechToText.png';
import Stripejpg from './assets/stripeIcon.png';
import FirebaseIcon from './assets/firebaseIcon.png';
import CORSIcon from './assets/CORS4.jpeg';
import CSSicon from './assets/CSS.png';
import HoverIcon from './assets/hover.png';
import EditIcon from './assets/edit.png';
import WatchLaterIcon from './assets/wlater.png';
import SEOIcon from './assets/seo.jpeg';
import CommentIcon from './assets/comment.jpeg';
import RichTextEditorIcon from './assets/richTE.png';
import ImageFrame from './components/ClippifyComponents/videoFrame/imageFrame';
import HoverFrame from './components/ClippifyComponents/videoFrame/hoverFrame';
import HovermeImage from './assets/hoverME2.jpeg';

import ExpoIcon from './assets/expoGo.png';

//INDIVIDUAL IMPORTS - CLIPPIFY
//TRANSCRIPT
import imageImport from "./assets/trans.png"

//YOUTUBE
const clippifyYoutube = 'https://firebasestorage.googleapis.com/v0/b/betterbyte-fbd6c.appspot.com/o/ClippifyYoutube.mp4?alt=media&token=83522971-5cdd-4d30-a83c-aff216ace91c'

//FFMPEG
const clippifyClip = "https://firebasestorage.googleapis.com/v0/b/betterbyte-fbd6c.appspot.com/o/ClippifyClip.mp4?alt=media&token=0e41e7dd-52ce-4475-b7c5-6effe7e35aae"

//UI CSS
import uiCSS from './assets/AdvancedCSS.png'
//REAL TIME EDIT
const realTimeEdit = 'https://firebasestorage.googleapis.com/v0/b/betterbyte-fbd6c.appspot.com/o/RealtimeEditClip.mp4?alt=media&token=ba922ba4-82ed-407b-8b67-b21ffc4ccecd'
//Watch Later
const watchLater = 'https://firebasestorage.googleapis.com/v0/b/betterbyte-fbd6c.appspot.com/o/WatchLaterClip.mp4?alt=media&token=4dd8ce07-62a3-477c-9426-e4f578c26734'
//Comment
const commentClip = 'https://firebasestorage.googleapis.com/v0/b/betterbyte-fbd6c.appspot.com/o/CommentClip.mp4?alt=media&token=c60753fb-a03c-4e1b-a71d-6598dff2b2f0'
//RATE
const rateClip = 'https://firebasestorage.googleapis.com/v0/b/betterbyte-fbd6c.appspot.com/o/RateClip.mp4?alt=media&token=51435711-e863-4685-90e9-800ee08f5d87'

//LUOPDY MOBILE
//CHATBOT
const chatbotClip = "https://firebasestorage.googleapis.com/v0/b/betterbyte-fbd6c.appspot.com/o/ChatBotClip.mp4?alt=media&token=82337e3e-13ad-4aa3-b55c-22ad652d7311"
//RICHTEXT
const richtextClip = 'https://firebasestorage.googleapis.com/v0/b/betterbyte-fbd6c.appspot.com/o/RichTextEditorClip.mp4?alt=media&token=88551dfd-1295-4697-919c-a77145892f3d'

//LUPODY SHORT
const LupodyYoutube = 'https://firebasestorage.googleapis.com/v0/b/betterbyte-fbd6c.appspot.com/o/LupodyShort.mp4?alt=media&token=4c0ea98c-f7d0-47d3-a209-a81c5b979c8e'


export const ClippifyData = {
    title: "Clippify",
    youtube: clippifyYoutube,
    navigation: "https://clippify.net",
    youtubeHref: "https://www.youtube.com/shorts/GkKWCNvXhrE",
    list: [
        "Clip trimming, saving, storing",
        "Machine Learning Model for transcript extraction",
        "Built-in OpenAi API - Fine Tuned",
        "Rich Text Editor",
        "Smooth Subscription and Payment with Stripe API",
        "Firebase Backend"
    ],
    expertise: [
    {
        logo: LexicalJPG,
        title: "Lexical Rich Text Editor",
        text: [
            "• Serialization & Deserialization (HTML, JSON)",
            "• Nodes (Transforms, Overrides)",
            "• Listeners",
            "• Custom Plugins (CODE, MARKDOWN, LINK, LIST)",
        ],
        show: () => <Editor />
      },
      {
        logo: openAiJPG,
        title: "Dealing with Video - FFmpeg",
        text: [
          "• Video type manipulation (blob, data:url, base64)",
          "• FFmpeg syntax for video manipulation",
          "• Timeline Bar from thumbnails"
        ],
        show: () => <AiText />
      },
      {
        logo: FFMPEGjpg,
        title: "Dealing with Video - FFmpeg",
        text: [
          "• Video type manipulation (blob, data:url, base64)",
          "• FFmpeg syntax for video manipulation",
          "• Timeline Bar from thumbnails"
        ],
        show: () => <VideoFrame videoSrc={clippifyClip} />
      },
      {
        logo: SpeechToTextjpg,
        title: "Machine Learning Model",
        text: [
            "• Video type manipulation (blob, data:url, base64)",
            "• FFmpeg syntax for video manipulation",
            "• Timeline Bar from thumbnails"
        ],
        show: () => <ImageFrame image={imageImport} />
      },
      {
        logo: Stripejpg,
        title: "Stripe Payment",
        text: [
            "• Video type manipulation (blob, data:url, base64)",
            "• FFmpeg syntax for video manipulation",
            "• Timeline Bar from thumbnails"
        ],
        show: () => <StripePanel />
      },
      {
        logo: FirebaseIcon,
        title: "User Authentication",
        text: [
            "• Video type manipulation (blob, data:url, base64)",
            "• FFmpeg syntax for video manipulation",
            "• Timeline Bar from thumbnails"
        ],
      
      },
      {
        logo: CORSIcon,
        title: "Cross Origin Isolation",
        text: [
            "• Proxy Server",
            "• CORS Policy",
            "• Header Manipulation",
            "• Limitations of Isolation"
        ],
      },
    ]
};

export const LupodyData = {
    title: "Lupody",
    youtube: LupodyYoutube,
    navigation: "https://github.com/orbant12/LupodyWeb",
    youtubeHref: "https://www.tiktok.com/@lupody.tv",
    list: [
      "Social Media Platform for Video Sharing",
      "Complex Backend Architecture",
      "Clip trimming, saving, storing",
      "Rich Text Editor",
      "Complex UI and UX",
      "Firebase Backend"
    ],
    expertise: [
      {
        logo: LexicalJPG,
        title: "Lexical Rich Text Editor",
        text: [
            "• Serialization & Deserialization (HTML, JSON)",
            "• Nodes (Transforms, Overrides)",
            "• Listeners",
            "• Custom Plugins (CODE, MARKDOWN, LINK, LIST)",
        ],
        show: () => <Editor />
      },
      {
        logo: FFMPEGjpg,
        title: "Dealing with Video - FFmpeg",
        text: [
          "• Video type manipulation (blob, data:url, base64)",
          "• FFmpeg syntax for video manipulation",
          "• Timeline Bar from thumbnails"
        ],
        show: () => <HoverFrame logo={HovermeImage} video={clippifyClip} />
      },
      // {
      //   logo:  HoverIcon,
      //   title: "Video Hover Effect",
      //   text: [
      //     "• Lazy Loading",
      //     "• Using HoverVideoPlayer Library",
      //     "• Additional Styling"
      //   ],
      //   show: () => <HoverFrame video={clippifyClip} logo={HovermeImage}/>
      // },
      {
        logo: EditIcon,
        title: "Realtime Video Details Editing",
        text: [
          "• API calls to backend",
          "• Database manipulation",
          "• Realtime Updates"
        ],
        show: () => <HoverFrame video={realTimeEdit} logo={HovermeImage} />
      },
      {
        logo: CommentIcon,
        title: "Rating System with Realtime Updates",
        text: [
          "Replying to comments",
          "",
          "Timeline Bar from thumbnails"
        ],
        show: () => <HoverFrame video={rateClip} logo={HovermeImage} />
      },
      {
        logo: WatchLaterIcon,
        title: "Whatch Later with Custom Playlist",
        text: [
          "• Saving ID of video to database",
          "• Fetching ID of video from database",
        ],
        show: () => <HoverFrame logo={HovermeImage} video={watchLater} />
      },
      
      {
        logo: SEOIcon,
        title: "Search Engine Optimization (SEO)",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: CommentIcon,
        title: "Commenting System with Realtime Updates",
        text: [
          "Replying to comments",
          "",
          "Timeline Bar from thumbnails"
        ],
        show: () => <HoverFrame logo={HovermeImage} video={commentClip} />
      },

      {
        logo: FirebaseIcon,
        title: "Complex Firestore Queries",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: CSSicon,
        title: "Complex CSS",
        text: [
            "• Theme Switching", 
            "• Flexbox layout",
            "• Responsive Design",
            "• CSS files organization",
        ],
      },
      {
        logo: FirebaseIcon,
        title: "Firebase Authentication",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: FirebaseIcon,
        title: "Storgae Management with Firebase",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },

    ]
};

export const LupodyMobileData = {
    title: "LupodyMobile",
    navigation: "https://www.tiktok.com/@lupody.tv",
    youtubeHref: "https://www.tiktok.com/@lupody.tv",
    list: [
      "Clip trimming, saving, storing",
      "Machine Learning Model for transcript extraction",
      "Built in OpenAi API - Fine Tuned",
      "Rich Text Editor",
      "Smooth Subscription and Payment with Stripe API",
      "Firebase Backend"
    ],
    expertise: [
      {
        logo: ExpoIcon,
        title: "Expo Ejection (EAS)",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: FFMPEGjpg,
        title: "Dealing with Video - FFmpeg",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ],
        show: () => <HoverFrame logo={HovermeImage} video={clippifyClip} />
      },
      {
        logo: RichTextEditorIcon,
        title: "Native Rich Text Editor",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ],
        show: () => <HoverFrame logo={HovermeImage} video={richtextClip} />
      },
      {
        logo: openAiJPG,
        title: "Mobile Ai Chatbot",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ],
        show: () => <HoverFrame logo={HovermeImage} video={chatbotClip} />
      },
    ]
};

export const ClippifyMobileData = {
    title: "ClippifyMobile",
    youtube: clippifyYoutube,
    youtubeHref: "https://www.youtube.com/shorts/GkKWCNvXhrE",
    navigation: "https://clippify.net",
    list: [
      "Clip trimming, saving, storing",
      "Machine Learning Model for transcript extraction",
      "Built in OpenAi API - Fine Tuned",
      "Rich Text Editor",
      "Smooth Subscription and Payment with Stripe API",
      "Firebase Backend"
    ],
    expertise: [
      {
        logo: ExpoIcon,
        title: "Expo Ejection (EAS)",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: FFMPEGjpg,
        title: "Dealing with Video - FFmpeg",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ],
        show: () => <HoverFrame logo={HovermeImage} video={clippifyClip} />
      },
      {
        logo: RichTextEditorIcon,
        title: "Native Rich Text Editor",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ],
        show: () => <HoverFrame logo={HovermeImage} video={richtextClip} />
      },
      {
        logo: openAiJPG,
        title: "Mobile Ai Chatbot",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ],
        show: () => <HoverFrame logo={HovermeImage} video={chatbotClip} />
      },
    ]
};
