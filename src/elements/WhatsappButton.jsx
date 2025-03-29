import { Icon } from '@assanad/elements/Icon';

const formatMessage = (message) => {
  return message
    .replace(/%/g, '%25')   // Escape existing % first
    .replace(/\n/g, '%0A')  // Newlines → %0A
    .replace(/\[br\]/g, '%0A')  // [br] newline shortcode → %0A
    .replace(/ /g, '%20')   // Spaces → %20
    .replace(/'/g, '%27')   // Apostrophes → %27 (optional)
    .replace(/"/g, '%22')   // Quotes → %22 (optional)
    .replace(/&/g, '%26');  // Ampersands → %26 (optional)
};

const WhatsappButton = ({ message, size = '', iconSize = 'md', className = null, style = null, children }) => {
    return (
      <a
        href={`https://wa.me/+6285175150088?text=${formatMessage(message)}`}
        className={className || `upz-button btn-whatsapp btn-${size}`}
        target="_blank"
        rel="noopener noreferrer"
        style={style}
      >
        <Icon name="whatsapp" type="logo" size={iconSize} />
        {children}
      </a>
    );
  };

export default WhatsappButton;
