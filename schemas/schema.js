
// Pages
import faq from './faqs';
import ccrs from './ccrs';
import minutes from './minutes';
import homepage from './homepage';
import residents from './residents';
import loginhome from './loginhome';
import committees from './committees';
import boardMembers from './boardMembers';
// Components & Support
import Members from '../components/Members';
import Expenses from '../components/Expenses';
import MotionMade from '../components/MotionMade';
import HomeContent from '../components/HomeContent';
import OtherMembers from '../components/OtherMembers';
import treasurersReport from './treasurersReport';
// Privacy & Terms
import privacypolicy from './privacypolicy';
import termsconditions from './termsconditions';
// Navigation
import navigation from './navigation';
import PageLinks from '../components/PageLinks';
//Heroes
import boardhero from './boardhero';
import ccrhero from './ccrhero';
import faqhero from './faqhero';
import minutehero from './minutehero';

export default [
    // Heroes
    boardhero,
    ccrhero,
    faqhero,
    minutehero,
    // Pages
    faq,
    ccrs,
    minutes,
    homepage,
    residents,
    loginhome,
    committees,
    boardMembers,
    // Privacy & Terms
    privacypolicy,
    termsconditions,
    // Components & Support
    Members,
    Expenses,
    MotionMade,
    HomeContent,
    OtherMembers,
    treasurersReport,
    // Navigation
    PageLinks,
    navigation,
]
