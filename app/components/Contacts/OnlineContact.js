import React from 'react'
import PropTypes from 'prop-types'
import { FaCircle } from 'react-icons/lib/fa'
import { btc } from 'utils'
import styles from './Contact.scss'

const OnlineContact = ({ channel, openContactModal }) => (
  <li className={styles.friend} key={channel.chan_id} onClick={() => openContactModal(channel)}>
    <section className={styles.info}>
      <p className={styles.online}>
        <FaCircle style={{ verticalAlign: 'top' }} />
        <span>Online</span>
      </p>
      <h2>{channel.remote_pubkey}</h2>
    </section>
    <section className={styles.limits}>
      <div>
        <h4>Can Pay</h4>
        <p>{btc.satoshisToBtc(channel.local_balance)}BTC</p>
      </div>
      <div>
        <h4>Can Receive</h4>
        <p>{btc.satoshisToBtc(channel.remote_balance)}BTC</p>
      </div>
    </section>
  </li>
)

OnlineContact.propTypes = {
  channel: PropTypes.object.isRequired,
  openContactModal: PropTypes.func.isRequired
}

export default OnlineContact
