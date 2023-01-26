import AboutSection from './components/AboutSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import MainNavigation from './components/MainNavigation'
import MintSection from './components/MintSection'
import RoadmapSection from './components/RoadmapSection'
import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { infuraProvider } from 'wagmi/providers/infura'
import { mainnet, goerli } from 'wagmi/chains'
//import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap'

//
// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()
// import express from 'express'

function App() {
    const { chains, provider } = configureChains(
        [mainnet, goerli],
        [infuraProvider({ apiKey: '39b610faa30949e4a9679fabb6a648ab' }), publicProvider()],
    )
    const { connectors } = getDefaultWallets({
        appName: 'My RainbowKit App',
        chains,
    })
    const wagmiClient = createClient({
        autoConnect: true,
        connectors,
        provider,
    })
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                <Container fluid>
                    <MainNavigation />
                    <HeroSection />
                    <RoadmapSection />
                    <MintSection />
                    <AboutSection />
                    <FAQSection />
                    <Footer />
                </Container>
            </RainbowKitProvider>
        </WagmiConfig>
    )
}

export default App
