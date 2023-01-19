import classes from '../components/css/MintItem.module.css'
import { useEffect, useState } from 'react'
import MintCard from './MintCard'
//import RotimiContract from '../ethereum/rtm'
import {
    useContract,
    useContractRead,
    useContractWrite,
    usePrepareContractWrite,
    useBalance,
    useAccount,
    useWaitForTransaction,
} from 'wagmi'
import { useDebounce } from 'usehooks-ts'
import compiledRotimi from '../ethereum/build/Rotimi_Smart_Contract.json'

//import { useConnectModal, useAccountModal, useChainModal } from '@rainbow-me/rainbowkit'
import { ethers } from 'ethers'
import web3 from '../ethereum/web3'

/*
tier
position
ethValue
usdValue
availability
nft
benefit
*/

function MintItem({ item }) {
    const [enteredQuantity, setEnteredQuantity] = useState(1)
    const [mintErrorMessage, setMintErrorMessage] = useState('')
    const [showMintErrorMessage, setShowMintErrorMessage] = useState(false)
    const [isMinting, setIsMinting] = useState(false)
    const [userAccountBalance, setUserAccountBalance] = useState(0)
    const [cost, setCost] = useState((enteredQuantity * (item.ethValue * 100)) / 100)
    const [isGeneralError, setIsGeneralError] = useState(false)
    const debouncedQuantity = useDebounce(item.tier, 500)
    //const { openConnectModal } = useConnectModal()
    //const { openAccountModal } = useAccountModal()
    //const { openChainModal } = useChainModal()
    const { address: userAddress, isConnecting, isDisconnected } = useAccount()
    const contract = useContract({ address: process.env.REACT_APP_TEST_NET_ADDRESS, abi: compiledRotimi })
    const {
        data: dataFromContract,
        isError,
        isLoading: contractReadIsLoading,
    } = useContractRead({
        address: process.env.REACT_APP_TEST_NET_ADDRESS,
        abi: compiledRotimi,
        functionName: 'totalSupply',
    })
    const ethCost = (enteredQuantity * (item.ethValue * 100)) / 100
    const {
        config,
        error: prepareError,
        isError: isPrepareError,
    } = usePrepareContractWrite({
        address: process.env.REACT_APP_TEST_NET_ADDRESS,
        abi: compiledRotimi,
        functionName: 'fundRotimi',
        args: [item.tier, enteredQuantity],
        enabled: userAccountBalance < ethCost ? false : Boolean(debouncedQuantity),
        overrides: {
            from: userAddress,
            value: ethers.utils.parseEther(ethCost.toString()),
        },
    })

    const { data, error: contractWriteError, isError: contractWriteIsError, write } = useContractWrite(config)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })

    const {
        data: balance,
        isError: balanceError,
        isLoading: balanceLoading,
    } = useBalance({
        address: userAddress,
    })

    useEffect(() => {
        if (balance) {
            console.log('balance', balance.formatted)
            setUserAccountBalance(parseInt(balance.formatted))
        }
        if (dataFromContract) {
            console.log('!!!! Total supply', parseInt(String(dataFromContract._hex)))
        }
    }, [balance])

    useEffect(() => {
        if (prepareError) {
            console.log('prepareError', prepareError)
        }
        if (contractWriteError) {
            console.log('contractWriteError', contractWriteError)
        }
    }, [prepareError, contractWriteError])

    function quantityChangeHandler(event) {
        setEnteredQuantity(event.target.value)
    }

    function increaseQuantity(event) {
        event.preventDefault()
        setEnteredQuantity(enteredQuantity + 1)
    }

    function decreaseQuantity(event) {
        event.preventDefault()
        enteredQuantity === 1 ? setEnteredQuantity(1) : setEnteredQuantity(enteredQuantity - 1)
    }

    const handleMintClick = async event => {
        event.preventDefault()

        await web3.eth.getAccounts(async (error, accounts) => {
            if (error !== null) {
                setMintErrorMessage('An error occurred ' + error)
                setShowMintErrorMessage(true)
            }
            // else if (accounts.length === 0) {
            //     setMintErrorMessage('Please connect your wallet')
            //     setShowMintErrorMessage(true)
            // }
            else {
                // for prod
                // if (
                //   ethereum.networkVersion === '4' ||
                //   ethereum.networkVersion === '42' ||
                //   ethereum.networkVersion === '3' ||
                //   ethereum.networkVersion === '5'
                // ) {
                //     setShowMintError(true)
                //     setMintErrorMessage('You are connected to a test network, please switch network to the mainnet and try again')
                //     return
                // }
                const ethCost = (enteredQuantity * (item.ethValue * 100)) / 100
                console.log('ethCost', ethCost)
                if (userAccountBalance < ethCost) {
                    setMintErrorMessage('Sorry insufficient funds to mint')
                    setShowMintErrorMessage(true)
                    setCost(ethCost)
                    return
                }
                setIsMinting(true)
                setShowMintErrorMessage(false)
                try {
                    setCost(ethCost)
                    const result = await write()
                    setIsMinting(isLoading)
                    console.log('result', result)
                    //setIsMinting(false)
                    setMintErrorMessage('')
                    setShowMintErrorMessage(false)
                } catch (error) {
                    setIsMinting(false)
                    setMintErrorMessage('An error occurred' + error)
                    setShowMintErrorMessage(true)
                }
            }
        })
        // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        // console.log('accounts', accounts)
        // const result = await RotimiContract.methods.mint(enteredQuantity).send({ from: accounts[0] })
        // console.log('result', result)
    }

    return (
        <li className={classes.card}>
            <MintCard>
                <div>
                    <div className={classes.sectionOne}>
                        <h3 className={classes.heading}>Tier {item.tier}</h3>
                        <p className={classes.position}> {item.position}</p>
                        <p className={classes.priceEth}>
                            {item.ethValue} ETH {/* <span className={classes.priceUsd}>(${item.usdValue})</span> */}
                        </p>
                        <p className={classes.availability}>{item.availability} NFTs Created</p>
                        <ul className={classes.nft}>
                            {item.nft.map(item => (
                                <li className={classes.nftItem}>{item}</li>
                            ))}
                        </ul>
                        <p className={classes.subheading}>Utilities and Perks:</p>
                        <ul className={classes.list}>
                            {item.benefit.map(item => (
                                <li className={classes.benefit}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={classes.sectionTwo}>
                        <form className={classes.form}>
                            <label className={classes.quantity} htmlFor="quantity">
                                Quantity
                            </label>
                            <div className={classes.counter}>
                                <button className={classes.button} id={classes.buttonDecrease} onClick={decreaseQuantity}>
                                    -
                                </button>
                                <input
                                    onChange={quantityChangeHandler}
                                    className={classes.input}
                                    type="number"
                                    id="quantity"
                                    min="1"
                                    max={item.availability}
                                    value={enteredQuantity}
                                    required
                                />
                                <button className={classes.button} onClick={increaseQuantity} id={classes.buttonIncrease}>
                                    +
                                </button>
                            </div>
                            <button
                                className={classes.mintButton}
                                disabled={isPrepareError || contractWriteIsError || showMintErrorMessage || !write || isLoading}
                                onClick={handleMintClick}>
                                {isLoading ? 'Minting...' : 'Mint'}
                            </button>
                            {isSuccess && (
                                <div>
                                    Successfully minted your NFT!
                                    <div>
                                        {/*<a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>*/}
                                        <a href={`https://goerli.etherscan.io/tx/${data?.hash}`} target="_blank">
                                            Etherscan
                                        </a>
                                    </div>
                                </div>
                            )}
                            {(isPrepareError || contractWriteIsError || showMintErrorMessage) && (
                                <>
                                    {(contractWriteError || mintErrorMessage || prepareError) && (
                                        <div>Error: {(prepareError || contractWriteError)?.message || mintErrorMessage}</div>
                                    )}
                                    {prepareError?.reason.includes('insufficient funds') && (
                                        <div>Error: {prepareError?.reason} minting disabled</div>
                                    )}
                                </>
                            )}
                        </form>
                        <p className={classes.total}>{(enteredQuantity * (item.ethValue * 100)) / 100}ETH</p>
                    </div>
                </div>
            </MintCard>
        </li>
    )
}

export default MintItem
