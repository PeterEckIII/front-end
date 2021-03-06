import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faExclamationTriangle from '@fortawesome/fontawesome-free-solid/faExclamationTriangle';
import Modal from 'common/components/Modal/Modal';
import OutboundLink from 'common/components/OutboundLink/OutboundLink';
import { s3 } from 'common/constants/urls';
import styles from './UpgradeBrowserOverlay.css';

function UpgradeBrowserOverlay() {
  const browsers = [
    {
      browserName: 'Microsoft Edge',
      imageSource: `${s3}browserLogos/edge-icon.png`,
      downloadLink: 'https://www.microsoft.com/windows/microsoft-edge',
    },
    {
      browserName: 'Google Chrome',
      imageSource: `${s3}browserLogos/chrome-icon.png`,
      downloadLink: 'https://www.google.com/chrome',
    },
    {
      browserName: 'Mozilla Firefox',
      imageSource: `${s3}browserLogos/firefox-icon.png`,
      downloadLink: 'https://www.mozilla.org/firefox/new',
    },
    {
      browserName: 'Safari',
      imageSource: `${s3}browserLogos/safari-icon.png`,
      downloadLink: 'https://support.apple.com/downloads/safari',
    },
  ];

  return (
    <Modal
      className={styles.UpgradeBrowserOverlay}
      screenReaderLabel="Please Upgrade Your Browser"
      isOpen
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={false}
    >
      <div>
        <FontAwesomeIcon className={styles.warningLogo} icon={faExclamationTriangle} />
        <h1>Please Upgrade Your Browser</h1>
        <div className={styles.message}>
          You might be experiencing some problems viewing this page. Use the links below to download
          or upgrade your existing browser for a seamless experience.
        </div>
        <div className={styles.browsersList}>
          {browsers.map(({ browserName, imageSource, downloadLink }) => (
            <div className={styles.browser} key={browserName}>
              <span className={styles.browserName}>{browserName}</span>
              <OutboundLink
                analyticsEventLabel={`${browserName} Download from <UpgradeBrowserOverlay>`}
                hasIcon={false}
                href={downloadLink}
              >
                <img
                  className={styles.browserImage}
                  src={imageSource}
                  alt={`${browserName} Logo`}
                />
              </OutboundLink>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default UpgradeBrowserOverlay;
