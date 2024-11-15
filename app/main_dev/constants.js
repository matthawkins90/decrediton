import { app } from "electron";

export const USAGE_MESSAGE = `${app.name} version ${app.getVersion()}
Usage
  $ ${app.name} [OPTIONS]

Options
  --help -h          Show help and exit.
  --version -v       Show version and exit.
  --debug -d         Debug daemon/wallet messages.
  --testnet          Connect to testnet.
  --mainnet          Connect to mainnet.
  --advanced         Start in advanced daemon mode.
  --spv              Start in SPV mode (cannot be used at the same time as advanced daemon mode).
  --spvconnect       Specify direct peer for SPV connection in 'host:port' or 'host' format (latter uses the default SPV port). Supports comma-separated list of peers. Always use with --spv.
  --rpcuser          Specify RPC username for advanced daemon mode connection
  --rpcpass          Specify RPC password
  --rpccert          Specify RPC Certificate
  --rpcconnect       Specify RPC connection in 'host:port' or 'host' format (latter uses the default RPC port). Note that different ports are used for RPC and SPV connections.
  --extrawalletargs  Pass extra arguments to dcrwallet.
  --custombinpath    Custom path for dcrd/dcrwallet/dcrctl/trezord-go binaries.
`;

export const VERSION_MESSAGE = `${app.name} version ${app.getVersion()}`;
