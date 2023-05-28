import PropTypes from 'prop-types';
import readIcon from '../icons/read.svg'
import unreadIcon from '../icons/unread.svg'
import { READ, UNREAD } from '../constants'

function List({ messages }) {
  return (
    <ul className="messages-list">
      {messages.map((message) => (
        <li key={ message.id }>
          <p className="message-title">
            {message.title}
          </p>
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      status: PropTypes.number,
    }),
  ).isRequired,
};

export default List;