import classes from '../components/css/MintItem.module.css'
import { useEffect, useState } from 'react'
import MintCard from './MintCard'
import RotimiContract from '../ethereum/rtm'

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

    const getTotalSupply = async () => {
        console.log('REACT_APP_TEST_NET_ADDRESS', process.env.REACT_APP_TEST_NET_ADDRESS)
        const totalSupply = await RotimiContract.methods.totalSupply().call()
        console.log(totalSupply)
    }

    useEffect(() => {
        getTotalSupply()
            .then(r => console.log('r', r))
            .catch(e => console.log('e', e))
    }, [])

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
                            <button className={classes.mintButton}>Mint</button>
                        </form>
                        <p className={classes.total}>{(enteredQuantity * (item.ethValue * 100)) / 100}ETH</p>
                    </div>
                </div>
            </MintCard>
        </li>
    )
}

export default MintItem
