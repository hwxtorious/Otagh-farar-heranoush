import React, { useState, useEffect } from 'react';

import classes from './styles/games.module.scss';

import Grid from '@mui/material/Grid/Grid';
import Card from '@mui/material/Card/Card';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Typography';

import { LazyLoadImage } from 'react-lazy-load-image-component';
// import NeshanMap from 'react-neshan-map-leaflet';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { AllComments } from "../../api/GameComments";
import CallApi from "../../functions/CallApi";

import Loader from '../../components/loader/Loader';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import AnimationButton from '../../components/button/AnimationButton';
import BorderButton from '../../components/button/BorderButton';
import MouseHeader from '../../components/mouse/MouseHeader';
import UserComments from '../../components/userComments/UserComments';
import Reservation from '../../components/reservation/Reservation';
import Title from '../../components/title/Title';
import ToUp from '../../components/toUp/ToUp';
import AddComment from '../../components/addComment/AddComment';
import GameLevel from '../../components/gamelevel/GameLevel';

import corridor from '../../assets/images/corridor.png';
import mirage_cover from '../../assets/images/mirage_cover.png';
import location from '../../assets/images/location.png';
import locationSVG from '../../assets/svg/location.svg';
import metro from '../../assets/svg/metro.svg';

const Games = () => {
    let [loader, setLoader] = useState(false);
    let [addCommentOpen, setAddCommentOpen] = useState(false)
    let [userComments, setUserComments] = useState([]);

    const getPageData = async () => {
        setLoader(true);
        try {
            let responseComments = await CallApi(AllComments());
            let comments_data = [];
            responseComments.map(item => {
                comments_data.push(
                    <UserComments star={item.rate} name={item.name} message={item.opinion} />
                )
            });
            setUserComments(comments_data);
        } catch (error) {
            console.log(error);
        };
        setLoader(false);
    };

    useEffect(() => {
        getPageData();
    }, []);


    const addCommentOpenHandler = () => {
        setAddCommentOpen(true);
    };

    const addCommentCloseHandler = () => {
        setAddCommentOpen(false);
    };

    const updateLightCursor = (e) => {
        if (window.innerWidth > 900) {
            let x = e.clientX;
            let y = e.clientY;

            let corridorcursorX = document.getElementById('corridorImg');
            corridorcursorX.style.setProperty('--cursorX', x + 'px');
            let corridorcursorY = document.getElementById('corridorImg');
            corridorcursorY.style.setProperty('--cursorY', y + 'px');
        }
    };

    document.addEventListener('mousemove', updateLightCursor);
    document.addEventListener('touchmove', updateLightCursor);

    return (
        <>
            <Loader loader={loader} />
            <AddComment isOpen={addCommentOpen} closeHandler={addCommentCloseHandler} />
            <Navbar />
            <div className={classes.main}>
                <ToUp />
                <Grid container direction="column">
                    <Grid item xs={12}>
                        <div className={classes.corridorImg} id='corridorImg'>
                            <LazyLoadImage src={corridor} alt="" className={classes.sectionBoxImage} />
                            <MouseHeader target="senario" />
                            <div className={classes.gameTitle}>
                                <div className={classes.gameTitleBox}>
                                    <Title englishTitle="Mirage" persianTitle="میراژ" />
                                    <Typography variant='subtitle1' className={`title-normal ${classes.persianTitle2}`}>
                                        اتاق فراری ترسناک و هیجان انگیز
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.aboutGame} id="senario">
                            <svg className={classes.blubBackground} id="visual" viewBox="0 0 900 675" width="900" height="675" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1">
                                <g transform="translate(-57.92425895179775 25.01438341407942)">
                                    <path fill="black" d="M168.8 -305.9C247.6 -246.9 360.2 -259.9 450.2 -221C540.2 -182 607.6 -91 607 -0.3C606.5 90.3 537.9 180.7 478.9 273.3C419.9 366 370.5 461 292.2 466C214 471 107 386 12.9 363.6C-81.2 341.3 -162.3 381.5 -198.9 352.4C-235.4 323.4 -227.3 225 -251.1 154.7C-274.8 84.4 -330.4 42.2 -390.3 -34.6C-450.2 -111.3 -514.3 -222.7 -482.9 -279.7C-451.5 -336.7 -324.5 -339.4 -228.1 -388.2C-131.7 -437.1 -65.8 -532 -10.4 -514C45 -495.9 90 -364.9 168.8 -305.9"></path>
                                </g>
                            </svg>
                            <svg id="visual" viewBox="0 0 960 580" width="960" height="580" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" className={classes.gameCoverSVG} >
                                <defs>
                                    <pattern id="img1" width="1" height="1" x="0" y="0">
                                        <image href={mirage_cover} x="-125" y="-60" width="650" height="600" />
                                    </pattern>
                                </defs>
                                <g className={classes.blubCoverGame} transform="translate(493.54257146204156 281.2098991513734)">
                                    <path d="M104.7 -148.1C137 -97.6 165.5 -65.9 175.3 -28.3C185.1 9.4 176.1 52.9 162.6 110.3C149.1 167.7 131 238.9 90.7 256.8C50.5 274.7 -11.9 239.3 -71.4 211.1C-130.9 182.9 -187.6 162 -205.4 122.7C-223.2 83.3 -202.2 25.7 -188.9 -30.5C-175.7 -86.7 -170.1 -141.4 -139.9 -192.3C-109.7 -243.2 -54.9 -290.4 -9.3 -279.2C36.2 -268.1 72.3 -198.7 104.7 -148.1" fill="url(#img1)"></path>
                                </g>
                            </svg>
                            <div className={classes.aboutGameBox}>
                                <Card className={classes.senario}>
                                    <Title englishTitle="Senario" persianTitle="سناریو بازی" />
                                    <div className={classes.senarioContent}>
                                        <Typography variant='caption' className='caption text-2'>
                                            شما موفق شدین در مزایده ای که بانک برگزار کرده، برنده ی خانه ای متروکه بشین. پس از ورود به داخل خانه، متوجه میشین خانواده ای که قبلا در این خانه سکونت داشتن، دچار سرنوشت عجیبی شدن، سرنوشتی که شماهم درگیر اون میشین...
                                        </Typography>
                                        <AnimationButton data_hover="رزور" data_button="برای رزرو کلیک کنید!" target="reserve" />
                                    </div>
                                </Card>
                                <GameLevel hardshipLevel={95} fearLevel={90} />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.gmaeLocation} id="location">
                            <svg className={classes.blubBackgrounButton} id="visual" viewBox="0 0 900 675" width="900" height="675" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1">
                                <g transform="translate(-57.92425895179775 25.01438341407942)">
                                    <path fill="black" d="M168.8 -305.9C247.6 -246.9 360.2 -259.9 450.2 -221C540.2 -182 607.6 -91 607 -0.3C606.5 90.3 537.9 180.7 478.9 273.3C419.9 366 370.5 461 292.2 466C214 471 107 386 12.9 363.6C-81.2 341.3 -162.3 381.5 -198.9 352.4C-235.4 323.4 -227.3 225 -251.1 154.7C-274.8 84.4 -330.4 42.2 -390.3 -34.6C-450.2 -111.3 -514.3 -222.7 -482.9 -279.7C-451.5 -336.7 -324.5 -339.4 -228.1 -388.2C-131.7 -437.1 -65.8 -532 -10.4 -514C45 -495.9 90 -364.9 168.8 -305.9"></path>
                                </g>
                            </svg>
                            <LazyLoadImage src={location} className={classes.locationImage} />
                            <div className={classes.loactionGameBox}>
                                <Card className={classes.location}>
                                    <Title englishTitle="Location" persianTitle=" محل بازی" />
                                    <div className={classes.address}>
                                        <Typography variant='caption' className='caption text-2'>
                                            <LazyLoadImage src={metro} className={classes.locationIcon} /> نزدیک به ایستگاه مترو چیتگر
                                        </Typography>
                                        <Typography variant='caption' className='caption text-2'>
                                            <LazyLoadImage src={locationSVG} className={classes.locationIcon} /> تهران - چیتگر - بلوار کوهک - پلاک ۱۳
                                        </Typography>
                                    </div>
                                </Card>
                            </div>
                            {/* <NeshanMap
                                options={{
                                    key: 'web.51b9a0b22934458985b60079e219e7c6',
                                    center: [35.699739, 51.338097],
                                    zoom: 13
                                }}
                            /> */}
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.reservation} id="reserve">
                            <Title englishTitle="Reserve" persianTitle="رزرو بازی میراژ" />
                            <Reservation />
                        </div>
                    </Grid>
                    <div className={classes.commentsBg} id="comments">
                        <Title englishTitle="Comments" persianTitle="نظرات کاربران میراژ" />
                        <Hidden lgDown>
                            <AliceCarousel
                                disableDotsControls
                                disableButtonsControls
                                animationDuration={4000}
                                autoPlay
                                mouseTracking
                                infinite
                                responsive={{
                                    0: { items: 4, },
                                }}
                                items={userComments}
                            />
                        </Hidden>
                        <Hidden mdDown lgUp>
                            <AliceCarousel
                                disableDotsControls
                                disableButtonsControls
                                animationDuration={4000}
                                autoPlay
                                mouseTracking
                                infinite
                                responsive={{
                                    0: { items: 3, },
                                }}
                                items={userComments}
                            />
                        </Hidden>
                        <Hidden smDown mdUp>
                            <AliceCarousel
                                disableDotsControls
                                disableButtonsControls
                                animationDuration={4000}
                                autoPlay
                                mouseTracking
                                infinite
                                responsive={{
                                    0: { items: 2, },
                                }}
                                items={userComments}
                            />
                        </Hidden>
                        <Hidden smUp>
                            <AliceCarousel
                                disableDotsControls
                                disableButtonsControls
                                animationDuration={4000}
                                autoPlay
                                mouseTracking
                                infinite
                                responsive={{
                                    0: { items: 1, },
                                }}
                                items={userComments}
                            />
                        </Hidden>
                        <div className={classes.addCommentButton} >
                            <BorderButton clickEvent={addCommentOpenHandler} value="ثبت نظر" />
                        </div>
                    </div>
                </Grid>
            </div>
            <Footer />
        </>
    );
};

export default Games