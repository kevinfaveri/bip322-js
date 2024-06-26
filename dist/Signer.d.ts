/// <reference types="node" />
/**
 * Class that signs BIP-322 signature using a private key.
 * Reference: https://github.com/LegReq/bip0322-signatures/blob/master/BIP0322_signing.ipynb
 */
declare class Signer {
    /**
     * Sign a BIP-322 signature from P2WPKH, P2SH-P2WPKH, and single-key-spend P2TR address and its corresponding private key.
     * Network is automatically inferred from the given address.
     *
     * @param privateKey Private key used to sign the message
     * @param address Address to be signing the message
     * @param message message_challenge to be signed by the address
     * @returns BIP-322 simple signature, encoded in base-64
     */
    static sign(privateKey: Buffer, address: string, message: string): string | Buffer;
    /**
     * Check if a given public key is the public key for a claimed address.
     * @param publicKey Public key to be tested
     * @param claimedAddress Address claimed to be derived based on the provided public key
     * @returns True if the claimedAddress can be derived by the provided publicKey, false if otherwise
     */
    private static checkPubKeyCorrespondToAddress;
}
export default Signer;
