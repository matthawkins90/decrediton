// url converts from the the webpack-genetered asset url into a css url directive.
const url = (s) => `url('${s}')`;

const lightTheme = {
  "background-back-color": "#fff",
  "background-container": "#f3f5f6",
  "background-container-opaque": "rgba(243, 245, 246, 0.895)",
  "background-container-hover": "#f0f4f4",
  "background-hovered": "#e9f8fe",
  "input-color-default": "#091440",
  "input-color-hovered": "#091440",
  "input-color-focused": "#091440",
  "input-color-disabled": "#dadfe2",
  "input-color-shadow": "rgba(9, 20, 64, 0.21)",
  "button-text": "#48566e",
  "white-button-text": "#fff",
  "title-text-and-button-background": "#48566e",
  "title-text-and-button-background-hovered": "rgba(72, 86, 110, 0.7)",
  "title-text-and-button-background-drop-shadow": "rgba(72, 86, 110, 0.34)",
  "stroke-color-default": "#a9b4bf",
  "stroke-color-hovered": "#596d81",
  "stroke-color-focused": "#2970ff",
  "input-color": "#2970ff",
  "input-color-blue-shadow": "rgba(41, 112, 255, 0.21)",
  "input-color-hover": "#1c4eb2",
  "account-button-hover": "#4a92ff",
  "link-color": "#2970ff",
  "link-hover-color": "#6397ff",
  "accent-color": "#2ed8a3",
  "blue-highlight-background": "#d3f0fd",
  "tab-text": "#9ca8b5",
  "tab-text-active-hover": "#3d5873",
  "cyan-bold": "#69d5f7",
  "disabled-color": "#8997a5",
  "disabled-background-color": "#e7eaed",
  "disabled-background-color-lighter": "#edeff1",
  "success-text-color": "#41be53",
  "error-text-color": "#fd714b",
  "error-red": "#ED6D47",
  "error-red-hover": "red",
  "vote-yes-color": "#41be53",
  "vote-no-color": "#ed6d47",
  "vote-abstain-color": "#596d81",
  "white-border": "#d1d5db",
  "display-wallet-gradient-right": "#959dac",
  "display-wallet-gradient-selected-right": "#6ed3f3",
  "tx-history-background-hover": "rgba(212, 240, 253, 0.5)",
  "sidebar-color": "#f9fafa",
  "short-separator-border": "#091440",
  "sidebar-bottom-light-text-color": "#424F67",
  "header-desc-color": "#091440",
  "sidebar-menu-link": "#8997a5",
  "linear-progress-text": "#fff",
  "wallet-label": "#091440",
  "new-wallet-label": "#48566e",
  "selected_wallet-label": "#091440",
  "wallet-desc": "#091440",
  "getstarted-menu-color": "#8997a5",
  "tutorial-header": "#091440",
  "step-indicator": "#d1d5db",
  "combobox-outer-bottom-border": "#2970ff",
  "combobox-restore-border": "#d1d5db",
  "text-toggle-button-active-bg": "#fff",
  "text-toggle-button-active-text": "#0C1E3E",
  "text-toggle-button-border": "#e7eaed",
  "text-toggle-button-bg": "#F7F8F9",
  "text-toggle-button-inactive-text": "#959DAC",
  "header-desc-lighter-color": "#091440",
  "info-modal-button-bg": "#48566e",
  "info-modal-button-text": "#fff",
  "agenda-card-bottom-cfg": "#596d81",
  "tabbed-page-header-bg": "#edeff1",
  "tabbed-page-header-active-bg": "#fff",
  "tabbed-page-header-text": "#9ca8b5",
  "overview-balance-label": "#596d81",
  "chart-axis-stroke": "#666",
  "chart-axis-text": "#a4afba",
  "disabled-background-color-dark": "#e7eaed",
  "wallet-tutorial-text": "#48566e",
  "wallet-tutorial-link": "#2970ff",
  "wallet-tutorial-step-indicator": "#d1d5db",
  "modal-text": "#48566e",
  "modal-bottom": "#48566e",
  "modal-stroke-color": "#a9b4bf",
  "settings-desc": "#8997a5",
  "wallet-close-button-bg": "#8997a5",
  "wallet-close-button-text": "#f3f6f6",
  "select-stroke-color": "#a9b4bf",
  "account-text": "#8997A5",
  "account-pubkey-text": "#8997a5",
  "back-button-bg": "#48566e",
  "back-button-text": "#f3f5f6",
  "back-button-dark-text": "#f3f5f6",
  "tx-detail-text": "#596d81",
  "tx-detail-raw-shadow":
    "linear-gradient(to top, rgb(243, 246, 246, 0.6) 10%, rgb(243, 246, 246, 0.5) 20%, rgb(243, 246, 246, 0) 70%)",
  "home-content-link": "#8997a5",
  "transfer-details-bg": "#edeff1",
  "filter-menu-arrow": "#fff",
  "filter-menu-bg-hover": "#596d81",
  "menutab-hover": "#596d81",
  "tooltip-container": "#f3f5f6",
  "loader-bg": "#d1d5db",
  "display-wallet-bg":
    "linear-gradient(225deg, var(--white-border), var(--display-wallet-gradient-right))",
  "select-border": "#e7eaed",
  "transaction-account-name-bg": "#E9F8FE",
  "account-row-hover": "#f0f4f4",
  "chart-cursor-color": "#e9f8fe",
  "linear-progress-text-default": "#fff",
  "linear-progress-text-initial": "#fff",
  "onboard-toolbar-shadow": "rgba(9,20,64,0.13)",
  "onboard-toolbar-background": "#fff",
  "background-copy-color": "#e9f8ff",
  "seedword-number-color": "#C4CBD2",
  "seedword-select-border-default-border-color": "#D1D5DB",
  "seedword-select-border-default-text-color": "#C4CBD2",
  "seedword-select-border-default-hover-border-color": "#959DAC",
  "seedword-select-border-default-hover-text-color": "#48566E",
  "txdetails-top-bg": "#f9fafa",
  "input-placeholder-color": "#C4CBD2",
  "trezor-line-color": "#dadfe2",
  "proposal-text-markdown": "#f6f8fa",
  "background-address-copy-color": "#e9f8ff",
  "icons-shadow": "rgba(0, 0, 0, 0.12)",
  "no-more-tickets-indicator-bg": "#E6EAED",
  "ease-in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
  "input-copy-hover-color": "#78d9f8",
  "coinjoin-sum-color": "#d4f0fd",
  "coinjoin-sum-text-color": "#596d81",
  "privacy-balance-color": "#091440",
  "privacy-balance-label-color": "#1B2B54",
  "privacy-balance-mixed-label-color": "#596D81",
  "privacy-mixer-status-color": "#0C1E3E",
  "mixer-settings-label": "#0C1E3E",
  "mixer-settings-disabled": "#8997A5",
  "accent-blue": "#2970FF",
  "grey-2": "#F3F5F6",
  "grey-3": "#E6EAED",
  "grey-5": "#8997A5",
  "grey-6": "#596D81",
  "grey-7": "#3D5873",
  orange: "#ED6D47",
  "light-blue": "#D4F0FD",
  "main-dark-blue": "#091440",
  "small-button-shadow": "rgba(0, 0, 0, 0.12)",
  "small-button-bg": "#fff",
  "small-button-disabled-bg": "#e6eaed",
  "send-transaction-border": "var(--grey-3)",
  "secondary-piui-button-bg": "#fff",
  "purchase-ticket-border": "var(--grey-3)",
  "stakeinfo-value": "var(--main-dark-blue)",
  "stakeinfo-border": "var(--grey-3)",
  "purchase-label": "var(--grey-7)",
  "governance-tab-bg": "var(--grey-3)",
  "governance-header-balance-bg": "var(--color-blue-lighter)",
  "politeia-button-bg": "var(--accent-blue)",
  "governance-nav-button-bg": "var(--grey-3)",
  "refresh-proposals": "var(--small-button-bg)",
  "agenda-preference": "var(--main-dark-blue)",
  "text-toggle-bg": "var(--grey-3)",
  "ln-autopilot-switch-desc": "var(--grey-5)",
  "ln-nav-button-bg": "var(--grey-3)",
  "ln-active-tab-bg": "#e6eaed",
  "ln-active-tab-color": "var(--main-dark-blue)",
  "ln-close-channel-button-bg": "var(--grey-7)",
  "ln-close-channel-button-text": "#fff",

  // override pi-ui's tab colors
  "tab-default-color": "var(--sidebar-color)", // default border
  "tab-default-background": "var(--sidebar-color)",
  "tab-active-background": "var(--background-back-color)",
  "tab-text-active-color": "var(--input-color-default)",
  "tab-text-color": "var(--sidebar-menu-link)",

  // tabbed page defaults
  "tab-default-background-tabbedpage": "var(--background-back-color)",
  "tab-default-border-tabbedpage": "var(--background-back-color)",

  // proposals tabs
  "tab-default-background-tabbedpage-proposals": "var(--governance-tab-bg)",
  "tab-active-background-tabbedpage-proposals": "var(--governance-tab-bg)",
  "tab-default-border-tabbedpage-proposals": "var(--governance-tab-bg)",
  "tab-active-border-tabbedpage-proposals": "var(--grey-7)",

  "seedword-label-bg": "#fff",
  "seedword-label-border": "#e6eaed",
  "seedword-label-text": "var(--grey-5)",
  "seedword-button-text": "var(--main-dark-blue)",
  "seedword-button-invalid-bg": "#f0b3a1",

  /* icons */
  "menu-settings": url(require("style/icons/menuSettings.svg")),
  "menu-accounts": url(require("style/icons/accounts-active.png")),
  "menu-governance": url(require("style/icons/governance-active.png")),
  "menu-transactions": url(require("style/icons/transactions-active.png")),
  "menu-overview": url(require("style/icons/overview-active.png")),
  "menu-privacy": url(require("style/icons/privacy.svg")),
  "menu-tickets": url(require("style/icons/tickets-active.png")),
  "menu-ln": url(require("style/icons/lightning.svg")),
  "menu-trezor": url(require("style/icons/trezorActive.svg")),
  "menu-hamburger": url(require("style/icons/hamburger.svg")),
  "menu-arrow": url(require("style/icons/arrow.svg")),
  "menu-mixer-icon": url(require("style/icons/menuMixer.svg")),
  "menu-spvon-icon": url(require("style/icons/menuSpvOn.svg")),
  "menu-spvoff-icon": url(require("style/icons/menuSpvOff.svg")),
  "menu-dex": url(require("style/icons/dex.svg")),
  "menu-block-synced-icon": url(require("style/icons/blockSynced.svg")),
  "tab-icon-balance": url(require("style/icons/balanceSelector.svg")),
  "tab-icon-transactions": url(require("style/icons/transactions-default.png")),
  "tab-icon-tickets": url(require("style/icons/tickets-default.png")),
  "sidebar-balance-icon": url(require("style/icons/sidebar-balance.svg")),
  "testnet-logo": url(require("style/icons/testnet-logo.svg")),
  "mainnet-logo": url(require("style/icons/decred-logo.svg")),
  "create-wallet-icon": url(require("style/icons/createnewwallet.svg")),
  "wallet-blue-icon": url(require("style/icons/wallet-blue.svg")),
  "wallet-gray-icon": url(require("style/icons/wallet-gray.svg")),
  blockchain: url(require("style/icons/blockchain.svg")),
  "blockchain-default": url(require("style/icons/blockchainDefault.svg")),
  "blockchain-initial": url(require("style/icons/blockchainInitial.svg")),
  "launcher-edit-wallets": url(require("style/icons/editDefault.svg")),
  "launcher-edit-wallets-hover": url(require("style/icons/editHover.svg")),
  "onboarding-checkcircle": url(
    require("style/icons/onboarding-checkcircle.svg")
  ),
  "x-grey": url(require("style/icons/x-grey.svg")),
  "stakey-privacy-standard": url(require("style/icons/privacyStandard.svg")),
  "stakey-privacy-disabled": url(require("style/icons/privacyDisabled.svg")),
  "stakey-privacy-custom": url(require("style/icons/privacyCustom.svg")),
  "header-transactions": url(require("style/icons/transactionsHeader.svg")),
  "header-governance": url(require("style/icons/governanceHeader.svg")),
  "header-tickets": url(require("style/icons/ticketsHeader.svg")),
  "header-accounts": url(require("style/icons/accountsHeader.svg")),
  "header-lightning": url(require("style/icons/lightningHeader.svg")),
  "header-security": url(require("style/icons/privacyHeader.svg")),
  "header-trezor": url(require("style/icons/trezorHeader.svg")),
  "header-dex": url(require("style/icons/dex.svg")),
  "help-docs": url(require("style/icons/docsGrey.svg")),
  "help-github": url(require("style/icons/githubGrey.svg")),
  "help-forum": url(require("style/icons/forumGrey.svg")),
  "help-stakepools": url(require("style/icons/stakepoolsGrey.svg")),
  "help-matrix": url(require("style/icons/matrixGrey.svg")),
  "help-blockchain-explorer": url(
    require("style/icons/blockchainExplorerGrey.svg")
  ),
  "help-constitution": url(require("style/icons/constitutionGrey.svg")),
  "help-star": url(require("style/icons/starGrey.svg")),
  "help-external-default": url(require("style/icons/externalDefault.svg")),
  "help-external-hover": url(require("style/icons/externalHover.svg")),
  "help-expand-default": url(require("style/icons/expandDefault.svg")),
  "help-expand-hover": url(require("style/icons/expandHover.svg")),
  "menu-arrow-up": url(require("style/icons/menu-arrow-up.svg")),
  "agenda-close-icon": url(require("style/icons/tickets-agenda-close.svg")),
  "tickets-info-icon": url(require("style/icons/tickets-info.svg")),
  "agenda-card-kebab": url(
    require("style/icons/tickets-agenda-card-kebab.svg")
  ),
  "arrow-right-gray-icon": url(require("style/icons/arrow-right-gray.svg")),
  "send-self-default": url(require("style/icons/sendSelfDefault.svg")),
  "send-all-default": url(require("style/icons/sendMaxDefault.svg")),
  "search-icon": url(require("style/icons/search.svg")),
  "wallet-tutorial-check-circle": url(
    require("style/icons/walletTutorialCheckcircle.svg")
  ),
  "importscript-icon": url(require("style/icons/import-script.svg")),
  "stakepool-stats-active-icon": url(
    require("style/icons/stakepoolsActive.svg")
  ),
  "accounts-default": url(require("style/icons/accountDefault.svg")),
  "accounts-imported": url(require("style/icons/accountImported.svg")),
  password: url(require("style/icons/password.svg")),
  "tx-details-arrow-left": url(require("style/icons/txDetailsArrowLeft.svg")),
  "stake-pool-icon": url(require("style/icons/stake-pool.svg")),
  "expiry-icon": url(require("style/icons/expiry.svg")),
  "split-fee-icon": url(require("style/icons/split-fee.svg")),
  "pool-fee-icon": url(require("style/icons/pool-fees.svg")),
  "tickets-cogs-opened-icon": url(
    require("style/icons/tickets-cogs-opened.svg")
  ),
  "ticket-address-icon": url(require("style/icons/voting-address.svg")),
  "fee-address-icon": url(require("style/icons/pool-fee-address.svg")),
  "sort-by-icon": url(require("style/icons/sort-by.svg")),
  "contextbutton-eye-default-icon": url(
    require("style/icons/contextbutton-eye-default.svg")
  ),
  qrcode: url(require("style/icons/decred-qrcode.png")),
  "launcher-logo": url(require("style/icons/launcher-logo.svg")),
  "help-getstared": url(require("style/icons/help-active.png")),
  "no-tx-icon": url(require("style/icons/no-tx.svg")),
  "ticket-reward-icon": url(require("style/icons/blockReward.svg")),
  "time-lock-icon": url(require("style/icons/time-lock.svg")),
  "small-logo": url(require("style/icons/logo.svg")),
  "stakepool-stats-icon": url(require("style/icons/stakepoolsDefault.svg")),
  "vote-time-stats-icon": url(require("style/icons/voteTimeDefault.svg")),
  "vote-time-stats-active-icon": url(require("style/icons/voteTimeActive.svg")),
  "stakerewards-stats-icon": url(
    require("style/icons/stakeRewardsDefault.svg")
  ),
  "stakerewards-stats-active-icon": url(
    require("style/icons/stakeRewardsActive.svg")
  ),
  "send-self-hover": url(require("style/icons/sendSelfHover.svg")),
  "send-all-hover": url(require("style/icons/sendMaxHover.svg")),
  "select-arrow-up": url(require("style/icons/select-arrow-up.svg")),
  "info-icon": url(require("style/icons/information.svg")),
  "menu-cancel-rescan-icon": url(require("style/icons/menu-cancel-rescan.svg")),
  "politeia-loading-animation": url(
    require("style/animations/politeiaLoading.gif")
  ),
  "backup-icon": url(require("style/icons/harddrive.svg")),
  "loader-animation-daemon-waiting-initial": url(
    require("style/icons/daemon_waiting_loader.gif")
  ),
  "mixed-account-icon": url(require("style/icons/mixedAccount.svg")),
  "unmixed-account-icon": url(require("style/icons/unmixedAccount.svg")),
  "privacy-running-arrows": url(require("style/icons/mixerArrows.gif")),
  "decentralized-loop-still": url(
    require("style/icons/decentralizedLoopStill.svg")
  ),
  "decentralized-loop-animation": url(
    require("style/icons/decentralizedLoopAnimation.gif")
  ),
  "self-transaction-icon": url(require("style/icons/sentToSelfTx.svg")),
  "proposals-refresh-icon": url(require("style/icons/menuMixer.svg")),
  "ln-invoice-icon": url(require("style/icons/lnInvoiceIcon.svg")),
  "right-arrow": url(require("style/icons/rightArrow.svg")),
  "blue-checkmark": url(require("style/icons/blueCheckmark.svg")),
  "ln-wallet-creation-warning-arrow": url(
    require("style/icons/LNWalletCreationWarningArrow.svg")
  ),
  "lock-checkmark": url(require("style/icons/lockCheckmark.svg")),
  eye: url(require("style/icons/eye.svg")),
  "eye-disabled": url(require("style/icons/eyeDisabled.svg")),
  "lightning-icon": url(require("style/icons/lightningIcon.svg")),
  "lookup-icon": url(require("style/icons/lookupIcon.svg")),
  "plus-icon": url(require("style/icons/plusIcon.svg")),
  "ln-confirmed-balance-icon": url(
    require("style/icons/LNConfirmedBalanceIcon.svg")
  ),
  "ln-unconfirmed-balance-icon": url(
    require("style/icons/LNUnconfirmedBalanceIcon.svg")
  ),
  "ln-total-account-balance-icon": url(
    require("style/icons/LNTotalAccountBalanceIcon.svg")
  ),
  "ln-open-channels-icon": url(require("style/icons/LNOpenChannelsIcon.svg")),
  "ln-capacity-icon": url(require("style/icons/LNCapacityIcon.svg")),
  "ln-nodes-icon": url(require("style/icons/LNNodesIcon.svg")),
  "ln-channels-icon": url(require("style/icons/LNChannelsIcon.svg")),
  "ln-network-capacity-icon": url(
    require("style/icons/LNNetworkCapacityIcon.svg")
  ),
  "ln-nodes-eye-icon": url(require("style/icons/LNNodesEyeIcon.svg"))
};

export default lightTheme;
