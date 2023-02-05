import { FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'
import classes from './css/MainNavigation.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Col, Container, Row } from 'reactstrap'

function MainNavigation() {
    return (
        <>
            <header className={classes.header}>
                <Row className={'w-100 align-items-center'}>
                    <Col xs="12" md={'4'} className={'text-center text-md-start'}>
                        <img className={classes.logo} src="/images/romi-studio-logo-bgnone.png" alt="" />
                    </Col>
                    <Col xs="12" md={'4'} className={'text-center'}>
                        <h1 className={classes.heading}>SMALL TOWN BURNOUTS</h1>
                    </Col>
                    <Col xs="12" md={'4'} className={'justify-content-center d-flex text-center text-md-end mt-3 mt-sm-0'}>
                        <div
                            className={
                                classes.socialConnectStyle +
                                ' text-md-end' +
                                ' justify-content-lg-end' +
                                ' align-items-center' +
                                ' mb-4' +
                                ' mt-2' +
                                ' justify-content-sm-center'
                            }
                        >
                            <ul className={'mb-0 me-4'}>
                                <li>
                                    <a
                                        href="https://twitter.com/theburnoutsfilm"
                                        aria-label="Small Town Burnouts Twitter page"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/smalltownburnouts/?hl=en"
                                        aria-label="Small Town Burnouts Instagram page"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaInstagram />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.tiktok.com/@smalltownburnouts?is_from_webapp=1&sender_device=pc"
                                        aria-label="Small Town Burnouts TikTok page"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaTiktok />
                                    </a>
                                </li>
                            </ul>
                            <div>
                                <ConnectButton />
                            </div>
                        </div>
                    </Col>
                </Row>
            </header>
        </>
    )
}

export default MainNavigation
