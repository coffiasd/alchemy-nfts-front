import Account from "./Account";
import { MetaMaskProvider } from "metamask-react";

export default function Minter() {

    return (
        <div>
            <MetaMaskProvider>
                <Account />
            </MetaMaskProvider>
        </div>

    );
}