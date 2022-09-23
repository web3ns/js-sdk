
export const WEB3_BASE_REGISTRAR_ABI = [
    'constructor(address _ens, bytes32 _baseNode)',
    'event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)',
    'event ApprovalForAll(address indexed owner, address indexed operator, bool approved)',
    'event ControllerAdded(address indexed controller)',
    'event ControllerRemoved(address indexed controller)',
    'event NameMigrated(uint256 indexed id, address indexed owner, uint256 expires)',
    'event NameRegistered(uint256 indexed id, address indexed owner, uint256 expires)',
    'event NameRenewed(uint256 indexed id, uint256 expires)',
    'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
    'event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)',
    'function GRACE_PERIOD() view returns (uint256)',
    'function addController(address controller)',
    'function approve(address to, uint256 tokenId)',
    'function available(uint256 id) view returns (bool)',
    'function balanceOf(address owner) view returns (uint256)',
    'function baseNode() view returns (bytes32)',
    'function controllers(address) view returns (bool)',
    'function ens() view returns (address)',
    'function getApproved(uint256 tokenId) view returns (address)',
    'function isApprovedForAll(address owner, address operator) view returns (bool)',
    'function name() view returns (string)',
    'function nameExpires(uint256 id) view returns (uint256)',
    'function owner() view returns (address)',
    'function ownerOf(uint256 tokenId) view returns (address)',
    'function reclaim(uint256 id, address owner)',
    'function register(uint256 id, address owner, uint256 duration) returns (uint256)',
    'function registerOnly(uint256 id, address owner, uint256 duration) returns (uint256)',
    'function removeController(address controller)',
    'function renew(uint256 id, uint256 duration) returns (uint256)',
    'function renounceOwnership()',
    'function safeTransferFrom(address from, address to, uint256 tokenId)',
    'function safeTransferFrom(address from, address to, uint256 tokenId, bytes data)',
    'function setApprovalForAll(address operator, bool approved)',
    'function setResolver(address resolver)',
    'function supportsInterface(bytes4 interfaceID) view returns (bool)',
    'function symbol() view returns (string)',
    'function tokenURI(uint256 tokenId) view returns (string)',
    'function transferFrom(address from, address to, uint256 tokenId)',
    'function transferOwnership(address newOwner)'
];