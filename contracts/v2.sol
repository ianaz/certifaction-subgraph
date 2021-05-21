pragma solidity ^0.6.2;

contract ClaimLog {
  event Claim(bytes32 indexed file, bytes32 hash);

  function registerClaim(bytes32[] memory files, bytes32[] memory hashes) public {
    for (uint i=0; i<files.length; i++) {
      emit Claim(files[uint(i)],hashes[uint(i)]);
    }
  }
}
