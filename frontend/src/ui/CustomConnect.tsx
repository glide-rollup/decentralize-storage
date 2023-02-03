import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useNavigate } from "react-router-dom";
import { Btn } from "../assets/css/common.style";

const dashboardURL = "/my";

type Props = {
  isHeader: boolean
};

const CustomConnect = ({isHeader}: Props) => {
  const navigate = useNavigate();

  const redirectOrConnect = (isConnected: boolean, openConnectModal: any) => {
    if (isConnected) {
      navigate(dashboardURL);
    } else {
      openConnectModal();
    }
  }

  return (
    <ConnectButton.Custom>
      {({
          account,
          chain,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {!isHeader ? (
              <Btn onClick={() => redirectOrConnect(connected || false, openConnectModal)} type="button">
                Open my Files &raquo;
              </Btn>
            ) : (
              <>
                {!connected ? (
                  <Btn onClick={() => openConnectModal()} type="button">
                    Connect Wallet
                  </Btn>
                ) : (
                  <ConnectButton showBalance={false} />
                )}
              </>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default CustomConnect;