// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";

//contract RotimiSmartContract is Ownable, ERC721Enumerable, Context, ReentrancyGuard {
contract RotimiSmartContract is Context, ERC721URIStorage, ERC721Enumerable, Ownable, AccessControl, ReentrancyGuard {
    using Strings for uint256;
    using Counters for Counters.Counter;

    string public baseURI;
    string public baseExtension = ".json";
    //uint256 private _reserved = 18;
    uint256 public maxSupply = 3060;
    //uint256 public maxMintAmount = 6;
    bool public paused = false;
    mapping(address => bool) public whitelisted;
    uint256 private _weiRaised;
    //Balances
    mapping(address => uint256) private userBalance;
    mapping(uint8 => uint256) public tokenTierCounter;
    mapping(uint8 => uint256) private tokenTierUnitCost;
    mapping(uint8 => uint256) private tokenTierMax;

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    Counters.Counter private _tokenIds;

    /*
     * Event for funding
     * @param sender who send funds
     * @param amount transfered
     */
    event Funding(address indexed sender, uint256 amount);

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _initBaseURI
    ) ERC721(_name, _symbol) {
        setBaseURI(_initBaseURI);
        //mint(msg.sender, 6);
        _setupRole(MINTER_ROLE, msg.sender);
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);

        tokenTierMax[1] = 3000;
        tokenTierMax[2] = 50;
        tokenTierMax[3] = 10;

        tokenTierUnitCost[1] = 130000000000000000;
        tokenTierUnitCost[2] = 630000000000000000;
        tokenTierUnitCost[3] = 3130000000000000000;
    }

    // internal
    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    function stringToBytes32(string memory source) public pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            result := mload(add(source, 32))
        }
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721Enumerable, AccessControl, ERC721) returns (bool) {

        return super.supportsInterface(interfaceId);

    }

    function tokenURI(uint256 tokenId)
    public
    view
    override(ERC721, ERC721URIStorage)
    returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721URIStorage, ERC721) {
        super._burn(tokenId);
    }

    // now internal
    function mint(address _to, uint256 tokenId) internal virtual {
        uint256 supply = totalSupply();
        require(!paused);
        require(tokenId > 0);
        require(supply + tokenId <= maxSupply);
        _safeMint(_to, tokenId);
    }

    function fundRotimi(uint8 _tier, uint256 _tokenAmount) public payable nonReentrant {
        address spender = _msgSender();
        _preValidateFunding(msg.value);
        _preValidateAmount(msg.value, _tier, _tokenAmount);
        require(!paused);

        // Update user balance
        userBalance[spender] = userBalance[spender] + msg.value;

        // update state
        _weiRaised = _weiRaised + msg.value;

        emit Funding(spender, msg.value);

        for (uint256 i; i < _tokenAmount; i++) {

            string memory _tokenUri = "";
            tokenTierCounter[_tier]++;
            _tokenUri = returnTokenURI(_tier, tokenTierCounter[_tier]);
            awardNFT(spender, _tokenUri);

        }
    }

    function awardNFT(address _to, string memory _tokenURI) private returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        mint(_to, newItemId);
        _setTokenURI(newItemId, _tokenURI);

        return newItemId;
    }

    function _preValidateFunding(uint256 weiAmount) internal pure {
        require(weiAmount != 0, "Rotimi: weiAmount is 0");
    }

    function _preValidateAmount(uint256 weiAmount, uint8 _tier, uint256 _tokenAmount) internal view {
        uint256 weiTotal;
        uint256 tokensAvailabe;

        weiTotal = tokenTierUnitCost[_tier] * _tokenAmount;
        tokensAvailabe = tokenTierMax[_tier] - tokenTierCounter[_tier];

        require(weiTotal <= weiAmount, "Rotimi: Amount sent is not enough");
        require(tokensAvailabe >= _tokenAmount, "Rotimi: No tokens enough for required tier");
    }

    function returnTokenURI(uint8 _tier, uint256 _counter)
    public
    view
    virtual
    returns (string memory)
    {

        string memory currentBaseURI = _baseURI();
        return bytes(currentBaseURI).length > 0
        //? string(abi.encodePacked(currentBaseURI, "tier_",_tier.toString(), "_", _counter.toString(), baseExtension))
        ? string(abi.encodePacked("tier_",Strings.toString(_tier), "_", _counter.toString(), baseExtension))
        : "";
    }

    function getTokenURI(uint256 tokenId)
    public
    view
    virtual
    returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        string memory currentBaseURI = _baseURI();
        return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
        : "";
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
        baseExtension = _newBaseExtension;
    }

    function pause(bool _state) public onlyOwner {
        paused = _state;
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
    internal
    override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function whitelistUser(address _user) public onlyOwner {
        whitelisted[_user] = true;
    }

    // function totalSupply() public view virtual override(ERC721Enumerable) returns (uint256) {
    //     return _totalSupply;
    // }

    /**
     * @return the amount of wei raised.
     */
    function weiRaised() public view returns (uint256) {
        return _weiRaised;
    }

    function removeWhitelistUser(address _user) public onlyOwner {
        whitelisted[_user] = false;
    }

    function withdraw() public payable onlyOwner {
        require(payable(msg.sender).send(address(this).balance));
    }
}
